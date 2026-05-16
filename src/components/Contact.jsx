import React, { useState } from 'react';
// FiGithub dipindahkan ke kelompok ikon 'fi' di bawah ini
import { FiMail, FiInstagram, FiSend, FiGithub } from 'react-icons/fi';
import { FaWhatsapp, FaTiktok } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const targetEmail = "muhammadgung2003@gmail.com";
    const subject = `Pesan Portofolio dari ${formData.name}`;
    const body = `Halo Agung,\n\nNama: ${formData.name}\nEmail: ${formData.email}\n\nPesan:\n${formData.message}`;
    window.location.href = `mailto:${targetEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section 
      id="contact" 
      className="py-16 md:py-24 bg-[#f8fafc] dark:bg-[#0f172a] transition-colors duration-300 overflow-hidden flex items-center justify-center scroll-mt-20 lg:scroll-mt-0"
    >
      {/* Catatan Perbaikan:
        - 'scroll-mt-20' memberikan ruang pembatas virtual setinggi 80px di atas seksi saat di-scroll otomatis di mobile (HP).
        - 'lg:scroll-mt-0' menonaktifkan ruang pembatas tersebut di laptop agar layout tetap presisi seperti semula.
      */}
      <div className="max-w-6xl w-full mx-auto px-6 md:px-12">
        
        {/* Header Seksi - Diperbarui ke 'Hubungi Kami' */}
        <div className="mb-12 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">
            Hubungi <span className="text-[#6366f1]">Kami</span>
          </h2>
          <div className="w-16 h-1.5 bg-[#6366f1] rounded-full mb-6 mx-auto lg:mx-0"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl text-sm md:text-base leading-relaxed text-justify md:text-center lg:text-left">
            Punya ide menarik atau ingin berkolaborasi? Saya selalu terbuka untuk diskusi proyek baru atau sekadar menyapa.
          </p>
        </div>

        {/* Grid System */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center justify-center">
          
          {/* Bagian Kiri: Info & Media Sosial */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-center lg:text-left">
              <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2 justify-center lg:justify-start">
                Mari Terhubung 🤝
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base text-justify lg:text-left">
                Pilih platform yang paling nyaman bagi Anda untuk memulai percakapan atau langsung kirim pesan melalui formulir resmi.
              </p>
            </div>

            {/* Grid Tombol Sosmed */}
            <div className="grid grid-cols-2 gap-3">
              <a href="mailto:muhammadgung2003@gmail.com" className="flex items-center justify-center sm:justify-start gap-3 p-3.5 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/80 rounded-2xl hover:shadow-md transition-all group">
                <FiMail className="text-[#6366f1] group-hover:scale-110 transition-transform flex-shrink-0" size={18} />
                <span className="font-bold text-xs text-slate-700 dark:text-slate-200 truncate">Email</span>
              </a>
              <a href="https://wa.me/628199962344" target="_blank" rel="noreferrer" className="flex items-center justify-center sm:justify-start gap-3 p-3.5 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/80 rounded-2xl hover:shadow-md transition-all group">
                <FaWhatsapp className="text-[#6366f1] group-hover:scale-110 transition-transform flex-shrink-0" size={18} />
                <span className="font-bold text-xs text-slate-700 dark:text-slate-200 truncate">WhatsApp</span>
              </a>
              <a href="https://instagram.com/mhdgengp" target="_blank" rel="noreferrer" className="flex items-center justify-center sm:justify-start gap-3 p-3.5 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/80 rounded-2xl hover:shadow-md transition-all group">
                <FiInstagram className="text-[#6366f1] group-hover:scale-110 transition-transform flex-shrink-0" size={18} />
                <span className="font-bold text-xs text-slate-700 dark:text-slate-200 truncate">Instagram</span>
              </a>
              <a href="https://tiktok.com/@artgeng5" target="_blank" rel="noreferrer" className="flex items-center justify-center sm:justify-start gap-3 p-3.5 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/80 rounded-2xl hover:shadow-md transition-all group">
                <FaTiktok className="text-[#6366f1] group-hover:scale-110 transition-transform flex-shrink-0" size={18} />
                <span className="font-bold text-xs text-slate-700 dark:text-slate-200 truncate">TikTok</span>
              </a>
              <a href="https://github.com/MhdGung25" target="_blank" rel="noreferrer" className="flex items-center justify-center sm:justify-start gap-3 p-3.5 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/80 rounded-2xl hover:shadow-md transition-all group">
                <FiGithub className="text-[#6366f1] group-hover:scale-110 transition-transform flex-shrink-0" size={18} />
                <span className="font-bold text-xs text-slate-700 dark:text-slate-200 truncate">GitHub</span>
              </a>
            </div>
          </div>

          {/* Bagian Kanan: Form */}
          <div className="lg:col-span-7 bg-white dark:bg-[#1e293b] p-6 md:p-8 rounded-[2rem] shadow-sm dark:shadow-xl border border-slate-100 dark:border-slate-800 w-full">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[9px] font-black text-slate-400 dark:text-slate-400 uppercase tracking-widest ml-1">Nama</label>
                  <input 
                    name="name"
                    type="text" 
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nama Anda" 
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-slate-700/50 rounded-xl focus:ring-2 focus:ring-[#6366f1] transition-all outline-none text-slate-900 dark:text-white text-xs placeholder:text-slate-400 dark:placeholder:text-slate-600"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[9px] font-black text-slate-400 dark:text-slate-400 uppercase tracking-widest ml-1">E-mail</label>
                  <input 
                    name="email"
                    type="email" 
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="agung@example.com" 
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-slate-700/50 rounded-xl focus:ring-2 focus:ring-[#6366f1] transition-all outline-none text-slate-900 dark:text-white text-xs placeholder:text-slate-400 dark:placeholder:text-slate-600"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[9px] font-black text-slate-400 dark:text-slate-400 uppercase tracking-widest ml-1">Pesan Anda</label>
                <textarea 
                  name="message"
                  rows="4" 
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tulis pesan Anda di sini..." 
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-slate-700/50 rounded-xl focus:ring-2 focus:ring-[#6366f1] transition-all outline-none text-slate-900 dark:text-white text-xs placeholder:text-slate-400 dark:placeholder:text-slate-600 resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full py-3.5 bg-[#6366f1] text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-indigo-700 transition-all shadow-md hover:shadow-indigo-500/20 mt-2 text-xs tracking-wider uppercase font-black"
              >
                <FiSend size={14} />
                KIRIM SEKARANG
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;