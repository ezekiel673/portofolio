import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';
import './styles/App.css';


function App() {
  const [lang, setLang] = useState<'en' | 'es'>('en');
  const [darkMode, setDarkMode] = useState(true);

  const toggleLanguage = () => setLang(prev => (prev === 'en' ? 'es' : 'en'));
  const toggleMode = () => setDarkMode(prev => !prev);

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
  }, [darkMode]);

  return (
    <div>
      <Navbar lang={lang} toggleLang={toggleLanguage} darkMode={darkMode} toggleMode={toggleMode} />
      <About lang={lang} />
      <Services lang={lang} />
      <Skills lang={lang} />
      <Work lang={lang} />
      <Contact lang={lang} />
    </div>
  );
}

export default App;
