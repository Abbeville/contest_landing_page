'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-background to-secondary/20">
      <div className="max-w-7xl mx-auto">
        {/* Tag */}
        <div className={`flex justify-center mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5">
            <span className="text-sm text-primary font-medium">The new era of content contests</span>
            <span className="text-primary">↔</span>
          </div>
        </div>

        {/* Heading */}
        <div className={`text-center mb-16 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-4">
            <span className="text-primary">GO VIRAL.</span>
            <br />
            <span className="text-primary italic">GET PAID.</span>
          </h1>
        </div>

        {/* Hero Image */}
        <div className={`relative rounded-3xl overflow-hidden transition-all duration-700 delay-200 mb-12 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent z-10 rounded-3xl" />
          <div className="bg-gradient-to-br from-secondary to-muted/30 rounded-3xl p-8 sm:p-12">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-muted">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-03-04%20at%203.37.22%E2%80%AFPM.png-QcSK5wFhqmXu3FbHTheG9H72nAcflu.jpeg"
                alt="Proffita Platform"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Text and CTA Below Image */}
        <div className={`text-center transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="text-lg sm:text-xl text-foreground max-w-2xl mx-auto leading-relaxed font-semibold mb-2">
            The marketplace where creators earn cash and brands get high performing content.
          </p>
          <p className="text-base text-muted-foreground mb-8 italic">
            Simple, fair, and result driven.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all hover:shadow-xl font-semibold flex items-center justify-center gap-2 group">
              Launch a Contest
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <button className="px-8 py-3 border border-primary text-primary rounded-lg hover:bg-primary/5 transition-all font-semibold flex items-center justify-center gap-2 group">
              Join a Contest
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
