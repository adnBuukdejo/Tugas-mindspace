import React, { useState, useEffect } from 'react';
import { Calendar, CheckSquare, Coffee, Moon, Heart, MessageSquare, Play, Pause, RotateCcw, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface TipItem {
  id: number;
  title: string;
  desc: string;
  action: string;
  icon: React.ReactNode;
  tag: string;
}

interface PresetTask {
  name: string;
  steps: string[];
  durationMinutes: number;
}

const presetTasks: PresetTask[] = [
  {
    name: "PR Matematika (10 Soal)",
    steps: [
      "Buka buku catatan & pahami 1 contoh rumus yang serupa (5 menit)",
      "Kerjakan 5 soal pertama secara bertahap tanpa terburu-buru (15 menit)",
      "Periksa kembali jawaban dan rapikan buku tugasmu (5 menit)"
    ],
    durationMinutes: 25
  },
  {
    name: "Tugas Kliping IPA (Bab Ekosistem)",
    steps: [
      "Kumpulkan 3 gambar ekosistem dari majalah atau cetak dari internet (10 menit)",
      "Gunting dan tempel rapi di kertas HVS / buku gambar (10 menit)",
      "Tuliskan 2 kalimat penjelasan singkat di bawah tiap gambar (10 menit)"
    ],
    durationMinutes: 30
  },
  {
    name: "Hafalan Kosakata Bahasa Inggris",
    steps: [
      "Pilih 5 kata baru beserta artinya hari ini (5 menit)",
      "Ucapkan berulang kali dengan suara lantang sambil menulisnya (10 menit)",
      "Buat 1 contoh kalimat sederhana menggunakan kata tersebut (5 menit)"
    ],
    durationMinutes: 20
  }
];

export const ManageStressSection: React.FC = () => {
  // Task Breaker State
  const [selectedPresetIndex, setSelectedPresetIndex] = useState<number>(0);
  const [customTaskName, setCustomTaskName] = useState<string>('');
  const [activeTaskName, setActiveTaskName] = useState<string>(presetTasks[0].name);
  const [taskSteps, setTaskSteps] = useState<string[]>(presetTasks[0].steps);
  const [checkedSteps, setCheckedSteps] = useState<boolean[]>([false, false, false]);

  // Break Timer State (5 minutes = 300 seconds)
  const [breakSecondsLeft, setBreakSecondsLeft] = useState<number>(300);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isTimerRunning && breakSecondsLeft > 0) {
      interval = setInterval(() => {
        setBreakSecondsLeft((prev) => prev - 1);
      }, 1000);
    } else if (breakSecondsLeft === 0) {
      setIsTimerRunning(false);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning, breakSecondsLeft]);

  const handleSelectPreset = (idx: number) => {
    setSelectedPresetIndex(idx);
    setActiveTaskName(presetTasks[idx].name);
    setTaskSteps(presetTasks[idx].steps);
    setCheckedSteps([false, false, false]);
  };

  const handleCreateCustomTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customTaskName.trim()) return;

    setActiveTaskName(customTaskName);
    setTaskSteps([
      `Siapkan alat tulis dan baca petunjuk tugas: "${customTaskName}" (5 menit)`,
      `Kerjakan separuh bagian pertama dengan fokus tanpa melihat HP (15 menit)`,
      `Selesaikan sisa tugas lalu rapikan kembali peralatanmu (10 menit)`
    ]);
    setCheckedSteps([false, false, false]);
    setCustomTaskName('');
  };

  const toggleCheckStep = (idx: number) => {
    setCheckedSteps((prev) => {
      const updated = [...prev];
      updated[idx] = !updated[idx];
      return updated;
    });
  };

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const resetTimer = () => {
    setIsTimerRunning(false);
    setBreakSecondsLeft(300);
  };

  const tips: TipItem[] = [
    {
      id: 1,
      title: "Membuat Jadwal Belajar yang Teratur",
      desc: "Tentukan jam tertentu untuk belajar dan jam untuk istirahat setiap harinya. Jadwal yang rutin membantu otak kita tahu kapan harus fokus dan kapan boleh bersantai.",
      action: "Tips praktis: Tulis jadwal di kertas karton dan tempel di dekat meja belajarmu.",
      icon: <Calendar className="w-5 h-5 text-sky-600" />,
      tag: "Manajemen Waktu"
    },
    {
      id: 2,
      title: "Mengerjakan Tugas Sedikit demi Sedikit",
      desc: "Jangan menunggu sampai malam sebelum tugas dikumpulkan. Cicil 2-3 nomor setiap hari agar terasa ringan dan tidak membuatmu panik.",
      action: "Tips praktis: Belajar fokus 20 menit, lalu istirahat 5 menit (Teknik Pomodoro sederhana).",
      icon: <CheckSquare className="w-5 h-5 text-indigo-600" />,
      tag: "Fokus Bertahap"
    },
    {
      id: 3,
      title: "Beristirahat Ketika Merasa Lelah",
      desc: "Saat kepalamu mulai pusing dan mata lelah, jangan dipaksakan. Mengambil jeda singkat bukanlah bermalas-malasan, melainkan cara mengisi ulang energi otak.",
      action: "Tips praktis: Berdiri, regangkan badan, dan minum segelas air putih dingin.",
      icon: <Coffee className="w-5 h-5 text-amber-600" />,
      tag: "Jeda Sehat"
    },
    {
      id: 4,
      title: "Tidur dengan Cukup Setiap Malam",
      desc: "Remaja SMP membutuhkan tidur sekitar 7 hingga 9 jam setiap malam. Saat tidur, otak kita merapikan ingatan pelajaran dan membuang hormon stres.",
      action: "Tips praktis: Matikan atau jauhkan HP minimal 30 menit sebelum tidur.",
      icon: <Moon className="w-5 h-5 text-purple-600" />,
      tag: "Kesehatan Fisik"
    },
    {
      id: 5,
      title: "Melakukan Kegiatan yang Disukai",
      desc: "Sisihkan waktu setiap hari untuk melakukan hobimu, seperti mendengarkan lagu favorit, menggambar, bersepeda, atau bermain bersama teman.",
      action: "Tips praktis: Berikan hadiah kecil (self-reward) untuk dirimu setelah selesai belajar.",
      icon: <Heart className="w-5 h-5 text-rose-600" />,
      tag: "Hobi & Rekreasi"
    },
    {
      id: 6,
      title: "Bercerita kepada Orang Tepercaya",
      desc: "Jangan simpan rasa cemas dan kebingunganmu sendirian. Mengobrol dengan orang tua, guru BK di sekolah, atau sahabat bisa membuat beban terasa berkurang banyak.",
      action: "Tips praktis: Katakan jujur apa kesulitanmu, orang dewasa siap membantumu mencari solusi.",
      icon: <MessageSquare className="w-5 h-5 text-teal-600" />,
      tag: "Dukungan Sosial"
    }
  ];

  return (
    <section id="cara-mengelola" className="py-16 md:py-24 bg-slate-50 border-t border-sky-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-700 uppercase tracking-wider mb-2">
            <span>Bagian 02</span>
            <span className="text-slate-300">·</span>
            <span>Solusi & Tips Sederhana</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Cara Praktis Mengelola Stres untuk Pelajar SMP
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Mengatasi stres tidak harus sulit. Berikut 6 kebiasaan baik dan ramah yang bisa langsung
            kamu coba mulai hari ini agar belajar terasa lebih menyenangkan.
          </p>
        </div>

        {/* 6 Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {tips.map((tip) => (
            <div
              key={tip.id}
              className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-2xs hover:shadow-md hover:border-sky-300 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center">
                    {tip.icon}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                    {tip.tag}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  {tip.id}. {tip.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {tip.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100">
                <p className="text-xs text-sky-700 font-medium bg-sky-50/60 p-2.5 rounded-lg">
                  {tip.action}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* SPECIAL SECTION: "Mulai dari Langkah Kecil" with Interactive Deconstructor */}
        <div className="bg-white rounded-2xl border border-sky-200 shadow-md p-6 sm:p-8 lg:p-10">
          
          <div className="max-w-3xl mb-8">
            <div className="flex items-center gap-2 text-xs font-bold text-sky-700 uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4 text-sky-600" />
              <span>Metode Khusus Siswa</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Mulai dari Langkah Kecil
            </h3>
            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
              Ketika ada tugas yang terasa sangat besar atau rumit, jangan panik dan jangan langsung menyerah!
              Gunakan panduan 4 langkah sederhana ini:
            </p>
          </div>

          {/* 4 Steps Guide */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            
            <div className="p-4 rounded-xl bg-sky-50/70 border border-sky-100">
              <div className="w-7 h-7 rounded-full bg-sky-600 text-white flex items-center justify-center text-xs font-bold mb-2">
                1
              </div>
              <h4 className="text-sm font-bold text-slate-900 mb-1">
                Pilih Satu Tugas
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Pilih 1 tugas yang paling mendesak untuk diselesaikan terlebih dahulu. Jangan pikirkan tugas lain dulu.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-indigo-50/70 border border-indigo-100">
              <div className="w-7 h-7 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs font-bold mb-2">
                2
              </div>
              <h4 className="text-sm font-bold text-slate-900 mb-1">
                Bagi Jadi Bagian Kecil
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Pecah tugas besar tersebut menjadi 2 atau 3 langkah kecil yang bisa selesai dalam 10-15 menit.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-purple-50/70 border border-purple-100">
              <div className="w-7 h-7 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs font-bold mb-2">
                3
              </div>
              <h4 className="text-sm font-bold text-slate-900 mb-1">
                Tentukan Waktunya
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tentukan jam berapa kamu akan mengerjakannya (misal jam 4 sore selama 25 menit fokus).
              </p>
            </div>

            <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-100">
              <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold mb-2">
                4
              </div>
              <h4 className="text-sm font-bold text-slate-900 mb-1">
                Beri Waktu Istirahat
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Setelah selesai satu sesi belajar, ambil jeda istirahat 5 menit untuk minum atau rileks.
              </p>
            </div>

          </div>

          {/* Interactive Playground for Mini Exhibition: Task Deconstructor Simulator */}
          <div className="pt-6 border-t border-slate-100 bg-slate-50/60 -mx-6 -mb-6 sm:-mx-8 sm:-mb-8 lg:-mx-10 lg:-mb-10 p-6 sm:p-8 rounded-b-2xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
              <div>
                <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <span>Simulasi Interaktif: Coba Pecah Tugas Sekolahmu</span>
                  <span className="text-[11px] font-semibold text-sky-700 bg-sky-100 px-2 py-0.5 rounded-full">
                    Fitur Pameran
                  </span>
                </h4>
                <p className="text-xs text-slate-500">
                  Pilih salah satu contoh tugas di bawah atau ketik tugasmu sendiri untuk melihat bagaimana membaginya:
                </p>
              </div>
            </div>

            {/* Presets and Custom Input */}
            <div className="space-y-4">
              {/* Preset Buttons */}
              <div className="flex flex-wrap gap-2">
                {presetTasks.map((preset, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectPreset(idx)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                      selectedPresetIndex === idx && activeTaskName === preset.name
                        ? 'bg-sky-600 text-white shadow-2xs font-semibold'
                        : 'bg-white text-slate-700 border border-slate-200 hover:border-sky-300'
                    }`}
                  >
                    {preset.name}
                  </button>
                ))}
              </div>

              {/* Custom Input */}
              <form onSubmit={handleCreateCustomTask} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Atau ketik tugas lain (misal: Menghafal UUD 1945)..."
                  value={customTaskName}
                  onChange={(e) => setCustomTaskName(e.target.value)}
                  className="flex-1 px-3.5 py-2 text-xs sm:text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer shrink-0"
                >
                  Pecah Tugas
                </button>
              </form>

              {/* Task Breakdown & Interactive Checkboxes */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-4">
                
                {/* Left: Checklist Steps */}
                <div className="lg:col-span-7 bg-white p-4 sm:p-5 rounded-xl border border-slate-200 space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                    <span className="text-xs font-bold text-slate-800">
                      Tugas Saat Ini: <span className="text-sky-700 font-semibold">{activeTaskName}</span>
                    </span>
                    <span className="text-[11px] text-slate-500">
                      {checkedSteps.filter(Boolean).length} dari {taskSteps.length} Selesai
                    </span>
                  </div>

                  <p className="text-xs text-slate-500">
                    Centang setiap langkah kecil setelah kamu menyelesaikannya:
                  </p>

                  <div className="space-y-2">
                    {taskSteps.map((step, idx) => (
                      <div
                        key={idx}
                        onClick={() => toggleCheckStep(idx)}
                        className={`flex items-start gap-3 p-3 rounded-lg border transition-all cursor-pointer select-none ${
                          checkedSteps[idx]
                            ? 'bg-emerald-50/70 border-emerald-200 text-slate-500 line-through'
                            : 'bg-slate-50/60 border-slate-200 hover:border-sky-300 text-slate-800'
                        }`}
                      >
                        <div className="mt-0.5">
                          <CheckCircle2
                            className={`w-4 h-4 ${
                              checkedSteps[idx] ? 'text-emerald-600' : 'text-slate-300'
                            }`}
                          />
                        </div>
                        <div className="text-xs sm:text-sm leading-relaxed">
                          <span className="font-semibold mr-1.5">Langkah {idx + 1}:</span>
                          <span>{step}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {checkedSteps.every(Boolean) && (
                    <div className="p-3 bg-emerald-100/80 text-emerald-900 rounded-lg text-xs font-semibold flex items-center gap-2">
                      <span>🎉 Hebat! Kamu sudah menyelesaikan semua langkah kecil tugas ini. Sekarang saatnya istirahat!</span>
                    </div>
                  )}
                </div>

                {/* Right: Break Time Companion Timer */}
                <div className="lg:col-span-5 bg-white p-4 sm:p-5 rounded-xl border border-slate-200 flex flex-col justify-between text-center space-y-3">
                  <div>
                    <span className="text-[11px] font-bold text-sky-700 uppercase tracking-wider">
                      Langkah 4: Jeda Istirahat
                    </span>
                    <h5 className="text-sm font-bold text-slate-900 mt-1">
                      Timer Istirahat 5 Menit
                    </h5>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Gunakan 5 menit ini untuk meregangkan badan dan minum air.
                    </p>
                  </div>

                  {/* Timer Display */}
                  <div className="py-2">
                    <div className="text-4xl sm:text-5xl font-mono font-extrabold text-sky-600 tracking-wider">
                      {formatTimer(breakSecondsLeft)}
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1">
                      {isTimerRunning ? 'Istirahat sedang berjalan... Santai dulu ya!' : 'Tekan Mulai saat sesi belajarmu selesai'}
                    </p>
                  </div>

                  {/* Timer Controls */}
                  <div className="flex items-center justify-center gap-2">
                    <button
                      onClick={() => setIsTimerRunning(!isTimerRunning)}
                      className={`px-4 py-2 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer text-white ${
                        isTimerRunning ? 'bg-amber-600 hover:bg-amber-700' : 'bg-sky-600 hover:bg-sky-700'
                      }`}
                    >
                      {isTimerRunning ? (
                        <>
                          <Pause className="w-3.5 h-3.5" /> Jeda Timer
                        </>
                      ) : (
                        <>
                          <Play className="w-3.5 h-3.5" /> Mulai Istirahat
                        </>
                      )}
                    </button>

                    <button
                      onClick={resetTimer}
                      className="px-3 py-2 text-xs font-medium text-slate-600 hover:bg-slate-100 rounded-lg border border-slate-200 flex items-center gap-1 cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" /> Reset
                    </button>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
