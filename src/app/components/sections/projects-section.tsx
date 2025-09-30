import Image from 'next/image';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../ui/card';
import { Button } from '../ui/button';
import { ExternalLink, Github } from 'lucide-react';
import React from 'react';
interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  liveLink?: string;
  repoLink?: string;
  tags: string[];
}

const projects: Project[] = [
  {
   id: 'Kinnect',
title: 'Kinnect Media',
description: 'Kinnect is a platform that unites and reconnects families made with reactjs and nodejs .',
imageUrl: '/image/kinnect.png',
imageHint: 'Social Media',
    liveLink: 'https://karimart.vercel.app/',
    repoLink: 'https://github.com/karimGhost/blabzioSocial',
    tags: ['React', 'Tailwind CSS',  'Javascript', 'next js', 'nodejs'],
  },
  {
    id: 'Blabzio Social',
    title: 'Social Media',
    description: 'A social media platform built with reactjs,  nextjs, and nodejs',
    imageUrl: '/image/Blabzio.png',
    imageHint: 'SocialMedia',
    liveLink: 'https://blabzio-social.vercel.app/feed',
    repoLink: 'https://github.com/karimGhost/blabzioSocial',
    tags: ['React','next.js', 'tailwind CSS',  'Javascript', 'nodejs'],
  },
  {
    id: 'Magnetics reciept & consult',
    title: 'MagneticsRepair',
    description: 'A site for technicians to manage reciept and create feed.',
    imageUrl: '/image/Magnetics.png',
    imageHint: 'collaboration tool',
    liveLink: 'http://magneticsrepair.co.ke/',
    repoLink: 'https://github.com/karimGhost/Magnetics',
    tags: ['React','NextJS', 'WebSockets', 'Real-time', 'Collaboration'],
  },
  {
    id: '',
    title: 'Opine notes',
    description: 'note-taking app thats really useful if youre low on time and want to get straight to the point..',
    imageUrl: '/image/Opine.png',
    imageHint: 'analytics chart',
    liveLink: 'https://karimghost.github.io/opinenotes/',
    tags: ['React', 'D3.js', 'Data Visualization', ],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-4xl font-bold text-center mb-4 tracking-tight">My Projects</h2>
        <p className="text-xl text-muted-foreground text-center mb-12 md:mb-16 max-w-2xl mx-auto">
          Here are some of the projects I've worked on, showcasing my skills in web development and design.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
              <CardHeader className="p-0">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={600}
                  height={400}
                  style={{objectPosition:"top"}}
                  className="w-full h-48 object-cover"
                  data-ai-hint={project.imageHint}
                />
              </CardHeader>
              <CardContent className="flex-grow p-6">
                <CardTitle className="text-2xl font-semibold mb-2">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground mb-4 min-h-[60px]">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 border-t border-border/50">
                <div className="flex w-full justify-between items-center">
                  {project.liveLink && (
                    <Button asChild variant="outline" className="hover:bg-primary/10 hover:text-primary-foreground transition-colors">
                      <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        View Live <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  )}
                  {project.repoLink && (
                    <Button asChild variant="ghost" className="text-muted-foreground hover:text-primary transition-colors">
                      <Link href={project.repoLink} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" /> Source
                      </Link>
                    </Button>
                  )}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
