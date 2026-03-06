'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

export default function CreatorsSection() {
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

    const element = document.getElementById('creators-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const benefits = [
    'Compete in contest and get access to work with big brands.',
    'Do what you do best and create content to win cash prizes for viral hits.',
    'Build your professional portfolio.',
  ];

  return (
    <section id="creators-section" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className={`order-2 lg:order-1 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-muted to-secondary p-2">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-muted">
                <Image
                  src="/images/creator_section_img.webp"
                  alt="Leaderboard"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={`order-1 lg:order-2 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">FOR CREATORS:</h3>
                <h2 className="text-4xl sm:text-5xl font-black">
                  <span className="text-primary">EARN</span> <span className="text-primary">&</span> <span className="text-primary italic">GROW</span>
                </h2>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Showcase your talent, work with top-tier brands, and win massive prizes. If your content stands out, the rewards follow. No gatekeepers.
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
