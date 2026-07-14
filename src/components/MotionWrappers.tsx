"use client";

import { useEffect, useState, useRef } from "react";
import {
  motion,
  useInView,
  type Variants,
  type Transition,
} from "framer-motion";

/* ─── FadeUp ───────────────────────────────────────────────────────────────── */

interface FadeUpProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
  once?: boolean;
}

export function FadeUp({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  yOffset = 40,
  once = true,
}: FadeUpProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

/* ─── FadeIn ───────────────────────────────────────────────────────────────── */

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
}

export function FadeIn({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  once = true,
}: FadeInProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once, margin: "-80px" }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}

/* ─── StaggerContainer & StaggerItem ──────────────────────────────────────── */

const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  once?: boolean;
  staggerDelay?: number;
}

export function StaggerContainer({
  children,
  className = "",
  once = true,
  staggerDelay,
}: StaggerContainerProps) {
  const variants: Variants = staggerDelay
    ? {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.1,
          },
        },
      }
    : staggerContainerVariants;

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-60px" }}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
}

export function StaggerItem({ children, className = "" }: StaggerItemProps) {
  return (
    <motion.div className={className} variants={staggerItemVariants}>
      {children}
    </motion.div>
  );
}

/* ─── TypewriterHeader ────────────────────────────────────────────────────── */

interface TypewriterHeaderProps {
  text: string;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  charDelay?: number;
  once?: boolean;
}

export function TypewriterHeader({
  text,
  className = "",
  tag: Tag = "h2",
  charDelay = 35,
  once = true,
}: TypewriterHeaderProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasTyped, setHasTyped] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-100px" });

  useEffect(() => {
    if (!isInView || hasTyped) return;

    setIsTyping(true);
    let currentIndex = 0;
    setDisplayedText("");

    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(interval);
        setIsTyping(false);
        setHasTyped(true);
      }
    }, charDelay);

    return () => clearInterval(interval);
  }, [isInView, text, charDelay, hasTyped]);

  return (
    <div ref={ref} className="relative">
      <Tag className={className}>
        {displayedText}
        {isTyping && (
          <motion.span
            className="inline-block w-[2px] h-[0.85em] bg-primary ml-1 align-middle"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
          />
        )}
        {/* Invisible placeholder to reserve space */}
        <span className="invisible" aria-hidden="true">
          {text.slice(displayedText.length)}
        </span>
      </Tag>
    </div>
  );
}

/* ─── SnappyCard ──────────────────────────────────────────────────────────── */

interface SnappyCardProps {
  children: React.ReactNode;
  className?: string;
  hoverScale?: number;
  hoverY?: number;
}

const snappyTransition: Transition = {
  type: "spring",
  stiffness: 400,
  damping: 25,
};

export function SnappyCard({
  children,
  className = "",
  hoverScale = 1.03,
  hoverY = -4,
}: SnappyCardProps) {
  return (
    <motion.div
      className={className}
      whileHover={{
        scale: hoverScale,
        y: hoverY,
      }}
      transition={snappyTransition}
    >
      {children}
    </motion.div>
  );
}

/* ─── ScaleIn ─────────────────────────────────────────────────────────────── */

interface ScaleInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
}

export function ScaleIn({
  children,
  className = "",
  delay = 0,
  once = true,
}: ScaleInProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once, margin: "-60px" }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
