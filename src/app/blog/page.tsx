"use client";

import Link from "next/link";
import {
  FadeUp,
  TypewriterHeader,
  StaggerContainer,
  StaggerItem,
  SnappyCard,
} from "@/components/MotionWrappers";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, Clock, Calendar } from "lucide-react";

/* ─── Blog Post Data ──────────────────────────────────────────────────────── */

const blogPosts = [
  {
    id: 1,
    category: "Product",
    categoryColor: "bg-primary/10 text-primary",
    title: "Introducing OmyKra AI: Consistent Responses at Scale",
    excerpt:
      "Learn how our new AI engine analyzes thousands of past interactions to generate responses that match your brand voice perfectly, every time.",
    author: "Sarah Chen",
    role: "Co-Founder",
    date: "Jul 10, 2026",
    readTime: "5 min read",
    imageBg: "from-primary to-primary-dark",
  },
  {
    id: 2,
    category: "Engineering",
    categoryColor: "bg-blue-500/10 text-blue-600",
    title: "How We Built Real-Time Quality Scoring for Support Teams",
    excerpt:
      "A deep dive into the architecture behind our real-time CSAT prediction engine and the ML models that power it.",
    author: "Marcus Rivera",
    role: "Lead Engineer",
    date: "Jul 5, 2026",
    readTime: "8 min read",
    imageBg: "from-blue-500 to-blue-700",
  },
  {
    id: 3,
    category: "Customer Story",
    categoryColor: "bg-amber-500/10 text-amber-600",
    title: "How Acme Corp Achieved 98% CSAT with OmyKra",
    excerpt:
      "Acme Corp's support team went from inconsistent quality to industry-leading satisfaction scores in just 3 months. Here's their story.",
    author: "Emily Park",
    role: "Head of Success",
    date: "Jun 28, 2026",
    readTime: "6 min read",
    imageBg: "from-amber-500 to-orange-600",
  },
  {
    id: 4,
    category: "Industry",
    categoryColor: "bg-accent-purple/20 text-accent-purple",
    title: "The Future of Customer Support: AI-Augmented Agents",
    excerpt:
      "Why the future of support isn't about replacing agents — it's about giving them superpowers. A look at the trends shaping 2027.",
    author: "David Kim",
    role: "VP of Strategy",
    date: "Jun 20, 2026",
    readTime: "7 min read",
    imageBg: "from-accent-purple to-purple-800",
  },
];

/* ─── Page ────────────────────────────────────────────────────────────────── */

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="pt-[72px]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 pt-16 md:pt-24 pb-12 md:pb-16">
          <div className="max-w-[700px] mx-auto text-center">
            <FadeUp>
              <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-4">
                Blog
              </span>
            </FadeUp>
            <TypewriterHeader
              text="Insights from the OmyKra team"
              tag="h1"
              className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl lg:text-[56px] font-semibold text-neutral-dark tracking-tight leading-tight"
            />
            <FadeUp delay={0.2}>
              <p className="text-neutral-500 text-base md:text-lg mt-5 leading-relaxed">
                Product updates, engineering deep dives, customer stories, and
                thoughts on the future of customer experience.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Featured Post ─────────────────────────────────────────────── */}
      <section className="pb-12 md:pb-16">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <FadeUp>
            <SnappyCard className="group">
              <div className="grid md:grid-cols-2 gap-0 bg-white rounded-[24px] shadow-card overflow-hidden">
                {/* Image */}
                <div
                  className={`h-[240px] md:h-full min-h-[300px] bg-gradient-to-br ${blogPosts[0].imageBg} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <span className="text-3xl font-bold font-[family-name:var(--font-heading)] text-white">
                        O
                      </span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-300" />
                </div>

                {/* Content */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <span
                    className={`inline-block w-fit text-xs font-semibold px-3 py-1 rounded-full mb-4 ${blogPosts[0].categoryColor}`}
                  >
                    {blogPosts[0].category}
                  </span>
                  <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-semibold text-neutral-dark mb-4 leading-snug">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-neutral-500 text-sm md:text-base leading-relaxed mb-6">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full gradient-primary flex items-center justify-center">
                        <span className="text-white text-xs font-semibold">
                          {blogPosts[0].author
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-neutral-dark">
                          {blogPosts[0].author}
                        </p>
                        <p className="text-xs text-neutral-500">
                          {blogPosts[0].date}
                        </p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs text-neutral-500">
                      <Clock size={12} />
                      {blogPosts[0].readTime}
                    </span>
                  </div>
                </div>
              </div>
            </SnappyCard>
          </FadeUp>
        </div>
      </section>

      {/* ── Blog Grid ─────────────────────────────────────────────────── */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            staggerDelay={0.1}
          >
            {blogPosts.slice(1).map((post) => (
              <StaggerItem key={post.id}>
                <SnappyCard className="group h-full">
                  <article className="h-full bg-white rounded-[16px] shadow-card overflow-hidden flex flex-col">
                    {/* Image placeholder */}
                    <div
                      className={`h-[200px] bg-gradient-to-br ${post.imageBg} relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <span className="text-xl font-bold font-[family-name:var(--font-heading)] text-white">
                            O
                          </span>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-300" />
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-7 flex-1 flex flex-col">
                      <div className="flex items-center gap-3 mb-4">
                        <span
                          className={`text-xs font-semibold px-2.5 py-1 rounded-full ${post.categoryColor}`}
                        >
                          {post.category}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-neutral-500">
                          <Clock size={11} />
                          {post.readTime}
                        </span>
                      </div>

                      <h3 className="font-[family-name:var(--font-heading)] text-lg md:text-xl font-semibold text-neutral-dark mb-3 leading-snug">
                        {post.title}
                      </h3>

                      <p className="text-neutral-500 text-sm leading-relaxed mb-6 flex-1">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center">
                            <span className="text-white text-[10px] font-semibold">
                              {post.author
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </span>
                          </div>
                          <div>
                            <p className="text-xs font-medium text-neutral-dark">
                              {post.author}
                            </p>
                            <p className="text-[11px] text-neutral-500 flex items-center gap-1">
                              <Calendar size={10} />
                              {post.date}
                            </p>
                          </div>
                        </div>
                        <Link
                          href="#"
                          className="text-primary hover:text-primary-dark transition-colors"
                          data-cursor="pointer"
                          aria-label={`Read ${post.title}`}
                        >
                          <ArrowRight size={18} />
                        </Link>
                      </div>
                    </div>
                  </article>
                </SnappyCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <Footer />
    </main>
  );
}
