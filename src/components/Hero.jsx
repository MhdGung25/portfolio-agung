const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-[90vh] flex items-center bg-white dark:bg-[#0f172a] pt-24 pb-12 px-6 md:px-12 lg:px-24 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Kolom Teks: lg:grid-cols-7 (Mengambil 7 dari 12 bagian) */}
        <div className="order-2 lg:order-1 lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          <h2 className="text-lg md:text-2xl font-bold text-slate-800 dark:text-white mb-2">
            Hi, I'm
          </h2>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-6 tracking-tight">
            <span className="text-[#6366f1] block">Muhammad</span>
            <span className="text-[#6366f1] block">Agung</span>
            <span className="text-[#6366f1] block">Pamungkas</span>
          </h1>
          
          <p className="text-sm md:text-lg text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed mb-10">
            Saya adalah <span className="font-bold text-slate-900 dark:text-white border-b-2 border-indigo-500"> mahasiswa Informatika</span> angkatan 2023 di kampus International Women University dan seorang full-stack developer.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a 
              href="#projects" 
              className="px-8 py-3.5 bg-[#6366f1] text-white rounded-2xl font-bold hover:bg-indigo-700 shadow-lg shadow-indigo-500/20 transition-all text-center text-sm md:text-base"
            >
              Lihat Portofolio
            </a>
            <a 
              href="/cv-muhammad-agung.pdf" 
              className="px-8 py-3.5 bg-transparent text-slate-900 dark:text-white border-2 border-slate-200 dark:border-slate-700 rounded-2xl font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center justify-center gap-2 text-sm md:text-base"
            >
              <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
              </svg>
              Download CV
            </a>
          </div>
        </div>

        {/* Kolom Foto: lg:grid-cols-5 (Mengambil 5 dari 12 bagian) */}
        <div className="order-1 lg:order-2 lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[300px] md:max-w-sm lg:max-w-[380px]">
            {/* Dekorasi Bingkai Belakang (Shadow Soft) */}
            <div className="absolute -inset-2 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-[3rem] blur-xl"></div>
            
            {/* Kontainer Foto Utama sesuai referensi image_633e07.jpg */}
            <div className="relative overflow-hidden rounded-[3rem] lg:rounded-[4rem] border-2 border-slate-100 dark:border-slate-800 shadow-xl">
              <img 
                src="/img/profile.jpg" 
                alt="Muhammad Agung Pamungkas" 
                className="w-full h-auto object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;