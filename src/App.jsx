// =============================================================================
// LANDING PAGE APP COMPONENT WITH ROUTING
// File: src/App.jsx
// =============================================================================

import React, { useEffect } from 'react';
// Added Link import for in-app navigation without page reload
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
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

// Component imports
import { SimpleMotion, preloadMotion } from './components/SimpleMotion';
import { SimpleCarousel } from './components/SimpleCarousel';

// Page imports
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';

// =============================================================================
// LANDING PAGE COMPONENT
// =============================================================================

const LandingPage = () => {
  // Preload animations on component mount
  useEffect(() => {
    preloadMotion();
  }, []);

  // =============================================================================
  // FEATURES DATA
  // =============================================================================

  const features = [
    {
      icon: Search,
      title: 'AI Analysis',
      description: 'Sherlock "investigates" your images, extracting style, mood, composition, and themes.',
      bgGradient: 'from-blue-500/10 to-cyan-500/10'
    },
    {
      icon: Zap,
      title: 'Engine-Specific Prompts',
      description: 'Choose target engine (Midjourney, DALL·E, Stable Diffusion, Gemini Imagen, etc.) (Coming Soon)',
      bgGradient: 'from-yellow-500/10 to-orange-500/10'
    },
    {
      icon: Palette,
      title: 'Style & Character Profiles',
      description: 'Build a library of repeatable styles and characters for consistent branding. (Coming Soon)',
      bgGradient: 'from-purple-500/10 to-pink-500/10'
    },
    {
      icon: Lightbulb,
      title: 'Instant Inspiration',
      description: 'Turn any image into the perfect AI prompt – no guesswork.',
      bgGradient: 'from-green-500/10 to-emerald-500/10'
    },
    {
      icon: Target,
      title: 'Style Consistency',
      description: 'Maintain your unique visual identity across all projects.',
      bgGradient: 'from-red-500/10 to-rose-500/10'
    },
    {
      icon: Clock,
      title: 'Time Saving',
      description: 'Skip manual prompt writing and focus on creating.',
      bgGradient: 'from-indigo-500/10 to-violet-500/10'
    }
  ];

  // =============================================================================
  // COMPONENT RENDERING
  // =============================================================================

  const renderHeader = () => (
    <header className="text-center mb-16">
      {/* Logo and brand name */}
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

      {/* Marketing slogan */}
      <div className="max-w-3xl mx-auto mb-8">
        <p className="text-blue-200 text-lg md:text-xl lg:text-2xl mb-4 italic">
          Discover. Create. Repeat.<br />
          Turn any image into the perfect AI prompt.
        </p>
      </div>

      {/* Marketing description */}
      <SimpleMotion
        className="max-w-4xl mx-auto mb-12 glass-effect p-8 rounded-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <p className="text-white text-lg md:text-xl leading-relaxed mb-8 text-center">
          <strong className="gradient-text">Upload up to 10 images</strong> and let Prompt Sherlock instantly "investigate" every detail – style, mood, characters, composition, and much more. Get ready-to-use prompts, tailored for leading AI engines like Midjourney, DALL·E, Stable Diffusion, Gemini Imagen, and others.
        </p>
        
        {/* Call to Action button */}
        <div className="text-center">
          <SimpleMotion
            as="a"
            href="https://api.promptsherlock.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-button px-10 py-5 text-white font-bold text-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300 border border-blue-400/30 mx-auto cursor-pointer inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Start Now
          </SimpleMotion>
          
          <p className="text-gray-400 text-sm mt-4">
            Upload your first image and see Sherlock in action!
          </p>
        </div>
      </SimpleMotion>

      {/* Features carousel */}
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
        {/* Footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8 max-w-4xl mx-auto">
          {/* Brand section */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <Search className="w-6 h-6 text-blue-400 mr-2" />
              <span className="gradient-text font-bold text-xl">Prompt Sherlock</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              AI-powered creative assistant that investigates images to create perfect prompts for graphic generation.
              Transform your visual inspiration into precise, ready-to-use prompts for any AI engine.
            </p>
          </div>

          {/* Privacy statement */}
          <div className="text-center md:text-right">
            <h4 className="text-white font-semibold mb-3 flex items-center justify-center md:justify-end">
              <Shield className="w-5 h-5 mr-2 text-green-400" />
              Privacy Promise
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your images are processed securely and deleted immediately after analysis.
              We never store or share your data. Full privacy guaranteed.
            </p>
          </div>
        </div>

        {/* Copyright and legal links */}
        <div className="text-center py-6 border-t border-white/5 mt-8">
          <SimpleMotion 
            className="text-gray-500 text-sm flex items-center justify-center mb-3"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Made with <Heart className="w-4 h-4 mx-1 text-red-400" /> for the creative community
          </SimpleMotion>
          
          {/* Legal links (using Link for better navigation) */}
          <div className="flex items-center justify-center space-x-4 mb-2 text-gray-400 text-sm">
            <Link to="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link to="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</Link>
          </div>
          
          <p className="text-gray-600 text-xs">
            © 2025 Prompt Sherlock. AI prompt generation with privacy in mind.
          </p>
        </div>
      </div>
    </SimpleMotion>
  );

  // =============================================================================
  // MAIN RENDERING
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
};

// =============================================================================
// MAIN APP COMPONENT WITH ROUTING
// =============================================================================

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;