import React, { useState } from 'react';
import { ArrowRight, Sparkles, Smile, Frown, Coffee, Zap, MessageCircleHeart, CheckCircle, ShieldCheck } from 'lucide-react';
import { ActiveSection, MoodOption } from '../types';

interface HeroSectionProps {
  onExplore: (section: ActiveSection) => void;
}

const moodOptions: MoodOption[] = [
  {
    id: 'calm',
    emoji: '🌿',
    label: 'Santai & Tenang',
    message: 'Bagus sekali! Pertahankan ketenanganmu. Pikiran yang rileks membuat belajar jauh lebih menyenangkan dan mudah diserap.',
    color: 'border-emerald-200 bg-emerald-50/70 text-emerald-800'
  },
  {
    id: 'stressed',
    emoji: '⚡',
    label: 'Cemas Banyak Tugas',
    message: 'Wajar banget merasa begini saat tugas menumpuk. Tarik napas dalam-dalam, jangan panik. Yuk kita lihat cara mencicil tugas sedikit demi sedikit di bawah!',
    color: 'border-amber-200 bg-amber-50/70 text-amber-800'
  },
  {
    id: 'tired',
    emoji: '🥱',
    label: 'Lelah / Mengantuk',
    message: 'Tubuh dan otakmu sedang mengirim sinyal butuh istirahat. Jangan paksakan belajar saat kepala pening; minum air putih dan istirahat sejenak ya.',
    color: 'border-blue-200 bg-blue-50/70 text-blue-800'
  },
  {
    id: 'excited',
    emoji: '🚀',
    label: 'Semangat Belajar',
    message: 'Luar biasa! Energi positifmu keren banget. Tetap jaga keseimbangan dengan tidak melupakan waktu jeda istirahat ya!',
    color: 'border-sky-200 bg-sky-50/70 text-sky-800'
  },
  {
    id: 'talk',
    emoji: '💬',
    label: 'Butuh Teman Cerita',
    message: 'Perasaanmu valid. Ingat bahwa kamu tidak sendirian. Bercerita kepada sahabat, orang tua, atau guru BK bisa membuat hatimu terasa jauh lebih ringan.',
    color: 'border-purple-200 bg-purple-50/70 text-purple-800'
  }
];

export const HeroSection: React.FC<HeroSectionProps> = ({ onExplore }) => {
  const [selectedMood, setSelectedMood] = useState<MoodOption | null>(moodOptions[1]);

  return (
    <section id="beranda" className="pt-8 pb-16 md:pt-12 md:pb-20 bg-gradient-to-b from-sky-50/70 via-indigo-50/30 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Hero Text & Educational Illustration */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Explanation & CTA */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Project Kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-700 uppercase tracking-wider">
              <span className="flex items-center gap-1.5 px-3 py-1 bg-sky-100/80 rounded-full text-sky-800">
                <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                Proyek Pameran Mini Kelas 8 SMP
              </span>
              <span className="text-slate-400">·</span>
              <span className="text-slate-600">Edukasi Kesehatan Mental</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Kenali Stres, <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-indigo-600 to-sky-700">
                Jaga Kesehatan Mentalmu
              </span>
            </h1>

            {/* Explanation & Invitation */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Sebagai pelajar SMP, wajar jika kamu pernah merasa tertekan karena tugas sekolah yang menumpuk,
              ujian yang berdekatan, tuntutan nilai bagus, atau jadwal kegiatan yang padat.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              <strong className="text-slate-800 font-semibold">MindSpace</strong> hadir untuk mengajakmu mengenal apa itu stres akademik,
              memahami pemicunya, serta menemukan cara sederhana dan ramah remaja untuk mengelolanya setiap hari tanpa rasa cemas berlebih.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onExplore('tentang-stres')}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                Mulai Jelajahi
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onExplore('kuis')}
                className="inline-flex items-center gap-2 px-5 py-3.5 bg-white hover:bg-sky-50 text-slate-700 hover:text-sky-700 font-medium text-sm rounded-xl border border-slate-200 shadow-2xs transition-all cursor-pointer"
              >
                Coba Kuis Singkat (5 Soal)
              </button>
            </div>

            {/* Trust points for school exhibition */}
            <div className="pt-4 border-t border-slate-200/80 grid grid-cols-3 gap-3 text-xs text-slate-600">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Bahasa Ramah SMP</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Tips Praktis Harian</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-sky-500 shrink-0" />
                <span>Edukasi Terpercaya</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Image Container */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-sky-100 shadow-xl bg-white p-2">
              <div className="relative aspect-16/10 rounded-xl overflow-hidden bg-sky-50">
                <img
                  src="/src/assets/images/hero_mindspace_students_1793514221959.jpg"
                  alt="Siswa SMP belajar bersama di lingkungan sekolah yang ceria dan menenangkan"
                  className="w-full h-full object-cover"
                  loading="eager"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallback visual if image load fails
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>

              {/* Caption banner */}
              <div className="p-3 bg-white text-center">
                <p className="text-xs text-slate-500 font-medium">
                  "Belajar itu penting, tetapi kesehatan pikiranmu tetap yang utama."
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Interactive Mood Check-In Box (Great for Exhibition Visitors!) */}
        <div className="mt-12 p-6 sm:p-8 bg-white rounded-2xl border border-sky-100/90 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-sky-700 uppercase tracking-wider mb-1">
                <span>Check-in Interaktif</span>
                <span className="text-slate-300">·</span>
                <span>Stand Pameran</span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-800">
                Bagaimana Perasaanmu Saat Menghadapi Sekolah Hari Ini?
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Klik salah satu perasaan di bawah untuk melihat pesan hangat dan solusinya:
              </p>
            </div>
          </div>

          {/* Mood Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
            {moodOptions.map((mood) => {
              const isSelected = selectedMood?.id === mood.id;
              return (
                <button
                  key={mood.id}
                  onClick={() => setSelectedMood(mood)}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col items-center sm:items-start text-center sm:text-left ${
                    isSelected
                      ? `${mood.color} ring-2 ring-sky-400 font-semibold shadow-xs`
                      : 'border-slate-200 hover:border-sky-300 hover:bg-sky-50/40 text-slate-700 bg-slate-50/50'
                  }`}
                >
                  <span className="text-2xl mb-1">{mood.emoji}</span>
                  <span className="text-xs font-semibold">{mood.label}</span>
                </button>
              );
            })}
          </div>

          {/* Response Message Box */}
          {selectedMood && (
            <div className="mt-4 p-4 rounded-xl bg-sky-50/80 border border-sky-200/80 flex items-start gap-3 transition-all animate-fadeIn">
              <span className="text-2xl shrink-0">{selectedMood.emoji}</span>
              <div>
                <p className="text-xs font-bold text-sky-900 mb-0.5">
                  Respon untuk Kamu yang Merasa "{selectedMood.label}":
                </p>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {selectedMood.message}
                </p>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
