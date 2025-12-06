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
  title: "GatorAI | The AI Advantage for Warrington",
  description: "The curriculum-trained AI partner that aligns with faculty methods to accelerate analysis, pitch preparation, and research. Exclusively for UF Warrington College of Business.",
  keywords: ["GatorAI", "AI", "Warrington", "University of Florida", "Business Intelligence", "Canvas", "Education", "AI Assistant"],
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
    title: "GatorAI | The AI Advantage for Warrington",
    description: "The curriculum-trained AI partner that aligns with faculty methods to accelerate analysis, pitch preparation, and research.",
    url: "https://warrington.ufl.edu/gator-ai",
    siteName: "GatorAI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GatorAI | The AI Advantage for Warrington",
    description: "The curriculum-trained AI partner that aligns with faculty methods to accelerate analysis, pitch preparation, and research.",
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

