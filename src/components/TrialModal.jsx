import React, { useState } from 'react';
import { X, Sparkles, ArrowRight, CheckCircle2, ShieldCheck, Compass } from 'lucide-react';

export default function TrialModal({ isOpen, onClose }) {
  const [step, setStep] = useState('form'); // 'form' -> 'analyzing' -> 'result'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    targetSchool: 'Stanford University',
    unweightedGPA: '3.96',
    testScore: '1560',
    primaryInterest: 'Artificial Intelligence & Ethics Policy'
  });

  const [analysisStep, setAnalysisStep] = useState(0);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep('analyzing');
    setAnalysisStep(1);

    setTimeout(() => setAnalysisStep(2), 900);
    setTimeout(() => setAnalysisStep(3), 1900);
    setTimeout(() => setAnalysisStep(4), 2800);
    setTimeout(() => setStep('result'), 3600);
  };

  const handleReset = () => {
    setStep('form');
    setAnalysisStep(0);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-in fade-in">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-xl bg-[#13131A] border border-[#C9A84C]/40 rounded-[2.5rem] p-8 sm:p-10 shadow-2xl shadow-[#C9A84C]/10 overflow-hidden text-[#FAF8F5]">
        
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/10 text-white/60 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Ambient Top Glow */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-32 bg-[#C9A84C]/20 blur-[60px] rounded-full pointer-events-none" />

        {/* STEP 1: FORM */}
        {step === 'form' && (
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-6 h-6 rounded-full bg-[#C9A84C] text-[#0D0D12] flex items-center justify-center">
                <Compass className="w-3.5 h-3.5" />
              </div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#C9A84C]">
                Atelier Admissions Intake
              </span>
            </div>

            <h3 className="font-sans font-bold text-2xl sm:text-3xl text-white tracking-tight">
              Initiate Your 14-Day Free Trial
            </h3>
            <p className="text-xs text-slate-muted mt-1 leading-relaxed">
              Instant access to the complete AI College Counselor suite. No credit card required to begin diagnostic modeling.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono text-white/70 uppercase mb-1">
                    Candidate Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Julian Vance"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#09090D] border border-white/10 focus:border-[#C9A84C] focus:outline-none text-xs text-white"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono text-white/70 uppercase mb-1">
                    Confidential Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="candidate@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#09090D] border border-white/10 focus:border-[#C9A84C] focus:outline-none text-xs text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-1">
                  <label className="block text-[11px] font-mono text-white/70 uppercase mb-1">
                    Target Reach
                  </label>
                  <select
                    value={formData.targetSchool}
                    onChange={(e) => setFormData({ ...formData, targetSchool: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#09090D] border border-white/10 focus:border-[#C9A84C] focus:outline-none text-xs text-white"
                  >
                    <option value="Stanford University">Stanford</option>
                    <option value="Harvard College">Harvard</option>
                    <option value="MIT">MIT</option>
                    <option value="Columbia University">Columbia</option>
                    <option value="Princeton University">Princeton</option>
                    <option value="Oxford / Cambridge">Oxbridge</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-mono text-white/70 uppercase mb-1">
                    Unweighted GPA
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 3.98"
                    value={formData.unweightedGPA}
                    onChange={(e) => setFormData({ ...formData, unweightedGPA: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#09090D] border border-white/10 focus:border-[#C9A84C] focus:outline-none text-xs text-white"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono text-white/70 uppercase mb-1">
                    SAT / ACT Score
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 1570 / 35"
                    value={formData.testScore}
                    onChange={(e) => setFormData({ ...formData, testScore: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#09090D] border border-white/10 focus:border-[#C9A84C] focus:outline-none text-xs text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono text-white/70 uppercase mb-1">
                  Primary Intellectual Spike / Extracurricular Focus
                </label>
                <input
                  type="text"
                  placeholder="e.g. Synthetic biology research & state science olympiad founder"
                  value={formData.primaryInterest}
                  onChange={(e) => setFormData({ ...formData, primaryInterest: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#09090D] border border-white/10 focus:border-[#C9A84C] focus:outline-none text-xs text-white"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="btn-magnetic btn-gold w-full py-3.5 rounded-full font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-gold-glow group cursor-pointer"
                >
                  <span className="btn-slide" />
                  <span className="flex items-center gap-2 text-[#0D0D12] font-black transition-colors">
                    Synthesize Admissions Dossier
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[10px] text-white/40 pt-2 font-mono">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C9A84C]" />
                <span>256-BIT ENCRYPTED // ATELIER STRICT CONFIDENTIALITY</span>
              </div>
            </form>
          </div>
        )}

        {/* STEP 2: ANALYZING SIMULATION */}
        {step === 'analyzing' && (
          <div className="py-12 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full border-2 border-[#C9A84C] border-t-transparent animate-spin flex items-center justify-center mb-6">
              <Sparkles className="w-6 h-6 text-[#C9A84C] animate-pulse" />
            </div>

            <h3 className="font-sans font-bold text-2xl text-white uppercase tracking-tight">
              Executing Telemetry Simulation
            </h3>
            <p className="font-mono text-xs text-[#C9A84C] mt-2 tracking-widest">
              INSTITUTIONAL QUANT ENGINE V4.8
            </p>

            <div className="w-full max-w-sm mt-8 space-y-3 font-mono text-xs text-left">
              <div className={`p-2.5 rounded-lg border transition-all ${analysisStep >= 1 ? 'bg-[#161622] border-[#C9A84C]/40 text-white' : 'opacity-20 border-white/5'}`}>
                1. Parsing candidate coursework & standardized telemetry...
              </div>
              <div className={`p-2.5 rounded-lg border transition-all ${analysisStep >= 2 ? 'bg-[#161622] border-[#C9A84C]/40 text-white' : 'opacity-20 border-white/5'}`}>
                2. Benchmarking against 2.4M historical applicant outcomes...
              </div>
              <div className={`p-2.5 rounded-lg border transition-all ${analysisStep >= 3 ? 'bg-[#161622] border-[#C9A84C]/40 text-white' : 'opacity-20 border-white/5'}`}>
                3. Identifying committee voting vulnerabilities & spike purity...
              </div>
              <div className={`p-2.5 rounded-lg border transition-all ${analysisStep >= 4 ? 'bg-[#161622] border-[#C9A84C]/40 text-white' : 'opacity-20 border-white/5'}`}>
                4. Compiling bespoke Ivy Performance trial access...
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: RESULT PREVIEW */}
        {step === 'result' && (
          <div className="py-6 flex flex-col items-start">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[11px] font-mono uppercase mb-4">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Trial Dossier Synthesized
            </div>

            <h3 className="font-sans font-bold text-2xl sm:text-3xl text-white">
              Welcome to the Atelier, {formData.name || 'Candidate'}.
            </h3>
            <p className="text-xs text-slate-muted mt-1 leading-relaxed">
              Your institutional diagnostic model for <strong>{formData.targetSchool}</strong> has been generated and dispatched to your email.
            </p>

            {/* Generated Metrics Card */}
            <div className="w-full my-6 p-5 rounded-2xl bg-[#09090D] border border-[#C9A84C]/40 font-mono text-xs space-y-3">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <span className="text-white/60">TARGET INSTITUTION:</span>
                <span className="text-[#C9A84C] font-bold">{formData.targetSchool}</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <span className="text-white/60">ADMISSIONS SPIKE PURITY:</span>
                <span className="text-emerald-400 font-bold">96.4% // TIER 1 S-RANK</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <span className="text-white/60">COMMITTEE CONSENSUS PROJECTION:</span>
                <span className="text-white font-bold">+280% Above Baseline</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/60">14-DAY TRIAL STATUS:</span>
                <span className="text-[#C9A84C] font-bold">ACTIVE & UNLOCKED</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="btn-magnetic btn-gold w-full py-3.5 rounded-full font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-gold-glow cursor-pointer"
            >
              <span className="btn-slide" />
              <span className="flex items-center gap-2 text-[#0D0D12] font-black transition-colors">
                Enter Candidate Workspace
                <ArrowRight className="w-4 h-4" />
              </span>
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
