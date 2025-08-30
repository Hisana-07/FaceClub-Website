
import React, { useState, useEffect } from 'react';
import { Page, NavLink } from '../types';
import { NAV_LINKS } from '../constants';
import MenuIcon from './icons/MenuIcon';
import CloseIcon from './icons/CloseIcon';

interface NavbarProps {
  currentPage: Page;
  navigateTo: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, navigateTo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (page: Page) => {
    navigateTo(page);
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-dark-card/80 backdrop-blur-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" onClick={() => handleLinkClick(Page.HOME)} className="text-2xl font-bold font-mono tracking-tighter text-white animate-glow">
              FACE_CLUB
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {NAV_LINKS.map((link: NavLink) => (
                <a
                  key={link.name}
                  href="#"
                  onClick={() => handleLinkClick(link.page)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                    currentPage === link.page
                      ? 'bg-brand-primary text-white'
                      : 'text-dark-text hover:bg-dark-card hover:text-brand-secondary'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-dark-card inline-flex items-center justify-center p-2 rounded-md text-brand-secondary hover:text-white hover:bg-brand-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-bg focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-dark-card">
            {NAV_LINKS.map((link: NavLink) => (
              <a
                key={link.name}
                href="#"
                onClick={() => handleLinkClick(link.page)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                  currentPage === link.page
                    ? 'bg-brand-primary text-white'
                    : 'text-dark-text hover:bg-gray-700 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
