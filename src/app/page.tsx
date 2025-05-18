'use client';
import './globals.css';

import { useRef, useState, useEffect } from 'react';
import HeaderSection from './components/sections/header-section';
import ProjectsSection from './components/sections/projects-section';
import SkillsSection from './components/sections/skills-sectioon';
import ContactSection from './components/sections/contact-section';
import { Button } from './components/ui/button';
import { ArrowUp } from 'lucide-react';
import { cn } from "../lib/utils";
import './globals.css';
import React from 'react';
export default function HomePage() {
  const headerRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const [showScrollTop, setShowScrollTop] = useState(false);

  // useEffect hook to handle scroll event on client-side
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <a href="#header" className="text-xl font-bold text-primary hover:opacity-80 transition-opacity">
            AK
          </a>
          <div className="space-x-4 md:space-x-6">
            {['Projects', 'Skills', 'Contact',].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        <div ref={headerRef}><HeaderSection /></div>
        <div ref={projectsRef}><ProjectsSection /></div>
        <div ref={skillsRef}><SkillsSection /></div>
        <div ref={contactRef}><ContactSection /></div>
      </main>

      <footer className="text-center p-8 border-t border-border/50 text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Abdulkarim Kassim. All rights reserved.</p>
        <p className="text-xs mt-1"> ❤️</p>
      </footer>

      <Button
        onClick={scrollToTop}
        className={cn(
          "fixed bottom-6 right-6 p-3 h-12 w-12 rounded-full shadow-lg transition-opacity duration-300 z-50 bg-primary hover:bg-primary/90",
          showScrollTop ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-6 w-6" />
      </Button>
    </div>
  );
}
