import type { Metadata } from "next";
import { Inter, Spectral } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/CustomCursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spectral = Spectral({
  variable: "--font-spectral",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "OmyKra — Consistent Customer Experience, Every Time",
  description:
    "OmyKra ensures every customer interaction is consistent, high-quality, and on-brand. AI-powered customer experience management for modern support teams.",
  openGraph: {
    title: "OmyKra — Consistent Customer Experience, Every Time",
    description:
      "AI-powered customer experience management for modern support teams.",
    type: "website",
    siteName: "OmyKra",
  },
  twitter: {
    card: "summary_large_image",
    title: "OmyKra — Consistent Customer Experience, Every Time",
    description:
      "AI-powered customer experience management for modern support teams.",
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
      className={`${inter.variable} ${spectral.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
