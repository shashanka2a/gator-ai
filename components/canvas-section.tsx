"use client";

import { Layout, RefreshCw, Bot } from "lucide-react";

export function CanvasSection() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
          <div className="mb-12 lg:mb-0 fade-in-up">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 text-gatorBlue dark:text-blue-400 text-xs font-bold tracking-wide uppercase mb-6">
              System Integration
            </div>

            <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-6 transition-colors tracking-tight">
              Native <span className="text-gatorOrange">Canvas</span> Sync
            </h2>
            <p className="text-lg text-slate-600 dark:text-gray-400 mb-8 font-light transition-colors leading-relaxed">
              We don&apos;t just sit on top of your work; we flow with it. GatorAI ingests syllabi, deadlines, and professor-specific rubrics directly from Canvas.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 w-5 h-5 rounded-full border border-gatorBlue flex items-center justify-center flex-shrink-0">
                  <div className="w-2.5 h-2.5 bg-gatorBlue rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm transition-colors">
                    Syllabus Ingestion
                  </h4>
                  <p className="text-slate-500 dark:text-gray-500 text-sm mt-1 transition-colors">
                    Automatically understands reading lists and weekly objectives.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 w-5 h-5 rounded-full border border-gatorBlue flex items-center justify-center flex-shrink-0">
                  <div className="w-2.5 h-2.5 bg-gatorBlue rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm transition-colors">
                    Faculty Alignment
                  </h4>
                  <p className="text-slate-500 dark:text-gray-500 text-sm mt-1 transition-colors">
                    Trained on specific teaching methods of Warrington professors.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative fade-in-up" style={{ transitionDelay: "200ms" }}>
            <div className="bg-white dark:bg-[#0A0F1E] rounded-xl p-8 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-gray-200 dark:border-white/5 relative transition-colors duration-500">
              <div className="absolute top-1/2 -left-12 w-12 h-[1px] bg-gradient-to-r from-transparent to-gatorOrange hidden lg:block opacity-50"></div>

              <div className="flex items-center justify-between border-b border-gray-100 dark:border-white/5 pb-6 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-red-50 dark:bg-red-500/10 rounded flex items-center justify-center">
                    <Layout className="text-red-500 w-4 h-4" />
                  </div>
                  <span className="font-semibold text-slate-900 dark:text-gray-200 text-sm transition-colors">
                    Canvas LMS
                  </span>
                </div>
                <RefreshCw className="text-gray-400 dark:text-gray-600 w-4 h-4" />
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-blue-50/50 dark:bg-blue-500/10 rounded-lg border border-blue-100/50 dark:border-blue-500/10 transition-colors">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-lg bg-gatorBlue flex-shrink-0 flex items-center justify-center shadow-lg shadow-blue-900/20">
                      <Bot className="text-white w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-gatorBlue dark:text-blue-400 font-bold mb-1 uppercase tracking-wide transition-colors">
                        Insight
                      </p>
                      <p className="text-sm text-slate-700 dark:text-gray-400 leading-relaxed transition-colors">
                        Based on <span className="font-semibold dark:text-gray-200">Prof. Smith&apos;s rubric</span>, your analysis lacks a quantitative sensitivity analysis. Shall we calculate NPV scenarios?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

