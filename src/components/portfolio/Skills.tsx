
import { useState, useEffect } from 'react';
import { resumeData } from '@/data/resume';

const titles = [
  "Underneath the Hood",
  "Tech Toolbox",
  "Engineering Stack",
  "Powered By",
  "Stuff I Actually Use",
  "Code, Craft & Tools",
  "Build System: Initialized",
  "Runtime Dependencies",
  "My Dev Environment"
];

const Skills = () => {
  const [title, setTitle] = useState('');

  useEffect(() => {
    const randomTitle = titles[Math.floor(Math.random() * titles.length)];
    setTitle(randomTitle);
  }, []);

  return (
    <section id="skills" className="py-20 px-4 bg-secondary">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-serif font-bold text-center mb-12">{title}</h2>
        <div className="space-y-12">
          {resumeData.skills.map((skillCategory, index) => (
            <div key={skillCategory.category} className="animate-fade-in-up" style={{ animationDelay: `${index * 150}ms`, opacity: 0 }}>
              <h3 className="text-2xl font-bold mb-6 flex items-center text-accent">
                <span className="text-3xl mr-4">{skillCategory.icon}</span>
                {skillCategory.category}
              </h3>
              <div className="flex flex-wrap gap-4">
                {skillCategory.tools.map((tool) => (
                  <div key={tool.name} className="flex items-center bg-background/50 p-2 px-4 rounded-lg transition-all hover:bg-background/80 hover:shadow-lg backdrop-blur-sm">
                    {tool.slug && (
                      <img 
                        src={`https://cdn.simpleicons.org/${tool.slug}/white`} 
                        alt={`${tool.name} logo`} 
                        className="w-6 h-6 mr-3"
                      />
                    )}
                    <span className="text-md font-medium text-foreground">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
