import { siC, siCplusplus } from "simple-icons";

/**
 * The words that drift around the star in the About act.
 *
 * Positions are viewport percentages: dx/dy on desktop, mx/my on phones.
 * `at` is the window of the About phase (0..1) during which the word is on
 * screen; `depth` scales its parallax so nearer words move more.
 */
export type ConstellationItem =
  | { kind: "serif" | "sans"; text: string; dx: number; dy: number; mx: number; my: number; depth: number; at: [number, number] }
  | { kind: "logo"; name: string; path: string; dx: number; dy: number; mx: number; my: number; depth: number; at: [number, number] };

export const constellation: ConstellationItem[] = [
  { kind: "serif", text: "Curiosity", dx: 17, dy: 76, mx: 22, my: 80, depth: 1, at: [0.02, 0.3] },
  { kind: "sans", text: "Discipline", dx: 80, dy: 24, mx: 78, my: 18, depth: 0.7, at: [0.05, 0.32] },
  { kind: "logo", name: "C", path: siC.path, dx: 24, dy: 22, mx: 22, my: 20, depth: 0.5, at: [0.08, 0.34] },
  { kind: "serif", text: "Persistence", dx: 80, dy: 78, mx: 74, my: 82, depth: 0.9, at: [0.22, 0.5] },
  { kind: "sans", text: "Foundations", dx: 14, dy: 36, mx: 24, my: 76, depth: 0.6, at: [0.26, 0.54] },
  { kind: "logo", name: "C++", path: siCplusplus.path, dx: 85, dy: 60, mx: 80, my: 22, depth: 0.5, at: [0.3, 0.56] },
  { kind: "sans", text: "Teamwork", dx: 12, dy: 58, mx: 18, my: 30, depth: 0.45, at: [0.36, 0.62] },
  { kind: "serif", text: "Honesty", dx: 20, dy: 24, mx: 26, my: 20, depth: 0.85, at: [0.44, 0.72] },
  { kind: "sans", text: "SIH 2026", dx: 68, dy: 86, mx: 52, my: 14, depth: 0.55, at: [0.4, 0.66] },
  { kind: "sans", text: "Problem solving", dx: 79, dy: 40, mx: 70, my: 80, depth: 0.7, at: [0.48, 0.76] },
  { kind: "serif", text: "Logic", dx: 30, dy: 84, mx: 30, my: 78, depth: 0.5, at: [0.52, 0.78] },
  { kind: "sans", text: "AI & ML", dx: 70, dy: 14, mx: 76, my: 24, depth: 0.45, at: [0.56, 0.82] },
  { kind: "serif", text: "Learning", dx: 82, dy: 74, mx: 70, my: 80, depth: 1, at: [0.66, 0.94] },
  { kind: "sans", text: "Building", dx: 16, dy: 44, mx: 22, my: 22, depth: 0.65, at: [0.7, 0.96] },
];

/** The bio, shown in the contact section and read out to screen readers. */
export const BIO = [
  "I’m a first-year B.Tech Computer Science (AI & ML) Hons. student at UIT, Karnavati University. I’m building strong foundations in C and C++, learning to think through problems one program at a time.",
  "I took part in Smart India Hackathon 2026 with a student team, and my first projects are on the way. I’m looking for chances to learn and build: internships, team projects and hackathons.",
];

export const EDUCATION =
  "B.Tech CSE (AI & ML) Hons., UIT Karnavati University · Class XII (CBSE): 60%";

export const ABOUT_TEXT = `About: ${BIO.join(" ")} Education: ${EDUCATION}. Working with C and C++.`;
