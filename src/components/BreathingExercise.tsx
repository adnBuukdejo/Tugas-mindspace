import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Heart, Sparkles, Wind } from 'lucide-react';

export const BreathingExercise: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState<'tarik' | 'tahan' | 'hembuskan'>('tarik');
  const [counter, setCounter] = useState(4);
  const [completedCycles, setCompletedCycles] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    if (isActive) {
      timer = setInterval(() => {
        setCounter((prev) => {
          if (prev > 1) {
            return prev - 1;
          } else {
            // Switch phase
            if (phase === 'tarik') {
              setPhase('tahan');
              return 4;
            } else if (phase === 'tahan') {
              setPhase('hembuskan');
              return 4;
            } else {
              setPhase('tarik');
              setCompletedCycles((c) => c + 1);
              return 4;
            }
          }
        });
      }, 1000);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isActive, phase]);

  const handleReset = () => {
    setIsActive(false);
    setPhase('tarik');
    setCounter(4);
    setCompletedCycles(0);
  };

  const getPhaseText = () => {
    switch (phase) {
      case 'tarik':
        return {
          instruction: 'Tarik Napas Perlahan Lewat Hidung',
          sub: 'Rasakan udara segar mengisi rongga dada dan perutmu.',
          scale: 'scale-110',
          bg: 'bg-sky-500/20 text-sky-700 border-sky-300'
        };
      case 'tahan':
        return {
          instruction: 'Tahan Napas dengan Nyaman',
          sub: 'Tetap tenang dan rilekskan kedua bahumu.',
          scale: 'scale-115',
          bg: 'bg-indigo-500/20 text-indigo-700 border-indigo-300'
        };
      case 'hembuskan':
        return {
          instruction: 'Hembuskan Perlahan Lewat Mulut',
          sub: 'Lepaskan semua ketegangan dan rasa cemasmu.',
          scale: 'scale-95',
          bg: 'bg-purple-500/20 text-purple-700 border-purple-300'
        };
    }
  };

  const currentInfo = getPhaseText();

  return (
    <section className="py-14 bg-gradient-to-b from-sky-50/50 to-indigo-50/30 border-t border-sky-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="bg-white rounded-3xl border border-sky-200/80 p-6 sm:p-10 shadow-sm overflow-hidden">
          
          <div className="text-center max-w-xl mx-auto mb-8">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-700 uppercase tracking-wider mb-1.5">
              <Wind className="w-4 h-4 text-sky-600" />
              <span>Zona Tenang · Relaksasi 1 Menit</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Latihan Napas Relaksasi (4-4-4)
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Saat merasa panik karena tugas atau cemas sebelum ujian, teknik bernapas perlahan
              ini terbukti membantu detak jantung kembali tenang dan otak berpikir jernih.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Visual Illustration */}
            <div className="md:col-span-5 order-2 md:order-1">
              <div className="rounded-2xl overflow-hidden border border-sky-100 shadow-sm">
                <img
                  src="/src/assets/images/breathing_mindfulness_peace_1793514221729.jpg"
                  alt="Ilustrasi ketenangan pikiran dan alam menyejukkan"
                  className="w-full aspect-4/3 object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="mt-3 text-center">
                <span className="text-[11px] text-slate-500 font-medium">
                  Siklus Selesai: <strong className="text-sky-700">{completedCycles} kali</strong>
                </span>
              </div>
            </div>

            {/* Interactive Breathing Circle */}
            <div className="md:col-span-7 order-1 md:order-2 flex flex-col items-center text-center space-y-6">
              
              {/* Animated Circle */}
              <div className="relative flex items-center justify-center w-52 h-52 sm:w-60 sm:h-60">
                {/* Outer ripple */}
                <div
                  className={`absolute inset-0 rounded-full transition-transform duration-1000 ease-in-out border-2 ${
                    isActive ? `${currentInfo.scale} ${currentInfo.bg}` : 'scale-100 bg-sky-50 border-sky-100'
                  }`}
                />
                
                {/* Inner Core */}
                <div className="relative z-10 w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-white shadow-md border border-sky-100 flex flex-col items-center justify-center p-3">
                  {isActive ? (
                    <>
                      <span className="text-xs uppercase font-bold tracking-wider text-sky-800">
                        {phase}
                      </span>
                      <span className="text-4xl font-extrabold text-slate-900 font-mono my-0.5">
                        {counter}
                      </span>
                      <span className="text-[11px] text-slate-400">detik</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-6 h-6 text-sky-500 mb-1" />
                      <span className="text-xs font-semibold text-slate-700">
                        Siap Bernapas?
                      </span>
                      <span className="text-[11px] text-slate-400">
                        Tekan Mulai
                      </span>
                    </>
                  )}
                </div>
              </div>

              {/* Text Guidance */}
              <div className="space-y-1 min-h-[50px]">
                <h4 className="text-sm sm:text-base font-bold text-slate-800">
                  {isActive ? currentInfo.instruction : 'Posisikan dudukmu dengan tegak dan santai'}
                </h4>
                <p className="text-xs text-slate-500">
                  {isActive ? currentInfo.sub : 'Lakukan 3-4 siklus pernapasan saat pikiranmu terasa penuh.'}
                </p>
              </div>

              {/* Action Controls */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsActive(!isActive)}
                  className={`px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-xl text-white shadow-sm transition-all cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? 'bg-amber-600 hover:bg-amber-700'
                      : 'bg-sky-600 hover:bg-sky-700 hover:shadow-md'
                  }`}
                >
                  {isActive ? (
                    <>
                      <Pause className="w-4 h-4" /> Jeda
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4" /> Mulai Latihan
                    </>
                  )}
                </button>

                <button
                  onClick={handleReset}
                  className="px-4 py-2.5 text-xs sm:text-sm font-medium text-slate-600 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Reset
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
