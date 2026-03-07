"use client";

import * as m from "motion/react-client";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  id?: string;
  as?: "div" | "section" | "footer" | "header" | "nav" | "p";
}

export function FadeIn({
  children,
  delay = 0,
  className,
  id,
  as = "div",
}: FadeInProps) {
  const Component = m[as] ?? m.div;
  return (
    <Component
      id={id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </Component>
  );
}

interface FadeInViewProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  id?: string;
  as?: "div" | "section" | "footer";
}

export function FadeInView({
  children,
  delay = 0,
  className,
  id,
  as = "div",
}: FadeInViewProps) {
  const Component = m[as] ?? m.div;
  return (
    <Component
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </Component>
  );
}
