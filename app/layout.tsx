import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-barlow",
});

export const metadata: Metadata = {
  title: "MDG Dev Solutions - AI close to you",
  description:
    "We create lightning-fast web applications and micro-SaaS solutions using cutting-edge AI technology and a team of world-class developers. From concept to launch in weeks, not months.",
  keywords: [
    "lightning-fast web applications",
    "micro-SaaS solutions",
    "AI-powered web development",
    "cutting-edge AI technology",
    "world-class developers",
    "rapid product development",
    "fast web app launch",
    "full-stack development team",
    "concept to launch",
    "web apps in weeks not months",
    "fast MVP development",
    "AI-driven SaaS development",
    "custom micro-SaaS platforms",
    "AI-enhanced software solutions",
    "modern web development services",
    "agile web development team",
    "scalable AI applications",
    "fast-track software deployment",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <header>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2947959204482771"
          crossOrigin="anonymous"
        ></script>
      </header>
      <body className={`${barlow.variable} antialiased`}>{children}</body>
    </html>
  );
}
