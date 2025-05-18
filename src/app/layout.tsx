import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';

import { Toaster } from './components/ui/toaster';
import { cn } from '../lib/utils';
import React from 'react';
export const metadata: Metadata = {
  title: 'Kassim Portfolio | Abdulkarim Kassim - Web Developer',
  description: "Abdulkarim Kassim's portfolio showcasing web development projects and skills in React and other modern frameworks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(
      "dark",
      GeistSans.className, // Applies Geist Sans font and defines --font-geist-sans CSS variable
      GeistMono.className  // Applies Geist Mono font and defines --font-geist-mono CSS variable
    )}>
      
      <body className={cn(
        // Removed incorrect usage of font variables as class names.
        // 'font-sans' Tailwind utility will use `var(--font-geist-sans)` due to `globals.css` body style.
        'font-sans antialiased flex flex-col min-h-screen',
        'bg-background text-foreground' 
      )}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
