import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Axel Wolfs - Full-Stack Developer",
  description:
    "Full-Stack developer with a focus on backend and infrastructure. Building scalable systems, APIs, and cloud infrastructure.",
  keywords: [
    "Axel Wolfs",
    "Full-Stack Developer",
    "Backend Developer",
    "Infrastructure",
    "DevOps",
    "React",
    "Node.js",
    "Python",
    "AWS",
    "Docker",
    "Kubernetes",
  ],
  authors: [{ name: "Axel Wolfs" }],
  creator: "Axel Wolfs",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://axelw.vercel.app",
    title: "Axel Wolfs - Full-Stack Developer",
    description:
      "Full-Stack developer with a focus on backend and infrastructure. Building scalable systems, APIs, and cloud infrastructure.",
    siteName: "Axel Wolfs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Axel Wolfs - Full-Stack Developer",
    description:
      "Full-Stack developer with a focus on backend and infrastructure. Building scalable systems and cloud infrastructure.",
  },
  metadataBase: new URL("https://axelw.vercel.app"),
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f0f0f0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased leading-relaxed pb-16 sm:pb-20 md:pb-24 lg:pb-32`}
      >
        {children}
      </body>
    </html>
  );
}
