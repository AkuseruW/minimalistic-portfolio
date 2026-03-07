import Link from "next/link";
import React from "react";
import { FadeIn } from "./components/FadeIn";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full min-h-dvh pt-16 sm:pt-20 md:pt-24 lg:pt-32">
      <header className="container">
        <FadeIn className="flex items-center justify-between">
          <Link
            href={"/"}
            className="text-xl font-semibold tracking-tight"
          >
            Axel Wolfs
          </Link>
          <nav className="hidden sm:flex items-center gap-6">
            <a href="#about" className="section-label link-underline">About</a>
            <a href="#experience" className="section-label link-underline">Experience</a>
            <a href="#interests" className="section-label link-underline">Stack</a>
            <a href="#connect" className="section-label link-underline">Contact</a>
          </nav>
        </FadeIn>
        <FadeIn delay={0.1} className="mt-6 sm:mt-8">
          <p className="text-muted-foreground text-sm font-mono tracking-wide">Full-Stack Developer</p>
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight mt-2 leading-snug">
            Backend & Infrastructure<span className="text-accent">.</span>
          </h1>
        </FadeIn>
      </header>
      <main>{children}</main>
    </div>
  );
}
