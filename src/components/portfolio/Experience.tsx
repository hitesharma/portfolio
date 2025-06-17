
import { useState } from "react";
import { resumeData } from '@/data/resume';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const selectedJob = resumeData.experience[activeIndex];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-serif font-bold text-center mb-16">Experience</h2>
        <div className="flex flex-col md:flex-row gap-12">
          {/* Timeline */}
          <div className="relative md:w-1/3 lg:w-1/4">
            <div className="absolute top-2 bottom-2 left-[9px] w-0.5 bg-border -z-10" aria-hidden="true"></div>
            <TooltipProvider>
              <div className="flex flex-col gap-y-4">
                {resumeData.experience.map((job, index) => (
                  <div key={index}>
                    <Tooltip delayDuration={100}>
                      <TooltipTrigger asChild>
                        <button
                          onClick={() => setActiveIndex(index)}
                          className="flex items-center gap-4 text-left w-full group"
                          aria-label={`View experience for ${job.period}`}
                        >
                          <div className={`w-5 h-5 rounded-full border-4 bg-background transition-all shrink-0 ${
                            activeIndex === index ? 'border-accent scale-110' : 'border-muted group-hover:border-accent/70'
                          }`}></div>
                          <p className={`transition-colors text-sm font-semibold ${
                            activeIndex === index ? 'text-accent' : 'text-muted-foreground group-hover:text-foreground'
                          }`}>{job.period}</p>
                        </button>
                      </TooltipTrigger>
                      <TooltipContent side="right">
                        <p className="font-semibold">{job.company}</p>
                      </TooltipContent>
                    </Tooltip>
                    {activeIndex === index && (
                      <div className="pl-9 pt-2 animate-fade-in-up">
                        <p className="text-sm font-medium text-accent">{job.title}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </TooltipProvider>
          </div>
          
          {/* Details */}
          <div className="flex-1">
            <div key={activeIndex} className="animate-fade-in-up">
              <h3 className="text-2xl font-bold text-foreground mb-4">{selectedJob.company}</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {selectedJob.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
