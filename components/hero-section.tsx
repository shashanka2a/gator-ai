"use client";

import { useEffect, useRef, useState } from "react";
import {
  Sparkles,
  ArrowRight,
  Lock,
  MessageSquare,
  Folder,
  BarChart2,
  Activity,
} from "lucide-react";

export function HeroSection() {
  const [typingText, setTypingText] = useState("");
  const [userMsgVisible, setUserMsgVisible] = useState(false);
  const [typingVisible, setTypingVisible] = useState(false);
  const [aiMsgVisible, setAiMsgVisible] = useState(false);
  const progress1Ref = useRef<HTMLDivElement>(null);
  const progress2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const textToType = "Help me prepare a pitch for my startup class...";
    let charIndex = 0;

    const typeWriter = () => {
      if (charIndex < textToType.length) {
        setTypingText(textToType.slice(0, charIndex + 1));
        charIndex++;
        setTimeout(typeWriter, 50);
      }
    };

    setTimeout(typeWriter, 1000);

    // User message appears
    setTimeout(() => {
      setUserMsgVisible(true);
    }, 1500);

    // Typing indicator appears
    setTimeout(() => {
      setTypingVisible(true);
    }, 2500);

    // AI responds
    setTimeout(() => {
      setTypingVisible(false);
      setAiMsgVisible(true);
      // Animate progress bars
      setTimeout(() => {
        if (progress1Ref.current) {
          progress1Ref.current.style.width = "75%";
        }
        if (progress2Ref.current) {
          progress2Ref.current.style.width = "50%";
        }
      }, 300);
    }, 4500);
  }, []);

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-white/5 text-slate-600 dark:text-gray-300 text-xs font-medium mb-8 fade-in-up backdrop-blur-sm transition-colors">
            <span className="flex h-1.5 w-1.5 rounded-full bg-gatorOrange mr-2 shadow-[0_0_10px_rgba(250,70,22,0.8)]"></span>
            Exclusively for UF Warrington College of Business
          </div>

          <h1 className="text-5xl md:text-7xl font-serif text-slate-900 dark:text-white tracking-tight mb-6 leading-[1.1] fade-in-up transition-colors" style={{ transitionDelay: "100ms" }}>
            Business Intelligence, <br />
            <span className="italic text-gray-500 dark:text-gray-500">Reimagined.</span>
          </h1>

          <p className="text-lg text-slate-600 dark:text-gray-400 mb-12 max-w-xl mx-auto font-light fade-in-up transition-colors" style={{ transitionDelay: "200ms" }}>
            The curriculum-trained AI partner that aligns with faculty methods to accelerate analysis, pitch preparation, and research.
          </p>

          {/* Interactive Typing Bar */}
          <div className="max-w-2xl mx-auto mb-16 fade-in-up relative group" style={{ transitionDelay: "300ms" }}>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-gatorBlue via-gatorOrange to-gatorBlue rounded-xl opacity-10 dark:opacity-20 group-hover:opacity-30 dark:group-hover:opacity-40 blur transition duration-500"></div>

            <div className="relative bg-white dark:bg-midnight border border-gray-200 dark:border-white/10 rounded-xl p-1 flex items-center shadow-xl transition-colors duration-500">
              <div className="flex-grow flex items-center px-4 py-3">
                <Sparkles className="w-5 h-5 text-gatorOrange mr-3" />
                <span className="text-slate-400 dark:text-gray-500 font-light text-sm md:text-base">
                  {typingText}
                </span>
                <span className="cursor-blink w-0.5 h-5 bg-gatorOrange ml-1"></span>
              </div>
              <div className="hidden sm:flex items-center pr-1">
                <span className="text-xs text-gray-400 dark:text-gray-600 mr-3 px-2 py-1 bg-gray-100 dark:bg-white/5 rounded border border-gray-200 dark:border-white/5">
                  ⌘ K
                </span>
                <button className="bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 text-slate-600 dark:text-white rounded-lg p-2 transition">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Illustration: Collaborative Chat Interface */}
        <div className="mt-8 relative mx-auto max-w-5xl fade-in-up" style={{ transitionDelay: "500ms" }}>
          <div className="rounded-xl border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-[#050b1d]/90 backdrop-blur-xl shadow-2xl overflow-hidden transition-colors duration-500">
            {/* App Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-white/5 bg-gray-50/50 dark:bg-white/5">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-white/50 dark:bg-black/20 rounded-md border border-black/5 dark:border-white/5">
                <Lock className="w-3 h-3 text-gray-400" />
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                  warrington.ufl.edu/gator-ai
                </span>
              </div>
              <div className="w-10"></div>
            </div>

            <div className="flex h-[400px] md:h-[500px]">
              {/* Sidebar */}
              <div className="hidden md:flex flex-col w-16 border-r border-gray-200 dark:border-white/5 bg-gray-50/30 dark:bg-white/2 py-4 items-center gap-6">
                <div className="w-8 h-8 rounded-lg bg-gatorBlue flex items-center justify-center text-white font-bold text-xs">
                  G
                </div>
                <div className="w-8 h-8 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 flex items-center justify-center text-gray-400 transition cursor-pointer">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div className="w-8 h-8 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 flex items-center justify-center text-gray-400 transition cursor-pointer">
                  <Folder className="w-4 h-4" />
                </div>
                <div className="w-8 h-8 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 flex items-center justify-center text-gray-400 transition cursor-pointer">
                  <BarChart2 className="w-4 h-4" />
                </div>
              </div>

              {/* Main Chat Area */}
              <div className="flex-1 flex flex-col relative bg-white dark:bg-transparent">
                <div
                  className="absolute inset-0 opacity-40 dark:opacity-20 pointer-events-none"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                ></div>

                <div className="flex-1 p-6 space-y-6 overflow-y-auto no-scrollbar relative z-10">
                  {/* Initial AI Message */}
                  <div className="flex gap-4 max-w-2xl">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gatorBlue to-gatorDark flex-shrink-0 flex items-center justify-center text-white text-xs">
                      AI
                    </div>
                    <div className="space-y-2">
                      <div className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 p-4 rounded-2xl rounded-tl-none text-sm text-gray-700 dark:text-gray-300 shadow-sm">
                        Hello Alex. I&apos;ve reviewed your uploaded case study on{" "}
                        <strong>Tesla&apos;s Supply Chain Strategy</strong>. How would you like to proceed?
                      </div>
                    </div>
                  </div>

                  {/* User Message (Animated) */}
                  <div
                    className={`flex gap-4 max-w-2xl ml-auto justify-end transition-all duration-700 ${
                      userMsgVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                  >
                    <div className="space-y-2">
                      <div className="bg-gatorBlue text-white p-4 rounded-2xl rounded-tr-none text-sm shadow-md">
                        Generate a SWOT analysis focusing on the lithium shortage risks.
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-white/10 flex-shrink-0 flex items-center justify-center text-gray-500 text-xs">
                      ME
                    </div>
                  </div>

                  {/* Typing Indicator */}
                  {typingVisible && (
                    <div className="flex gap-4 max-w-2xl">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gatorBlue to-gatorDark flex-shrink-0 flex items-center justify-center text-white text-xs">
                        AI
                      </div>
                      <div className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 p-4 rounded-2xl rounded-tl-none flex items-center gap-1.5 shadow-sm h-[40px] w-[60px]">
                        <div className="typing-dot"></div>
                        <div className="typing-dot"></div>
                        <div className="typing-dot"></div>
                      </div>
                    </div>
                  )}

                  {/* AI Response with "UI Card" (Animated) */}
                  <div
                    className={`flex gap-4 max-w-3xl transition-all duration-700 ${
                      aiMsgVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gatorBlue to-gatorDark flex-shrink-0 flex items-center justify-center text-white text-xs">
                      AI
                    </div>
                    <div className="space-y-3 w-full">
                      <div className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 p-5 rounded-2xl rounded-tl-none text-sm text-gray-700 dark:text-gray-300 shadow-sm">
                        <p className="mb-4">Here is the strategic breakdown based on the Q3 Financials:</p>

                        {/* Mock Data Card */}
                        <div className="bg-white dark:bg-black/20 rounded-xl border border-gray-200 dark:border-white/5 p-4">
                          <div className="flex items-center justify-between mb-4">
                            <h4 className="font-semibold text-gatorOrange flex items-center gap-2">
                              <Activity className="w-4 h-4" /> Risk Assessment
                            </h4>
                            <span className="text-xs bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 px-2 py-0.5 rounded-full">
                              High Priority
                            </span>
                          </div>
                          <div className="grid grid-cols-2 gap-4 mb-4">
                            <div className="bg-gray-50 dark:bg-white/5 p-3 rounded-lg">
                              <div className="text-xs text-gray-500 mb-1">Supply Volatility</div>
                              <div className="text-lg font-bold text-gray-800 dark:text-white">High</div>
                              <div className="w-full h-1 bg-gray-200 rounded-full mt-2 overflow-hidden">
                                <div
                                  ref={progress1Ref}
                                  className="progress-fill h-full bg-red-500 rounded-full"
                                  style={{ width: "0%" }}
                                ></div>
                              </div>
                            </div>
                            <div className="bg-gray-50 dark:bg-white/5 p-3 rounded-lg">
                              <div className="text-xs text-gray-500 mb-1">Cost Impact</div>
                              <div className="text-lg font-bold text-gray-800 dark:text-white">+12%</div>
                              <div className="w-full h-1 bg-gray-200 rounded-full mt-2 overflow-hidden">
                                <div
                                  ref={progress2Ref}
                                  className="progress-fill h-full bg-yellow-500 rounded-full"
                                  style={{ width: "0%" }}
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400 italic border-l-2 border-gatorOrange pl-3">
                            &quot;The reliance on spot-market lithium creates a 15% margin vulnerability in the upcoming quarter...&quot;
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Gradient fade to blend with next section */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-paper dark:from-midnight to-transparent pointer-events-none transition-colors duration-500 z-20"></div>
        </div>
      </div>
    </section>
  );
}

