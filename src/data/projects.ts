/**
 * The project cards. Each is one beat of the scroll: a framed visual, a small
 * label, a serif title and two sentences. Cards with an `href` are links (the
 * cursor says "visit"); the others are static.
 *
 * Adding a card here is all it takes: the scroll gives it its own beat.
 */
export interface ProjectGraphic {
  /** Small mono line at the top of the frame. */
  kicker: string;
  /** The headline in the frame. */
  title: string;
  /** Up to four [label, value] tiles. */
  cells: [string, string][];
  /** Small mono line at the bottom of the frame. */
  foot: string;
}

export interface Project {
  id: string;
  label: string;
  title: string;
  blurb: string;
  href?: string;
  /** A real capture of the product. Absent when none exists. */
  image?: { src: string; alt: string; width: number; height: number };
  /** The drawn stand-in when there is no capture. */
  graphic?: ProjectGraphic;
}

export const projects: Project[] = [
  {
    id: "sih-2026",
    label: "Smart India Hackathon 2026 · Team member",
    title: "Smart India Hackathon",
    blurb:
      "Took part in Smart India Hackathon 2026 as part of a student team, working on one of the national problem statements. Project details coming soon.",
    graphic: {
      kicker: "smart india hackathon · 2026",
      title: "National hackathon, team entry",
      cells: [
        ["event", "SIH 2026"],
        ["role", "Team member"],
        ["format", "Team project"],
        ["status", "Details soon"],
      ],
      foot: "problem statement · teamwork · building under a deadline",
    },
  },
  {
    id: "education",
    label: "Education · UIT, Karnavati University",
    title: "B.Tech CSE (AI & ML) Hons.",
    blurb:
      "First-year Computer Science student specialising in AI and Machine Learning at Unitedworld Institute of Technology. Completed Class XII under CBSE with 60%.",
    graphic: {
      kicker: "education",
      title: "Where I study",
      cells: [
        ["degree", "B.Tech CSE"],
        ["major", "AI & ML Hons."],
        ["year", "First year"],
        ["class xii · cbse", "60%"],
      ],
      foot: "unitedworld institute of technology · karnavati university",
    },
  },
  {
    id: "foundations",
    label: "Now · C · C++",
    title: "Building the foundations",
    blurb:
      "Writing programs in C and C++ to get a real grip on logic, memory and problem solving. My first projects are on the way, and this is where they will land.",
    graphic: {
      kicker: "currently learning",
      title: "C and C++, from the ground up",
      cells: [
        ["c", "Pointers & memory"],
        ["c++", "OOP & STL"],
        ["practice", "Problem solving"],
        ["next", "First projects"],
      ],
      foot: "logic · data structures · one program at a time",
    },
  },
];
