import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { HelpCircle, CheckCircle2, XCircle, ArrowRight, ArrowLeft, RotateCcw, Award, Sparkles, BookOpen, ShieldAlert } from 'lucide-react';
import { quizQuestions } from '../data/quizData';

export const QuizSection: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [questionId: number]: number }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const totalQuestions = quizQuestions.length;

  const handleSelectOption = (optionIndex: number) => {
    if (isSubmitted) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: optionIndex
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleSubmitQuiz = () => {
    setIsSubmitted(true);
    // Calculate score
    const correctCount = quizQuestions.reduce((acc, q) => {
      return acc + (selectedAnswers[q.id] === q.correctAnswer ? 1 : 0);
    }, 0);

    // Launch confetti if score is decent (>= 3)
    if (correctCount >= 3) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // Fallback gracefully if confetti fails
      }
    }
  };

  const handleRestartQuiz = () => {
    setSelectedAnswers({});
    setCurrentQuestionIndex(0);
    setIsSubmitted(false);
  };

  // Calculations
  const answeredCount = Object.keys(selectedAnswers).length;
  const isCurrentAnswered = selectedAnswers[currentQuestion.id] !== undefined;
  const isAllAnswered = answeredCount === totalQuestions;

  const correctAnswersCount = quizQuestions.reduce((acc, q) => {
    return acc + (selectedAnswers[q.id] === q.correctAnswer ? 1 : 0);
  }, 0);

  const finalScore = Math.round((correctAnswersCount / totalQuestions) * 100);

  return (
    <section id="kuis" className="py-16 md:py-24 bg-white border-t border-sky-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-700 uppercase tracking-wider mb-2">
            <HelpCircle className="w-4 h-4 text-sky-600" />
            <span>Bagian 04 · Uji Pemahaman</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Kuis Singkat: Seberapa Paham Kamu?
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            Yuk uji pengetahuanmu tentang materi stres akademik lewat 5 pertanyaan pilihan ganda ini.
            Dapatkan skor dan pelajari pembahasannya!
          </p>

          {/* Educational Disclaimer pill */}
          <div className="mt-3 inline-flex items-center gap-1.5 text-xs text-amber-900 bg-amber-50 border border-amber-200 px-3.5 py-1.5 rounded-full font-medium">
            <ShieldAlert className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span>Kuis ini bertujuan menguji pemahaman materi edukasi, bukan untuk diagnosis medis.</span>
          </div>
        </div>

        {/* QUIZ CONTAINER */}
        {!isSubmitted ? (
          <div className="bg-slate-50/80 rounded-2xl border border-sky-200 p-6 sm:p-8 shadow-sm">
            
            {/* Progress Bar & Header */}
            <div className="mb-6">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-600 mb-2">
                <span>
                  Pertanyaan {currentQuestionIndex + 1} dari {totalQuestions}
                </span>
                <span>
                  Terjawab: {answeredCount} / {totalQuestions}
                </span>
              </div>
              <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-sky-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
                />
              </div>
            </div>

            {/* Current Question */}
            <div className="mb-6">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                {currentQuestion.id}. {currentQuestion.question}
              </h3>
            </div>

            {/* Answer Options */}
            <div className="space-y-3 mb-8">
              {currentQuestion.options.map((option, idx) => {
                const isSelected = selectedAnswers[currentQuestion.id] === idx;
                const optionLetter = String.fromCharCode(65 + idx); // A, B, C, D

                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelectOption(idx)}
                    className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                      isSelected
                        ? 'bg-sky-100/80 border-sky-500 ring-2 ring-sky-300 font-medium text-slate-900 shadow-2xs'
                        : 'bg-white border-slate-200 hover:border-sky-300 hover:bg-sky-50/30 text-slate-700'
                    }`}
                  >
                    <span
                      className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                        isSelected
                          ? 'bg-sky-600 text-white'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {optionLetter}
                    </span>
                    <span className="text-xs sm:text-sm leading-relaxed mt-0.5">
                      {option}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-200">
              <button
                type="button"
                onClick={handlePrev}
                disabled={currentQuestionIndex === 0}
                className={`px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-lg flex items-center gap-1.5 transition-colors ${
                  currentQuestionIndex === 0
                    ? 'text-slate-300 cursor-not-allowed'
                    : 'text-slate-700 hover:bg-slate-200 cursor-pointer'
                }`}
              >
                <ArrowLeft className="w-4 h-4" /> Soal Sebelumnya
              </button>

              <div className="flex items-center gap-2">
                {currentQuestionIndex < totalQuestions - 1 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-5 py-2.5 bg-sky-600 hover:bg-sky-700 text-white text-xs sm:text-sm font-semibold rounded-lg shadow-sm transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    Soal Berikutnya <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmitQuiz}
                    className={`px-5 py-2.5 text-white text-xs sm:text-sm font-semibold rounded-lg shadow-sm transition-all flex items-center gap-1.5 cursor-pointer ${
                      isAllAnswered ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-sky-600 hover:bg-sky-700'
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4" /> Selesai & Lihat Skor
                  </button>
                )}
              </div>
            </div>

            {!isCurrentAnswered && (
              <p className="text-center text-xs text-slate-400 mt-4">
                Pilih salah satu jawaban di atas untuk melanjutkan.
              </p>
            )}

          </div>
        ) : (
          /* RESULT & REVIEW SCREEN */
          <div className="space-y-8 animate-fadeIn">
            
            {/* Score Summary Box */}
            <div className="bg-gradient-to-br from-sky-50 via-white to-indigo-50/40 rounded-2xl border border-sky-200 p-6 sm:p-8 text-center shadow-sm">
              <div className="w-16 h-16 rounded-2xl bg-sky-600 text-white flex items-center justify-center mx-auto mb-4 shadow-md">
                <Award className="w-9 h-9" />
              </div>

              <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">
                Hasil Kuis MindSpace
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                Skor Akhir: {finalScore} / 100
              </h3>

              <p className="text-sm font-semibold text-slate-700 mt-2">
                Kamu menjawab dengan benar <strong className="text-emerald-700">{correctAnswersCount}</strong> dari {totalQuestions} pertanyaan ({Math.round((correctAnswersCount / totalQuestions) * 100)}%).
              </p>

              <p className="text-xs text-slate-500 max-w-md mx-auto mt-2 leading-relaxed">
                {finalScore === 100
                  ? "Luar biasa sempurna! Kamu sudah sangat memahami konsep stres akademik dan cara mengelolanya dengan baik."
                  : finalScore >= 60
                  ? "Bagus sekali! Pemahamanmu sudah sangat baik. Yuk simak pembahasan di bawah untuk memperdalam pengetahuanmu."
                  : "Tetap semangat! Jangan berkecil hati. Mari baca ulasan materi dan penjelasan di bawah ini agar semakin paham."}
              </p>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={handleRestartQuiz}
                  className="px-5 py-2.5 bg-sky-600 hover:bg-sky-700 text-white text-xs sm:text-sm font-semibold rounded-xl shadow-sm transition-all flex items-center gap-2 cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" /> Ulangi Kuis
                </button>
              </div>
            </div>

            {/* Answer Explanations Review */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <BookOpen className="w-5 h-5 text-sky-600" />
                <h4 className="text-base font-bold text-slate-900">
                  Pembahasan Lengkap Setiap Soal:
                </h4>
              </div>

              {quizQuestions.map((q, idx) => {
                const userAnswer = selectedAnswers[q.id];
                const isCorrect = userAnswer === q.correctAnswer;
                const optionLetters = ['A', 'B', 'C', 'D'];

                return (
                  <div
                    key={q.id}
                    className={`p-5 rounded-xl border transition-all ${
                      isCorrect ? 'bg-white border-emerald-200' : 'bg-white border-rose-200'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h5 className="text-sm font-bold text-slate-900 leading-snug">
                        {idx + 1}. {q.question}
                      </h5>
                      {isCorrect ? (
                        <span className="flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md shrink-0">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          Benar
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-xs font-bold text-rose-700 bg-rose-50 px-2.5 py-1 rounded-md shrink-0">
                          <XCircle className="w-3.5 h-3.5 text-rose-600" />
                          Kurang Tepat
                        </span>
                      )}
                    </div>

                    {/* Answers Comparison */}
                    <div className="text-xs space-y-1.5 text-slate-600 mt-2">
                      <p>
                        <strong className="text-slate-800">Jawabanmu: </strong>
                        {userAnswer !== undefined ? (
                          <span className={isCorrect ? 'text-emerald-700 font-semibold' : 'text-rose-700 font-semibold'}>
                            ({optionLetters[userAnswer]}) {q.options[userAnswer]}
                          </span>
                        ) : (
                          <span className="text-slate-400 italic">Tidak dijawab</span>
                        )}
                      </p>

                      {!isCorrect && (
                        <p>
                          <strong className="text-slate-800">Kunci Jawaban yang Benar: </strong>
                          <span className="text-emerald-700 font-semibold">
                            ({optionLetters[q.correctAnswer]}) {q.options[q.correctAnswer]}
                          </span>
                        </p>
                      )}
                    </div>

                    {/* Explanation */}
                    <div className="mt-3 p-3 bg-sky-50/70 rounded-lg border border-sky-100 text-xs text-sky-950 leading-relaxed">
                      <strong className="font-semibold block mb-0.5">Penjelasan Singkat:</strong>
                      {q.explanation}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Retry Button */}
            <div className="text-center pt-4">
              <button
                onClick={handleRestartQuiz}
                className="px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white text-sm font-semibold rounded-xl shadow-md transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" /> Coba Ulangi Kuis
              </button>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
