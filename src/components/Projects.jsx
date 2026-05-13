import { projects } from '../data/projects';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-24 bg-[#f8fafc] dark:bg-[#0f172a] transition-colors duration-300">
      {/* Container max-w-6xl agar tampilan di laptop lebih ramping dan sejajar dengan Hero/About */}
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        
        {/* Header Seksi - Dibuat terpusat atau rata kiri sesuai estetika About */}
        <div className="mb-14">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">
            Keahlian <span className="text-[#6366f1]">Saya</span>
          </h2>
          <div className="w-16 h-1.5 bg-[#6366f1] rounded-full mb-6"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl text-base md:text-lg leading-relaxed text-justify md:text-left">
            Berikut adalah beberapa proyek yang saya bangun untuk mengasah kemampuan saya di bidang IT, mencakup pengembangan web hingga aplikasi mobile.
          </p>
        </div>

        {/* Grid Kartu Proyek 
            - lg:grid-cols-3: 3 Kolom sejajar di laptop
            - gap-6: Jarak antar kartu yang proporsional
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {projects.map((project) => {
            return (
              <div 
                key={project.id} 
                className="group bg-white dark:bg-[#1e293b] rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
              >
                {/* Container Gambar - Aspect Video (16:9) agar konsisten */}
                <div className="relative aspect-video overflow-hidden bg-slate-50 dark:bg-slate-900">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                {/* Konten Teks */}
                <div className="p-6 md:p-7 flex flex-col flex-grow">
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-2 line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed line-clamp-3 text-justify">
                    {project.description}
                  </p>
                  
                  {/* Badge Teknologi */}
                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {project.tech.map((t) => (
                      <span 
                        key={t} 
                        className="px-2.5 py-1 bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 rounded-lg text-[10px] font-bold uppercase tracking-wider border border-slate-100 dark:border-slate-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Tombol Aksi */}
                  <div className="mt-auto flex items-center gap-2">
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-[1.2] flex items-center justify-center gap-2 py-3 bg-[#6366f1] text-white rounded-xl font-bold text-[10px] hover:bg-indigo-700 transition-all shadow-md active:scale-95 whitespace-nowrap"
                      >
                        <FiExternalLink className="w-3.5 h-3.5" />
                        DEMO
                      </a>
                    )}
                    
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-3 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white rounded-xl font-bold text-[10px] border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all active:scale-95 whitespace-nowrap"
                      >
                        <FiGithub className="w-3.5 h-3.5" />
                        KODE
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