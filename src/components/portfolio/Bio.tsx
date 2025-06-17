
import { useState, useEffect } from 'react';
import { resumeData } from '@/data/resume';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const punLines = [
  "I asked ChatGPT to write a short bio about me. Here’s how it sized me up:",
  "Too awkward to write about myself, so I let an AI handle it:",
  "Here’s how ChatGPT describes me. Not bad, honestly:",
  "I figured it’s better to let ChatGPT explain what I do:",
  "Didn’t feel like writing my own bio. So here’s one straight from ChatGPT:",
];

const Bio = () => {
  const [pun, setPun] = useState('');

  useEffect(() => {
    const randomPun = punLines[Math.floor(Math.random() * punLines.length)];
    setPun(randomPun);
  }, []);

  return (
    <section id="bio" className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground mb-4">
              Readme.md
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">{pun}</p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              {resumeData.summary}
            </p> 
        </div>
      </div>
    </section>
  );
};

export default Bio;
