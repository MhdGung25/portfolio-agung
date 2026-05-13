import React, { useState, useEffect } from "react";
import { FiHome, FiUser, FiFolder, FiMail, FiSun, FiMoon } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // 1. Inisialisasi tema saat pertama kali load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // 2. Fungsi toggle tema
  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <nav className="fixed w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md z-50 py-4 px-6 md:px-12 flex justify-between items-center shadow-sm transition-colors duration-300">
      {/* Brand Logo */}
      <div className="flex items-center">
        <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tighter">
          AGUNG<span className="text-indigo-600">.</span>
        </h1>
      </div>

      {/* Desktop Menu - Floating Pill Style */}
      <div className="hidden md:flex items-center bg-slate-100/50 dark:bg-slate-800/50 p-1.5 rounded-2xl border border-slate-200/60 dark:border-slate-700">
        <div className="flex space-x-1 items-center font-semibold text-sm tracking-wide">
          <a href="#home" className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white rounded-xl shadow-lg shadow-indigo-200 dark:shadow-none transition-all">
            <FiHome className="w-4 h-4" />
            <span>Home</span>
          </a>

          <a href="#about" className="flex items-center gap-2 px-5 py-2.5 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            <FiUser className="w-4 h-4" />
            <span>About</span>
          </a>

          <a href="#projects" className="flex items-center gap-2 px-5 py-2.5 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            <FiFolder className="w-4 h-4" />
            <span>Projects</span>
          </a>

          <a href="#contact" className="flex items-center gap-2 px-5 py-2.5 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            <FiMail className="w-4 h-4" />
            <span>Contact</span>
          </a>
        </div>
      </div>

      {/* Right Side - Theme Toggle & Mobile Menu Button */}
      <div className="flex items-center gap-3">
        {/* Theme Toggle Button */}
        <button 
          onClick={toggleTheme}
          className="p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm transition-all duration-300 group hover:border-indigo-400"
          aria-label="Toggle Theme"
        >
          {isDarkMode ? (
            <FiSun className="w-5 h-5 text-amber-400 group-hover:rotate-90 transition-transform duration-500" />
          ) : (
            <FiMoon className="w-5 h-5 text-indigo-600 group-hover:-rotate-12 transition-transform" />
          )}
        </button>

        {/* Hamburger Menu (Mobile Only) */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-3 bg-slate-100 dark:bg-slate-800 rounded-2xl text-slate-800 dark:text-white"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`absolute top-full left-0 w-full bg-white dark:bg-slate-900 shadow-xl py-8 flex flex-col items-center space-y-6 transition-all duration-300 md:hidden border-t border-slate-100 dark:border-slate-800 ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'}`}>
        <a href="#home" onClick={() => setIsOpen(false)} className="flex items-center gap-3 text-lg font-bold text-indigo-600"><FiHome /> Home</a>
        <a href="#about" onClick={() => setIsOpen(false)} className="flex items-center gap-3 text-lg font-medium text-slate-600 dark:text-slate-300"><FiUser /> About</a>
        <a href="#projects" onClick={() => setIsOpen(false)} className="flex items-center gap-3 text-lg font-medium text-slate-600 dark:text-slate-300"><FiFolder /> Projects</a>
        <a href="#contact" onClick={() => setIsOpen(false)} className="flex items-center gap-3 text-lg font-medium text-slate-600 dark:text-slate-300"><FiMail /> Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;