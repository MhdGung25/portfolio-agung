import { projects } from '../data/projects';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  return (
    <section 
      id="projects" 
      className="py-16 md:py-24 bg-[#f8fafc] dark:bg-[#0f172a] transition-colors duration-300 overflow-hidden flex items-center justify-center scroll-mt-20 lg:scroll-mt-0"
    >
      {/* Catatan Perbaikan:
        - 'scroll-mt-20' memberikan jarak offset 80px dari atas saat di-scroll otomatis di mobile agar judul tidak tenggelam di bawah navbar.
        - 'lg:scroll-mt-0' menonaktifkan jarak offset ini khusus di mode laptop agar posisinya tetap presisi seperti semula.
      */}
      
      {/* Container max-w-6xl konsisten berada di tengah sejajar dengan Hero/About */}
      <div className="max-w-6xl w-full mx-auto px-6 md:px-12">
        
        {/* Header Seksi - Rata Tengah di HP, Rata Kiri di Laptop */}
        <div className="mb-12 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">
            Keahlian <span className="text-[#6366f1]">Saya</span>
          </h2>
          <div className="w-16 h-1.5 bg-[#6366f1] rounded-full mb-6 mx-auto lg:mx-0"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl text-sm md:text-base leading-relaxed text-justify md:text-center lg:text-left">
            Berikut adalah beberapa proyek yang saya bangun untuk mengasah kemampuan saya di bidang IT, mencakup pengembangan web hingga aplikasi mobile.
          </p>
        </div>

        {/* Grid Kartu Proyek - Responsif untuk HP, Tablet, dan Laptop Sedang */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-center">
          {projects.map((project) => {
            return (
              <div 
                key={project.id} 
                className="group bg-white dark:bg-[#1e293b] rounded-[2rem] overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col transition-all duration-500 hover:shadow-xl hover:-translate-y-1.5 max-w-[360px] mx-auto md:max-w-none"
              >
                {/* Container Gambar dengan Rasio Konsisten */}
                <div className="relative aspect-video overflow-hidden bg-slate-50 dark:bg-slate-900">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                {/* Konten Teks di dalam Kartu */}
                <div className="p-5 md:p-6 flex flex-col flex-grow">
                  <h3 className="text-lg md:text-xl font-extrabold text-slate-900 dark:text-white mb-2 line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-5 text-xs md:text-sm leading-relaxed line-clamp-3 text-justify">
                    {project.description}
                  </p>
                  
                  {/* Badge Teknologi */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((t) => (
                      <span 
                        key={t} 
                        className="px-2 py-0.5 bg-slate-50 dark:bg-slate-800/60 text-slate-500 dark:text-slate-400 rounded-md text-[9px] md:text-[10px] font-bold uppercase tracking-wider border border-slate-100 dark:border-slate-700/60 whitespace-nowrap"
                      >
                        {t
                      }</span>
                    ))}
                  </div>

                  {/* Tombol Aksi */}
                  <div className="mt-auto flex items-center gap-3">
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1.5 py-3 bg-[#6366f1] text-white rounded-xl font-black text-[10px] tracking-wider hover:bg-indigo-700 transition-all shadow-md active:scale-95 whitespace-nowrap uppercase"
                      >
                        <FiExternalLink className="w-3.5 h-3.5" />
                        DEMO LANGSUNG
                      </a>
                    )}
                    
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1.5 py-3 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white rounded-xl font-black text-[10px] tracking-wider border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all active:scale-95 whitespace-nowrap uppercase"
                      >
                        <FiGithub className="w-3.5 h-3.5" />
                        KODE REPO
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;