import React from 'react';

interface ServicesProps {
  lang: 'en' | 'es';
}

const Services: React.FC<ServicesProps> = ({ lang }) => {
  // Section heading translations
  const sectionTitle = {
    en: 'Services',
    es: 'Servicios'
  };

  // Services content translations
  const services = [
    {
      title: {
        en: 'Web Development',
        es: 'Desarrollo Web'
      },
      description: {
        en: 'I develop websites based on your designs, be it landing pages or business card sites. They’ll look great and work on all devices.',
        es: 'Desarrollo sitios web basados ​​en tus diseños, ya sean landing pages o sitios para tarjetas de presentación. Se verán geniales y funcionarán en todos los dispositivos.'
      }
    },
    {
      title: {
        en: 'Web Design',
        es: 'Diseño Web'
      },
      description: {
        en: 'I create clean, modern, user-friendly designs tailored to your brand and goals from scratch.',
        es: 'Creo diseños limpios, modernos y fáciles de usar adaptados a su marca y objetivos desde cero.'
      }
    },
    {
      title: {
        en: 'WordPress Development',
        es: 'Desarrollo WordPress'
      },
      description: {
        en: 'I build WordPress sites that are easy to manage ideal for blogs, portfolios, and small businesses.',
        es: 'Creo sitios de WordPress que son fáciles de administrar, ideales para blogs, portafolios y pequeñas empresas.'
      }
    }
  ];

  return (
    <section id="services" className="services flex wrap flex-col items-center justify-center text-center py-20 px-4 gap-8">
      {/* Section heading */}
      <h2 className="text-3xl font-bold text-cyan-400">{sectionTitle[lang]}</h2>

      {/* Cards container */}
      <div className="services_cards flex flex-wrap justify-center gap-6 mt-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card bg-white text-black p-6 rounded-xl shadow-md max-w-sm w-full text-center"
          >
            {/* Individual card title */}
            <h3 className="text-xl font-semibold mb-4">
              {service.title[lang]}
            </h3>
            {/* Description */}
            <p className="text-base leading-relaxed">
              {service.description[lang]}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;