import Link from "next/link";
import React from "react";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full min-h-dvh pt-16 sm:pt-20 md:pt-24 lg:pt-32">
      <header className="container">
        <nav>
          <Link href={"/"} className="text-xl font-medium">
            Axel
          </Link>
        </nav>
        <h1 className="inline mt-1">Full-Stack Developer</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}
