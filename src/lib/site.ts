/**
 * Single source of truth for the site's public URL and identity.
 *
 * Set NEXT_PUBLIC_SITE_URL once a custom domain is in place. On Vercel the
 * production URL is detected automatically, so link previews, robots.txt and
 * the sitemap all resolve correctly without any configuration.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

/** The four-point star, the site's mark, in a -1.2..1.2 box (see icon.tsx). */
export const STAR_PATH =
  "M0 -1.15 C0.06 -0.5 0.45 -0.07 0.95 0 C0.45 0.07 0.06 0.5 0 1.15 C-0.06 0.5 -0.45 0.07 -0.95 0 C-0.45 -0.07 -0.06 -0.5 0 -1.15 Z";

export const PERSON_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rashida Umrali",
  url: siteUrl,
  jobTitle: "B.Tech CSE (AI & ML) student",
  description:
    "Rashida Umrali is a first-year B.Tech CSE (AI & ML) Hons. student at UIT, Karnavati University, building strong foundations in C and C++, and a Smart India Hackathon 2026 participant.",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Unitedworld Institute of Technology, Karnavati University",
  },
  email: "mailto:rashida.umrali@gmail.com",
  nationality: "Indian",
  knowsAbout: ["C", "C++", "Problem solving"],
  sameAs: [
    "https://www.linkedin.com/in/rashida-umrali-380442433/",
    "https://www.instagram.com/rashida_umrali/",
  ],
} as const;
