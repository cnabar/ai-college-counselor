import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Philosophy from './components/Philosophy';
import Protocol from './components/Protocol';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import TrialModal from './components/TrialModal';

export default function App() {
  const [isTrialOpen, setIsTrialOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#0D0D12] text-[#FAF8F5] selection:bg-[#C9A84C] selection:text-[#0D0D12]">
      {/* Floating Island Navigation */}
      <Navbar onOpenTrial={() => setIsTrialOpen(true)} />

      {/* Opening Shot Hero */}
      <main>
        <Hero onOpenTrial={() => setIsTrialOpen(true)} />

        {/* Interactive Functional Artifacts (Shuffler, Typewriter, Scheduler) */}
        <Features />

        {/* The Manifesto */}
        <Philosophy />

        {/* Sticky Stacking Archive Protocol */}
        <Protocol />

        {/* Membership / Pricing */}
        <Pricing onOpenTrial={() => setIsTrialOpen(true)} />
      </main>

      {/* Atelier Footer */}
      <Footer onOpenTrial={() => setIsTrialOpen(true)} />

      {/* Interactive 14-Day Free Trial Modal */}
      <TrialModal isOpen={isTrialOpen} onClose={() => setIsTrialOpen(false)} />
    </div>
  );
}
