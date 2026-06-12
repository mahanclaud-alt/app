"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "none";
};

const directionOffset: Record<string, { y: number }> = {
  up: { y: 24 },
  down: { y: -24 },
  none: { y: 0 },
};

export function FadeIn({
  children,
  delay = 0,
  className,
  direction = "up",
}: FadeInProps) {
  const offset = directionOffset[direction];

  const variants: Variants = {
    hidden: { opacity: 0, y: offset.y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
