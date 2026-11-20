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
    id: "media-design",
    label: "Certification · Media Design & Visual Communication",
    title: "Media Design & Visual Communication",
    blurb:
      "Completed comprehensive training in visual communication, branding, typography, and AI tools, learning how to turn ideas into captivating visual experiences.",
    graphic: {
      kicker: "certification · media design",
      title: "Visual narrative & brand design",
      cells: [
        ["discipline", "Media Design"],
        ["focus", "Visual Storytelling"],
        ["skills", "Branding & Layout"],
        ["tools", "Design & AI Tools"],
      ],
      foot: "visual communication · design thinking · creative direction",
    },
  },
  {
    id: "education",
    label: "Undergraduate Studies · B.Sc. in Data Science",
    title: "B.Sc. in Data Science",
    blurb:
      "Pursuing an undergraduate degree in Data Science, exploring statistical logic, pattern discovery, and machine learning to build structured solutions.",
    graphic: {
      kicker: "education",
      title: "Where I study",
      cells: [
        ["degree", "B.Sc."],
        ["major", "Data Science"],
        ["school", "Don Bosco Academy"],
        ["focus", "Analytics & Logic"],
      ],
      foot: "data science · structured logic · statistical thinking",
    },
  },
  {
    id: "creative-craft",
    label: "Creative Philosophy · Logic + Creativity",
    title: "Creativity Meets Logic",
    blurb:
      "Believing that logic gives structure to creativity and creativity breathes life into data. Constantly exploring the harmony between analytical rigor and visual design.",
    graphic: {
      kicker: "creative craft",
      title: "Artistic sensibility, analytical mind",
      cells: [
        ["logic", "Pattern & structure"],
        ["creativity", "Empathy & emotion"],
        ["practice", "Visual design"],
        ["next", "Creative projects"],
      ],
      foot: "logic · aesthetics · storytelling · one design at a time",
    },
  },
];
