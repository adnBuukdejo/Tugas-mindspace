/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutStressSection } from './components/AboutStressSection';
import { ManageStressSection } from './components/ManageStressSection';
import { BreathingExercise } from './components/BreathingExercise';
import { QuizSection } from './components/QuizSection';
import { Footer } from './components/Footer';
import { ActiveSection } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<ActiveSection>('beranda');

  // Handle smooth navigation to section ID
  const handleNavigate = (section: ActiveSection) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      const navOffset = 70; // offset for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Observe scroll position to automatically highlight active section in Navbar
  useEffect(() => {
    const sections: ActiveSection[] = ['beranda', 'tentang-stres', 'cara-mengelola', 'kuis'];
    
    const handleScroll = () => {
      const scrollY = window.pageYOffset;
      const navOffset = 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const secId = sections[i];
        const el = document.getElementById(secId);
        if (el) {
          const top = el.offsetTop - navOffset;
          if (scrollY >= top) {
            setActiveSection(secId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800">
      {/* Top Navbar */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* A. Beranda */}
        <HeroSection onExplore={handleNavigate} />

        {/* B. Mengenal Stres Akademik */}
        <AboutStressSection />

        {/* C. Cara Mengelola Stres & Mulai dari Langkah Kecil */}
        <ManageStressSection />

        {/* Calming Breathing Interactive Break */}
        <BreathingExercise />

        {/* D. Kuis Singkat Interaktif */}
        <QuizSection />
      </main>

      {/* Footer & Educational Disclaimer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
