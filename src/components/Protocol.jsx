import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Activity, Cpu, Disc3, ShieldCheck, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Protocol() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.protocol-card');

      cards.forEach((card, i) => {
        // Pin each card and animate previous cards as next card enters
        ScrollTrigger.create({
          trigger: card,
          start: 'top top',
          pin: true,
          pinSpacing: false,
          snap: 1 / (cards.length - 1),
        });

        if (i < cards.length - 1) {
          const nextCard = cards[i + 1];
          gsap.to(card, {
            scale: 0.9,
            filter: 'blur(20px)',
            opacity: 0.5,
            ease: 'power2.inOut',
            scrollTrigger: {
              trigger: nextCard,
              start: 'top bottom',
              end: 'top top',
              scrub: true,
            },
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="protocol" ref={containerRef} className="relative w-full bg-[#0D0D12]">
      
      {/* ========================================================
          PROTOCOL CARD 1: ROTATING GEOMETRIC CONCENTRIC MOTIF
          ======================================================== */}
      <div className="protocol-card w-full h-[100dvh] flex items-center justify-center p-6 sm:p-12 z-10 sticky top-0">
        <div className="relative w-full max-w-6xl h-[88vh] rounded-[2.5rem] bg-[#13131A] border border-[#232332] shadow-2xl p-8 sm:p-14 flex flex-col justify-between overflow-hidden">
          
          {/* Ambient Corner Glow */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#C9A84C]/10 rounded-full blur-[100px] pointer-events-none" />

          {/* Top Monospace Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-6">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#C9A84C]" />
              <span className="font-mono text-xs sm:text-sm text-[#C9A84C] tracking-widest uppercase">
                PROTOCOL // 01
              </span>
            </div>
            <span className="font-mono text-xs text-white/50 tracking-widest uppercase">
              DECONSTRUCTION ENGINE
            </span>
          </div>

          {/* Main Card Body: Text + Animation Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center my-auto">
            
            {/* Left Content */}
            <div className="flex flex-col">
              <span className="font-mono text-xs uppercase tracking-widest text-[#C9A84C] mb-3">
                Phase One : Spike Extraction
              </span>
              <h3 className="font-sans font-extrabold text-3xl sm:text-5xl text-[#FAF8F5] uppercase tracking-tight leading-tight">
                Cognitive DNA & Intellectual Spike Profiling
              </h3>
              <p className="mt-6 text-sm sm:text-base text-slate-muted leading-relaxed font-light">
                We dissect your raw academic transcript, extracurricular artifacts, and cognitive inclinations to unearth your singular intellectual angle — transforming disconnected accomplishments into an inevitable Ivy League thesis.
              </p>

              <div className="mt-8 flex items-center gap-6">
                <div className="flex flex-col">
                  <span className="font-mono text-xs text-[#C9A84C]">RESOLUTION</span>
                  <span className="font-sans font-bold text-lg text-white">Sub-Atomic</span>
                </div>
                <div className="w-[1px] h-8 bg-white/10" />
                <div className="flex flex-col">
                  <span className="font-mono text-xs text-[#C9A84C]">SPIKE PURITY</span>
                  <span className="font-sans font-bold text-lg text-white">99.8% Calibrated</span>
                </div>
              </div>
            </div>

            {/* Right Graphic: Canvas/SVG Animation 1 (Rotating Concentric Rings / Astrolabe) */}
            <div className="relative w-full aspect-square max-w-[380px] mx-auto flex items-center justify-center">
              {/* Outer Slow Ring */}
              <div className="absolute inset-0 rounded-full border border-dashed border-[#C9A84C]/25 animate-[spin_40s_linear_infinite]" />
              
              {/* Middle Ring with Tick marks */}
              <div className="absolute inset-8 rounded-full border border-[#C9A84C]/40 animate-[spin_25s_linear_infinite_reverse]">
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#C9A84C] shadow-gold-glow" />
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#FAF8F5]" />
              </div>

              {/* Inner Concentric Circle with Crosshairs */}
              <div className="absolute inset-20 rounded-full border border-[#FAF8F5]/20 flex items-center justify-center animate-[spin_15s_linear_infinite]">
                <div className="w-full h-[1px] bg-[#C9A84C]/30" />
                <div className="h-full w-[1px] bg-[#C9A84C]/30 absolute" />
              </div>

              {/* Center Core */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#C9A84C] to-[#E2CE90] flex items-center justify-center text-[#0D0D12] shadow-gold-glow animate-pulse">
                <Disc3 className="w-8 h-8 animate-[spin_8s_linear_infinite]" />
              </div>

              {/* Monospace Perimeter Readout */}
              <div className="absolute bottom-2 font-mono text-[9px] text-[#C9A84C] tracking-widest uppercase">
                ASTROLABE_THESIS_MATRIX // ACTIVE
              </div>
            </div>

          </div>

          {/* Bottom Card Footer */}
          <div className="border-t border-white/10 pt-4 flex items-center justify-between text-xs font-mono text-white/40">
            <span>ARCHETYPE_INDEX: 4,096 COGNITIVE PROFILES</span>
            <span>SYSTEM_CADENCE: 0.08s</span>
          </div>
        </div>
      </div>

      {/* ========================================================
          PROTOCOL CARD 2: SCANNING LASER-LINE ACROSS DATA GRID
          ======================================================== */}
      <div className="protocol-card w-full h-[100dvh] flex items-center justify-center p-6 sm:p-12 z-20 sticky top-0">
        <div className="relative w-full max-w-6xl h-[88vh] rounded-[2.5rem] bg-[#161622] border border-[#C9A84C]/35 shadow-2xl p-8 sm:p-14 flex flex-col justify-between overflow-hidden">
          
          {/* Ambient Glow */}
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#C9A84C]/10 rounded-full blur-[100px] pointer-events-none" />

          {/* Top Monospace Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-6">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#C9A84C]" />
              <span className="font-mono text-xs sm:text-sm text-[#C9A84C] tracking-widest uppercase">
                PROTOCOL // 02
              </span>
            </div>
            <span className="font-mono text-xs text-white/50 tracking-widest uppercase">
              TELEMETRY BENCHMARKING
            </span>
          </div>

          {/* Main Card Body */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center my-auto">
            
            {/* Left Content */}
            <div className="flex flex-col">
              <span className="font-mono text-xs uppercase tracking-widest text-[#C9A84C] mb-3">
                Phase Two : Pressure Testing
              </span>
              <h3 className="font-sans font-extrabold text-3xl sm:text-5xl text-[#FAF8F5] uppercase tracking-tight leading-tight">
                Institutional Telemetry & Admissions Modeling
              </h3>
              <p className="mt-6 text-sm sm:text-base text-slate-muted leading-relaxed font-light">
                Your candidate dossier is pressure-tested against 2.4 million admissions outcomes across Ivy League, Stanford, and MIT to identify voting vulnerabilities and maximize committee consensus before submission.
              </p>

              <div className="mt-8 flex items-center gap-6">
                <div className="flex flex-col">
                  <span className="font-mono text-xs text-[#C9A84C]">HISTORICAL DATA</span>
                  <span className="font-sans font-bold text-lg text-white">2.4M Portfolios</span>
                </div>
                <div className="w-[1px] h-8 bg-white/10" />
                <div className="flex flex-col">
                  <span className="font-mono text-xs text-[#C9A84C]">PREDICTIVE FIDELITY</span>
                  <span className="font-sans font-bold text-lg text-white">99.1% Confidence</span>
                </div>
              </div>
            </div>

            {/* Right Graphic: Canvas/SVG Animation 2 (Scanning Horizontal Laser across 8x8 Grid) */}
            <div className="relative w-full aspect-square max-w-[380px] mx-auto bg-[#09090D] border border-white/10 rounded-2xl p-6 flex flex-col justify-between overflow-hidden shadow-inner">
              
              {/* Laser Scanning Line */}
              <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent shadow-[0_0_15px_#C9A84C] z-20 animate-[bounce_3s_ease-in-out_infinite]" />

              {/* Grid of Dots and Cells */}
              <div className="grid grid-cols-8 gap-3 my-auto z-10">
                {Array.from({ length: 64 }).map((_, idx) => {
                  const isHighlighted = idx % 7 === 0 || idx === 19 || idx === 42;
                  return (
                    <div
                      key={idx}
                      className={`w-2.5 h-2.5 rounded-sm transition-colors duration-500 ${
                        isHighlighted
                          ? 'bg-[#C9A84C] shadow-[0_0_6px_#C9A84C] scale-125'
                          : 'bg-white/15'
                      }`}
                    />
                  );
                })}
              </div>

              {/* Coordinates Readout */}
              <div className="border-t border-white/10 pt-3 flex items-center justify-between font-mono text-[10px] text-white/60">
                <span className="text-[#C9A84C]">SCAN: STANFORD_HAI_2027</span>
                <span>COORD: [42.3601, -71.0942]</span>
              </div>
            </div>

          </div>

          {/* Bottom Card Footer */}
          <div className="border-t border-white/10 pt-4 flex items-center justify-between text-xs font-mono text-white/40">
            <span>COMMITTEE_VOTE_CONFIDENCE: 94.7%</span>
            <span>MODEL: QUANT_ADMIT_V4</span>
          </div>
        </div>
      </div>

      {/* ========================================================
          PROTOCOL CARD 3: PULSING WAVEFORM PATH ANIMATION
          ======================================================== */}
      <div className="protocol-card w-full h-[100dvh] flex items-center justify-center p-6 sm:p-12 z-30 sticky top-0">
        <div className="relative w-full max-w-6xl h-[88vh] rounded-[2.5rem] bg-[#0D0D12] border border-[#C9A84C]/50 shadow-2xl p-8 sm:p-14 flex flex-col justify-between overflow-hidden">
          
          {/* Top Monospace Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-6">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#C9A84C] animate-ping" />
              <span className="font-mono text-xs sm:text-sm text-[#C9A84C] tracking-widest uppercase">
                PROTOCOL // 03
              </span>
            </div>
            <span className="font-mono text-xs text-white/50 tracking-widest uppercase">
              THE UNRIVALED DOSSIER
            </span>
          </div>

          {/* Main Card Body */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center my-auto">
            
            {/* Left Content */}
            <div className="flex flex-col">
              <span className="font-mono text-xs uppercase tracking-widest text-[#C9A84C] mb-3">
                Phase Three : Narrative Craft
              </span>
              <h3 className="font-sans font-extrabold text-3xl sm:text-5xl text-[#FAF8F5] uppercase tracking-tight leading-tight">
                Masterwork Essay Architecture & Narrative Polish
              </h3>
              <p className="mt-6 text-sm sm:text-base text-slate-muted leading-relaxed font-light">
                Every sentence of your Common App and supplemental portfolio is crafted like high literature — emotionally resonant, intellectually piercing, and impossible to forget in the reading room.
              </p>

              <div className="mt-8 flex items-center gap-6">
                <div className="flex flex-col">
                  <span className="font-mono text-xs text-[#C9A84C]">NARRATIVE DEPTH</span>
                  <span className="font-sans font-bold text-lg text-white">Tier 1 Literary</span>
                </div>
                <div className="w-[1px] h-8 bg-white/10" />
                <div className="flex flex-col">
                  <span className="font-mono text-xs text-[#C9A84C]">UNFAIR ADVANTAGE</span>
                  <span className="font-sans font-bold text-lg text-white">Irresistible Voice</span>
                </div>
              </div>
            </div>

            {/* Right Graphic: Canvas/SVG Animation 3 (Pulsing Waveform with stroke-dashoffset) */}
            <div className="relative w-full aspect-square max-w-[380px] mx-auto bg-[#09090D] border border-white/10 rounded-2xl p-6 flex flex-col justify-between overflow-hidden shadow-inner">
              
              <div className="flex items-center justify-between font-mono text-[10px] text-white/50">
                <span>SPECTRAL_RESONANCE_CH1</span>
                <span className="text-[#C9A84C]">98.6 dB INTELLECTUAL IMPACT</span>
              </div>

              {/* Animated SVG Waveform Path */}
              <div className="w-full h-36 flex items-center justify-center my-auto relative">
                <svg viewBox="0 0 400 120" className="w-full h-full overflow-visible">
                  <defs>
                    <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#C9A84C" stopOpacity="0.2" />
                      <stop offset="50%" stopColor="#FAF8F5" stopOpacity="1" />
                      <stop offset="100%" stopColor="#C9A84C" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                  
                  {/* Background gridlines */}
                  <line x1="0" y1="60" x2="400" y2="60" stroke="#232332" strokeWidth="1" strokeDasharray="4 4" />
                  
                  {/* Glowing Animated Waveform */}
                  <path
                    d="M 0 60 Q 30 60 50 40 T 90 80 T 130 20 T 170 100 T 210 10 T 250 90 T 290 40 T 330 70 T 370 60 L 400 60"
                    fill="none"
                    stroke="url(#waveGradient)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    className="filter drop-shadow-[0_0_8px_rgba(201,168,76,0.8)]"
                    style={{
                      strokeDasharray: '600',
                      strokeDashoffset: '0',
                      animation: 'dashOffset 3.5s cubic-bezier(0.4, 0, 0.2, 1) infinite alternate'
                    }}
                  />
                </svg>

                <style>{`
                  @keyframes dashOffset {
                    0% { stroke-dashoffset: 400; }
                    100% { stroke-dashoffset: 0; }
                  }
                `}</style>
              </div>

              {/* Audio Spectrum Graphic Bars */}
              <div className="flex items-end justify-between gap-1 h-8 px-2 border-t border-white/5 pt-2">
                {[40, 65, 30, 85, 95, 45, 70, 80, 50, 100, 75, 60, 90, 35, 80].map((h, i) => (
                  <div
                    key={i}
                    style={{ height: `${h}%` }}
                    className="w-1.5 bg-[#C9A84C]/80 rounded-t-sm animate-pulse"
                  />
                ))}
              </div>
            </div>

          </div>

          {/* Bottom Card Footer */}
          <div className="border-t border-white/10 pt-4 flex items-center justify-between text-xs font-mono text-white/40">
            <span>FINAL_PORTFOLIO_LOCK: UNCOMPROMISED</span>
            <span className="text-[#C9A84C]">STATUS: READY FOR ADMISSIONS COMMITTEE</span>
          </div>
        </div>
      </div>

    </section>
  );
}
