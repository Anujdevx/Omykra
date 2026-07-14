"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  FadeUp,
  TypewriterHeader,
  StaggerContainer,
  StaggerItem,
  SnappyCard,
  ScaleIn,
} from "@/components/MotionWrappers";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Shield,
  Eye,
  Database,
  FileText,
  ArrowUpRight,
  Minus,
  Plus,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

/* ─── Data from Figma ─────────────────────────────────────────────────────── */

const featureCards = [
  {
    iconBg: "bg-[rgba(0,171,69,0.1)]",
    icon: <Shield size={24} className="text-primary" />,
    title: "Enterprise Security",
    description: "Modern security purchase.",
  },
  {
    iconBg: "bg-[rgba(245,158,11,0.1)]",
    icon: <Eye size={24} className="text-amber-500" />,
    title: "Human Review",
    description: "Nothing is ever sent automatically.",
  },
  {
    iconBg: "bg-[rgba(59,130,246,0.1)]",
    icon: <Database size={24} className="text-blue-500" />,
    title: "Company Knowledge",
    description: "Only uses information you've approved.",
  },
  {
    iconBg: "bg-[rgba(239,68,68,0.1)]",
    icon: <FileText size={24} className="text-red-500" />,
    title: "GDPR Ready",
    description: "Privacy-first architecture.",
  },
];

const integrationLogos = [
  { src: "/images/zendesk-logo.png", alt: "Zendesk", w: 120, h: 31 },
  { src: "/images/knowledgebase-logo.png", alt: "Knowledge Base", w: 120, h: 62 },
  { src: "/images/intercom-logo.png", alt: "Intercom", w: 110, h: 30 },
  { src: "/images/gmail-logo.png", alt: "Gmail", w: 110, h: 27 },
  { src: "/images/pdf-logo.png", alt: "PDF", w: 60, h: 60 },
  { src: "/images/helpcenter-logo.png", alt: "Help Center", w: 120, h: 43 },
  { src: "/images/freshdesk-logo.png", alt: "Freshdesk", w: 120, h: 37 },
  { src: "/images/hubspot-logo.png", alt: "HubSpot", w: 120, h: 49 },
  { src: "/images/salesforce-logo.png", alt: "Salesforce", w: 120, h: 25 },
  { src: "/images/api-logo.png", alt: "API", w: 56, h: 45 },
];

const faqData = [
  {
    question: "Does OmyKra replace our customer support agents?",
    answer:
      "No. OmyKra assists your agents by improving responses while they remain fully in control.",
  },
  {
    question: "Can OmyKra generate answers that aren't in our knowledge base?",
    answer:
      "No. OmyKra only uses information you've approved and uploaded to your knowledge base. It never fabricates information.",
  },
  {
    question: "Which tools does OmyKra work with?",
    answer:
      "OmyKra integrates with Zendesk, Intercom, Freshdesk, HubSpot, Salesforce, Gmail, and more via API.",
  },
  {
    question: "How long does implementation take?",
    answer:
      "Most teams are up and running within a week. Our onboarding team handles the setup for you.",
  },
  {
    question: "Is our customer data secure?",
    answer:
      "Yes. We use enterprise-grade encryption and are SOC 2 compliant. Your data never leaves your control.",
  },
  {
    question: "Can we customize OmyKra for our communication standards?",
    answer:
      "Absolutely. OmyKra is designed to learn and enforce your specific brand voice and quality standards.",
  },
  {
    question: "Will OmyKra help onboard new support agents?",
    answer:
      "Yes. New agents produce senior-level responses from day one with OmyKra's real-time guidance.",
  },
  {
    question: "How do we get started?",
    answer:
      "Book a walkthrough with our team and we'll set up a custom demo for your organization.",
  },
];

/* ─── FAQ Component ───────────────────────────────────────────────────────── */

