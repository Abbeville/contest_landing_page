'use client';

import { useEffect, useState } from 'react';

export default function CTASection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('cta-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="cta-section" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className={`relative rounded-3xl overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-amber-600" />
          
          {/* Overlay pattern */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_50%,rgba(0,0,0,0.3),transparent),radial-gradient(circle_at_80%_80%,rgba(0,0,0,0.2),transparent)]" />

          {/* Content */}
          <div className="relative px-8 sm:px-12 lg:px-16 py-16 sm:py-24 text-center">
            <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              Start Creating. Start Winning.
            </h2>

            <p className={`text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-12 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              Whether you're a brand or a creator, it all starts with one contest.
            </p>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row justify-center gap-4 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <button className="px-8 py-3 bg-white text-primary rounded-lg hover:bg-white/90 transition-all hover:shadow-xl font-semibold flex items-center justify-center gap-2 group">
                Launch a Contest
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
              <button className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-all font-semibold flex items-center justify-center gap-2 group">
                Join a Contest
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
