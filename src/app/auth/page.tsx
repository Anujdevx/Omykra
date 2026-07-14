"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Eye, EyeOff, User, Mail, Lock } from "lucide-react";

// Simple inline SVG for Google and Microsoft
function GoogleIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

function MicrosoftIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg">
      <path fill="#f25022" d="M0 0h10v10H0z"/>
      <path fill="#7fba00" d="M11 0h10v10H11z"/>
      <path fill="#00a4ef" d="M0 11h10v10H0z"/>
      <path fill="#ffb900" d="M11 11h10v10H11z"/>
    </svg>
  );
}

type AuthView = "signin" | "signup";

export default function AuthPage() {
  const [view, setView] = useState<AuthView>("signin");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <main className="min-h-screen w-full flex flex-col lg:flex-row bg-white font-sans">
      
      {/* ── Left Panel (Auth Forms) ────────────────────────────────── */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 lg:p-12">
        <div className="w-full max-w-[480px]">
            <AnimatePresence mode="wait">
              {view === "signin" ? (
                <motion.div
                  key="signin"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-[48px]"
                >
                  {/* Header Texts */}
                  <div className="flex flex-col gap-[16px]">
                    <h1 className="font-[family-name:var(--font-heading)] text-[56px] font-semibold text-primary-dark leading-[64px] text-center">
                      Welcome back
                    </h1>
                    <p className="text-[#808080] text-[20px] leading-[32px] text-center font-normal">
                      Sign in to continue managing your customer experience workspace.
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-[36px]">
                    <div className="flex flex-col gap-[16px]">
                      
                      {/* Email Input */}
                      <div className="w-full h-[64px] border-[2px] border-[#D1D1D1] rounded-[48px] px-[20px] flex items-center gap-[10px] bg-white focus-within:border-primary transition-colors">
                        <Mail className="text-[#808080]" size={24} />
                        <input
                          type="email"
                          placeholder="Enter your work email"
                          className="flex-1 bg-transparent text-[#808080] text-[16px] leading-[28px] focus:outline-none placeholder:text-[#808080]"
                        />
                      </div>

                      {/* Password Input */}
                      <div className="w-full h-[64px] border-[2px] border-[#D1D1D1] rounded-[48px] px-[20px] flex items-center gap-[10px] bg-white focus-within:border-primary transition-colors">
                        <Lock className="text-[#808080]" size={24} />
                        <input
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          className="flex-1 bg-transparent text-[#808080] text-[16px] leading-[28px] focus:outline-none placeholder:text-[#808080]"
                        />
                        <button
                          type="button"
                          className="text-[#808080] hover:text-primary transition-colors"
                          onClick={() => setShowPassword(!showPassword)}
                          data-cursor="pointer"
                        >
                          {showPassword ? <EyeOff size={24} /> : <Eye size={24} />}
                        </button>
                      </div>

                      {/* Remember & Forgot Password */}
                      <div className="flex items-center justify-between pt-1">
                        <label className="flex items-center gap-[8px] cursor-pointer group" data-cursor="pointer">
                          <input
                            type="checkbox"
                            className="w-[24px] h-[24px] rounded border-[#D1D1D1] text-primary focus:ring-primary focus:ring-offset-0 cursor-pointer"
                          />
                          <span className="text-[14px] font-medium text-[#808080] leading-[22px] group-hover:text-primary-dark transition-colors">
                            Remember Me
                          </span>
                        </label>
                        <button
                          type="button"
                          className="text-[14px] font-medium text-primary hover:text-primary-dark transition-colors leading-[22px]"
                          data-cursor="pointer"
                        >
                          Forgot Password?
                        </button>
                      </div>

                    </div>

                    {/* Actions */}
                    <div className="flex flex-col gap-[16px]">
                      <button
                        type="submit"
                        className="w-full h-[56px] bg-primary-dark text-white font-semibold text-[16px] leading-[24px] rounded-[48px] hover:bg-primary transition-colors flex items-center justify-center gap-2"
                        data-cursor="pointer"
                      >
                        Sign In
                      </button>

                      <div className="flex items-center gap-[16px]">
                        <div className="flex-1 h-px bg-[#D1D1D1]" />
                        <span className="text-[12px] font-medium text-[#808080] leading-[20px]">
                          or continue with
                        </span>
                        <div className="flex-1 h-px bg-[#D1D1D1]" />
                      </div>

                      <button
                        className="w-full h-[56px] border border-primary-dark text-primary-dark font-semibold text-[16px] leading-[24px] rounded-[48px] hover:bg-neutral-50 transition-colors flex items-center justify-center gap-3"
                        data-cursor="pointer"
                      >
                        <GoogleIcon size={24} />
                        Sign In With Google
                      </button>

                      <button
                        className="w-full h-[56px] border border-primary-dark text-primary-dark font-semibold text-[16px] leading-[24px] rounded-[48px] hover:bg-neutral-50 transition-colors flex items-center justify-center gap-3"
                        data-cursor="pointer"
                      >
                        <MicrosoftIcon size={24} />
                        Continue with Microsoft
                      </button>

                      <button
                        className="w-full h-[56px] border border-primary-dark text-primary-dark font-semibold text-[16px] leading-[24px] rounded-[48px] hover:bg-neutral-50 transition-colors flex items-center justify-center mt-4"
                        onClick={() => setView("signup")}
                        data-cursor="pointer"
                      >
                        Don&apos;t have an account? <span className="text-primary ml-1">Create Workspace</span>
                      </button>
                    </div>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="signup"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-[24px]"
                >
                  {/* Header Texts */}
                  <div className="flex flex-col gap-[16px]">
                    <h1 className="font-[family-name:var(--font-heading)] text-[56px] font-semibold text-primary-dark leading-[64px] text-center">
                      Create your workspace
                    </h1>
                    <p className="text-[#808080] text-[20px] leading-[32px] text-center font-normal">
                      Start your Omykra workspace and empower your team with AI-assisted customer support.
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-[36px]">
                    <div className="flex flex-col gap-[16px]">
                      
                      {/* Name Input */}
                      <div className="w-full h-[64px] border-[2px] border-[#D1D1D1] rounded-[48px] px-[20px] flex items-center gap-[10px] bg-white focus-within:border-primary transition-colors">
                        <User className="text-[#808080]" size={24} />
                        <input
                          type="text"
                          placeholder="Enter your full name"
                          className="flex-1 bg-transparent text-[#808080] text-[16px] leading-[28px] focus:outline-none placeholder:text-[#808080]"
                        />
                      </div>

                      {/* Email Input */}
                      <div className="w-full h-[64px] border-[2px] border-[#D1D1D1] rounded-[48px] px-[20px] flex items-center gap-[10px] bg-white focus-within:border-primary transition-colors">
                        <Mail className="text-[#808080]" size={24} />
                        <input
                          type="email"
                          placeholder="Enter your work email"
                          className="flex-1 bg-transparent text-[#808080] text-[16px] leading-[28px] focus:outline-none placeholder:text-[#808080]"
                        />
                      </div>

                      {/* Password Input */}
                      <div className="w-full h-[64px] border-[2px] border-[#D1D1D1] rounded-[48px] px-[20px] flex items-center gap-[10px] bg-white focus-within:border-primary transition-colors">
                        <Lock className="text-[#808080]" size={24} />
                        <input
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          className="flex-1 bg-transparent text-[#808080] text-[16px] leading-[28px] focus:outline-none placeholder:text-[#808080]"
                        />
                        <button
                          type="button"
                          className="text-[#808080] hover:text-primary transition-colors"
                          onClick={() => setShowPassword(!showPassword)}
                          data-cursor="pointer"
                        >
                          {showPassword ? <EyeOff size={24} /> : <Eye size={24} />}
                        </button>
                      </div>

                      {/* Confirm Password Input */}
                      <div className="w-full h-[64px] border-[2px] border-[#D1D1D1] rounded-[48px] px-[20px] flex items-center gap-[10px] bg-white focus-within:border-primary transition-colors">
                        <Lock className="text-[#808080]" size={24} />
                        <input
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="Confirm your password"
                          className="flex-1 bg-transparent text-[#808080] text-[16px] leading-[28px] focus:outline-none placeholder:text-[#808080]"
                        />
                        <button
                          type="button"
                          className="text-[#808080] hover:text-primary transition-colors"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          data-cursor="pointer"
                        >
                          {showConfirmPassword ? <EyeOff size={24} /> : <Eye size={24} />}
                        </button>
                      </div>

                      {/* Terms Checkbox */}
                      <div className="flex items-center gap-[8px] pt-1">
                        <input
                          type="checkbox"
                          className="w-[24px] h-[24px] rounded border-[#D1D1D1] text-primary focus:ring-primary focus:ring-offset-0 cursor-pointer"
                        />
                        <span className="text-[14px] font-medium text-[#808080] leading-[22px]">
                          I agree to the Terms of Service and Privacy Policy.
                        </span>
                      </div>

                    </div>

                    {/* Actions */}
                    <div className="flex flex-col gap-[16px]">
                      <button
                        type="submit"
                        className="w-full h-[56px] bg-primary-dark text-white font-semibold text-[16px] leading-[24px] rounded-[48px] hover:bg-primary transition-colors flex items-center justify-center gap-2"
                        data-cursor="pointer"
                      >
                        Create Workspace
                      </button>

                      <div className="flex items-center gap-[16px]">
                        <div className="flex-1 h-px bg-[#D1D1D1]" />
                        <span className="text-[12px] font-medium text-[#808080] leading-[20px]">
                          or continue with
                        </span>
                        <div className="flex-1 h-px bg-[#D1D1D1]" />
                      </div>

                      <button
                        className="w-full h-[56px] border border-primary-dark text-primary-dark font-semibold text-[16px] leading-[24px] rounded-[48px] hover:bg-neutral-50 transition-colors flex items-center justify-center gap-3"
                        data-cursor="pointer"
                      >
                        <GoogleIcon size={24} />
                        Sign In With Google
                      </button>

                      <button
                        className="w-full h-[56px] border border-primary-dark text-primary-dark font-semibold text-[16px] leading-[24px] rounded-[48px] hover:bg-neutral-50 transition-colors flex items-center justify-center gap-3"
                        data-cursor="pointer"
                      >
                        <MicrosoftIcon size={24} />
                        Continue with Microsoft
                      </button>

                      <button
                        className="w-full h-[56px] border border-primary-dark text-primary-dark font-semibold text-[16px] leading-[24px] rounded-[48px] hover:bg-neutral-50 transition-colors flex items-center justify-center mt-4"
                        onClick={() => setView("signin")}
                        data-cursor="pointer"
                      >
                        Already have an account? <span className="text-primary ml-1">Sign In</span>
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      {/* ── Right Panel (Background side) ────────────────────────────── */}
      <div 
        className="hidden lg:flex w-1/2 bg-[#F3F3F3] items-center justify-center"
        // 🛠️ ADJUST: Padding around the outside of the green card
        style={{ padding: "48px" }}
      >
        <div 
          className="w-full h-full bg-[#00AB45] flex flex-col items-center overflow-hidden relative"
          style={{ 
            // 🛠️ ADJUST: Green card dimensions and spacing
            maxWidth: "720px",    
            maxHeight: "960px",   
            borderRadius: "24px", 
            paddingTop: "71px",   // Space above the logo
            gap: "60px"           // Space between logo, title, and image
          }}
        >
          
          {/* Logo */}
          <Link href="/" className="hover:opacity-90 transition-opacity z-10 shrink-0" data-cursor="pointer">
            <Image 
              src="/images/auth-logo.png" 
              alt="OmyKra" 
              width={160} 
              height={40} 
              className="object-contain"
            />
          </Link>

          {/* Title */}
          <h2 className="text-white text-[32px] lg:text-[44px] leading-tight lg:leading-[52px] font-semibold text-center font-[family-name:var(--font-heading)] max-w-[410px] z-10 px-6 shrink-0">
            Stop Losing Customers to <span className="text-[#CEF17B]">Inconsistent </span> Customer Experience.
          </h2>

          {/* Image */}
          <div 
            className="flex-1 relative mt-auto"
            style={{
              // 🛠️ ADJUST: Image container sizing
              width: "90%",     // How wide the image is relative to the green card
              minHeight: "600px" // Minimum height for the image area
            }}
          >
            <Image 
              src="/images/auth-graphic-full.png"
              alt="OmyKra Team"
              fill
              sizes="(max-width: 1024px) 50vw, 50vw"
              className="object-contain object-bottom"
              // 🛠️ ADJUST: Padding at the bottom of the image (pushing it up from the floor)
              style={{ paddingBottom: "192px" }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
