import React from 'react';

interface SkillsProps {
  lang: 'en' | 'es';
}

const Skills: React.FC<SkillsProps> = ({ lang }) => {
  // Section heading translations
  const sectionTitle = {
    en: 'Skills & Tools',
    es: 'Habilidades y Herramientas'
  };

  // Skill image data with alt text
  const skills = [
    { src: '/images/html5_icon.png', alt: 'HTML5' },
    { src: '/images/css_icon.png', alt: 'CSS3' },
    { src: '/images/JS_icon.png', alt: 'JavaScript' },
    { src: '/images/typescript_icon.png', alt: 'TypeScript' },
    { src: '/images/tailwind_icon.png', alt: 'Tailwind CSS' },
    { src: '/images/react_icon.png', alt: 'React' },
    { src: '/images/git_icon.png', alt: 'Git' },
    { src: '/images/wordpress_icon.png', alt: 'WordPress' },
    { src: '/images/sass_icon.png', alt: 'SASS' }
  ];

  return (
    <section id="technologies" className="skills text-center py-20 px-4">
      {/* Section heading */}
      <h2 className="text-3xl font-bold text-cyan-400 mb-8">
        {sectionTitle[lang]}
      </h2>

      {/* Skill icons grid */}
      <div className="skill-icons flex flex-wrap justify-center gap-6">
        {skills.map((skill, index) => (
          <img
            key={index}
            src={skill.src}
            alt={skill.alt}
            className="w-20 h-20 object-contain p-4 bg-gray-900 rounded-lg hover:scale-110 hover:bg-cyan-400 transition-all"
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;