'use client';

import { useState, useEffect } from 'react';
import Navigation from '@/components/navigation';
import HeroSection from '@/components/hero-section';
import CreatorsSection from '@/components/creators-section';
import BrandsSection from '@/components/brands-section';
import HowItWorksSection from '@/components/how-it-works-section';
import CTASection from '@/components/cta-section';
import Footer from '@/components/footer';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <CreatorsSection />
      <BrandsSection />
      <HowItWorksSection />
      <CTASection />
      <Footer />
    </main>
  );
}
