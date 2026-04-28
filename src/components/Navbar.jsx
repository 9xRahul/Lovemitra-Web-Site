import React, { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/#features' },
    { name: 'Safety', href: '/#safety' },
    { name: 'How it Works', href: '/#how-it-works' },
    { name: 'Contact', href: '/#contact' },
  ];

  if (new URLSearchParams(window.location.search).get('minimal') === 'true') {
    return null;
  }

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3 shadow-sm' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <img 
                src="logo-full.png" 
                alt="LoveMitra Logo" 
                className={`${scrolled ? 'h-10 sm:h-12' : 'h-12 sm:h-16'} w-auto object-contain transition-all duration-300 group-hover:scale-105`} 
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-gray-700 hover:text-primary-start font-medium transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center space-x-4">
              <button className="text-primary-start font-semibold hover:opacity-80 transition-opacity px-4">
                Login
              </button>
              <button className="gradient-button !py-2.5 !px-6 text-sm">
                Download App
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary-start transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="md:hidden fixed inset-0 z-[100] bg-white flex flex-col"
          >
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 bg-white">
              <Link to="/" onClick={() => setIsOpen(false)}>
                <img src="logo-full.png" alt="LoveMitra Logo" className="h-10 w-auto object-contain" />
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-gray-900 hover:text-primary-start transition-colors"
              >
                <X size={32} />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto px-6 py-10 bg-white">
              <nav className="flex flex-col space-y-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-3xl font-bold text-gray-900 hover:text-primary-start transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
              
              <div className="mt-12 flex flex-col gap-4 border-t border-gray-100 pt-10">
                <button className="w-full py-4 text-primary-start font-bold border-2 border-primary-start rounded-2xl text-lg">
                  Login
                </button>
                <button className="w-full gradient-button py-4 text-white font-bold rounded-2xl text-lg shadow-lg">
                  Download App
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
