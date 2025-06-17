
import Scene from './Scene';
import { resumeData } from '@/data/resume';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-40">
        <Scene />
      </div>
      <div className="relative z-10 animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-serif font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-200 to-slate-400 py-2">
          {resumeData.name}
        </h1>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground">{resumeData.title}</p>
      </div>
    </section>
  );
};

export default Hero;
