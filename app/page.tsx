"use client";

import { useEffect } from "react";
import { Navbar } from "@/components/navbar";
import { AmbientBackground } from "@/components/ambient-background";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { CanvasSection } from "@/components/canvas-section";
import { Footer } from "@/components/footer";

export default function Home() {
  useEffect(() => {
    // Intersection Observer for fade-in animations
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll(".fade-in-up").forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <AmbientBackground />
      <Navbar />
      <main>
        <HeroSection />
        
        {/* Partners / Trust Bar */}
        <div className="border-y border-gray-200 dark:border-white/5 bg-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
            <p className="text-gray-400 dark:text-gray-600 text-xs font-semibold uppercase tracking-[0.2em] mb-8 transition-colors">
              Benchmarked Against
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 dark:opacity-30 grayscale transition-all duration-500">
              <span className="text-lg font-serif font-bold text-slate-900 dark:text-white tracking-widest transition-colors">
                HARVARD
              </span>
              <span className="text-lg font-serif font-bold text-slate-900 dark:text-white tracking-widest transition-colors">
                WHARTON
              </span>
              <span className="text-lg font-serif font-bold text-slate-900 dark:text-white tracking-widest transition-colors">
                STANFORD
              </span>
              <span className="text-lg font-serif font-bold text-slate-900 dark:text-white tracking-widest transition-colors">
                MIT SLOAN
              </span>
            </div>
          </div>
        </div>

        <FeaturesSection />
        <CanvasSection />

        {/* Mission / Origin */}
        <section id="mission" className="py-24 border-t border-gray-200 dark:border-white/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in-up">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-6 transition-colors tracking-tight">
              Built by Alumni. Powered by Pride.
            </h2>
            <p className="text-lg text-slate-600 dark:text-gray-400 mb-12 font-light leading-relaxed transition-colors">
              Top business schools are racing to adopt AI. We weren&apos;t willing to wait. GatorAI positions UF as a leader in AI-native business education.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-t border-gray-200 dark:border-white/5 pt-12">
              <div className="p-4">
                <div className="text-4xl font-light text-slate-900 dark:text-white mb-2 font-serif transition-colors">
                  Top 5
                </div>
                <div className="text-xs text-gatorOrange uppercase tracking-widest font-bold">
                  Public Uni Goal
                </div>
              </div>
              <div className="p-4">
                <div className="text-4xl font-light text-slate-900 dark:text-white mb-2 font-serif transition-colors">
                  100%
                </div>
                <div className="text-xs text-gatorOrange uppercase tracking-widest font-bold">
                  Curriculum Aligned
                </div>
              </div>
              <div className="p-4">
                <div className="text-4xl font-light text-slate-900 dark:text-white mb-2 font-serif transition-colors">
                  24/7
                </div>
                <div className="text-xs text-gatorOrange uppercase tracking-widest font-bold">
                  Student Support
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Minimal CTA */}
        <section id="contact" className="py-24 relative overflow-hidden">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gatorBlue opacity-10 dark:opacity-20 blur-[120px] rounded-full pointer-events-none transition-opacity"></div>

            <div className="relative z-10 fade-in-up">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-8 transition-colors tracking-tight">
                Secure your spot.
              </h2>

              <form
                className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto mb-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  // Handle form submission
                }}
              >
                <input
                  type="email"
                  placeholder="ufl.edu email address"
                  className="px-5 py-3 rounded-lg bg-white border border-gray-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-gatorOrange focus:ring-1 focus:ring-gatorOrange transition w-full shadow-sm dark:bg-white/5 dark:border-white/10 dark:text-white dark:placeholder-gray-500"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-slate-900 text-white dark:bg-white dark:text-midnight font-medium rounded-lg hover:opacity-90 transition shadow-lg whitespace-nowrap"
                >
                  Join Waitlist
                </button>
              </form>
              <p className="text-slate-500 dark:text-gray-500 text-xs transition-colors">
                Limited spots available for the Fall Beta cohort.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

