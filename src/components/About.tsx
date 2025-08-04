import React from 'react';

interface AboutProps {
  lang: 'en' | 'es';
}

const About: React.FC<AboutProps> = ({ lang }) => {
  // English and Spanish translations for title and description
  const title = {
    en: 'FRONTEND DEVELOPER',
    es: 'DESARROLLADOR FRONTEND'
  };

  const description = {
    en: 'I am Ezekiel - web developer, software engineer and full stack enthusiast',
    es: 'Soy Ezekiel: desarrollador web, ingeniero de software y entusiasta del stack completo.'
  };

  const buttonText = {
    en: 'View My Work',
    es: 'Ver Mi Trabajo'
  };

  return (
    <header id="about" className="about flex flex-col items-center text-center px-4 py-20">
      <div className="about-content">
        {/* Heading with animation and translation */}
        <h1 className="text-4xl font-extrabold text-white mb-4 animate-fadeInUp">
          {title[lang]}
        </h1>

        {/* Description with translation */}
        <p className="text-lg max-w-xl text-gray-300 mb-6 animate-fadeInUp delay-100">
          {description[lang]}
        </p>

        {/* Button to navigate to work section */}
        <a
          href="#work"
          className="btn-primary bg-cyan-400 text-black px-6 py-3 rounded-lg font-semibold text-base hover:bg-cyan-300 transition animate-fadeInUp delay-200"
        >
          {buttonText[lang]}
        </a>
      </div>

      {/* Placeholder for future images/illustration */}
      <div className="about-images mt-10"></div>
    </header>
  );
};

export default About;