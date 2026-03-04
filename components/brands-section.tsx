'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

export default function BrandsSection() {
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

    const element = document.getElementById('brands-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const benefits = [
    'High quality authentic content.',
    'Monitor creator submissions, engagement flow, and leaderboard momentum.',
    'Automate payouts with built-in compliance, taxes, and receipts.',
  ];

  return (
    <section id="brands-section" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">FOR BRANDS:</h3>
                <h2 className="text-4xl sm:text-5xl font-black">
                  <span className="text-primary">LAUNCH</span> <span className="text-primary">&</span> <span className="text-primary italic">SCALE</span>
                </h2>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Stop guessing which creators work. Run a contest, set your prize pool, and let the algorithm decide. Only pay for the content that actually drives results.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className={`flex gap-4 items-start transition-all duration-500 delay-200 ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                    }`}
                  >
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="w-6 h-6 text-primary" fill="currentColor" />
                    </div>
                    <p className="text-base text-foreground">{benefit}</p>
                  </div>
                ))}
              </div>

              <button className="mt-8 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all hover:shadow-lg font-semibold inline-flex items-center gap-2 group">
                Launch a Contest
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>

          {/* Image */}
          <div className={`transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-muted to-secondary p-8">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-muted">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-03-04%20at%203.37.40%E2%80%AFPM-8UzQSxzG5BazTc0X26GQyy4rBpwwcg.png"
                  alt="Analytics Dashboard"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
