import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';
import React from 'react';
import '../../globals.css';
export default function HeaderSection() {
  return (
    <section id="header" className="w-full py-20 md:py-32 lg:py-40 bg-gradient-to-br from-background to-primary/10 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 animate-pulse">
        {/* Decorative background pattern or shapes */}
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M 20 0 L 0 0 0 20" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.2"/></pattern></defs><rect width="100%" height="100%" fill="url(#smallGrid)" /></svg>
      </div>
      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-foreground via-primary-foreground/80 to-primary-foreground">
          Abdulkarim Kassim
        </h1>
        <p className="text-2xl md:text-3xl text-primary font-medium mb-8">
          Web Developer
        </p>
        <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl mb-10">
          Crafting beautiful and performant web experiences with React and modern frameworks. Passionate about clean code and innovative solutions.
        </p>
        <div className="flex justify-center space-x-4">
          <Button asChild variant="outline" size="lg" className="hover:bg-primary/10 hover:text-primary-foreground transition-all duration-300">
            <Link href="#projects">
              View Projects <ExternalLink className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="default" size="lg" className="bg-primary hover:bg-primary/90 transition-all duration-300">
            <Link href="#contact">
              Get In Touch <Mail className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
        <div className="mt-12 flex justify-center space-x-6">
          <a href="https://github.com/abdulkarimkassim" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="text-muted-foreground hover:text-primary transition-colors">
            <Github size={28} />
          </a>
          <a href="https://linkedin.com/in/abdulkarimkassim" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin size={28} />
          </a>
           <a href="mailto:kassim@example.com" aria-label="Email Abdulkarim" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail size={28} />
          </a>
        </div>
      </div>
    </section>
  );
}
