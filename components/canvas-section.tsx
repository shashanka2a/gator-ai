"use client";

import { Trophy, Users, Target, Bot } from "lucide-react";

export function CanvasSection() {
  return (
    <section id="faculty" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
          <div className="mb-12 lg:mb-0 fade-in-up">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 text-gatorBlue dark:text-blue-400 text-xs font-bold tracking-wide uppercase mb-6">
              UF Entrepreneurship
            </div>

            <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-6 transition-colors tracking-tight">
              Built for <span className="text-gatorOrange">Gator</span> Competitions
            </h2>
            <p className="text-lg text-slate-600 dark:text-gray-400 mb-8 font-light transition-colors leading-relaxed">
              GatorAI compresses weeks of preparation into hours, making it the ultimate tool for UF students competing in entrepreneurship programs and seeking Warrington College resources.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 w-5 h-5 rounded-full border border-gatorBlue flex items-center justify-center flex-shrink-0">
                  <div className="w-2.5 h-2.5 bg-gatorBlue rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm transition-colors">
                    Gator Hatchery
                  </h4>
                  <p className="text-slate-500 dark:text-gray-500 text-sm mt-1 transition-colors">
                    Generate investor-ready pitch decks and business plans for UF&apos;s premier startup incubator.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 w-5 h-5 rounded-full border border-gatorBlue flex items-center justify-center flex-shrink-0">
                  <div className="w-2.5 h-2.5 bg-gatorBlue rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm transition-colors">
                    Florida Gator100
                  </h4>
                  <p className="text-slate-500 dark:text-gray-500 text-sm mt-1 transition-colors">
                    Stand out with professional validation materials and compelling pitch narratives.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 w-5 h-5 rounded-full border border-gatorBlue flex items-center justify-center flex-shrink-0">
                  <div className="w-2.5 h-2.5 bg-gatorBlue rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm transition-colors">
                    UF Entrepreneurship Club
                  </h4>
                  <p className="text-slate-500 dark:text-gray-500 text-sm mt-1 transition-colors">
                    Perfect your pitch nights with AI-powered refinement and market analysis.
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
                  <div className="w-8 h-8 bg-gatorOrange/10 dark:bg-gatorOrange/20 rounded flex items-center justify-center">
                    <Trophy className="text-gatorOrange w-4 h-4" />
                  </div>
                  <span className="font-semibold text-slate-900 dark:text-gray-200 text-sm transition-colors">
                    Competition Ready
                  </span>
                </div>
                <Target className="text-gray-400 dark:text-gray-600 w-4 h-4" />
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-blue-50/50 dark:bg-blue-500/10 rounded-lg border border-blue-100/50 dark:border-blue-500/10 transition-colors">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-lg bg-gatorBlue flex-shrink-0 flex items-center justify-center shadow-lg shadow-blue-900/20">
                      <Bot className="text-white w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-gatorBlue dark:text-blue-400 font-bold mb-1 uppercase tracking-wide transition-colors">
                        Recommendation
                      </p>
                      <p className="text-sm text-slate-700 dark:text-gray-400 leading-relaxed transition-colors">
                        Your viability score of <span className="font-semibold dark:text-gray-200">78/100</span> shows strong potential. Focus on your unique farmer verification system to differentiate from competitors in the Gator Hatchery pitch.
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


