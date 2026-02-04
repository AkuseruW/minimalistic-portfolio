import Link from "next/link";
import React from "react";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full min-h-dvh pt-16 sm:pt-20 md:pt-24 lg:pt-32">
      <nav className="container">
        <Link href={"/"} className="text-xl font-medium">
          Axel
        </Link>
      </nav>
      <div className="container mt-1">
        <h1 className="inline">Full-Stack Developer</h1>
      </div>
      <main>{children}</main>
    </div>
  );
}