function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <SnappyCard>
      <button
        onClick={onClick}
        data-cursor="pointer"
        className={`w-full text-left rounded-[24px] p-[30px] flex items-start gap-6 transition-all duration-300 ${
          isOpen
            ? "gradient-primary text-white shadow-card"
            : "bg-white shadow-card"
        }`}
      >
        <div className="flex-1">
          <h3
            className={`font-[family-name:var(--font-heading)] text-lg md:text-xl font-medium leading-snug ${
              isOpen ? "text-white" : "text-neutral-dark"
            }`}
          >
            {question}
          </h3>
          <AnimatePresence>
            {isOpen && (
              <motion.p
                initial={{ height: 0, opacity: 0, marginTop: 0 }}
                animate={{ height: "auto", opacity: 1, marginTop: 12 }}
                exit={{ height: 0, opacity: 0, marginTop: 0 }}
                transition={{ duration: 0.3 }}
                className="text-white/80 text-sm md:text-base leading-relaxed overflow-hidden"
              >
                {answer}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
        <div className="flex-shrink-0 mt-1">
          {isOpen ? (
            <Minus size={24} className="text-white" />
          ) : (
            <Plus size={24} className="text-neutral-dark" />
          )}
        </div>
      </button>
    </SnappyCard>
  );
}

