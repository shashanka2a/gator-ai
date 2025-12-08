"use client";

import { useState, useEffect } from "react";
import { Sun, Moon, Menu } from "lucide-react";
import { useTheme } from "./theme-provider";

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 bg-white/80 dark:bg-midnight/80 backdrop-blur-xl border-b border-gray-200 dark:border-white/5 transition-all duration-500 ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gatorBlue to-gatorDark border border-white/10 flex items-center justify-center text-white font-serif font-bold italic shadow-lg">
              G
            </div>
            <span className="text-xl font-medium text-slate-900 dark:text-white tracking-tight transition-colors">
              Gator<span className="text-gray-400 dark:text-gray-500">AI</span>
            </span>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex space-x-8 items-center">
              <a
                href="#features"
                className="text-sm font-medium text-gray-500 hover:text-gatorBlue dark:text-gray-400 dark:hover:text-white transition-colors duration-300"
              >
                Capabilities
              </a>
              <a
                href="#faculty"
                className="text-sm font-medium text-gray-500 hover:text-gatorBlue dark:text-gray-400 dark:hover:text-white transition-colors duration-300"
              >
                Integration
              </a>
              <a
                href="#mission"
                className="text-sm font-medium text-gray-500 hover:text-gatorBlue dark:text-gray-400 dark:hover:text-white transition-colors duration-300"
              >
                Mission
              </a>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-white/10 transition-colors focus:outline-none"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>

              <a
                href="#contact"
                className="hidden md:block text-sm bg-slate-900 text-white dark:bg-white dark:text-midnight px-6 py-2 rounded-full font-medium hover:opacity-90 transition shadow-lg"
              >
                Request Access
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-slate-900 dark:text-white"
                aria-label="Toggle menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Menu Panel */}
      <div
        className={`md:hidden bg-white dark:bg-midnight border-t border-gray-100 dark:border-white/10 p-4 transition-colors duration-500 ${
          mobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col space-y-4">
          <a
            href="#features"
            className="text-slate-900 dark:text-gray-300 font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Capabilities
          </a>
          <a
            href="#faculty"
            className="text-slate-900 dark:text-gray-300 font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Integration
          </a>
          <a
            href="#mission"
            className="text-slate-900 dark:text-gray-300 font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Mission
          </a>
          <a
            href="#contact"
            className="text-gatorOrange font-bold"
            onClick={() => setMobileMenuOpen(false)}
          >
            Request Access
          </a>
        </div>
      </div>
    </nav>
  );
}



