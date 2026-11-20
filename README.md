# Rashida Umrali — Portfolio

Portfolio of Rashida Umrali, a first-year B.Tech Computer Science (AI & ML) Hons.
student at UIT, Karnavati University, and a Smart India Hackathon 2026
participant.

Design based on the [Star Portfolio](https://starportfolio-nu.vercel.app/).

## What's in it

One long scroll. A WebGL "cosmos" of particles sits behind the page: you start
in front of a dust portal with a mint star at its centre, fly through it, watch
the words that describe how Rashida works drift past, meet the cards (Smart India
Hackathon 2026, education, and what she is learning now) and end in a starfield
with her email and links.

## Built with

| Area | Tools |
| --- | --- |
| Framework | Next.js 16 (App Router), React 19, TypeScript |
| Particles | Three.js + React Three Fiber, custom GLSL point shaders (`src/shaders`) |
| Motion | GSAP ScrollTrigger, Lenis smooth scroll |
| Type | Manrope, Instrument Serif |
| Styling | Tailwind CSS 4 |

## Running it locally

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

## Editing the content

- `src/data/projects.ts`: the cards (add a project here and the scroll gives it its own beat)
- `src/data/constellation.ts`: the bio, education line and the words around the star
- `src/data/social.ts`: email, LinkedIn and Instagram

## Deploying

Deployed on Vercel; every push to `main` redeploys. If you add a custom domain,
set `NEXT_PUBLIC_SITE_URL` (see `.env.example`).

## Contact

- Email: rashida.umrali@gmail.com
- LinkedIn: <https://www.linkedin.com/in/rashida-umrali-380442433/>
- Instagram: <https://www.instagram.com/rashida_umrali/>
