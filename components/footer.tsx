import Link from 'next/link';
import { Facebook, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Top Section */}
        <div className="flex flex-col items-center justify-center text-center mb-12">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 mb-6 group">
            <Image src="/images/logo-and-wordmark.svg" alt="Logo" width={200} height={200} className="sm:inline-block sm:h-auto mr-5" />
          </Link>

          <p className="text-muted-foreground max-w-lg mb-8">
            The ultimate marketplace connecting brands with creators through transparent, reward-based contests.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4 mb-12">
            <Link
              href="#"
              className="w-10 h-10 rounded-full border border-border hover:border-primary hover:bg-primary/5 transition-all flex items-center justify-center group"
            >
              <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </Link>
            <Link
              href="#"
              className="w-10 h-10 rounded-full border border-border hover:border-primary hover:bg-primary/5 transition-all flex items-center justify-center group"
            >
              <Facebook className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </Link>
            <Link
              href="#"
              className="w-10 h-10 rounded-full border border-border hover:border-primary hover:bg-primary/5 transition-all flex items-center justify-center group"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </Link>
          </div>

          <div className="w-full h-px bg-border" />
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
          <p>© 2025 Proffita. All rights reserved</p>
          
          <div className="flex gap-6">
            <Link href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
