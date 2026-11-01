import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Apa pengertian paling tepat mengenai stres akademik bagi seorang pelajar?",
    options: [
      "Kondisi tubuh dan pikiran yang tertekan karena beban belajar, tugas, atau ujian terasa melebihi waktu dan kemampuan",
      "Penyakit fisik bawaan yang hanya menyerang saat jam pelajaran tertentu",
      "Rasa malas yang disengaja agar tidak perlu masuk sekolah",
      "Gangguan permanen yang tidak dapat diperbaiki sama sekali"
    ],
    correctAnswer: 0,
    explanation: "Stres akademik adalah respon alami tubuh dan pikiran saat kita merasa tuntutan belajar (tugas, ujian, nilai) melebihi kapasitas atau waktu yang kita miliki. Stres ini wajar dialami siapa saja dan bisa dikelola dengan baik."
  },
  {
    id: 2,
    question: "Manakah di bawah ini yang merupakan salah satu penyebab umum timbulnya stres akademik pada siswa SMP?",
    options: [
      "Tidur teratur 8 jam setiap malam dan makan makanan bergizi",
      "Tugas sekolah yang menumpuk disertai tekanan untuk selalu mendapat nilai sempurna",
      "Menyempatkan waktu untuk berolahraga dan menyalurkan hobi di akhir pekan",
      "Mencicil PR sedikit demi sedikit bersama teman belajar"
    ],
    correctAnswer: 1,
    explanation: "Tugas sekolah yang menumpuk, ujian berturut-turut, rasa takut nilainya turun, serta kurangnya waktu istirahat adalah faktor pemicu utama stres akademik pada remaja."
  },
  {
    id: 3,
    question: "Salah satu dampak dari stres akademik yang sering dialami oleh pelajar adalah...",
    options: [
      "Konsentrasi belajar meningkat tajam dan tidak pernah merasa lelah",
      "Pikiran menjadi lebih tenang dan selalu bersemangat di setiap pelajaran",
      "Sulit berkonsentrasi, mudah lelah, dan merasa khawatir atau cemas berlebih",
      "Dapat mengingat semua rumus pelajaran tanpa perlu membaca ulang"
    ],
    correctAnswer: 2,
    explanation: "Stres akademik yang menumpuk dapat menguras energi, membuat kepala pusing, sulit fokus saat guru menerangkan, serta memicu rasa cemas yang berkepanjangan."
  },
  {
    id: 4,
    question: "Bagaimana cara terbaik menerapkan tips 'Mulai dari Langkah Kecil' saat ada tugas yang sangat rumit?",
    options: [
      "Begadang semalaman tanpa istirahat agar selesai dalam satu waktu",
      "Menunda tugas sampai detik-detik terakhir sebelum batas pengumpulan",
      "Memilih satu tugas, membaginya jadi bagian-bagian kecil, dan meluangkan jeda istirahat",
      "Meninggalkan tugas tersebut dan pura-pura lupa mengerjakannya"
    ],
    correctAnswer: 2,
    explanation: "Dengan memecah tugas besar menjadi 2-3 langkah kecil yang mudah diselesaikan dalam 15-25 menit, otak kita tidak merasa terbebani dan kita bisa belajar lebih fokus."
  },
  {
    id: 5,
    question: "Apa yang sebaiknya kamu lakukan jika beban tugas dan rasa cemas di sekolah sudah terasa terlalu berat?",
    options: [
      "Memendamnya sendirian karena mengira orang lain tidak peduli",
      "Bercerita secara terbuka kepada orang tua, guru BK di sekolah, atau orang tepercaya",
      "Langsung berhenti sekolah dan mengurung diri di kamar",
      "Menyalahkan diri sendiri dan mengabaikan semua kesehatan tubuh"
    ],
    correctAnswer: 1,
    explanation: "Bercerita kepada orang tua atau Guru BK (Bimbingan Konseling) adalah langkah tepat. Mereka memiliki pengalaman untuk membantu mengatur beban belajar dan memberikan solusi terbaik untukmu."
  }
];
