import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowUpRight, ShieldCheck, Sparkles, ChevronDown } from 'lucide-react';

export default function Hero({ onOpenTrial }) {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('.hero-badge', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
      })
      .from('.hero-title-part1', {
        y: 40,
        opacity: 0,
        duration: 0.9,
      }, '-=0.5')
      .from('.hero-title-part2', {
        y: 45,
        opacity: 0,
        duration: 1.0,
      }, '-=0.7')
      .from('.hero-description', {
        y: 35,
        opacity: 0,
        duration: 0.8,
      }, '-=0.6')
      .from('.hero-cta-group', {
        y: 30,
        opacity: 0,
        duration: 0.8,
      }, '-=0.5')
      .from('.hero-stat', {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
      }, '-=0.4');

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full h-[100dvh] min-h-[700px] overflow-hidden flex flex-col justify-end"
    >
      {/* Full-bleed Background Image with Verified Unsplash URL */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=2400&q=85"
          alt="Classical Academic Atelier and Library"
          className="w-full h-full object-cover object-center scale-105 filter brightness-75 contrast-125"
        />
        {/* Heavy Primary-to-Black Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D12] via-[#0D0D12]/80 to-[#0D0D12]/30" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#0D0D12]/40 to-[#0D0D12]/90 pointer-events-none" />
      </div>

      {/* Hero Content pushed to bottom-left third */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 pb-14 sm:pb-20 flex flex-col items-start">
        
        {/* Status / Category Badge */}
        <div className="hero-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#13131A]/80 border border-[#C9A84C]/30 backdrop-blur-md mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C9A84C] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C9A84C]"></span>
          </span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#FAF8F5]/90">
            Admissions Atelier // Fall 2027 Cycle Protocol Active
          </span>
        </div>

        {/* Large Scale Contrast Headline (Preset B Pattern) */}
        <div className="mb-6">
          <h1 className="flex flex-col">
            <span className="hero-title-part1 font-sans font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#FAF8F5] tracking-tight uppercase">
              Ivy Ambition meets
            </span>
            <span className="hero-title-part2 font-serif italic text-6xl sm:text-8xl lg:text-[7.5rem] leading-[0.95] text-[#C9A84C] -mt-1 sm:-mt-2 font-normal drop-shadow-md">
              Surgical Precision.
            </span>
          </h1>
        </div>

        {/* Subtitle / Brand Purpose */}
        <p className="hero-description max-w-2xl text-base sm:text-lg lg:text-xl text-[#FAF8F5]/80 font-normal leading-relaxed mb-8">
          The private admissions advisory atelier. Powered by 2.4 million institutional telemetry points to engineer an undeniable intellectual spike for top-tier candidates.
        </p>

        {/* CTA Group */}
        <div className="hero-cta-group flex flex-wrap items-center gap-4 sm:gap-6 mb-12">
          <button
            onClick={onOpenTrial}
            className="btn-magnetic btn-gold px-8 py-4 rounded-full text-sm font-extrabold tracking-wider uppercase flex items-center gap-2 group cursor-pointer shadow-gold-glow"
          >
            <span className="btn-slide" />
            <span className="flex items-center gap-2 text-[#0D0D12] font-black transition-colors">
              Start Free Trial
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
          </button>

          <a
            href="#features"
            className="px-6 py-4 rounded-full bg-[#13131A]/70 hover:bg-[#13131A] text-[#FAF8F5]/90 hover:text-[#C9A84C] border border-white/10 hover:border-[#C9A84C]/40 text-sm font-medium tracking-wider uppercase transition-all backdrop-blur-md interactive-lift flex items-center gap-2"
          >
            Explore Artifacts
            <ChevronDown className="w-4 h-4" />
          </a>
        </div>

        {/* Live Telemetry Micro-Stats */}
        <div className="w-full pt-6 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div className="hero-stat flex flex-col">
            <span className="font-mono text-xs text-[#C9A84C] tracking-wider uppercase">01 / ACCEPTANCE DELTA</span>
            <span className="font-sans font-bold text-xl sm:text-2xl text-[#FAF8F5] mt-1">+340% Top-10 Rate</span>
            <span className="text-xs text-[#FAF8F5]/60 mt-0.5">vs. unassisted applicant pool</span>
          </div>
          <div className="hero-stat flex flex-col">
            <span className="font-mono text-xs text-[#C9A84C] tracking-wider uppercase">02 / INSTITUTIONAL DATA</span>
            <span className="font-sans font-bold text-xl sm:text-2xl text-[#FAF8F5] mt-1">2.4M Outcomes</span>
            <span className="text-xs text-[#FAF8F5]/60 mt-0.5">Decisions indexed since 2012</span>
          </div>
          <div className="hero-stat flex flex-col">
            <span className="font-mono text-xs text-[#C9A84C] tracking-wider uppercase">03 / HARVARD & STANFORD</span>
            <span className="font-sans font-bold text-xl sm:text-2xl text-[#FAF8F5] mt-1">94.8% Match Fit</span>
            <span className="text-xs text-[#FAF8F5]/60 mt-0.5">Spike calibration accuracy</span>
          </div>
          <div className="hero-stat flex flex-col">
            <span className="font-mono text-xs text-[#C9A84C] tracking-wider uppercase">04 / ATELIER PRIVACY</span>
            <span className="font-sans font-bold text-xl sm:text-2xl text-[#FAF8F5] mt-1">100% Confidential</span>
            <span className="text-xs text-[#FAF8F5]/60 mt-0.5">Encrypted candidate dossiers</span>
          </div>
        </div>

      </div>
    </section>
  );
}
