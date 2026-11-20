import type { Metadata, Viewport } from "next";
import { Manrope, Instrument_Serif } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { Cursor } from "@/components/experience/cursor";
import { PERSON_SCHEMA, siteUrl } from "@/lib/site";
import { THEME_INIT_SCRIPT } from "@/lib/theme";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
  weight: ["300", "400", "500", "700", "800"],
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-instrument",
  weight: "400",
  style: ["normal", "italic"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
    { media: "(prefers-color-scheme: light)", color: "#f4f5f1" },
  ],
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const TITLE = "Rashida Umrali — B.Tech CSE (AI & ML) student";
const DESCRIPTION =
  "Rashida Umrali is a first-year B.Tech CSE (AI & ML) Hons. student at UIT, Karnavati University, building strong foundations in C and C++, and a Smart India Hackathon 2026 participant.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "Rashida Umrali",
    "B.Tech CSE AI ML",
    "Smart India Hackathon 2026",
    "C",
    "C++",
    "Student Portfolio",
    "UIT Karnavati University",
    "Portfolio",
  ],
  authors: [{ name: "Rashida Umrali", url: "https://www.linkedin.com/in/rashida-umrali-380442433/" }],
  creator: "Rashida Umrali",
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    locale: "en_US",
    siteName: "Rashida Umrali Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${instrument.variable}`}
      // data-theme is set by THEME_INIT_SCRIPT before hydration, so the client
      // sees an attribute the server never rendered — by design.
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body>
        {/* Keyboard users land here first and can jump past the fixed layers. */}
        <a href="#about" className="skip-link sr-only">
          Skip to content
        </a>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
        <Cursor />
        <script
          type="application/ld+json"
          // Tells search engines who this page is about, so a search for the
          // name can connect it to the LinkedIn and Instagram profiles.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_SCHEMA) }}
        />
        <Analytics />
      </body>
    </html>
  );
}
