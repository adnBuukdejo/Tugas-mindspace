import React, { useState } from 'react';
import { Menu, X, Sparkles, BookOpen, Brain, CheckCircle2, HelpCircle, HeartHandshake } from 'lucide-react';
import { ActiveSection } from '../types';

interface NavbarProps {
  activeSection: ActiveSection;
  onNavigate: (section: ActiveSection) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: ActiveSection; label: string; icon: React.ReactNode }[] = [
    { id: 'beranda', label: 'Beranda', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'tentang-stres', label: 'Mengenal Stres', icon: <Brain className="w-4 h-4" /> },
    { id: 'cara-mengelola', label: 'Cara Mengelola', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'kuis', label: 'Kuis Singkat', icon: <HelpCircle className="w-4 h-4" /> },
  ];

  const handleLinkClick = (id: ActiveSection) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-sky-100 shadow-xs transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16">
          {/* Zone 1: Brand wordmark (Single text element with icon) */}
          <button
            onClick={() => handleLinkClick('beranda')}
            className="flex items-center gap-2.5 text-left group focus-visible:outline-sky-500 rounded-lg"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-500 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
              <Brain className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-sky-600 transition-colors whitespace-nowrap">
                Mind<span className="text-sky-600">Space</span>
              </span>
              <span className="hidden sm:inline-block text-[11px] text-slate-500 font-medium ml-2 border-l border-slate-200 pl-2">
                Edukasi Mental SMP
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-lg transition-colors whitespace-nowrap ${
                    isActive
                      ? 'bg-sky-50 text-sky-700 shadow-2xs font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={() => handleLinkClick('kuis')}
              className="px-4 py-2 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-700 active:bg-sky-800 rounded-lg shadow-sm transition-all hover:shadow-md flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              Mulai Kuis
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Buka menu navigasi"
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-sky-100 bg-white px-4 pt-3 pb-5 space-y-2 shadow-lg animate-fadeIn">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleLinkClick(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors text-left ${
                activeSection === item.id
                  ? 'bg-sky-50 text-sky-700 font-semibold'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
          <div className="pt-2">
            <button
              onClick={() => handleLinkClick('kuis')}
              className="w-full py-2.5 px-4 text-center text-sm font-semibold text-white bg-sky-600 hover:bg-sky-700 rounded-lg shadow-sm"
            >
              Mulai Kuis Sekarang
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
