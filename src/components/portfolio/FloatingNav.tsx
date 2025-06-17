import { Home, Briefcase, Wrench, User, Link as Connect } from 'lucide-react';
import { useState, useEffect } from 'react';

const navItems = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'About', href: '#bio', icon: User },
  { name: 'Experience', href: '#experience', icon: Briefcase },
  { name: 'Skills', href: '#skills', icon: Wrench },
  { name: 'Contact', href: '#contact', icon: Connect },
];

const FloatingNav = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > 200 && window.scrollY > lastScrollY) {
          setVisible(false);
        } else {
          setVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };
    
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <nav className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
      <div className="flex items-center gap-2 bg-background/50 backdrop-blur-md p-2 rounded-full border border-border shadow-lg">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            title={item.name}
            className="w-12 h-12 flex items-center justify-center rounded-full text-muted-foreground hover:bg-accent hover:text-white transition-all duration-200"
          >
            <item.icon />
          </a>
        ))}
      </div>
    </nav>
  );
};

export default FloatingNav;
