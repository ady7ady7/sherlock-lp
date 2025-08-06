// =============================================================================
// LANDING PAGE APP COMPONENT
// File: src/App.jsx
// =============================================================================

import React, { useEffect } from 'react';
import { 
  Search, 
  Zap, 
  Shield, 
  Heart, 
  Sparkles,
  Clock,
  Palette,
  Target,
  Lightbulb
} from 'lucide-react';

// Import components
import { SimpleMotion, preloadMotion } from './components/SimpleMotion';
import { SimpleCarousel } from './components/SimpleCarousel';

// =============================================================================
// MAIN APP COMPONENT
// =============================================================================

function App() {
  // Preload motion after component mounts
  useEffect(() => {
    preloadMotion();
  }, []);

  // =============================================================================
  // FEATURE DATA
  // =============================================================================

  const features = [
    {
      icon: Search,
      title: 'AI Analysis',
      description: 'Sherlock "investigates" your images, extracting style, mood, composition, and subject matter.',
      bgGradient: 'from-blue-500/10 to-cyan-500/10'
    },
    {
      icon: Zap,
      title: 'Engine Specific Prompts',
      description: 'Choose your target engine (Midjourney, DALL·E, Stable Diffusion, Gemini Imagen, etc.) (Coming soon)',
      bgGradient: 'from-yellow-500/10 to-orange-500/10'
    },
    {
      icon: Palette,
      title: 'Style & Character Profiles',
      description: 'Build a library of recurring styles and characters for consistent branding. (Coming soon)',
      bgGradient: 'from-purple-500/10 to-pink-500/10'
    },
    {
      icon: Lightbulb,
      title: 'Instant Inspiration',
      description: 'Turn any image into a perfect AI prompt—no guesswork.',
      bgGradient: 'from-green-500/10 to-emerald-500/10'
    },
    {
      icon: Target,
      title: 'Style Consistency',
      description: 'Keep your unique look across projects.',
      bgGradient: 'from-red-500/10 to-rose-500/10'
    },
    {
      icon: Clock,
      title: 'Save Time',
      description: 'Skip manual prompt writing, focus on creating.',
      bgGradient: 'from-indigo-500/10 to-violet-500/10'
    }
  ];

  // =============================================================================
  // RENDER COMPONENTS
  // =============================================================================

  const renderHeader = () => (
    <header className="text-center mb-16">
      {/* Logo and Brand */}
      <SimpleMotion
        className="flex items-center justify-center mb-6"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <SimpleMotion
          className="glass-effect p-4 rounded-2xl mr-4"
          whileHover={{ 
            boxShadow: '0 0 30px rgba(59, 130, 246, 0.6)',
            scale: 1.1 
          }}
          transition={{ duration: 0.3 }}
        >
          <Search className="w-8 h-8 md:w-10 md:h-10 text-blue-400" />
        </SimpleMotion>
        
        <h1 className="gradient-text text-4xl md:text-5xl lg:text-6xl font-bold">
          Prompt Sherlock
        </h1>
      </SimpleMotion>

      {/* Marketing Tagline */}
      <div className="max-w-3xl mx-auto mb-8">
        <p className="text-blue-200 text-lg md:text-xl lg:text-2xl mb-4 italic">
          Uncover. Create. Repeat.<br />
          Turn any image into the perfect AI art prompt.
        </p>
      </div>

      {/* Marketing Description */}
      <SimpleMotion
        className="max-w-4xl mx-auto mb-12 glass-effect p-8 rounded-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <p className="text-white text-lg md:text-xl leading-relaxed mb-8 text-center">
          <strong className="gradient-text">Upload up to 10 images</strong> and let Prompt Sherlock instantly "investigate" every detail—style, mood, characters, composition, and more. Get ready-to-use prompts, tailored for top AI engines like Midjourney, DALL·E, Stable Diffusion, Gemini Imagen, and more.
        </p>
        
        {/* CTA Button */}
        <div className="text-center">
          <SimpleMotion
            className="glass-button px-10 py-5 text-white font-bold text-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300 border border-blue-400/30 mx-auto cursor-pointer inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.open('https://api.promptsherlock.ai', '_blank')}
          >
            Get Started Now
          </SimpleMotion>
          
          <p className="text-gray-400 text-sm mt-4">
            Upload Your First Image and See Sherlock in Action!
          </p>
        </div>
      </SimpleMotion>

      {/* Feature Carousel */}
      <SimpleMotion
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <SimpleCarousel features={features} />
      </SimpleMotion>
    </header>
  );

  const renderFooter = () => (
    <SimpleMotion
      className="mt-20 pt-12 border-t border-white/10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 1.2 }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8 max-w-4xl mx-auto">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <Search className="w-6 h-6 text-blue-400 mr-2" />
              <span className="gradient-text font-bold text-xl">Prompt Sherlock</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              AI-powered creative sidekick that investigates images to create perfect AI art prompts. 
              Transform your visual inspiration into precise, ready-to-use prompts for any AI engine.
            </p>
          </div>

          {/* Privacy Statement */}
          <div className="text-center md:text-right">
            <h4 className="text-white font-semibold mb-3 flex items-center justify-center md:justify-end">
              <Shield className="w-5 h-5 mr-2 text-green-400" />
              Privacy Promise
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your images are processed securely and deleted immediately after analysis. 
              We never store or share your data. Complete privacy guaranteed.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center py-6 border-t border-white/5 mt-8">
          <SimpleMotion 
            className="text-gray-500 text-sm flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Made with <Heart className="w-4 h-4 mx-1 text-red-400" /> for the creative community
          </SimpleMotion>
          <p className="text-gray-600 text-xs mt-2">
            © 2024 Prompt Sherlock. Privacy-focused AI prompt generation.
          </p>
        </div>
      </div>
    </SimpleMotion>
  );

  // =============================================================================
  // MAIN RENDER
  // =============================================================================

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      <div className="container mx-auto px-4 py-8">
        <SimpleMotion
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {renderHeader()}
          {renderFooter()}
        </SimpleMotion>
      </div>
    </div>
  );
}

export default App;