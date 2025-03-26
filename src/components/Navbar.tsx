
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="container-custom mx-auto">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 md:h-10 md:w-10 bg-wellness-blue rounded-lg flex items-center justify-center text-white font-semibold text-xl">
              H
            </div>
            <span className="font-semibold text-lg md:text-xl">HerHealth AI</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="#assessment">Assessment</NavLink>
            <NavLink href="#dashboard">Dashboard</NavLink>
            <NavLink href="#ai-segmentation">Health Clusters</NavLink>
            <NavLink href="#voice-chatbot">Voice Assistant</NavLink>
            <Link to="/login" className="btn-primary">Get Started <ArrowRight className="ml-2 h-4 w-4 inline" /></Link>
          </nav>

          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'md:hidden fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out pt-16',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <nav className="flex flex-col space-y-6 p-8">
          <MobileNavLink href="#assessment" onClick={() => setIsOpen(false)}>Assessment</MobileNavLink>
          <MobileNavLink href="#dashboard" onClick={() => setIsOpen(false)}>Dashboard</MobileNavLink>
          <MobileNavLink href="#ai-segmentation" onClick={() => setIsOpen(false)}>Health Clusters</MobileNavLink>
          <MobileNavLink href="#voice-chatbot" onClick={() => setIsOpen(false)}>Voice Assistant</MobileNavLink>
          <Link to="/login" className="btn-primary mt-4" onClick={() => setIsOpen(false)}>
            Get Started <ArrowRight className="ml-2 h-4 w-4 inline" />
          </Link>
        </nav>
      </div>
    </header>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <a
      href={href}
      className="text-gray-700 hover:text-wellness-blue font-medium transition-colors duration-200"
    >
      {children}
    </a>
  );
};

const MobileNavLink = ({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-xl font-medium text-gray-800 hover:text-wellness-blue transition-colors duration-200"
    >
      {children}
    </a>
  );
};

export default Navbar;
