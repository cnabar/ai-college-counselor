import React from 'react';
import { Compass, ArrowUpRight, Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer({ onOpenTrial }) {
  return (
    <footer className="w-full bg-[#060609] text-[#FAF8F5] pt-20 pb-12 px-6 sm:px-12 lg:px-16 rounded-t-[4rem] border-t border-[#232332] relative overflow-hidden">
      
      {/* Background Soft Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#C9A84C]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Info & Tagline (Span 2) */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#C9A84C] to-[#E2CE90] flex items-center justify-center text-[#0D0D12]">
                <Compass className="w-4 h-4" />
              </div>
              <span className="font-sans font-extrabold text-base tracking-wider uppercase text-white">
                AI College Counselor
              </span>
            </div>
            
            <p className="text-sm text-slate-muted max-w-sm leading-relaxed mb-6">
              The bespoke admissions atelier for the world's most competitive applicants. Powered by 2.4 million institutional telemetry points to engineer an undeniable intellectual spike.
            </p>

            <button
              onClick={onOpenTrial}
              className="btn-magnetic btn-gold px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-gold-soft cursor-pointer group"
            >
              <span className="btn-slide" />
              <span className="flex items-center gap-1.5 text-[#0D0D12] font-black transition-colors">
                Start Free Trial
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </button>
          </div>

          {/* Navigation Column 1: Instruments */}
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs text-[#C9A84C] tracking-widest uppercase mb-1">
              Instruments
            </span>
            <a href="#features" className="text-xs text-white/70 hover:text-[#C9A84C] interactive-lift">
              Diagnostic Shuffler
            </a>
            <a href="#features" className="text-xs text-white/70 hover:text-[#C9A84C] interactive-lift">
              Telemetry Typewriter
            </a>
            <a href="#features" className="text-xs text-white/70 hover:text-[#C9A84C] interactive-lift">
              Protocol Scheduler
            </a>
            <a href="#protocol" className="text-xs text-white/70 hover:text-[#C9A84C] interactive-lift">
              Admissions Modeling
            </a>
          </div>

          {/* Navigation Column 2: Atelier Protocols */}
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs text-[#C9A84C] tracking-widest uppercase mb-1">
              Protocols
            </span>
            <a href="#protocol" className="text-xs text-white/70 hover:text-[#C9A84C] interactive-lift">
              Archetype Deconstruction
            </a>
            <a href="#protocol" className="text-xs text-white/70 hover:text-[#C9A84C] interactive-lift">
              Institutional Benchmarking
            </a>
            <a href="#protocol" className="text-xs text-white/70 hover:text-[#C9A84C] interactive-lift">
              Masterwork Essay Polish
            </a>
            <a href="#philosophy" className="text-xs text-white/70 hover:text-[#C9A84C] interactive-lift">
              The Admissions Manifesto
            </a>
          </div>

          {/* Navigation Column 3: Membership & Governance */}
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs text-[#C9A84C] tracking-widest uppercase mb-1">
              Institutional
            </span>
            <a href="#pricing" className="text-xs text-white/70 hover:text-[#C9A84C] interactive-lift">
              Essential Scholar
            </a>
            <a href="#pricing" className="text-xs text-white/70 hover:text-[#C9A84C] interactive-lift">
              Ivy Performance Tier
            </a>
            <a href="#pricing" className="text-xs text-white/70 hover:text-[#C9A84C] interactive-lift">
              Private Atelier Custody
            </a>
            <a href="#" className="text-xs text-white/70 hover:text-[#C9A84C] interactive-lift">
              Data Privacy & Encryption
            </a>
          </div>

        </div>

        {/* Bottom Bar: Operational Status & Legal */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* "System Operational" Status Indicator */}
          <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-[#13131A] border border-white/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span className="font-mono text-[11px] text-white/80 tracking-wider">
              SYSTEM OPERATIONAL // V4.8 ONLINE (99.98% ACCURACY) // 2.4M DOSSIERS INDEXED
            </span>
          </div>

          {/* Copyright & Legal */}
          <div className="flex items-center gap-6 text-xs text-white/40 font-mono">
            <span>© 2026 AI COLLEGE COUNSELOR ATELIER.</span>
            <a href="#" className="hover:text-white transition-colors">PRIVACY</a>
            <a href="#" className="hover:text-white transition-colors">SECURITY</a>
            <a href="#" className="hover:text-white transition-colors">DISCLAIMERS</a>
          </div>

        </div>

        {/* Admissions Disclaimer */}
        <div className="mt-8 text-center text-[10px] text-white/30 font-mono">
          AI College Counselor is an independent admissions intelligence system and is not affiliated with the Ivy League, College Board, or any individual university. All admissions probability models are proprietary.
        </div>

      </div>
    </footer>
  );
}