/* ─── Page ────────────────────────────────────────────────────────────────── */

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* ── Hero Section ──────────────────────────────────────────────── */}
      <section className="pt-[72px] pb-12 md:pb-16">
        <div className="max-w-[1280px] mx-auto px-4 md:px-10 pt-6 md:pt-12">
          <div className="relative overflow-hidden rounded-[40px] md:rounded-[64px] bg-primary px-6 md:px-16 py-16 md:py-24 lg:py-32">
            {/* Background pattern images from Figma */}
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src="/images/hero-bg.png"
                alt=""
                width={686}
                height={680}
                className="absolute top-0 opacity-20"
                style={{ left: "297px" }}
                aria-hidden="true"
              />
              <Image
                src="/images/hero-bg.png"
                alt=""
                width={686}
                height={680}
                className="absolute top-0 opacity-20"
                style={{ left: "983px" }}
                aria-hidden="true"
              />
              <Image
                src="/images/hero-bg.png"
                alt=""
                width={686}
                height={680}
                className="absolute top-0 opacity-20"
                style={{ left: "-389px" }}
                aria-hidden="true"
              />
            </div>

            <div className="relative z-10 flex flex-col items-center text-center max-w-[1200px] mx-auto gap-10 md:gap-12">
              {/* Heading + Subtext */}
              <div className="flex flex-col items-center gap-6 px-4 md:px-10">
                <motion.h1
                  className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl lg:text-[56px] font-semibold text-white leading-tight md:leading-[1.15] tracking-tight max-w-4xl mx-auto"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
                >
                  Stop Losing Customers to Inconsistent Customer Experience.
                </motion.h1>

                <motion.p
                  className="text-base md:text-lg text-white/80 max-w-2xl leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Whether it is a new hire&apos;s first day or your busiest support queue,
                  OmyKra equips every agent with the knowledge, guidance, and
                  communication standards to deliver the customer experience your
                  business is known for.
                </motion.p>
              </div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Link
                  href="/auth"
                  className="inline-flex items-center justify-center gap-2 bg-[#CEF17B] text-primary-dark font-semibold text-base px-8 py-4 rounded-full hover:brightness-105 transition-all duration-200 group"
                  data-cursor="pointer"
                >
                  <ArrowUpRight size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  Book a Walkthrough
                </Link>
                <Link
                  href="#features"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold text-base px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-200"
                  data-cursor="pointer"
                >
                  See How It Works
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Problem Statement ──────────────────────────────── */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12 md:mb-16">
            <TypewriterHeader
              text="That Poor Customer Experience Could Have Been Prevented."
              tag="h2"
              className="font-[family-name:var(--font-heading)] text-2xl md:text-4xl lg:text-5xl font-semibold text-neutral-dark leading-tight tracking-tight max-w-3xl mx-auto"
            />
            <FadeUp delay={0.2}>
              <p className="text-neutral-500 text-base md:text-lg mt-6 leading-relaxed max-w-2xl mx-auto">
                Customer experience shouldn&apos;t depend on who replies, how
                experienced they are, or whether they&apos;re having a good day.
                Yet that&apos;s exactly what happens in most support teams.
              </p>
            </FadeUp>
          </div>

          {/* Cards visualization from Figma */}
          <FadeUp>
            <div className="relative">
              <Image
                src="/images/section2-cards.png"
                alt="Customer experience flow showing how different agents create inconsistent experiences"
                width={1280}
                height={484}
                className="w-full h-auto rounded-[24px] shadow-sm"
              />
            </div>
          </FadeUp>

          <FadeUp delay={0.3}>
            <p className="text-center font-[family-name:var(--font-heading)] text-lg md:text-xl font-medium text-neutral-dark mt-12 leading-relaxed max-w-2xl mx-auto">
              Every escalation, bad review and missed CSAT target have one thing
              in common. The quality of the experience depended on who answered the
              conversation. One customer, different experience depending on who
              attends to them.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── Section 3: Meet Your AI Coworker ──────────────────────────── */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 flex flex-col items-center gap-12">
          <div className="text-center max-w-[1062px]">
            <FadeUp>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-4xl lg:text-5xl font-semibold text-neutral-dark leading-tight tracking-tight max-w-3xl mx-auto">
                Meet Your <span className="text-primary">AI Coworker.</span>
              </h2>
            </FadeUp>
            <FadeUp delay={0.15}>
              <p className="text-neutral-500 text-base md:text-lg mt-6 leading-relaxed max-w-2xl mx-auto">
                Omykra supports your agents while they are replying, helping them
                find the right answer and communicate it with confidence regardless
                of who is behind it, how long they have been there and how they are
                feeling at the moment.
              </p>
            </FadeUp>
          </div>

          {/* Step screenshot from Figma */}
          <FadeUp>
            <div className="w-full flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-[55%]">
                <Image
                  src="/images/step-screenshot.png"
                  alt="OmyKra AI assistant interface showing real-time agent guidance"
                  width={720}
                  height={443}
                  className="w-full h-auto rounded-2xl shadow-card"
                />
              </div>
              <div className="lg:w-[45%] space-y-6">
                {["Rewrite with brand voice", "Get contextual help", "Insert approved answers"].map(
                  (step, i) => (
                    <FadeUp key={step} delay={0.1 * (i + 1)}>
                      <div className="flex items-center gap-6">
                        <div
                          className={`w-1 h-[90px] rounded-[10px] ${
                            i === 0 ? "bg-primary-dark" : "bg-primary-dark/10"
                          }`}
                        />
                        <div className="flex-1">
                          <h4 className="font-[family-name:var(--font-heading)] text-lg md:text-xl font-medium text-neutral-dark mb-1">
                            {step}
                          </h4>
                          <p className="text-neutral-500 text-sm md:text-base leading-relaxed">
                            {i === 0 && "Transform any response into your brand's tone and quality standard."}
                            {i === 1 && "Get real-time suggestions based on your knowledge base and best practices."}
                            {i === 2 && "Pull pre-approved answers from your library with one click."}
                          </p>
                        </div>
                      </div>
                    </FadeUp>
                  )
                )}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Section 4: Built For Teams ─────────────────────────────────── */}
      <section id="features" className="py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 flex flex-col items-center gap-12">
          <div className="text-center max-w-[1062px]">
            <TypewriterHeader
              text="Built For Teams That Care About Consistency."
              tag="h2"
              className="font-[family-name:var(--font-heading)] text-2xl md:text-4xl lg:text-5xl font-semibold text-neutral-dark leading-tight tracking-tight max-w-3xl mx-auto"
            />
            <FadeUp delay={0.15}>
              <p className="text-neutral-500 text-base md:text-lg mt-6 leading-relaxed max-w-2xl mx-auto">
                Whether you&apos;re onboarding new agents, scaling rapidly or
                supporting thousands of conservations every month, OmyKra helps
                your team deliver the same standard every time.
              </p>
            </FadeUp>
          </div>

          <FadeUp>
            <Image
              src="/images/section4-features.png"
              alt="OmyKra feature cards showing team consistency tools"
              width={1280}
              height={532}
              className="w-full h-auto"
            />
          </FadeUp>
        </div>
      </section>

      {/* ── Section 5: Integrations ───────────────────────────────────── */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 flex flex-col items-center gap-12">
          <div className="text-center max-w-[1062px]">
            <FadeUp>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-4xl lg:text-5xl font-semibold text-neutral-dark leading-tight tracking-tight max-w-3xl mx-auto">
                Built Into The Tools You Already Use.
              </h2>
            </FadeUp>
            <FadeUp delay={0.15}>
              <p className="text-neutral-500 text-base md:text-lg mt-6 leading-relaxed max-w-2xl mx-auto">
                OmyKra works alongside the platforms your team already relies on,
                so agents stay in their existing workflow while receiving guidance
                exactly when they need it.
              </p>
            </FadeUp>
          </div>

          {/* Logo Marquee */}
          <div className="w-full overflow-hidden relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />
            <motion.div
              className="flex gap-[60px] items-center"
              animate={{ x: [0, -1200] }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...integrationLogos, ...integrationLogos].map((logo, i) => (
                <Image
                  key={i}
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.w}
                  height={logo.h}
                  className="flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity duration-300 object-contain"
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Section 6: With/Without OmyKra ────────────────────────────── */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-16">
            {/* Left text */}
            <div className="lg:w-[435px] space-y-10 shrink-0">
              <div className="space-y-6">
                <FadeUp>
                  <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-4xl lg:text-5xl font-semibold text-neutral-dark leading-tight tracking-tight">
                    CX Without <span className="text-primary">OmyKra?</span>
                  </h2>
                </FadeUp>
                <FadeUp delay={0.15}>
                  <p className="text-neutral-500 text-base md:text-lg leading-relaxed max-w-md">
                    The difference isn&apos;t how hard your team works. It&apos;s
                    whether every agent has the same support when helping customers.
                  </p>
                </FadeUp>
              </div>
              <FadeUp delay={0.25}>
                <Link
                  href="/auth"
                  className="inline-flex items-center justify-center gap-2 bg-primary-dark text-white font-semibold text-base px-8 py-4 rounded-full hover:bg-primary transition-all duration-200 group"
                  data-cursor="pointer"
                >
                  <ArrowUpRight size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  Book a Walkthrough
                </Link>
              </FadeUp>
            </div>

            {/* Right: comparison image from Figma */}
            <FadeUp delay={0.2}>
              <Image
                src="/images/section6-comparison.png"
                alt="Comparison of customer experience with and without OmyKra"
                width={737}
                height={688}
                className="w-full lg:w-[737px] h-auto"
              />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Section 7: Security ───────────────────────────────────────── */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 flex flex-col items-center gap-12">
          <div className="text-center max-w-[1062px]">
            <TypewriterHeader
              text="Secured From Day One!"
              tag="h2"
              className="font-[family-name:var(--font-heading)] text-2xl md:text-4xl lg:text-5xl font-semibold text-neutral-dark leading-tight tracking-tight max-w-3xl mx-auto"
            />
            <FadeUp delay={0.15}>
              <p className="text-neutral-500 text-base md:text-lg mt-6 leading-relaxed max-w-2xl mx-auto">
                Designed with enterprise teams in mind. Built around transparency,
                security, and human control.
              </p>
            </FadeUp>
          </div>

          <StaggerContainer
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full"
            staggerDelay={0.08}
          >
            {featureCards.map((card) => (
              <StaggerItem key={card.title}>
                <SnappyCard className="h-full">
                  <div className="h-full bg-white rounded-[16px] p-8 md:p-10 shadow-card flex flex-col gap-6">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center ${card.iconBg}`}
                    >
                      {card.icon}
                    </div>
                    <div className="flex flex-col gap-2 flex-1">
                      <h4 className="font-[family-name:var(--font-heading)] text-lg md:text-xl font-medium text-neutral-dark leading-snug">
                        {card.title}
                      </h4>
                      <p className="text-neutral-500 text-sm leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </SnappyCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Section 8: AI CX vs AI Assisted CX ────────────────────────── */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 flex flex-col items-center gap-12">
          <div className="text-center max-w-[1062px]">
            <FadeUp>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-4xl lg:text-5xl font-semibold text-neutral-dark leading-tight tracking-tight max-w-3xl mx-auto">
                AI CX or{" "}
                <span className="text-primary">AI Assisted CX (OmyKra)?</span>
              </h2>
            </FadeUp>
            <FadeUp delay={0.15}>
              <p className="text-neutral-500 text-base md:text-lg mt-6 leading-relaxed max-w-2xl mx-auto">
                We believe AI shouldn&apos;t replace your customer support team. It
                should help them become better.
              </p>
            </FadeUp>
          </div>

          <div className="flex flex-col lg:flex-row gap-[60px] items-stretch w-full">
            {/* Traditional AI CX */}
            <ScaleIn className="flex-1">
              <div className="bg-[rgba(239,68,68,0.05)] rounded-[24px] p-10 lg:p-12 shadow-card h-full flex flex-col items-center gap-16">
                <div className="flex items-center gap-6 w-full justify-between">
                  <Image
                    src="/images/ai-robot.png"
                    alt="AI Robot"
                    width={100}
                    height={122}
                    className="w-[100px] h-auto"
                  />
                  <div className="bg-white border border-neutral-300 rounded-2xl p-5 flex-1 max-w-[294px]">
                    <p className="text-sm text-neutral-dark">
                      Automated response with no human oversight or brand control.
                    </p>
                  </div>
                </div>
                <div className="w-full space-y-9">
                  <div className="bg-[rgba(239,68,68,0.1)] rounded-full py-4 px-8 text-center">
                    <span className="text-red-600 font-semibold text-sm">Traditional AI CX</span>
                  </div>
                  <ul className="space-y-6">
                    {[
                      "Replaces human agents entirely",
                      "Generates responses without oversight",
                      "No brand voice consistency",
                      "Risk of hallucinated answers",
                      "Customers feel they're talking to a bot",
                      "No quality assurance layer",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="text-red-500 mt-1">✕</span>
                        <span className="text-neutral-dark text-sm md:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScaleIn>

            {/* OmyKra AI Assisted CX */}
            <ScaleIn delay={0.15} className="flex-1">
              <div className="bg-[rgba(0,171,69,0.05)] rounded-[24px] p-10 lg:p-12 shadow-card h-full flex flex-col items-center gap-16">
                <div className="flex items-center gap-6 w-full justify-between">
                  <Image
                    src="/images/omykra-human.png"
                    alt="Human agent assisted by OmyKra"
                    width={200}
                    height={200}
                    className="w-[120px] h-auto"
                  />
                  <div className="bg-white border border-primary rounded-2xl p-5 flex-1 max-w-[196px]">
                    <p className="text-sm text-neutral-dark">
                      Human agent with AI-powered guidance and quality control.
                    </p>
                  </div>
                </div>
                <div className="w-full space-y-9">
                  <div className="bg-[rgba(0,171,69,0.05)] rounded-full py-4 px-8 text-center">
                    <span className="text-primary font-semibold text-sm">AI Assisted CX (OmyKra)</span>
                  </div>
                  <ul className="space-y-6">
                    {[
                      "Empowers agents, doesn't replace them",
                      "Suggestions reviewed before sending",
                      "Enforces your brand standards",
                      "Only uses approved knowledge",
                      "Customers get genuine human care",
                      "Built-in quality scoring",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="text-primary mt-1">✓</span>
                        <span className="text-neutral-dark text-sm md:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* ── Section 9: Founder ────────────────────────────────────────── */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 flex flex-col items-center gap-12">
          <div className="text-center max-w-[1062px]">
            <TypewriterHeader
              text="Built By Someone Who Lived The Problem."
              tag="h2"
              className="font-[family-name:var(--font-heading)] text-2xl md:text-4xl lg:text-5xl font-semibold text-neutral-dark leading-tight tracking-tight max-w-3xl mx-auto"
            />
          </div>

          <FadeUp className="w-full">
            <div className="flex flex-col lg:flex-row items-stretch w-full">
              <div className="lg:w-[595px] flex-shrink-0 bg-[#CEF17B] overflow-hidden">
                <Image
                  src="/images/founder-photo.png"
                  alt="OmyKra Founder"
                  width={640}
                  height={640}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 border border-neutral-300 border-l-0 p-10 md:p-12 flex flex-col justify-between">
                <blockquote className="font-[family-name:var(--font-heading)] text-xl md:text-3xl lg:text-4xl font-medium text-neutral-dark leading-snug tracking-tight">
                  &ldquo;I built the communication standard I wish I had access to
                  when I was running CX.{" "}
                  <span className="text-neutral-500">
                    Not another chatbot, the thing I needed on the floor while
                    engaging customers.&rdquo;
                  </span>
                </blockquote>
                <div className="mt-8 text-right">
                  <p className="font-[family-name:var(--font-heading)] text-lg font-medium text-neutral-dark">
                    Founder, OmyKra
                  </p>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Section 10: Pricing ───────────────────────────────────────── */}
      <section id="pricing" className="py-16 md:py-24">
        <div className="max-w-[1062px] mx-auto px-6 lg:px-10">
          <div className="mb-12 md:mb-16 text-center">
            <TypewriterHeader
              text="Built For Teams Who Already Have A Standard Worth Protecting."
              tag="h2"
              className="font-[family-name:var(--font-heading)] text-2xl md:text-4xl lg:text-5xl font-semibold text-neutral-dark leading-tight tracking-tight max-w-3xl mx-auto"
            />
            <FadeUp delay={0.15}>
              <p className="text-neutral-500 text-base md:text-lg mt-6 leading-relaxed max-w-2xl mx-auto">
                Everyone organisation is different. We&apos;ll tailor OmyKra to
                your team, your workflow, and your standards.
              </p>
            </FadeUp>
          </div>

          <FadeUp>
            <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
              {/* Pricing Card */}
              <div className="bg-white rounded-[24px] shadow-card p-10 lg:p-12 flex flex-col items-center gap-6 w-full lg:w-[520px]">
                <span className="inline-block bg-[rgba(0,171,69,0.05)] text-primary text-sm font-medium px-5 py-2.5 rounded-full">
                  STARTS FROM
                </span>
                <div className="flex items-center gap-3">
                  <span className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-semibold text-neutral-dark">
                    £2,500
                  </span>
                  <span className="text-neutral-500 text-lg">/month</span>
                </div>
                <p className="text-neutral-500 text-sm text-center max-w-[400px]">
                  Every organization is different. That&apos;s why OmyKra is
                  customized to your team, your workflow, and your standards.
                </p>
                <div className="w-full space-y-4">
                  <Link
                    href="/auth"
                    className="block w-full text-center bg-primary-dark text-white font-semibold text-base py-4 rounded-full hover:bg-primary transition-all duration-200"
                    data-cursor="pointer"
                  >
                    Book a Walkthrough
                  </Link>
                  <p className="text-center text-xs text-neutral-500">
                    No credit card required • 14-day free pilot
                  </p>
                </div>
              </div>

              {/* Options */}
              <div className="flex-1 space-y-10 lg:w-[430px]">
                {[
                  {
                    title: "Tailored to your team",
                    desc: "We configure OmyKra around your workflows, standards, and communication guidelines.",
                    icon: "/images/icon-team.svg",
                  },
                  {
                    title: "Guided by your goals",
                    desc: "We align the solution to your priorities, team structure, and support objectives.",
                    icon: "/images/icon-goals.svg",
                  },
                  {
                    title: "Built to grow with you",
                    desc: "From onboarding to scale, we're with you every step of the way.",
                    icon: "/images/icon-grow.svg",
                  },
                ].map((option, i) => (
                  <FadeUp key={option.title} delay={0.1 * (i + 1)}>
                    <div className="flex items-start gap-9">
                      <div className="flex-shrink-0">
                        <Image src={option.icon} alt={option.title} width={88} height={88} />
                      </div>
                      <div className="flex-1 max-w-[312px]">
                        <h4 className="font-[family-name:var(--font-heading)] text-xl md:text-2xl font-medium text-neutral-dark mb-2">
                          {option.title}
                        </h4>
                        <p className="text-neutral-500 text-sm md:text-base leading-relaxed">
                          {option.desc}
                        </p>
                      </div>
                    </div>
                    {i < 2 && <div className="border-b border-neutral-300 mt-10 w-[410px]" />}
                  </FadeUp>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Section 11: FAQ ───────────────────────────────────────────── */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row justify-between gap-16">
            {/* Left */}
            <div className="lg:w-[480px] lg:flex-shrink-0">
              <FadeUp>
                <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-4xl lg:text-5xl font-semibold text-neutral-dark leading-tight tracking-tight max-w-md">
                  Frequently Asked Questions.
                </h2>
              </FadeUp>
              <FadeUp delay={0.15}>
                <p className="text-neutral-500 text-base md:text-lg mt-6 leading-relaxed max-w-sm">
                  Everything you need to know before bringing OmyKra into your
                  customer experience workflow. If you don&apos;t see your question
                  here, we&apos;d happy to walk you through it.
                </p>
              </FadeUp>
            </div>

            {/* Right: FAQ list */}
            <div className="flex-1 lg:max-w-[737px] space-y-6">
              {faqData.map((faq, i) => (
                <FadeUp key={i} delay={0.05 * i}>
                  <FAQItem
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openFaq === i}
                    onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  />
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 13: Bottom CTA ────────────────────────────────────── */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-4 md:px-10">
          <ScaleIn>
            <div className="relative overflow-hidden bg-primary rounded-[40px] md:rounded-[64px] px-6 md:px-16 py-16 md:py-24 text-center">
              {/* Background patterns */}
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src="/images/hero-bg.png"
                  alt=""
                  width={686}
                  height={680}
                  className="absolute top-1 opacity-20"
                  style={{ left: "307px" }}
                  aria-hidden="true"
                />
                <Image
                  src="/images/hero-bg.png"
                  alt=""
                  width={686}
                  height={680}
                  className="absolute top-1 opacity-20"
                  style={{ left: "984px" }}
                  aria-hidden="true"
                />
                <Image
                  src="/images/hero-bg.png"
                  alt=""
                  width={686}
                  height={680}
                  className="absolute top-1 opacity-20"
                  style={{ left: "-370px" }}
                  aria-hidden="true"
                />
              </div>

              <div className="relative z-10 max-w-[800px] mx-auto flex flex-col items-center gap-10 md:gap-12">
                <div className="space-y-6">
                  <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl lg:text-[56px] font-semibold text-white leading-tight md:leading-[1.15] tracking-tight max-w-3xl mx-auto">
                    From Their First Day, To Your Busiest Day,{"\n"}Same Quality.
                  </h2>
                  <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-md mx-auto">
                    Build a walkthrough and see how OmyKra helps every agent deliver
                    the same communication standard.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/auth"
                    className="inline-flex items-center justify-center gap-2 bg-[#CEF17B] text-primary-dark font-semibold text-base px-8 py-4 rounded-full hover:brightness-105 transition-all duration-200 shadow-card group"
                    data-cursor="pointer"
                  >
                    <ArrowUpRight size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    Book a Walkthrough
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold text-base px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-200"
                    data-cursor="pointer"
                  >
                    Talk to Sales
                  </Link>
                </div>
              </div>
            </div>
          </ScaleIn>
        </div>
      </section>

      <Footer />
    </main>
  );
}
