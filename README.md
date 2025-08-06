# Sherlock LP - Prompt Sherlock Landing Page

A beautiful, minimal landing page for Prompt Sherlock built with React, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Minimal & Fast**: Only essential components, blazing fast load times
- **Glass Morphism Design**: Modern, beautiful aesthetic with backdrop blur effects
- **Smooth Animations**: Framer Motion powered interactions
- **Feature Carousel**: Auto-scrolling showcase of key features
- **Responsive Design**: Works perfectly on all devices
- **SEO Optimized**: Proper meta tags and Open Graph support

## 🛠️ Tech Stack

- **React 18** with Vite
- **Tailwind CSS** with custom glass morphism effects
- **Framer Motion** for smooth animations
- **Lucide React** for beautiful icons

## 📁 Project Structure

```
sherlock-lp/
├── src/
│   ├── components/
│   │   ├── SimpleMotion.jsx     # Lazy-loaded Framer Motion wrapper
│   │   └── SimpleCarousel.jsx   # Auto-scrolling feature carousel
│   ├── App.jsx                  # Main landing page component
│   ├── main.jsx                 # React entry point
│   └── index.css               # Global styles with glass morphism
├── public/
├── index.html                   # HTML template
├── package.json                 # Dependencies
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
└── .env.example                # Environment variables template
```

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone or create the repository**
   ```bash
   mkdir prompt-sherlock-landing
   cd prompt-sherlock-landing
   ```

2. **Copy all the configuration files**
   - Copy `package.json`, `vite.config.js`, `tailwind.config.js`, `postcss.config.js`
   - Copy `index.html` and create the `src/` directory structure

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Environment Setup** (Optional)
   ```bash
   cp .env.example .env
   # Edit .env with your specific URLs
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   - Frontend: http://localhost:5173

## 🎨 Design System

### Colors
- **Primary**: Blue (400-600) - `#60A5FA` to `#3B82F6`
- **Secondary**: Purple (400-600) - `#A78BFA` to `#8B5CF6`
- **Accent**: Pink (400-600) - `#EC4899` to `#DB2777`
- **Background**: Slate-900 to Purple-900 gradient

### Glass Effects
- **glass-effect**: Standard glass morphism with backdrop blur
- **glass-button**: Interactive glass buttons with hover effects
- **gradient-text**: Multi-color gradient text effect

### Animations
- **Auto-scrolling carousel**: 30s infinite scroll with pause on hover
- **Smooth transitions**: 0.3s ease transitions for all interactions
- **Float animation**: Gentle floating effect for hero elements
- **Glow effects**: Subtle glow animations for interactive elements

## 🚀 Deployment

### Netlify (Recommended)
1. Connect your GitHub repository to Netlify
2. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
3. Environment variables (if needed):
   - `VITE_WEBAPP_URL`: Your webapp subdomain URL

### Vercel
1. Connect repository to Vercel
2. Build settings are auto-detected
3. Add environment variables in Vercel dashboard

### Manual Deployment
```bash
npm run build
# Upload the `dist` folder to your hosting provider
```

## 🔧 Customization

### Update Webapp URL
In `src/App.jsx`, update the "Get Started Now" button:
```javascript
onClick={() => window.open('YOUR_WEBAPP_URL_HERE', '_blank')}
```

### Modify Features
Edit the `features` array in `src/App.jsx` to customize the carousel content.

### Styling Changes
- Global styles: `src/index.css`
- Tailwind config: `tailwind.config.js`
- Component-specific styles: Individual component files

## 📝 Components

### SimpleMotion
Lazy-loaded Framer Motion wrapper that provides smooth animations while maintaining fast initial load times.

### SimpleCarousel
Auto-scrolling feature carousel with:
- Infinite scroll effect
- Pause on hover
- Smooth transitions
- Progress indicator
- Responsive design

## 🎯 Performance

- **Bundle Size**: ~150KB gzipped (React + Framer Motion + Tailwind)
- **Load Time**: <1s on fast connections
- **Lazy Loading**: Framer Motion loads after initial render
- **Optimized Build**: Code splitting and tree shaking enabled

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -m 'Add improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.