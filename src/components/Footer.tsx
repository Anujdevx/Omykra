"use client";

import Link from "next/link";
import Image from "next/image";
import { FadeUp } from "./MotionWrappers";
import { ArrowUpRight } from "lucide-react";
const footerSections = [
  {
    title: "Product",
    links: [
      { label: "Product", href: "#" },
      { label: "Features", href: "#features" },
      { label: "Integrations", href: "#" },
      { label: "Security", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Help Center", href: "#" },
      { label: "Documentation", href: "#" },
      { label: "API", href: "#" },
      { label: "Book a Walkthrough", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-white border-t border-neutral-200 text-neutral-dark">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 pt-20 pb-10">
        <FadeUp>
          <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-20 mb-20">
            {/* Brand column */}
            <div className="w-full lg:w-[292px] flex flex-col gap-[15px]">
              <Link href="/" className="flex items-center gap-2 mb-2" data-cursor="pointer">
                <Image 
                  src="/images/omykra-logo.png" 
                  alt="OmyKra" 
                  width={150} 
                  height={48} 
                  className="object-contain"
                />
              </Link>
              <div className="flex flex-col gap-2">
                <p className="text-base font-semibold text-neutral-dark">
                  AI Coworker For CX Teams.
                </p>
                <p className="text-sm text-neutral-dark leading-relaxed">
                  Empowering customer experience teams to deliver consistent, confident conversations every time.
                </p>
              </div>
              <div className="flex items-center gap-4 mt-2">
                {/* Social place holders - using Lucide if exact SVGs are missing, or simple text if preferred. We'll use simple spans for now */}
                <Link href="#" className="text-neutral-dark hover:text-primary transition-colors" data-cursor="pointer">
                  <span className="text-sm font-semibold">In</span>
                </Link>
                <Link href="#" className="text-neutral-dark hover:text-primary transition-colors" data-cursor="pointer">
                  <span className="text-sm font-semibold">Tw</span>
                </Link>
              </div>
            </div>

            {/* Link columns */}
            <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-8">
              {footerSections.map((section) => (
                <div key={section.title} className="flex flex-col gap-4">
                  <h4 className="text-base font-semibold text-neutral-dark mb-2">
                    {section.title}
                  </h4>
                  <ul className="space-y-4">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-sm text-neutral-500 hover:text-primary transition-colors duration-200"
                          data-cursor="pointer"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Newsletter Column */}
            <div className="w-full lg:w-[371px] flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h4 className="text-base font-semibold text-neutral-dark">
                  Stay ahead in Customer Experience
                </h4>
                <p className="text-sm text-neutral-dark leading-relaxed">
                  Get practical insights, product updates, and customer experience best practices delivered straight to your inbox.
                </p>
              </div>
              <form className="flex items-center justify-between border border-neutral-300 rounded-full p-1.5" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Enter your work email" 
                  className="bg-transparent outline-none px-4 text-sm w-full"
                />
                <button type="submit" className="bg-primary-dark text-white text-sm font-semibold py-3 px-6 rounded-full hover:bg-primary transition-colors">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </FadeUp>

        {/* Bottom bar */}
        <div className="border-t border-neutral-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-base text-neutral-dark">
            © 2026 Omykra. All rights reserved.
          </p>
          <p className="text-base text-neutral-dark">
            Designed for customer experience teams.
          </p>
        </div>
      </div>
    </footer>
  );
}
