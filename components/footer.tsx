export function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-black text-gray-500 py-12 border-t border-gray-200 dark:border-white/5 text-xs transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-5 h-5 bg-gradient-to-br from-gatorBlue to-gatorDark rounded flex items-center justify-center text-white text-[10px] font-bold">
              G
            </div>
            <span className="text-base font-bold text-slate-900 dark:text-gray-300 transition-colors">
              GatorAI
            </span>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition">
              Privacy
            </a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition">
              Terms
            </a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition">
              Contact
            </a>
          </div>
        </div>
        <div className="mt-8 text-center md:text-left text-gray-400 dark:text-gray-600 transition-colors">
          &copy; 2024 GatorAI. Not officially affiliated with the University of Florida.
        </div>
      </div>
    </footer>
  );
}

