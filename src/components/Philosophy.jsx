import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect on the background texture
      gsap.to('.manifesto-bg', {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      // SplitText-style word reveal triggered by ScrollTrigger
      const words = gsap.utils.toArray('.manifesto-word');
      gsap.from(words, {
        scrollTrigger: {
          trigger: '.manifesto-content',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        y: 35,
        opacity: 0,
        duration: 0.8,
        stagger: 0.04,
        ease: 'power3.out',
      });

      gsap.from('.manifesto-tag', {
        scrollTrigger: {
          trigger: '.manifesto-content',
          start: 'top 85%',
        },
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Split sentence into words for GSAP staggered animation
  const statement1 = "Most college counseling focuses on: standardized checklists, superficial grammar edits, and safe, cookie-cutter resumes that get lost in the committee pile.";
  const words1 = statement1.split(" ");

  const part2A = "We focus on:";
  const part2B = "engineering an authentic";
  const part2Highlight = "intellectual spike";
  const part2C = "so singular that admissions committees cannot look away.";

  return (
    <section
      id="philosophy"
      ref={sectionRef}
      className="relative w-full py-32 sm:py-44 px-6 sm:px-12 lg:px-20 bg-[#0D0D12] text-[#FAF8F5] overflow-hidden flex items-center justify-center min-h-[90vh]"
    >
      {/* Parallaxing Texture Image at Low Opacity */}
      <div className="manifesto-bg absolute inset-0 -top-24 -bottom-24 w-full h-[120%] pointer-events-none z-0">
        <img
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=2000&q=80"
          alt="Dark Gold Luxury Texture"
          className="w-full h-full object-cover object-center opacity-15 filter brightness-50 contrast-150"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D12] via-transparent to-[#0D0D12]" />
      </div>

      {/* Decorative Atmosphere Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#C9A84C]/5 blur-[150px] rounded-full pointer-events-none" />

      {/* Content Container */}
      <div className="manifesto-content relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
        
        {/* Monospace Header Tag */}
        <div className="manifesto-tag inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#161622] border border-[#C9A84C]/30 mb-12">
          <Quote className="w-3.5 h-3.5 text-[#C9A84C]" />
          <span className="font-mono text-xs uppercase tracking-widest text-[#C9A84C]">
            The Manifesto // Doctrine 01
          </span>
        </div>

        {/* Statement 1: Neutral, smaller */}
        <div className="mb-14 max-w-3xl">
          <p className="font-sans text-lg sm:text-2xl text-[#8A8A9E] font-light leading-relaxed">
            {words1.map((word, i) => (
              <span key={i} className="manifesto-word inline-block mr-1.5">
                {word}
              </span>
            ))}
          </p>
        </div>

        {/* Divider with Gold Accent */}
        <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent mb-14" />

        {/* Statement 2: Massive Drama Serif Italic with Accent-colored Keyword */}
        <div className="max-w-4xl">
          <h2 className="font-serif italic text-3xl sm:text-5xl lg:text-6xl text-[#FAF8F5] leading-tight font-normal">
            <span className="manifesto-word block sm:inline font-sans text-xs sm:text-base font-bold uppercase tracking-widest text-[#C9A84C] not-italic mb-3 sm:mb-0 sm:mr-3">
              {part2A}
            </span>
            <span className="manifesto-word inline">
              {part2B}{' '}
            </span>
            <span className="manifesto-word inline text-[#C9A84C] font-semibold underline decoration-[#C9A84C]/40 underline-offset-8">
              {part2Highlight}{' '}
            </span>
            <span className="manifesto-word inline">
              {part2C}
            </span>
          </h2>
        </div>

        {/* Bottom Attribution */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col items-center">
          <span className="font-mono text-xs text-[#FAF8F5]/60 uppercase tracking-widest">
            AI College Counselor Atelier Advisory Board
          </span>
          <span className="text-[11px] text-[#C9A84C] font-mono mt-1">
            EST. CAMBRIDGE & STANFORD BIO-COMPUTE LABS
          </span>
        </div>

      </div>
    </section>
  );
}
