"use client";

import { useEffect, useRef } from "react";
import { Briefcase, Mic2, Search } from "lucide-react";

export function FeaturesSection() {
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = cardsContainerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const cards = container.getElementsByClassName("spotlight-card");
      for (const card of Array.from(cards)) {
        const rect = (card as HTMLElement).getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        (card as HTMLElement).style.setProperty("--mouse-x", `${x}px`);
        (card as HTMLElement).style.setProperty("--mouse-y", `${y}px`);
      }
    };

    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="features" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 fade-in-up">
          <div className="max-w-xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-gatorOrange/10 border border-gatorOrange/20 text-gatorOrange text-xs font-bold tracking-wide uppercase mb-6">
              Core Capabilities
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white transition-colors tracking-tight">
              Context-aware intelligence <br /> for the modern student.
            </h2>
          </div>
          <p className="text-slate-600 dark:text-gray-500 text-sm max-w-xs mt-6 md:mt-0 leading-relaxed transition-colors font-medium">
            Designed to augment your critical thinking, not replace it. Deeply integrated with the Warrington curriculum.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" ref={cardsContainerRef}>
          {/* Feature 1 */}
          <div className="spotlight-card group relative p-8 rounded-2xl border border-gray-200 dark:border-white/5 bg-white dark:bg-white/[0.02] hover:shadow-xl dark:hover:bg-white/[0.04] transition duration-500 fade-in-up overflow-hidden">
            <div className="relative z-10">
              <div className="w-10 h-10 bg-blue-50 dark:bg-gatorBlue/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition duration-500">
                <Briefcase className="text-gatorBlue w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 transition-colors">
                Case Analysis
              </h3>
              <p className="text-sm text-slate-600 dark:text-gray-500 leading-relaxed transition-colors">
                Upload complex PDFs. Get instant SWOT, financial ratio breakdowns, and strategic recommendations aligned with HBR frameworks.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div
            className="spotlight-card group relative p-8 rounded-2xl border border-gray-200 dark:border-white/5 bg-white dark:bg-white/[0.02] hover:shadow-xl dark:hover:bg-white/[0.04] transition duration-500 fade-in-up overflow-hidden"
            style={{ transitionDelay: "100ms" }}
          >
            <div className="relative z-10">
              <div className="w-10 h-10 bg-orange-50 dark:bg-gatorOrange/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition duration-500">
                <Mic2 className="text-gatorOrange w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 transition-colors">
                Pitch Refinement
              </h3>
              <p className="text-sm text-slate-600 dark:text-gray-500 leading-relaxed transition-colors">
                GatorAI acts as a VC, critiquing your value prop, market sizing logic, and slide narrative before you present.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div
            className="spotlight-card group relative p-8 rounded-2xl border border-gray-200 dark:border-white/5 bg-white dark:bg-white/[0.02] hover:shadow-xl dark:hover:bg-white/[0.04] transition duration-500 fade-in-up overflow-hidden"
            style={{ transitionDelay: "200ms" }}
          >
            <div className="relative z-10">
              <div className="w-10 h-10 bg-purple-50 dark:bg-purple-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition duration-500">
                <Search className="text-purple-500 dark:text-purple-400 w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 transition-colors">
                Research Acceleration
              </h3>
              <p className="text-sm text-slate-600 dark:text-gray-500 leading-relaxed transition-colors">
                Synthesize academic journals and market reports instantly. Build stronger arguments with data-backed insights.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

