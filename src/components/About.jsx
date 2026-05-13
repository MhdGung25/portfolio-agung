const About = () => {
  const skills = [
    {
      category: "Frontend",
      items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Vite"]
    },
    {
      category: "Backend",
      items: ["PHP", "Laravel", "MySQL","Firebase", "REST API"]
    },
    {
      category: "Mobile",
      items: ["Flutter", "Dart"]
    },
    {
      category: "Tools",
      items: ["Git", "GitHub", "Postman", "VS Code"]
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-[#0f172a] transition-colors duration-300">
      {/* Container max-w-6xl agar tampilan di laptop lebih ramping dan berada di tengah */}
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        
        {/* Judul Seksi - Rata Kiri dengan margin bawah yang pas */}
        <div className="mb-14">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">
            Technical <span className="text-[#6366f1]">Mastery</span>
          </h2>
          <div className="w-16 h-1.5 bg-[#6366f1] rounded-full"></div>
        </div>

        {/* Grid System - Membagi proporsi 5:7 untuk keseimbangan visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Bagian Kiri: Deskripsi Teks */}
          <div className="lg:col-span-5">
            <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-100 mb-5">
              Siapakah saya?
            </h3>
            <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 mb-5 leading-relaxed text-justify">
              Saya adalah seorang <span className="font-bold text-slate-900 dark:text-white">Mahasiswa Informatika</span> angkatan 2023 di International Women University. Saya sangat antusias dengan pengembangan web dan aplikasi mobile.
            </p>
            <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed text-justify">
              Keahlian saya saat ini fokus pada <span className="text-[#6366f1] font-semibold italic">React, Vite, Tailwind CSS, Flutter, dan Laravel</span>. Saya aktif membangun berbagai proyek pribadi untuk mengasah kemampuan saya dan selalu mencari tantangan baru untuk berkembang.
            </p>
            <div className="flex items-center gap-4">
               <div className="w-10 h-[2px] bg-[#6366f1]"></div>
               <p className="text-sm md:text-base font-medium italic text-slate-500 dark:text-slate-400">
                 Enjoy the process, master the craft.
               </p>
            </div>
          </div>

          {/* Bagian Kanan: Grid Skills */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
              {skills.map((skillGroup, index) => (
                <div 
                  key={index} 
                  className="p-5 md:p-6 bg-slate-50 dark:bg-slate-800/40 rounded-[2rem] border border-slate-100 dark:border-slate-700/50 hover:border-[#6366f1]/30 transition-all duration-300"
                >
                  <h4 className="text-[#6366f1] font-bold text-xs mb-4 uppercase tracking-[0.2em]">
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((item, idx) => (
                      <span 
                        key={idx} 
                        className="px-3 py-1.5 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 rounded-lg text-[11px] md:text-xs font-bold shadow-sm border border-slate-100 dark:border-slate-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;