"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import { getLenis } from "@/lib/lenis";
import { scrollState } from "@/lib/scroll-state";

const WORDS = ["Creative", "Curious", "Analytical", "Creating"];

/** Seconds the counter takes on a first visit: ~1.1s per word, long enough to read. */
const FULL = 4.4;
/** On a reload within the same session the intro is a short reprise. */
const REPRISE = 1.8;
/** Held on 100 before the dissolve. */
const HOLD = 0.5;
const SEEN_KEY = "star-intro-seen";

/**
 * The opening: four words in the centre, one after another, while a serif
 * counter runs to 100 and a mint line fills along the bottom. The word on
 * screen is derived from the counter's own timeline, so the two can never
 * drift apart, and each word crossfades into the next (all four are in the
 * DOM; CSS moves them between past, current and next).
 *
 * The first visit in a session plays it in full; a reload in the same session
 * gets a short reprise that lands straight on the last word. Scrolling is
 * locked until it is done; then the screen dissolves into a grid of shrinking
 * dots (the .dither mask) while the cosmos settles in beneath, and
 * `html.is-ready` starts the chrome drawing itself in. Under reduced motion it
 * is dismissed at once. The whole thing is decorative, so it is hidden from
 * assistive technology.
 */
export function Loader() {
  const ref = useRef<HTMLDivElement>(null);
  const [word, setWord] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = ref.current;
    if (!root) return;

    if (reduce) {
      document.documentElement.classList.add("is-ready");
      setDone(true);
      scrollState.ready = true;
      return;
    }

    const seen = sessionStorage.getItem(SEEN_KEY) === "1";
    sessionStorage.setItem(SEEN_KEY, "1");
    const dur = seen ? REPRISE : FULL;
    const lenis = getLenis();
    lenis?.stop();
    document.documentElement.classList.add("is-loading");

    const bar = root.querySelector<HTMLElement>(".loader-bar");
    const count = root.querySelector<HTMLElement>(".loader-count");

    const state = { value: 0 };
    let dissolve: gsap.core.Timeline | null = null;

    const finish = () => {
      if (dissolve) return;
      document.documentElement.classList.remove("is-loading");
      document.documentElement.classList.add("is-ready");
      scrollState.ready = true;
      lenis?.start();

      dissolve = gsap.timeline({
        onComplete: () => {
          setDone(true);
        },
      });
      dissolve.to(root, {
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      });
    };

    // Safety fallback: if anything hangs, dismiss the loader anyway.
    const safety = window.setTimeout(finish, (dur + HOLD + 1) * 1000);

    const tl = gsap.timeline({ onComplete: finish });

    tl.to(state, {
      value: 100,
      duration: dur,
      ease: "power2.inOut",
      onUpdate: () => {
        const v = Math.round(state.value);
        if (count) count.textContent = String(v).padStart(3, "0");
        if (bar) bar.style.transform = `scaleX(${(state.value / 100).toFixed(4)})`;
        const step = Math.min(WORDS.length - 1, Math.floor((state.value / 100) * WORDS.length));
        setWord(step);
      },
    });
    tl.to({}, { duration: HOLD });

    return () => {
      tl.kill();
      dissolve?.kill();
      window.clearTimeout(safety);
      document.documentElement.classList.remove("is-loading");
    };
  }, []);

  return (
    <div ref={ref} className={`loader dither ${done ? "done" : ""}`} aria-hidden="true">
      <span className="loader-brand">Rashida Umrali</span>
      <span className="loader-words serif">
        {WORDS.map((w, i) => (
          <span
            key={w}
            className={`loader-word ${i === word ? "on" : i < word ? "past" : ""}`}
          >
            {w}
          </span>
        ))}
      </span>
      <span className="loader-count serif">000</span>
      <span className="loader-bar" />
    </div>
  );
}
