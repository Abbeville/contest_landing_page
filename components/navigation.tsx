'use client';

import Link from 'next/link';

export default function Navigation() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-amber-600 rounded-lg flex items-center justify-center">
              <div className="w-5 h-5 bg-background rounded-md flex items-center justify-center">
                <span className="text-xs font-bold text-primary">P</span>
              </div>
            </div>
            <span className="text-lg font-bold text-primary">PROFFITA</span>
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
            <Link href="#" className="text-foreground hover:text-primary transition-colors hidden sm:block">
              Login
            </Link>
            <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all hover:shadow-lg font-medium text-sm">
              Get started now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
