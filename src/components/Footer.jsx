const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-[#0f172a] border-t border-slate-100 dark:border-slate-800/50 py-10 transition-colors duration-300">
      {/* Container max-w-6xl agar selaras dengan seksi lainnya dan berada di tengah */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        
        {/* Branding Sederhana - Rata Kiri di Laptop */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-xl font-black text-slate-900 dark:text-white tracking-tighter">
            AGUNG<span className="text-[#6366f1]">.</span>
          </h2>
          <p className="text-[10px] md:text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium uppercase tracking-widest">
            Informatics Student & Developer
          </p>
        </div>

        {/* Hak Cipta & Lokasi - Rata Kanan di Laptop */}
        <div className="flex flex-col items-center md:items-end gap-2">
          <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 font-semibold">
            &copy; {currentYear} Muhammad Agung Pamungkas. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 text-[10px] md:text-xs text-slate-400 dark:text-slate-500">
            <span>Made with</span>
            <span className="text-red-500 animate-pulse">❤️</span>
            <span className="font-medium">Bandung, Indonesia</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;