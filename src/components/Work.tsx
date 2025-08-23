import React from 'react';

interface WorkProps {
  lang: 'en' | 'es';
}

// Define work item structure
interface WorkItem {
  href: string;
  imgSrc: string;
  imgAlt: string;
  titleEn: string;
  titleEs: string;
  tech: string;
}

const Work: React.FC<WorkProps> = ({ lang }) => {
  // List of project cards
 const workItems: WorkItem[] = [
  {
    href: 'https://ezekiel673.github.io/blogr-landing-page/',
    imgSrc: `${import.meta.env.BASE_URL}images/blogr-landing-page.png`,
    imgAlt: 'Project 1',
    titleEn: 'Blogr Landing Page',
    titleEs: 'Página de inicio de Blogr',
    tech: '(HTML, CSS, JS)'
  },
  {
    href: 'https://ezekiel673.github.io/age_calculator/',
    imgSrc: `${import.meta.env.BASE_URL}images/age_calculator.png`,
    imgAlt: 'Project 2',
    titleEn: 'Age Calculator',
    titleEs: 'Calculadora de Edad',
    tech: '(CSS, JS)'
  },
  {
    href: 'https://ezekiel673.github.io/To_do_lists/',
    imgSrc: `${import.meta.env.BASE_URL}images/todo_list_app.png`,
    imgAlt: 'Project 3',
    titleEn: 'Todo Lists',
    titleEs: 'Listas de Tareas',
    tech: '(HTML, CSS, JS)'
  },
  {
    href: 'https://ezekiel673.github.io/calculator_app/',
    imgSrc: `${import.meta.env.BASE_URL}images/calculator_app.png`,
    imgAlt: 'Project 4',
    titleEn: 'Calculator App',
    titleEs: 'App de Calculadora',
    tech: '(JS)'
  },
  {
    href: 'https://insure-landing-page-two-virid.vercel.app/',
    imgSrc: `${import.meta.env.BASE_URL}images/Insure-landing-page.png`,
    imgAlt: 'Project 5',
    titleEn: 'Insure Landing Page',
    titleEs: 'Página de inicio de Seguro',
    tech: '(HTML, CSS, JS)'
  },
  {
    href: 'https://ezekiel673.github.io/Countries_Capital_Quiz/',
    imgSrc: `${import.meta.env.BASE_URL}images/capital_cities_quiz.png`,
    imgAlt: 'Project 6',
    titleEn: 'Countries Capital Quiz',
    titleEs: 'Cuestionario de Capitales',
    tech: '(JS)'
  },
  {
    href: 'https://advice-generator-app-pi-five.vercel.app/',
    imgSrc: `${import.meta.env.BASE_URL}images/advice_generator_app.png`,
    imgAlt: 'Project 7',
    titleEn: 'Advice Generator',
    titleEs: 'Generador de Consejos',
    tech: '(React JS)'
  }
];


  return (
    <section id="work" className="work py-20 px-4 flex flex-col items-center">
      {/* Section heading with language switch */}
      <h2 className="text-3xl font-bold text-cyan-300 mb-8">
        {lang === 'en' ? 'Portfolio' : 'Portafolio'}
      </h2>

      {/* Grid of work cards */}
      <div className="work-grid grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
        {workItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="work-card bg-black rounded-2xl overflow-hidden text-white flex flex-col shadow-lg transition-transform hover:-translate-y-1"
          >
            <div className="work-img relative overflow-hidden h-52">
              <img
                src={item.imgSrc}
                alt={item.imgAlt}
                className="w-full h-full object-cover transition-transform duration-300 hover:brightness-75 hover:scale-105"
              />
            </div>
            <div className="work-info bg-black p-4 flex justify-between items-center border-t border-gray-700">
              <p className="font-medium leading-tight">
                {lang === 'en' ? item.titleEn : item.titleEs}
                <br />
                <span className="text-sm text-gray-400">{item.tech}</span>
              </p>
              <span className="icon text-xl">↗</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Work;
