export interface SocialLink {
  name: string;
  url: string;
  handle: string;
  icon: "linkedin" | "instagram" | "github" | "mail";
  primary?: boolean;
}

export const EMAIL = "rashida.umrali@gmail.com";
export const LINKEDIN_URL = "https://www.linkedin.com/in/rashida-umrali-380442433/";
export const INSTAGRAM_URL = "https://www.instagram.com/rashida_umrali/";

export const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    url: LINKEDIN_URL,
    handle: "rashida-umrali",
    icon: "linkedin",
    primary: true,
  },
  {
    name: "Instagram",
    url: INSTAGRAM_URL,
    handle: "@rashida_umrali",
    icon: "instagram",
    primary: true,
  },
  {
    name: "Email",
    url: `mailto:${EMAIL}`,
    handle: EMAIL,
    icon: "mail",
    primary: false,
  },
];
