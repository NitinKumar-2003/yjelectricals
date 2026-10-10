import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const BASE_URL = "https://yjelectricals.com";

export const viewport: Viewport = {
  themeColor: "#c62828",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  /* ── Core ── */
  title: {
    default: "Coming Soon — Y. J. Electricals",
    template: "%s — Y. J. Electricals",
  },
  description:
    "Y. J. Electricals is launching soon. Expert electrical contracting, wiring, DB panel work, and fire safety solutions for residential and commercial projects across India.",
  keywords: [
    "Y J Electricals",
    "YJ Electricals",
    "electrical contractor India",
    "electrician near me",
    "electrical wiring",
    "DB panel",
    "fire safety solutions",
    "commercial electrician",
    "residential electrician",
    "electrical installation",
    "MCB wiring",
    "fire alarm installation",
    "coming soon",
  ],
  authors: [{ name: "Y. J. Electricals", url: BASE_URL }],
  creator: "Y. J. Electricals",
  publisher: "Y. J. Electricals",
  category: "Electrical & Fire Safety Services",
  applicationName: "Y. J. Electricals",

  /* ── Open Graph ── */
  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: "Y. J. Electricals",
    title: "Coming Soon — Y. J. Electricals",
    description:
      "Expert electrical contracting, wiring, DB panel work & fire safety solutions. Launching soon.",
    locale: "en_IN",
    // images auto-resolved from app/opengraph-image.tsx
  },

  /* ── Twitter / X ── */
  twitter: {
    card: "summary_large_image",
    title: "Coming Soon — Y. J. Electricals",
    description:
      "Expert electrical contracting & fire safety solutions. Launching soon.",
    // images auto-resolved from app/opengraph-image.tsx
  },

  /* ── Icons ── */
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.png",
    apple: { url: "/favicon.png", sizes: "180x180" },
  },

  /* ── Canonical ── */
  alternates: {
    canonical: BASE_URL,
  },

  /* ── Crawl: noindex while under construction ──
     Flip both to true when the full site goes live */
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body style={{ background: "#0b0d0f", color: "#f5f5f2", margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
