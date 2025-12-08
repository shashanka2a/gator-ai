import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "GatorAI | Turn Your Startup Idea Into Investor-Ready Pitches",
  description: "AI-powered startup validation and pitch platform for UF business students. Generate business one-pagers, SWOT analysis, competitive landscapes, pitch decks, and landing pages. Perfect for Gator Hatchery, UF Entrepreneurship Club, and Big Idea Competition.",
  keywords: ["GatorAI", "Startup Validation", "Pitch Deck", "UF Entrepreneurship", "Gator Hatchery", "University of Florida", "Business Pitch", "Startup Platform", "Warrington", "Big Idea Competition", "UF Entrepreneurship Club"],
  authors: [{ name: "GatorAI" }],
  creator: "GatorAI",
  publisher: "GatorAI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://warrington.ufl.edu/gator-ai"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "GatorAI | Turn Your Startup Idea Into Investor-Ready Pitches",
    description: "AI-powered startup validation and pitch platform for UF business students. Generate business one-pagers, SWOT analysis, competitive landscapes, pitch decks, and landing pages.",
    url: "https://warrington.ufl.edu/gator-ai",
    siteName: "GatorAI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GatorAI | Turn Your Startup Idea Into Investor-Ready Pitches",
    description: "AI-powered startup validation and pitch platform for UF business students. Generate business one-pagers, SWOT analysis, competitive landscapes, pitch decks, and landing pages.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} bg-paper text-slate-900 dark:bg-midnight dark:text-gray-300 selection:bg-gatorOrange selection:text-white`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

