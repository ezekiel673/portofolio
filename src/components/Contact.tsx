import React from 'react';

interface ContactProps {
  lang: 'en' | 'es';
}

const Contact: React.FC<ContactProps> = ({ lang }) => {
  return (
    <section id="contact">
      <div className="contact flex flex-wrap justify-center items-center gap-8 px-4 py-12 bg-gradient-to-br from-[#0d0d0d] to-[#1a1a1a] text-white">
        {/* Contact text and social icons */}
        <div className="get-in-touch flex-1 max-w-md">
          <h2 className="text-2xl font-semibold mb-2">
            {lang === 'en' ? 'Do you want to discuss a project?' : '¿Quieres hablar de un proyecto?'}
          </h2>
          <h2 className="text-2xl font-semibold mb-4">
            {lang === 'en' ? 'Get in Touch' : 'Ponte en contacto'}
          </h2>

          {/* Social media icons */}
          <div className="social-media flex gap-4 mt-4">
            <a href="tel:+2348108839073">
              <img src="/images/phone_icon.png" alt="Phone" className="w-8 h-8" />
            </a>
            <a href="https://ng.linkedin.com/in/ezekiel-adeosun">
              <img src="/images/linkedin_logo.png" alt="LinkedIn" className="w-8 h-8" />
            </a>
            <a href="https://github.com/ezekiel673/">
              <img src="/images/github_icon.png" alt="GitHub" className="w-8 h-8" />
            </a>
            <a href="https://www.instagram.com/yeshuacode_it/">
              <img src="/images/instagram_logo.png" alt="Instagram" className="w-8 h-8" />
            </a>
            <a href="https://x.com/yeshua_codeit">
              <img src="/images/x_logo.png" alt="Twitter/X" className="w-8 h-8" />
            </a>
            <a href="wa.me/2348108839073">
              <img src="/images/whatsapp_logo.png" alt="WhatsApp" className="w-8 h-8" />
            </a>
          </div>
        </div>

        {/* Contact form */}
        <div className="contact-form flex-1 max-w-md">
          <h3 className="text-xl font-semibold mb-6">
            {lang === 'en' ? 'Contact Form' : 'Formulario de Contacto'}
          </h3>
          <form
            id="contactForm"
            action="https://formsubmit.co/8d7b8babc2a21d7a0ee79f754e463bbb"
            method="POST"
            className="flex flex-col gap-4"
          >
            <label htmlFor="name" className="font-medium">
              {lang === 'en' ? 'Name' : 'Nombre'}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder={lang === 'en' ? 'Enter your name' : 'Ingrese su nombre'}
              className="p-3 bg-black border border-gray-700 rounded-md text-white"
            />

            <label htmlFor="email" className="font-medium">
              {lang === 'en' ? 'Email' : 'Correo electrónico'}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder={lang === 'en' ? 'Enter your email' : 'Ingrese su correo electrónico'}
              className="p-3 bg-black border border-gray-700 rounded-md text-white"
            />

            <label htmlFor="message" className="font-medium">
              {lang === 'en' ? 'Message' : 'Mensaje'}
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder={lang === 'en' ? 'Type your message here...' : 'Escriba su mensaje aquí...'}
              className="p-3 bg-black border border-gray-700 rounded-md text-white resize-none"
            ></textarea>

            <button
              type="submit"
              className="btn-primary bg-cyan-300 hover:bg-cyan-400 text-black py-2 px-4 rounded-md font-semibold transition-all"
            >
              {lang === 'en' ? 'Send' : 'Enviar'}
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm py-4">
        <p>&copy; 2024 Adeosun Ezekiel. All rights reserved.</p>
      </footer>
    </section>
  );
};

export default Contact;