'use client';

import { useEffect, useState } from 'react';

export default function HowItWorksSection() {
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

    const element = document.getElementById('how-it-works-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      number: '01',
      title: 'Brands launch a contest',
      description: 'Brands create a contest, set the prize pool, and share what kind of content they want.',
    },
    {
      number: '02',
      title: 'Creators join and create',
      description: 'Creators pick contests they like and post content on their social media, following the brief.',
    },
    {
      number: '03',
      title: 'Content goes live & competes',
      description: 'All entries compete based on real views and engagement. No picking favorites.',
    },
    {
      number: '04',
      title: 'Performance decides winners',
      description: 'The videos that perform best rise to the top of the leaderboard.',
    },
    {
      number: '05',
      title: 'Creators get paid',
      description: 'Winning creators earn cash rewards and grow their profile and work with more brands over time.',
    },
    {
      number: '06',
      title: 'Brands get content that works',
      description: 'Brands get high quality social media content that actually drives results.',
    },
  ];

  return (
    <section id="how-it-works-section" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h2 className="text-4xl sm:text-5xl font-black text-primary mb-4">HOW IT WORKS:</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A simple flow where brands launch contests, creators post content, and performance decides the winners.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`group transition-all duration-500 delay-${100 * (index % 3)} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="relative h-full p-8 rounded-2xl border border-border bg-white hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                {/* Number */}
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl border border-primary/30 bg-primary/5 group-hover:bg-primary/10 transition-colors">
                    <span className="text-2xl font-black text-primary/60 group-hover:text-primary transition-colors">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>

                {/* Accent line */}
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-transparent w-0 group-hover:w-full transition-all duration-300 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
