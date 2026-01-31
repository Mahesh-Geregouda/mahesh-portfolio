# Mahesh Portfolio - Data Analyst & Data Engineer

A modern, responsive portfolio website built with React.js showcasing expertise in Data Analysis and Data Engineering.

## Features

- 🎨 Modern, dark-themed UI with smooth animations
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🚀 Fast and optimized performance
- 📊 Showcases Data Analyst and Data Engineer skills
- 💼 Professional experience timeline
- 🎯 Interactive project showcase
- 📧 Contact form

## Sections

1. **Hero** - Introduction and call-to-action
2. **About** - Personal introduction and expertise areas
3. **Skills** - Technical skills for both Data Analyst and Data Engineer roles
4. **Projects** - Featured projects with descriptions and technologies
5. **Experience** - Professional work experience timeline
6. **Contact** - Contact form and social links

## Technologies Used

- React.js 18
- CSS3 (Custom styling with gradients and animations)
- HTML5

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd mahesh-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.js`):
   - Update name, title, and description
   - Update social media links

2. **About Section** (`src/components/About.js`):
   - Modify introduction text
   - Update statistics

3. **Skills** (`src/components/Skills.js`):
   - Adjust skill levels
   - Add/remove skills

4. **Projects** (`src/components/Projects.js`):
   - Update project details
   - Add your own projects

5. **Experience** (`src/components/Experience.js`):
   - Update work experience
   - Modify job descriptions

6. **Contact** (`src/components/Contact.js`):
   - Update email addresses
   - Update social media links

### Styling

All component styles are in their respective `.css` files. The color scheme uses a purple gradient theme that can be customized by modifying the CSS variables or gradient colors.

## Project Structure

```
mahesh-portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js & Header.css
│   │   ├── Hero.js & Hero.css
│   │   ├── About.js & About.css
│   │   ├── Skills.js & Skills.css
│   │   ├── Projects.js & Projects.css
│   │   ├── Experience.js & Experience.css
│   │   ├── Contact.js & Contact.css
│   │   └── Footer.js & Footer.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Deployment

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `build` folder to Netlify

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`

### Deploy to GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```
3. Run: `npm run deploy`

## License

This project is open source and available under the MIT License.

## Contact

For questions or suggestions, feel free to reach out!
