import React from 'react';
import { Check, Sparkles, ArrowUpRight, Shield, Zap, Crown } from 'lucide-react';

export default function Pricing({ onOpenTrial }) {
  const tiers = [
    {
      name: 'Essential Scholar',
      badge: 'SELF-DIRECTED CANDIDATES',
      price: '$199',
      period: 'per month',
      description: 'Ideal for independent high-achievers needing precise algorithmic calibration and reach/target analysis.',
      popular: false,
      features: [
        'Full AI Diagnostic Spike Profiling',
        '20 Top-Tier University Match Matrices',
        'Real-time Common App Essay Feedback Engine',
        'Weekly Milestone Telemetry Tracker',
        'Automated Standardized Testing Roadmap',
        'Standard Discord Community Access'
      ],
      ctaText: 'Start Free Trial',
      buttonStyle: 'bg-white/10 hover:bg-white/20 text-[#FAF8F5] border border-white/15'
    },
    {
      name: 'Ivy Performance',
      badge: 'MOST SELECTED BY CANDIDATES',
      price: '$499',
      period: 'per month',
      description: 'The complete digital instrument for competitive Ivy, Stanford, MIT, and Oxford applicants.',
      popular: true,
      features: [
        'Everything in Essential Scholar',
        'Unlimited Supplemental Essay Deep Iterations',
        'Admissions Committee Simulation (Consensus Modeling)',
        'Extracurricular Spike Reconstruction & Validation',
        'Letters of Recommendation Calibration Dossiers',
        'Bi-weekly Strategic Review with Former Admissions Deans',
        'Priority 24/7 Atelier Discord & Direct Telegram Access'
      ],
      ctaText: 'Start Free Trial',
      buttonStyle: 'bg-[#C9A84C] text-[#0D0D12] shadow-gold-glow hover:shadow-gold-soft'
    },
    {
      name: 'Private Atelier',
      badge: 'EXCLUSIVE BESPOKE CUSTODY',
      price: '$1,450',
      period: 'per month',
      description: 'White-glove admissions guardianship paired with dedicated Ivy League former senior officers.',
      popular: false,
      features: [
        'Everything in Ivy Performance',
        'Dedicated 1-on-1 Senior Admissions Dean assigned',
        'Guaranteed Early Action / Decision submission audit',
        'High-Impact Academic Research Paper Co-advising',
        'Full White-Glove Interview Coaching with Video Review',
        'Direct 24/7 Private Concierge Phone Line',
        'Limited to 15 Candidates Annually'
      ],
      ctaText: 'Request Private Access',
      buttonStyle: 'bg-white/10 hover:bg-white/20 text-[#FAF8F5] border border-white/15'
    }
  ];

  return (
    <section id="pricing" className="relative w-full py-28 sm:py-36 px-6 sm:px-12 lg:px-16 bg-[#0D0D12] text-[#FAF8F5] overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[#C9A84C]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161622] border border-[#C9A84C]/30 mb-4">
            <Crown className="w-3.5 h-3.5 text-[#C9A84C]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#C9A84C]">
              Atelier Membership Tiers
            </span>
          </div>
          <h2 className="font-sans font-bold text-3xl sm:text-5xl text-[#FAF8F5] uppercase tracking-tight">
            Invest in Undeniable Distinction
          </h2>
          <p className="mt-4 text-slate-muted text-base sm:text-lg">
            Every plan unlocks access to our proprietary 2.4M-record institutional telemetry models. Cancel or upgrade anytime with zero penalties.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier) => {
            const isMiddle = tier.popular;
            return (
              <div
                key={tier.name}
                className={`relative flex flex-col justify-between rounded-[2.5rem] p-8 sm:p-10 transition-all duration-300 ${
                  isMiddle
                    ? 'bg-[#13131A] border-2 border-[#C9A84C] shadow-2xl shadow-[#C9A84C]/15 lg:-translate-y-4'
                    : 'bg-[#13131A]/70 border border-[#232332] hover:border-white/20'
                }`}
              >
                {/* Popular Badge */}
                {isMiddle && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#C9A84C] to-[#E2CE90] text-[#0D0D12] font-mono text-[10px] font-bold tracking-widest uppercase shadow-md flex items-center gap-1.5 whitespace-nowrap">
                    <Sparkles className="w-3 h-3 fill-[#0D0D12]" />
                    {tier.badge}
                  </div>
                )}

                <div>
                  {!isMiddle && (
                    <span className="font-mono text-[10px] text-[#C9A84C] tracking-widest uppercase block mb-2">
                      {tier.badge}
                    </span>
                  )}

                  <h3 className="font-sans font-bold text-2xl text-[#FAF8F5] mt-2">
                    {tier.name}
                  </h3>
                  <p className="text-xs text-slate-muted mt-2 leading-relaxed min-h-[36px]">
                    {tier.description}
                  </p>

                  {/* Price */}
                  <div className="my-8 pb-6 border-b border-white/10 flex items-baseline gap-2">
                    <span className="font-sans font-extrabold text-4xl sm:text-5xl text-[#FAF8F5]">
                      {tier.price}
                    </span>
                    <span className="font-mono text-xs text-[#FAF8F5]/60">
                      /{tier.period}
                    </span>
                  </div>

                  {/* Feature List */}
                  <ul className="space-y-3.5 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#FAF8F5]/90">
                        <div className={`mt-0.5 p-0.5 rounded-full ${isMiddle ? 'bg-[#C9A84C]/20 text-[#C9A84C]' : 'bg-white/10 text-white'}`}>
                          <Check className="w-3 h-3" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button
                  onClick={onOpenTrial}
                  className={`btn-magnetic w-full py-4 rounded-full font-sans font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 group cursor-pointer ${tier.buttonStyle}`}
                >
                  <span className={`btn-slide ${isMiddle ? 'bg-[#FAF8F5]' : 'bg-[#C9A84C]'}`} />
                  <span className={`flex items-center gap-2 transition-colors ${isMiddle ? 'group-hover:text-[#0D0D12]' : 'group-hover:text-[#0D0D12]'}`}>
                    {tier.ctaText}
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-16 p-6 rounded-[2rem] bg-[#161622] border border-[#C9A84C]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#C9A84C]/20 text-[#C9A84C] flex items-center justify-center shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-sans font-bold text-sm text-white">
                14-Day Unconditional Admissions Guarantee
              </h4>
              <p className="text-xs text-white/60">
                If our diagnostic spike roadmap does not completely transform your admissions strategy, receive a full refund with one click.
              </p>
            </div>
          </div>
          <button
            onClick={onOpenTrial}
            className="px-5 py-2.5 rounded-full bg-[#C9A84C] text-[#0D0D12] text-xs font-bold uppercase tracking-wider whitespace-nowrap shrink-0 hover:bg-[#E2CE90] transition-colors"
          >
            Start Risk-Free Trial
          </button>
        </div>

      </div>
    </section>
  );
}
