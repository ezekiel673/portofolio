import React, { useState, useEffect } from 'react';
import clsx from 'clsx';

interface NavbarProps {
  lang: 'en' | 'es';
  toggleLang: () => void;
  darkMode: boolean;
  toggleMode: () => void;
}

const navLinks = [
  { href: '#about', en: 'ABOUT', es: 'SOBRE MÍ' },
  { href: '#services', en: 'SERVICES', es: 'SERVICIOS' },
  { href: '#technologies', en: 'TECHNOLOGIES', es: 'TECNOLOGÍAS' },
  { href: '#work', en: 'WORK', es: 'TRABAJAR' },
  { href: '#contact', en: 'CONTACT', es: 'CONTACTO' },
];

const Navbar: React.FC<NavbarProps> = ({ lang, toggleLang, darkMode, toggleMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // close mobile menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) setMenuOpen(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuOpen]);

return (
    <nav>
      <div className="nav-container"> {/* layout & colors expected from outer styles */}
        <div className="nav-head">
          <div className="name">ADEOSUN EZEKIEL</div>

          {/* Mobile menu toggle */}
          <button
            className={clsx('menu-toggle', { open: menuOpen })}
            aria-label="Menu Toggle"
            onClick={() => setMenuOpen(o => !o)}
          >
            <span className="fallback-icon">{menuOpen ? '✕' : '☰'}</span>
          </button>
        </div>

        {/* Navigation links */}
        <div
          className={clsx(
            'navigations',
            menuOpen ? 'show-nav' : '',
          )}
        >
          {navLinks.map(l => (
            <a
              key={l.href}
              href={l.href}
              className={clsx('nav-item', {
                active: window.location.pathname === l.href,
              })}
              data-en={l.en}
              data-es={l.es}
              onClick={() => setMenuOpen(false)}
            >
              {l[lang]}
            </a>
          ))}
        </div>

        {/* Language & Theme switch */}
        <div className="switch">
          <button onClick={toggleLang}>{lang === 'en' ? 'ES' : 'EN'}</button>
          <button onClick={toggleMode}>{darkMode ? '☀' : '🌙'}</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
