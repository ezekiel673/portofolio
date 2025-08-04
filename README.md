# 🌐 My Portfolio Website
A modern, responsive, and animated portfolio website built with **[Your Tech Stack]** to showcase my projects, skills, and contact information.  
It’s designed to be fast, accessible, and easy to customize.

---

## 🚀 Live Demo
**🔗 [View Portfolio](https://adeosunezekiel.potofolio.com)**

---

## 📋 Features

- **Responsive Design** – Looks great on desktop, tablet, and mobile
- **Smooth Animations** – Engaging UI with CSS/JavaScript animations
- **Project Showcase** – Highlight work with images, descriptions, and links
- **Multilingual Support** – English + Spanish (toggle switch)
- **Dark/Light Mode** – Theme switcher for better accessibility
- **Contact Form** – Send messages directly to my email (via backend integration)
- **SEO Friendly** – Metadata and Open Graph support

---

## 🛠️ Tech Stack

**Frontend:**
- HTML5, CSS3 (Tailwind / SASS)
- JavaScript (ES6+) / TypeScript
- React.js / Next.js

**Backend (if applicable):**
- Node.js + Express.js (for contact form email sending)

**Hosting:**
- [Vercel](https://vercel.com) / [Netlify](https://www.netlify.com) / GitHub Pages

---

## 📂 Project Structure

├── public/ # Static assets (images, icons, favicon)
├── src/
│ ├── components/ # Reusable UI components
│ ├── pages/ # Page components (if using Next.js)
│ ├── styles/ # Global & component styles
│ ├── data/ # Project and navigation data
│ └── App.tsx # Main app entry
├── package.json
└── README.md


## ⚙️ Setup & Installation

1. **Clone the repository**
  ```bash
  git clone https://github.com/ezekiel673/portfolio.git
  cd portfolio
  ```
2. Install dependencies

```bash
npm install
# or
yarn install
```
3. Set environment variables (for contact form, analytics, etc.)
Create a .env file:

```env
NEXT_PUBLIC_EMAIL_ENDPOINT=/api/contact
```
4. Run the development server

```bash
npm run dev
```
5. Build for production

```bash
npm run build
npm start
```
## 📬 Contact Form Integration
- This project supports sending messages directly to your email via a backend endpoint.
You can use Nodemailer, SendGrid, or any email API.

- Example setup:

  1. Add API route /api/contact

  2. Configure SMTP credentials in .env.local

  3. Validate & send emails securely

## 🖼️ Screenshots
- portofolio full page[public/images/portofolio.png]

## 📜 License
- This project is licensed under the MIT License.
- Feel free to fork and customize, but please credit me where appropriate.

## 📧 Contact
- E-MAIL – adeosunezekiel005@gmail.com
- Website: adeosunezekiel.com
- LinkedIn: linkedin.com/in/ezekiel-adeosun
GitHub: github.com/ezekiel673






