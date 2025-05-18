import { Badge } from '../ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Code, Settings, Database, TerminalSquare } from 'lucide-react';
import React from 'react';
interface SkillCategory {
  name: string;
  icon: React.ElementType;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend Development',
    icon: Code,
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Shadcn UI', 'Responsive Design'],
  },
  {
    name: 'Backend Development',
    icon: Database,
    skills: ['Node.js', 'Express.js', 'REST APIs', 'Firebase (Auth, Firestore, Functions)'],
  },
  {
    name: 'Tools & Technologies',
    icon: Settings,
    skills: ['Git & GitHub', 'VS Code', 'NPM/Yarn', 'Genkit AI', 'Vercel', 'Netlify'],
  },
  {
    name: 'Practices & Principles',
    icon: TerminalSquare,
    skills: ['Agile Methodologies', 'Clean Code', 'Problem Solving', 'UI/UX Principles', 'Performance Optimization'],
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="w-full py-16 md:py-24 lg:py-32 bg-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-4xl font-bold text-center mb-4 tracking-tight">My Skills</h2>
        <p className="text-xl text-muted-foreground text-center mb-12 md:mb-16 max-w-2xl mx-auto">
          A Glimpse into my technical toolkit, honed through experience and a passion for continuous learning.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <Card key={category.name} className="shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center gap-4 pb-4">
                <category.icon className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl">{category.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm px-3 py-1 bg-muted hover:bg-primary/20 hover:text-primary-foreground transition-colors">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
