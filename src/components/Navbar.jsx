import React, { useState, useEffect } from 'react';
import { Compass, Sparkles, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar({ onOpenTrial }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Artifacts', href: '#features' },
    { name: 'Manifesto', href: '#philosophy' },
    { name: 'Protocols', href: '#protocol' },
    { name: 'Membership', href: '#pricing' },
  ];

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-5xl transition-all duration-500">
      <nav
        className={`w-full px-6 py-3.5 rounded-full flex items-center justify-between transition-all duration-500 ${
          scrolled
            ? 'bg-[#0D0D12]/80 backdrop-blur-xl border border-[#C9A84C]/25 shadow-2xl shadow-black/80'
            : 'bg-[#13131A]/40 backdrop-blur-md border border-white/10'
        }`}
      >
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#C9A84C] to-[#E2CE90] flex items-center justify-center text-[#0D0D12] shadow-sm transition-transform duration-300 group-hover:rotate-45">
            <Compass className="w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <span className="font-sans font-extrabold text-sm tracking-widest text-[#FAF8F5] uppercase">
              AI College Counselor
            </span>
            <span className="font-mono text-[9px] text-[#C9A84C] tracking-widest uppercase">
              The Admissions Atelier
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-wider text-[#FAF8F5]/80 hover:text-[#C9A84C] interactive-lift font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenTrial}
            className="btn-magnetic px-5 py-2 rounded-full bg-[#C9A84C] text-[#0D0D12] text-xs font-bold tracking-wider uppercase flex items-center gap-1.5 shadow-gold-soft hover:shadow-gold-glow group"
          >
            <span className="btn-slide bg-[#FAF8F5]" />
            <span className="flex items-center gap-1.5 group-hover:text-[#0D0D12] transition-colors">
              Start Free Trial
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#FAF8F5] p-1.5 rounded-lg hover:bg-white/10 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 p-5 rounded-[2rem] bg-[#0D0D12]/95 backdrop-blur-2xl border border-[#C9A84C]/25 shadow-2xl flex flex-col gap-4 animate-in fade-in zoom-in-95">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-[#FAF8F5]/90 hover:text-[#C9A84C] py-1 border-b border-white/5 tracking-wider uppercase"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenTrial();
            }}
            className="w-full py-3 rounded-full bg-[#C9A84C] text-[#0D0D12] text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 shadow-gold-soft mt-2"
          >
            Start Free Trial
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
}
