export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface QuizResult {
  score: number;
  total: number;
  answers: { [questionId: number]: number };
}

export type ActiveSection = 'beranda' | 'tentang-stres' | 'cara-mengelola' | 'kuis';

export interface MoodOption {
  id: string;
  emoji: string;
  label: string;
  message: string;
  color: string;
}
