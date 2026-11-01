import React, { useState } from 'react';
import { Brain, AlertCircle, Sparkles, BookOpen, Clock, Activity, Target, ShieldAlert, HeartCrack, BatteryLow } from 'lucide-react';

interface ReasonItem {
  title: string;
  desc: string;
  example: string;
  icon: string;
}

interface ImpactItem {
  title: string;
  desc: string;
  sign: string;
  icon: string;
}

export const AboutStressSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'semua' | 'penyebab' | 'dampak'>('semua');

  const causes: ReasonItem[] = [
    {
      title: "Tugas Sekolah yang Menumpuk",
      desc: "Ketika banyak PR dari berbagai mata pelajaran diberikan secara bersamaan atau sering ditunda hingga mendekati batas waktu.",
      example: "Contoh: PR Matematika, tugas rangkuman IPA, dan hafalan IPS harus dikumpulkan di hari yang sama.",
      icon: "📚"
    },
    {
      title: "Ujian & Tekanan Nilai Bagus",
      desc: "Rasa cemas menghadapi ulangan harian atau ujian semester karena takut nilainya turun atau takut mengecewakan orang tua.",
      example: "Contoh: Pikiran tegang sebelum ujian karena takut tidak mencapai KKM (Kriteria Ketuntasan Minimal).",
      icon: "📝"
    },
    {
      title: "Kesulitan Memahami Pelajaran",
      desc: "Merasa bingung saat materi pelajaran terasa terlalu cepat atau sulit dipahami saat guru menerangkan di kelas.",
      example: "Contoh: Malu bertanya saat belum paham rumus aljabar atau konsep sains tertentu.",
      icon: "💡"
    },
    {
      title: "Kurangnya Waktu Istirahat",
      desc: "Tubuh dan otak tidak sempat memulihkan tenaga karena sering begadang untuk belajar atau bermain ponsel hingga larut.",
      example: "Contoh: Baru tidur jam 12 malam padahal jam 6 pagi sudah harus berangkat ke sekolah.",
      icon: "🌙"
    },
    {
      title: "Terlalu Banyak Kegiatan",
      desc: "Jadwal harian yang terlalu padat antara sekolah, les tambahan, bimbel, dan ekstrakurikuler tanpa ada hari santai.",
      example: "Contoh: Pulang sekolah langsung les hingga sore, lalu malamnya masih harus mengerjakan PR sampai larut.",
      icon: "⏳"
    }
  ];

  const impacts: ImpactItem[] = [
    {
      title: "Sulit Berkonsentrasi",
      desc: "Pikiran terasa penuh sehingga sulit fokus mendengarkan penjelasan guru atau lambat saat membaca buku pelajaran.",
      sign: "Tanda: Mata menatap buku, tapi pikiran melayang dan materi tidak ada yang masuk.",
      icon: "🎯"
    },
    {
      title: "Merasa Khawatir atau Tertekan",
      desc: "Sering muncul rasa cemas berlebihan dan gelisah memikirkan sekolah, bahkan saat hari libur atau akhir pekan.",
      sign: "Tanda: Jantung berdebar saat guru mengumumkan ulangan mendadak.",
      icon: "💭"
    },
    {
      title: "Mudah Lelah & Kurang Energi",
      desc: "Tubuh terasa lemas, lesu, sering pusing, atau mengantuk terus sepanjang hari meski tidak banyak aktivitas fisik.",
      sign: "Tanda: Merasa kehabisan tenaga sejak pagi hari di sekolah.",
      icon: "🔋"
    },
    {
      title: "Kehilangan Semangat Belajar",
      desc: "Mata pelajaran yang tadinya disukai menjadi terasa membosankan dan malas untuk membuka buku catatan.",
      sign: "Tanda: Menyerah sebelum mencoba mengerjakan soal latihan.",
      icon: "📉"
    },
    {
      title: "Kesulitan Mengatur Waktu",
      desc: "Bingung harus mulai dari tugas yang mana, akhirnya waktu terbuang untuk melamun atau menunda-nunda pekerjaan.",
      sign: "Tanda: Sering terjebak sistem kebut semalam (SKS) yang bikin makin panik.",
      icon: "⏰"
    }
  ];

  return (
    <section id="tentang-stres" className="py-16 md:py-24 bg-white border-t border-sky-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-700 uppercase tracking-wider mb-2">
            <span>Bagian 01</span>
            <span className="text-slate-300">·</span>
            <span>Mengenal Stres Akademik</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Apa Sebenarnya Stres Akademik Itu?
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Sebelum bisa mengatasinya, mari kita pahami bersama bagaimana stres belajar bisa terjadi
            pada siswa SMP dan apa saja tandanya pada tubuh serta pikiran kita.
          </p>
        </div>

        {/* 1. Pengertian Stres Akademik (Feature Card with Image) */}
        <div className="mb-14 bg-gradient-to-br from-sky-50/80 via-indigo-50/40 to-white rounded-2xl border border-sky-100 p-6 sm:p-8 lg:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-sky-800">
                <BookOpen className="w-4 h-4 text-sky-600" />
                <span>Pengertian Sederhana untuk Pelajar</span>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                Stres Akademik adalah Reaksi Ketika Tuntutan Sekolah Melebihi Waktu dan Kemampuanmu
              </h3>
              
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Secara sederhana, <strong className="text-slate-800">stres akademik</strong> adalah kondisi saat pikiran dan tubuhmu
                merasa tertekan karena beban belajar—seperti PR yang menumpuk, ujian berturut-turut, atau ekspektasi nilai—terasa
                terlalu berat untuk diselesaikan dalam waktu yang kamu punya.
              </p>

              <div className="p-4 bg-white/90 rounded-xl border border-sky-200/70 shadow-2xs space-y-2">
                <div className="flex items-start gap-2.5">
                  <AlertCircle className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-slate-800">
                      Penting Diingat oleh Setiap Siswa:
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed">
                      Merasa stres bukan berarti kamu pemalas atau tidak pintar! Stres adalah sinyal alami tubuh bahwa
                      kamu sedang lelah dan butuh mengatur ulang caramu belajar serta meluangkan waktu istirahat.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Illustration */}
            <div className="lg:col-span-5">
              <div className="rounded-xl overflow-hidden border border-sky-200/80 shadow-md bg-white p-2">
                <div className="aspect-4/3 rounded-lg overflow-hidden bg-sky-100">
                  <img
                    src="/src/assets/images/stress_academic_study_1793514221956.jpg"
                    alt="Siswa SMP belajar dengan teratur dan seimbang"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="pt-2 text-center">
                  <p className="text-[11px] text-slate-500 font-medium">
                    Belajar dengan tenang dan terencana adalah kunci mencegah stres menumpuk.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Tab Filters for Interactive Learning */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveTab('semua')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
              activeTab === 'semua'
                ? 'bg-sky-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Tampilkan Semua
          </button>
          <button
            onClick={() => setActiveTab('penyebab')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
              activeTab === 'penyebab'
                ? 'bg-sky-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            5 Penyebab Utama
          </button>
          <button
            onClick={() => setActiveTab('dampak')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
              activeTab === 'dampak'
                ? 'bg-sky-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            5 Dampak pada Siswa
          </button>
        </div>

        {/* 2 & 3. Penyebab & Dampak Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Causes Column */}
          {(activeTab === 'semua' || activeTab === 'penyebab') && (
            <div className={`space-y-4 ${activeTab === 'penyebab' ? 'md:col-span-2' : ''}`}>
              <div className="flex items-center gap-2 pb-2 border-b border-sky-100">
                <span className="p-1.5 bg-amber-100 text-amber-800 rounded-lg text-sm">⚠️</span>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    5 Penyebab Stres Akademik
                  </h3>
                  <p className="text-xs text-slate-500">
                    Hal-hal yang paling sering membuat siswa SMP merasa terbebani
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {causes.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50/20 transition-all bg-white"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-2xl shrink-0 p-1 bg-slate-50 rounded-lg">{item.icon}</span>
                      <div className="space-y-1">
                        <h4 className="text-sm font-bold text-slate-900">
                          {idx + 1}. {item.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {item.desc}
                        </p>
                        <p className="text-xs text-amber-800/90 font-medium bg-amber-50/60 p-2 rounded-md mt-1.5">
                          {item.example}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Impacts Column */}
          {(activeTab === 'semua' || activeTab === 'dampak') && (
            <div className={`space-y-4 ${activeTab === 'dampak' ? 'md:col-span-2' : ''}`}>
              <div className="flex items-center gap-2 pb-2 border-b border-sky-100">
                <span className="p-1.5 bg-rose-100 text-rose-800 rounded-lg text-sm">🩺</span>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    5 Dampak Stres Akademik
                  </h3>
                  <p className="text-xs text-slate-500">
                    Bagaimana stres mempengaruhi tubuh, emosi, dan cara belajar siswa
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {impacts.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-slate-200 hover:border-rose-300 hover:bg-rose-50/20 transition-all bg-white"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-2xl shrink-0 p-1 bg-slate-50 rounded-lg">{item.icon}</span>
                      <div className="space-y-1">
                        <h4 className="text-sm font-bold text-slate-900">
                          {idx + 1}. {item.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {item.desc}
                        </p>
                        <p className="text-xs text-rose-800/90 font-medium bg-rose-50/60 p-2 rounded-md mt-1.5">
                          {item.sign}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
