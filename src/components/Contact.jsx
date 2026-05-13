import React, { useState } from 'react';
import { FiMail, FiInstagram, FiSend } from 'react-icons/fi';
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
    <section id="contact" className="py-20 bg-[#f8fafc] dark:bg-[#0f172a] transition-colors duration-300">
      {/* Menggunakan max-w-6xl agar konsisten dengan seksi lainnya */}
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        
        <div className="mb-14 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">
            Get In <span className="text-[#6366f1]">Touch</span>
          </h2>
          <div className="w-16 h-1.5 bg-[#6366f1] rounded-full mb-6 mx-auto lg:mx-0"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto lg:mx-0 text-base md:text-lg leading-relaxed text-justify md:text-center lg:text-left">
            Punya ide menarik atau ingin berkolaborasi? Saya selalu terbuka untuk diskusi proyek baru atau sekadar menyapa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Bagian Kiri: Info & Media Sosial (4 bagian grid) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2 justify-center lg:justify-start">
                Mari Terhubung 🤝
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base text-justify lg:text-left">
                Pilih platform yang paling nyaman bagi Anda untuk memulai percakapan atau langsung kirim pesan melalui formulir.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a href="mailto:muhammadgung2003@gmail.com" className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl hover:shadow-lg transition-all group">
                <FiMail className="text-[#6366f1] group-hover:scale-110 transition-transform" size={20} />
                <span className="font-bold text-xs md:text-sm text-slate-700 dark:text-slate-200">Email</span>
              </a>
              <a href="https://wa.me/628199962344" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl hover:shadow-lg transition-all group">
                <FaWhatsapp className="text-[#6366f1] group-hover:scale-110 transition-transform" size={20} />
                <span className="font-bold text-xs md:text-sm text-slate-700 dark:text-slate-200">WhatsApp</span>
              </a>
              <a href="https://instagram.com/mhdgengp" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl hover:shadow-lg transition-all group">
                <FiInstagram className="text-[#6366f1] group-hover:scale-110 transition-transform" size={20} />
                <span className="font-bold text-xs md:text-sm text-slate-700 dark:text-slate-200">Instagram</span>
              </a>
              <a href="https://tiktok.com/@artgeng5" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl hover:shadow-lg transition-all group">
                <FaTiktok className="text-[#6366f1] group-hover:scale-110 transition-transform" size={20} />
                <span className="font-bold text-xs md:text-sm text-slate-700 dark:text-slate-200">TikTok</span>
              </a>
            </div>
          </div>

          {/* Bagian Kanan: Form (7 bagian grid agar seimbang) */}
          <div className="lg:col-span-7 bg-[#1e293b] p-6 md:p-8 rounded-[2rem] shadow-xl border border-slate-700/50">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">NAMA</label>
                  <input 
                    name="name"
                    type="text" 
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nama Anda" 
                    className="w-full px-5 py-3.5 bg-[#0f172a] border border-slate-700/50 rounded-xl focus:ring-2 focus:ring-[#6366f1] transition-all outline-none text-white text-sm placeholder:text-slate-600"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">E-MAIL</label>
                  <input 
                    name="email"
                    type="email" 
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="agung@example.com" 
                    className="w-full px-5 py-3.5 bg-[#0f172a] border border-slate-700/50 rounded-xl focus:ring-2 focus:ring-[#6366f1] transition-all outline-none text-white text-sm placeholder:text-slate-600"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">PESAN ANDA</label>
                <textarea 
                  name="message"
                  rows="4" 
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tulis pesan Anda di sini..." 
                  className="w-full px-5 py-3.5 bg-[#0f172a] border border-slate-700/50 rounded-xl focus:ring-2 focus:ring-[#6366f1] transition-all outline-none text-white text-sm placeholder:text-slate-600 resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full py-4 bg-[#6366f1] text-white rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/20 mt-2 text-sm"
              >
                <FiSend size={18} />
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