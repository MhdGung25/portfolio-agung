const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-[calc(100vh-4rem)] lg:min-h-screen flex items-center justify-center bg-white dark:bg-[#0f172a] pt-24 pb-8 lg:py-24 px-6 md:px-12 transition-colors duration-300 overflow-hidden"
    >
      {/* Kontainer Utama */}
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center justify-center my-auto">
        
        {/* Kolom Foto */}
        <div className="order-1 lg:order-2 lg:col-span-5 flex justify-center lg:justify-end items-center mb-2 lg:mb-0">
          <div className="relative w-full max-w-[190px] sm:max-w-[240px] md:max-w-[280px] lg:max-w-[340px]">
            {/* Dekorasi Bingkai Belakang */}
            <div className="absolute -inset-2 bg-indigo-500/20 dark:bg-indigo-500/10 rounded-[2.5rem] md:rounded-[3rem] blur-xl"></div>
            
            {/* Kontainer Foto Utama */}
            <div className="relative overflow-hidden rounded-[2.5rem] md:rounded-[3rem] border-4 border-white dark:border-slate-800 shadow-xl bg-slate-50 dark:bg-slate-900 aspect-square">
              <img 
                src="/img/profile-1.jpg" 
                alt="Muhammad Agung Pamungkas" 
                className="w-full h-full object-cover object-center grayscale-[10%] hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>

        {/* Kolom Teks */}
        <div className="order-2 lg:order-1 lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left target-content">
          <h2 className="text-sm md:text-lg font-bold text-slate-500 dark:text-indigo-400 tracking-wide mb-1">
            Hai, saya
          </h2>
          
          {/* Judul Nama Rapat & Padat */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 dark:text-white leading-[1.15] mb-3 tracking-tight">
            Muhammad <span className="text-[#6366f1]">Agung</span> Pamungkas
          </h1>
          
          {/* Deskripsi */}
          <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-400 max-w-sm md:max-w-lg leading-relaxed mb-6 text-center lg:text-left px-2 sm:px-0">
            Saya adalah <span className="font-bold text-slate-900 dark:text-white border-b-2 border-indigo-500">mahasiswa Informatika</span> angkatan 2023 di International Women University dan seorang full-stack developer.
          </p>

          {/* Tombol Aksi */}
          <div className="flex flex-col sm:flex-row gap-2.5 w-full sm:w-auto px-4 sm:px-0">
            <a 
              href="#projects" 
              className="px-6 md:px-8 py-3 bg-[#6366f1] text-white rounded-2xl font-black hover:bg-indigo-700 shadow-md hover:shadow-indigo-500/20 transition-all text-center text-xs tracking-wider uppercase whitespace-nowrap active:scale-95"
            >
              Lihat Portofolio
            </a>
            <a 
              href="/CV Muhammad Agung Pamungkas.pdf" 
              className="px-6 md:px-8 py-3 bg-transparent text-slate-900 dark:text-white border-2 border-slate-200 dark:border-slate-700 rounded-2xl font-black hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center justify-center gap-2 text-xs tracking-wider uppercase whitespace-nowrap active:scale-95"
            >
              <svg className="w-4 h-4 text-indigo-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
              </svg>
              Unduh CV
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;  