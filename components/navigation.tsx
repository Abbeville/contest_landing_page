'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Navigation() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border m-3 b-6 rounded-lg shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image src="/images/logo-and-wordmark.svg" alt="Logo" width={240} height={240} className="sm:inline-block sm:h-auto mr-5" />
          </Link>

          {/* Links */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('brands-section')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              For Brands
            </button>
            <button
              onClick={() => scrollToSection('creators-section')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              For Creators
            </button>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <Link href="https://app.proffita.com/creator/login" className="text-foreground hover:text-primary transition-colors hidden sm:block">
              Login
            </Link>
            <Link href="https://app.proffita.com/brand/login" className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all hover:shadow-lg font-medium text-sm ml-4">
              Get started now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
