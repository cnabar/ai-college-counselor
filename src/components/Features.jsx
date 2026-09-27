import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Terminal, 
  Calendar, 
  CheckCircle2, 
  TrendingUp, 
  ShieldAlert, 
  ArrowRight,
  MousePointer2,
  RefreshCw,
  Layers
} from 'lucide-react';

export default function Features() {
  /* ============================================================
   * CARD 1: DIAGNOSTIC SHUFFLER (Value Prop 1: Personalized Recommendations)
   * 3 overlapping cards cycling vertically with spring-bounce transition
   * ============================================================ */
  const initialCards = [
    {
      id: 1,
      university: 'Stanford University',
      department: 'Symbolic Systems & AI Governance',
      matchScore: '97.4%',
      spikeLabel: 'Algorithm Ethics Lead',
      tier: 'Reach Resonance',
      color: '#C9A84C',
      rationale: 'High alignment with Stanford HAI lab undergraduate research initiatives.'
    },
    {
      id: 2,
      university: 'Columbia University',
      department: 'Cognitive Science & Linguistics',
      matchScore: '99.2%',
      spikeLabel: 'Computational Semantics Pre-Fellow',
      tier: 'Target Lock',
      color: '#E2CE90',
      rationale: 'Core Curriculum essay angle matches candidate dual-humanities spike.'
    },
    {
      id: 3,
      university: 'Williams & Oxford Tutorial',
      department: 'Philosophy, Politics & Economics',
      matchScore: '98.8%',
      spikeLabel: 'Independent Archival Economics',
      tier: 'Selective Anchor',
      color: '#9F7E2F',
      rationale: 'Exceptional fit for 1-on-1 Oxbridge-style tutorial pedagogy.'
    }
  ];

  const [cards, setCards] = useState(initialCards);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCards((prev) => {
        const copy = [...prev];
        const last = copy.pop();
        copy.unshift(last);
        return copy;
      });
    }, 3200);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleManualShuffle = () => {
    setCards((prev) => {
      const copy = [...prev];
      const last = copy.pop();
      copy.unshift(last);
      return copy;
    });
  };

  /* ============================================================
   * CARD 2: TELEMETRY TYPEWRITER (Value Prop 2: Progress Tracker)
   * Monospace live feed with typewriter effect & pulsing cursor
   * ============================================================ */
  const telemetryLogs = [
    '> [08:42:19] Extracurricular Spike Analysis: Top 0.1% National Tier verified',
    '> [08:42:24] Common App Personal Statement (Rev 7): Narrative depth index 96.8 / 100',
    '> [08:42:30] Faculty Letter Calibrated: MIT Dept Chair research syllabus mapped',
    '> [08:42:35] Standardized Test Calibration: SAT 1580 (Math 800, EBRW 780) verified',
    '> [08:42:41] Early Decision 1 Readiness: 98.4% completed — Ahead of schedule',
    '> [08:42:48] Admissions Committee Simulator: Consensus admit in 4 of 4 Ivy mock panels'
  ];

  const [logIndex, setLogIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let currentLine = telemetryLogs[logIndex];
    let charIndex = 0;
    setDisplayedText('');
    setIsTyping(true);

    const typeInterval = setInterval(() => {
      if (charIndex <= currentLine.length) {
        setDisplayedText(currentLine.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
        const timeout = setTimeout(() => {
          setLogIndex((prev) => (prev + 1) % telemetryLogs.length);
        }, 2200);
        return () => clearTimeout(timeout);
      }
    }, 32);

    return () => clearInterval(typeInterval);
  }, [logIndex]);

  /* ============================================================
   * CARD 3: CURSOR PROTOCOL SCHEDULER (Value Prop 3: Planning Coach)
   * Weekly grid where animated cursor moves, clicks, saves, and loops
   * ============================================================ */
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const dayTasks = [
    { day: 'Sun', task: 'Strategy Synchronization & Narrative Alignment' },
    { day: 'Mon', task: 'Common App Essay Revision 7 (Spike Polish)' },
    { day: 'Tue', task: 'Stanford Short Answers: Intellectual Vitality' },
    { day: 'Wed', task: 'International Olympiad Artifacts Verification' },
    { day: 'Thu', task: 'Mock Admissions Committee Simulation' },
    { day: 'Fri', task: 'Faculty Recommendation Dossier Calibration' },
    { day: 'Sat', task: '1-on-1 Atelier Senior Advisor Review' }
  ];

  const [activeDayIndex, setActiveDayIndex] = useState(2);
  const [cursorPhase, setCursorPhase] = useState('entering'); // entering -> hovering -> clicked -> saving -> done
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    // 6-second choreography loop
    const cycle = () => {
      setCursorPhase('entering');
      setIsSaved(false);

      const t1 = setTimeout(() => {
        setCursorPhase('hovering');
      }, 1000);

      const t2 = setTimeout(() => {
        setCursorPhase('clicked');
        setActiveDayIndex((prev) => (prev + 1) % 7);
      }, 2200);

      const t3 = setTimeout(() => {
        setCursorPhase('saving');
      }, 3400);

      const t4 = setTimeout(() => {
        setIsSaved(true);
        setCursorPhase('saved');
      }, 4200);

      const t5 = setTimeout(() => {
        setCursorPhase('fading');
      }, 5400);

      return [t1, t2, t3, t4, t5];
    };

    let timers = cycle();
    const interval = setInterval(() => {
      timers.forEach(clearTimeout);
      timers = cycle();
    }, 6200);

    return () => {
      timers.forEach(clearTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <section id="features" className="relative w-full py-28 px-6 sm:px-12 lg:px-16 bg-[#0D0D12] text-[#FAF8F5] overflow-hidden">
      
      {/* Background Ambience Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#C9A84C]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161622] border border-[#C9A84C]/25 mb-4">
            <Layers className="w-3.5 h-3.5 text-[#C9A84C]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#C9A84C]">
              Interactive Functional Artifacts
            </span>
          </div>
          <h2 className="font-sans font-bold text-3xl sm:text-5xl text-[#FAF8F5] tracking-tight uppercase">
            Instruments of Admissions Mastery
          </h2>
          <p className="mt-4 max-w-2xl text-slate-muted text-base sm:text-lg">
            Every module in the AI College Counselor atelier functions as a live digital instrument — synthesizing institutional intelligence into definitive advantages.
          </p>
        </div>

        {/* 3 Interactive Feature Artifact Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* ========================================================
              CARD 1: DIAGNOSTIC SHUFFLER (Personalized Recommendations)
              ======================================================== */}
          <div 
            className="group relative bg-[#13131A] border border-[#232332] hover:border-[#C9A84C]/40 rounded-[2.5rem] p-7 flex flex-col justify-between shadow-obsidian-card transition-all duration-300 overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Card Header */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[11px] text-[#C9A84C] tracking-widest uppercase">
                  ARTIFACT 01 // SHUFFLER
                </span>
                <button
                  onClick={handleManualShuffle}
                  className="p-1.5 rounded-full hover:bg-white/10 text-white/60 hover:text-[#C9A84C] transition-colors cursor-pointer"
                  title="Cycle matrix"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
              </div>
              <h3 className="font-sans font-bold text-2xl text-[#FAF8F5] tracking-tight">
                Personalized Recommendations
              </h3>
              <p className="text-xs text-slate-muted mt-1 leading-relaxed">
                Algorithmic institutional match engine indexing reach, target, and departmental faculty resonance.
              </p>
            </div>

            {/* Overlapping Shuffler Stage */}
            <div className="relative h-64 my-6 w-full flex items-center justify-center">
              {cards.map((card, index) => {
                // Calculation for overlapping spring stack
                const offset = index * 14;
                const scale = 1 - index * 0.05;
                const opacity = 1 - index * 0.22;
                const zIndex = 30 - index * 10;

                return (
                  <div
                    key={card.id}
                    style={{
                      transform: `translateY(${offset}px) scale(${scale})`,
                      zIndex: zIndex,
                      opacity: opacity,
                      transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'
                    }}
                    className="absolute inset-x-0 top-0 p-5 rounded-2xl bg-[#161622] border border-[#C9A84C]/30 shadow-xl backdrop-blur-md"
                  >
                    <div className="flex items-center justify-between border-b border-white/5 pb-2.5 mb-2.5">
                      <span className="font-mono text-[10px] text-[#C9A84C] tracking-wider uppercase">
                        {card.tier}
                      </span>
                      <span className="font-mono text-xs font-bold text-white px-2 py-0.5 rounded-full bg-[#C9A84C]/20 border border-[#C9A84C]/40">
                        {card.matchScore} FIT
                      </span>
                    </div>

                    <h4 className="font-sans font-bold text-base text-white">{card.university}</h4>
                    <p className="text-xs text-[#FAF8F5]/70 font-mono mt-0.5">{card.department}</p>

                    <div className="mt-3 pt-2.5 border-t border-white/5 flex items-center justify-between text-[11px]">
                      <span className="text-white/60">Spike Alignment:</span>
                      <span className="text-[#C9A84C] font-mono font-medium">{card.spikeLabel}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Card Footer Status */}
            <div className="pt-4 border-t border-white/5 flex items-center justify-between">
              <span className="font-mono text-[10px] text-white/50">
                CYCLES EVERY 3.2s // SPRING PHYSICS
              </span>
              <span className="font-mono text-[10px] text-[#C9A84C]">
                3 OF 24 MATCHES
              </span>
            </div>
          </div>

          {/* ========================================================
              CARD 2: TELEMETRY TYPEWRITER (Progress Tracker)
              ======================================================== */}
          <div className="group relative bg-[#13131A] border border-[#232332] hover:border-[#C9A84C]/40 rounded-[2.5rem] p-7 flex flex-col justify-between shadow-obsidian-card transition-all duration-300">
            {/* Card Header */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[11px] text-[#C9A84C] tracking-widest uppercase">
                  ARTIFACT 02 // TELEMETRY
                </span>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#161622] border border-[#C9A84C]/30">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C9A84C] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#C9A84C]"></span>
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-[#FAF8F5]">
                    Live Feed
                  </span>
                </div>
              </div>
              <h3 className="font-sans font-bold text-2xl text-[#FAF8F5] tracking-tight">
                Progress Tracker
              </h3>
              <p className="text-xs text-slate-muted mt-1 leading-relaxed">
                Real-time milestone telemetry streaming every essay rewrite, testing delta, and committee simulation score.
              </p>
            </div>

            {/* Terminal Window Box */}
            <div className="my-6 p-4 rounded-2xl bg-[#09090D] border border-white/10 font-mono text-xs flex flex-col justify-between h-64 overflow-hidden relative shadow-inner">
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-500/70" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/70" />
                  <div className="w-2 h-2 rounded-full bg-green-500/70" />
                  <span className="text-[10px] text-white/40 ml-2">telemetry_daemon_v4.8</span>
                </div>
                <span className="text-[9px] text-[#C9A84C]">98.4% READINESS</span>
              </div>

              {/* Historical Log Stream */}
              <div className="flex flex-col gap-2 opacity-40 text-[10px] text-white/70 overflow-hidden">
                <div>[SYSTEM] Applicant Spikes Index: Normalized</div>
                <div>[SYSTEM] SAT Superscore 1580: EBRW 780 | Math 800</div>
                <div>[SYSTEM] Admissions Committee Consensus: Calibrated</div>
              </div>

              {/* Active Typewriter Line */}
              <div className="mt-3 p-2.5 rounded-lg bg-[#161622]/80 border border-[#C9A84C]/30 text-white min-h-[64px] flex items-center">
                <p className="leading-snug text-[11px] text-[#FAF8F5]">
                  {displayedText}
                  <span className="inline-block w-2 h-3.5 ml-1 bg-[#C9A84C] animate-pulse align-middle" />
                </p>
              </div>

              {/* Bottom Quick Metric Bar */}
              <div className="mt-2 pt-2 border-t border-white/5 flex items-center justify-between text-[10px] text-white/60">
                <span>SPIKE TIER: <strong className="text-[#C9A84C]">S+</strong></span>
                <span>PROMPT DEPTH: <strong className="text-[#C9A84C]">96.8</strong></span>
                <span>STATUS: <strong className="text-emerald-400">READY</strong></span>
              </div>
            </div>

            {/* Card Footer Status */}
            <div className="pt-4 border-t border-white/5 flex items-center justify-between">
              <span className="font-mono text-[10px] text-white/50">
                ACTIVE MONITOR // LATENCY 12ms
              </span>
              <span className="font-mono text-[10px] text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> VERIFIED
              </span>
            </div>
          </div>

          {/* ========================================================
              CARD 3: CURSOR PROTOCOL SCHEDULER (Planning Coach)
              ======================================================== */}
          <div className="group relative bg-[#13131A] border border-[#232332] hover:border-[#C9A84C]/40 rounded-[2.5rem] p-7 flex flex-col justify-between shadow-obsidian-card transition-all duration-300 overflow-hidden">
            {/* Card Header */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[11px] text-[#C9A84C] tracking-widest uppercase">
                  ARTIFACT 03 // SCHEDULER
                </span>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-[#161622] text-[#C9A84C] border border-[#C9A84C]/30">
                  AUTONOMOUS CADENCE
                </span>
              </div>
              <h3 className="font-sans font-bold text-2xl text-[#FAF8F5] tracking-tight">
                Planning Coach
              </h3>
              <p className="text-xs text-slate-muted mt-1 leading-relaxed">
                Adaptive timeline choreographing early decision deadlines, research uploads, and dean interviews.
              </p>
            </div>

            {/* Weekly Grid + Animated Cursor Stage */}
            <div className="my-6 p-4 rounded-2xl bg-[#161622] border border-[#C9A84C]/25 h-64 flex flex-col justify-between relative overflow-hidden">
              
              {/* Day Header */}
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-[#C9A84C] uppercase tracking-wider">
                  WEEK 42 // OCT 15 SPRINT
                </span>
                <span className="font-mono text-[10px] text-white/60">
                  {dayTasks[activeDayIndex].day} Selected
                </span>
              </div>

              {/* 7-Day Grid (S M T W T F S) */}
              <div className="grid grid-cols-7 gap-1.5 my-3 relative">
                {days.map((day, idx) => {
                  const isSelected = activeDayIndex === idx;
                  return (
                    <div
                      key={idx}
                      className={`h-11 rounded-xl flex flex-col items-center justify-center font-mono text-xs transition-all duration-300 ${
                        isSelected
                          ? 'bg-[#C9A84C] text-[#0D0D12] font-bold shadow-gold-soft scale-105'
                          : 'bg-[#0D0D12]/70 text-white/70 hover:bg-[#0D0D12]'
                      }`}
                    >
                      <span className="text-[10px]">{day}</span>
                      <span className="text-[9px] opacity-75">{14 + idx}</span>
                    </div>
                  );
                })}
              </div>

              {/* Task Details for Selected Day */}
              <div className="p-3 rounded-xl bg-[#0D0D12]/90 border border-white/5 flex flex-col gap-1">
                <div className="flex items-center justify-between text-[10px]">
                  <span className="font-mono text-[#C9A84C]">CHOREOGRAPHED SPRINT:</span>
                  <span className="font-mono text-emerald-400">92% CONFIDENCE</span>
                </div>
                <p className="text-xs text-[#FAF8F5] font-medium truncate">
                  {dayTasks[activeDayIndex].task}
                </p>
              </div>

              {/* Save Protocol Button */}
              <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/5">
                <span className="text-[10px] text-white/40 font-mono">AUTOSAVE: ON</span>
                <div 
                  className={`px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider transition-all duration-300 ${
                    isSaved
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                      : cursorPhase === 'saving'
                      ? 'bg-[#C9A84C] text-[#0D0D12]'
                      : 'bg-white/10 text-white/80'
                  }`}
                >
                  {isSaved ? 'PROTOCOL SAVED ✓' : 'SAVE SCHEDULE'}
                </div>
              </div>

              {/* Animated SVG Cursor */}
              <div
                className={`absolute pointer-events-none transition-all duration-700 ease-out z-40 ${
                  cursorPhase === 'entering'
                    ? 'top-4 left-4 opacity-0'
                    : cursorPhase === 'hovering'
                    ? 'top-16 left-[48%] opacity-100'
                    : cursorPhase === 'clicked'
                    ? 'top-16 left-[48%] scale-90 opacity-100'
                    : cursorPhase === 'saving'
                    ? 'bottom-4 right-8 scale-95 opacity-100'
                    : cursorPhase === 'saved'
                    ? 'bottom-4 right-8 scale-100 opacity-100'
                    : 'bottom-4 right-8 opacity-0'
                }`}
              >
                <div className="flex items-center gap-1">
                  <MousePointer2 className="w-5 h-5 text-[#C9A84C] fill-[#C9A84C] drop-shadow-[0_2px_8px_rgba(201,168,76,0.6)]" />
                  <span className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-[#0D0D12] text-[#C9A84C] border border-[#C9A84C]/40 shadow">
                    AI Agent
                  </span>
                </div>
              </div>
            </div>

            {/* Card Footer Status */}
            <div className="pt-4 border-t border-white/5 flex items-center justify-between">
              <span className="font-mono text-[10px] text-white/50">
                CONTINUOUS CADENCE ENGINE
              </span>
              <span className="font-mono text-[10px] text-[#C9A84C]">
                NEXT DEADLINE: 14 DAYS
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
