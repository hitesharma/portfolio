
import { resumeData } from '@/data/resume';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="py-12 px-4 bg-secondary border-t border-border">
      <div className="container mx-auto text-center text-muted-foreground">
        <div className="flex justify-center items-center gap-6 mb-6">
          <a href={resumeData.contact.github} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-accent transition-colors"><Github size={24} /></a>
          <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-accent transition-colors"><Linkedin size={24} /></a>
          <a href={`mailto:${resumeData.contact.email}`} className="text-foreground hover:text-accent transition-colors"><Mail size={24} /></a>
        </div>
        <p>Designed & Built by Hitesh Sharma</p>
        <p>&copy; {new Date().getFullYear()}</p>
        <button onClick={scrollToTop} aria-label="Scroll to top" className="mt-8 mx-auto w-12 h-12 rounded-full bg-primary hover:bg-accent flex items-center justify-center transition-colors">
            <ArrowUp className="text-primary-foreground" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;

