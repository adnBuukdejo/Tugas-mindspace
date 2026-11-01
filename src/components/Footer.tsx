import React from 'react';
import { HeartHandshake, ShieldAlert, Brain, Sparkles, PhoneCall, Users } from 'lucide-react';
import { ActiveSection } from '../types';

interface FooterProps {
  onNavigate: (section: ActiveSection) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top: Brand & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-sky-500 flex items-center justify-center text-white">
                <Brain className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Mind<span className="text-sky-400">Space</span>
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
              Website edukasi kesehatan mental untuk pelajar SMP. Dibuat sebagai karya proyek kelompok siswa kelas 8 SMP
              untuk kegiatan pameran mini sekolah (Mini Exhibition). Bertujuan membantu sesama teman mengenali stres belajar dan menemukan cara sehat mengelolanya.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-sky-400 font-medium">
              <Users className="w-4 h-4 text-sky-400 shrink-0" />
              <span>Karya Kelompok Siswa Kelas 8 SMP · Tahun Ajaran 2026/2027</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => onNavigate('beranda')}
                  className="hover:text-sky-400 transition-colors cursor-pointer"
                >
                  Beranda
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('tentang-stres')}
                  className="hover:text-sky-400 transition-colors cursor-pointer"
                >
                  Mengenal Stres Akademik
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('cara-mengelola')}
                  className="hover:text-sky-400 transition-colors cursor-pointer"
                >
                  Cara Mengelola & Langkah Kecil
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('kuis')}
                  className="hover:text-sky-400 transition-colors cursor-pointer"
                >
                  Kuis Interaktif (5 Soal)
                </button>
              </li>
            </ul>
          </div>

          {/* School Support & Emergency Contact */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <PhoneCall className="w-3.5 h-3.5 text-sky-400" />
              <span>Dukungan Terpercaya</span>
            </h4>
            <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 space-y-2 text-xs text-slate-300">
              <p>
                <strong className="text-white">Bimbingan Konseling (BK):</strong> Ruang BK Sekolah selalu terbuka untuk mendengar ceritamu tanpa menghakimi.
              </p>
              <p>
                <strong className="text-white">Orang Tua / Wali:</strong> Jangan ragu berbicara saat beban belajar terasa berat.
              </p>
              <p className="text-[11px] text-slate-400 border-t border-slate-700/80 pt-1.5">
                Layanan Telepon Konseling Kemenkes RI: <span className="text-sky-300 font-mono font-semibold">119 (ext. 8)</span>
              </p>
            </div>
          </div>

        </div>

        {/* Disclaimer Box (Requirement 6) */}
        <div className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700/80 text-xs text-slate-400 leading-relaxed space-y-2">
          <div className="flex items-center gap-2 text-amber-400 font-semibold">
            <ShieldAlert className="w-4 h-4 shrink-0" />
            <span>Catatan Edukasi & Batasan Layanan (Disclaimer)</span>
          </div>
          <p>
            MindSpace merupakan website edukasi ramah pelajar yang dirancang untuk pembelajaran dan berbagi tips praktis.
            Seluruh konten dan kuis di website ini <strong>bukan pengganti konsultasi, diagnosis, maupun terapi medis atau psikologis profesional</strong>.
            Stres adalah respon alami tubuh dan tidak selalu berarti gangguan mental. Apabila kamu merasa sangat terbebani, cemas berkepanjangan,
            atau mengalami kesulitan yang terus mengganggu kegiatan harianmu di sekolah, sangat disarankan untuk berbicara langsung dengan orang tua, Guru BK di sekolah, atau tenaga kesehatan profesional.
          </p>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 MindSpace · Proyek Mini Exhibition Kelas 8 SMP.</p>
          <p className="flex items-center gap-1">
            <span>Dibuat dengan penuh perhatian untuk teman-teman pelajar</span>
            <span className="text-rose-500">♥</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
