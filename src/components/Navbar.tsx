"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Product", href: "#" },
  { label: "Blog", href: "/blog" },
  { label: "About Us", href: "#" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass border-b border-neutral-300/30 shadow-navbar"
          : "bg-transparent"
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
    >
      <nav className="max-w-[1280px] mx-auto px-6 lg:px-10 h-[80px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group" data-cursor="pointer">
          <Image 
            src="/images/omykra-logo.png" 
            alt="OmyKra" 
            width={126} 
            height={40} 
            className="object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-base font-normal text-neutral-dark hover:text-primary transition-colors duration-200"
              data-cursor="pointer"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/auth"
            className="text-base font-semibold text-primary-dark border border-primary-dark hover:bg-primary-dark hover:text-white transition-all duration-200 px-6 py-2.5 rounded-full"
            data-cursor="pointer"
          >
            Sign In
          </Link>
          <Link
            href="/auth"
            className="text-base font-semibold text-white bg-primary-dark hover:bg-primary px-6 py-2.5 rounded-full transition-all duration-200 flex items-center gap-2"
            data-cursor="pointer"
          >
            <ArrowUpRight size={18} />
            Book a Walkthrough
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          data-cursor="pointer"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden glass border-t border-neutral-300/30"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-base font-medium text-neutral-dark py-2"
                  onClick={() => setMobileOpen(false)}
                  data-cursor="pointer"
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-neutral-300/50">
                <Link
                  href="/auth"
                  className="text-center text-sm font-semibold text-primary-dark border border-primary-dark px-6 py-3 rounded-full"
                  onClick={() => setMobileOpen(false)}
                  data-cursor="pointer"
                >
                  Sign In
                </Link>
                <Link
                  href="/auth"
                  className="text-center text-sm font-semibold text-white bg-primary-dark px-6 py-3 rounded-full flex items-center justify-center gap-2"
                  onClick={() => setMobileOpen(false)}
                  data-cursor="pointer"
                >
                  <ArrowUpRight size={18} />
                  Book a Walkthrough
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
