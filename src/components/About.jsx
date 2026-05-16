import React from 'react';

const About = () => {
  const skills = [
    {
      category: "Frontend",
      items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Vite"]
    },
    {
      category: "Backend",
      items: ["PHP", "Laravel", "MySQL", "Firebase", "REST API"]
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
    <section 
      id="about" 
      lang="id"
      className="notranslate min-h-0 h-auto py-16 md:py-24 bg-white dark:bg-[#0f172a] transition-colors duration-300 flex items-center justify-center scroll-mt-20 lg:scroll-mt-0"
    >
      {/* Catatan Perbaikan:
        - 'scroll-mt-20' memberikan jarak 80px dari atas saat di-scroll pada mode HP agar judul tidak tertutup navbar.
        - 'lg:scroll-mt-0' mengembalikan jarak ke semula khusus untuk mode laptop agar tampilan tetap aman seperti sebelumnya.
      */}
      
      {/* Container Utama - Sejajar Sempurna dengan Hero */}
      <div className="max-w-6xl w-full mx-auto px-6 md:px-12">
        
        {/* Judul Seksi - Rata Tengah di HP, Rata Kiri di Laptop */}
        <div className="mb-10 md:mb-14 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">
            Technical <span className="text-[#6366f1]">Mastery</span>
          </h2>
          <div className="w-16 h-1.5 bg-[#6366f1] rounded-full mx-auto lg:mx-0"></div>
        </div>

        {/* Grid System 5:7 Penyelarasan Fleksibel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start justify-center">
          
          {/* Bagian Kiri: Deskripsi Teks */}
          <div className="lg:col-span-5 flex flex-col justify-center text-center lg:text-left">
            <h3 className="text-lg md:text-xl font-bold text-slate-800 dark:text-slate-100 mb-4">
              Siapakah saya?
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-400 mb-4 leading-relaxed text-justify md:text-center lg:text-left">
              Saya adalah seorang <span className="font-bold text-slate-900 dark:text-white">Mahasiswa Informatika</span> angkatan 2023 di International Women University. Saya sangat antusias dengan pengembangan web dan aplikasi mobile.
            </p>
            <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-400 mb-6 leading-relaxed text-justify md:text-center lg:text-left">
              Keahlian saya saat ini fokus pada <span className="text-[#6366f1] font-semibold italic">React, Vite, Tailwind CSS, Flutter, dan Laravel</span>. Saya aktif membangun berbagai proyek pribadi untuk mengasah kemampuan saya dan selalu mencari tantangan baru untuk berkembang.
            </p>
            
            {/* Quote Pembatas */}
            <div className="flex items-center gap-3 justify-center lg:justify-start">
               <div className="w-8 h-[2px] bg-[#6366f1]"></div>
               <p className="text-[11px] md:text-xs font-medium italic text-slate-500 dark:text-slate-400">
                 Enjoy the process, master the craft.
               </p>
            </div>
          </div>

          {/* Bagian Kanan: Grid Cards Skills */}
          <div className="lg:col-span-7 w-full mt-4 lg:mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skillGroup, index) => (
                <div 
                  key={index} 
                  className="p-5 bg-slate-50 dark:bg-slate-800/40 rounded-[2rem] border border-slate-100 dark:border-slate-800/60 hover:border-[#6366f1]/30 transition-all duration-300 shadow-sm"
                >
                  <h4 className="text-[#6366f1] font-bold text-[10px] md:text-[11px] mb-3 uppercase tracking-[0.2em]">
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {skillGroup.items.map((item, idx) => (
                      <span 
                        key={idx} 
                        className="px-2.5 py-1 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 rounded-lg text-[10px] md:text-xs font-bold shadow-sm border border-slate-100 dark:border-slate-800 whitespace-nowrap"
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