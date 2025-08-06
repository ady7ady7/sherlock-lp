// =============================================================================
// LANDING PAGE APP COMPONENT WITH ROUTING
// File: src/App.jsx
// =============================================================================

import React, { useEffect } from 'react';
// Dodano import 'Link' dla nawigacji wewnątrz aplikacji bez przeładowania strony
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

// Import komponentów
import { SimpleMotion, preloadMotion } from './components/SimpleMotion';
import { SimpleCarousel } from './components/SimpleCarousel';

// Import stron
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';

// =============================================================================
// KOMPONENT STRONY GŁÓWNEJ (LANDING PAGE)
// =============================================================================

const LandingPage = () => {
  // Wstępne ładowanie animacji po zamontowaniu komponentu
  useEffect(() => {
    preloadMotion();
  }, []);

  // =============================================================================
  // DANE FUNKCJI (FEATURES)
  // =============================================================================

  const features = [
    {
      icon: Search,
      title: 'Analiza AI',
      description: 'Sherlock "bada" Twoje obrazy, wydobywając styl, nastrój, kompozycję i tematykę.',
      bgGradient: 'from-blue-500/10 to-cyan-500/10'
    },
    {
      icon: Zap,
      title: 'Prompty dla konkretnych silników',
      description: 'Wybierz docelowy silnik (Midjourney, DALL·E, Stable Diffusion, Gemini Imagen, itp.) (Wkrótce)',
      bgGradient: 'from-yellow-500/10 to-orange-500/10'
    },
    {
      icon: Palette,
      title: 'Profile stylów i postaci',
      description: 'Zbuduj bibliotekę powtarzalnych stylów i postaci dla spójnego brandingu. (Wkrótce)',
      bgGradient: 'from-purple-500/10 to-pink-500/10'
    },
    {
      icon: Lightbulb,
      title: 'Natychmiastowa inspiracja',
      description: 'Zamień dowolny obraz w idealny prompt dla AI – bez zgadywania.',
      bgGradient: 'from-green-500/10 to-emerald-500/10'
    },
    {
      icon: Target,
      title: 'Spójność stylu',
      description: 'Zachowaj swój unikalny wygląd we wszystkich projektach.',
      bgGradient: 'from-red-500/10 to-rose-500/10'
    },
    {
      icon: Clock,
      title: 'Oszczędność czasu',
      description: 'Pomiń ręczne pisanie promptów i skup się na tworzeniu.',
      bgGradient: 'from-indigo-500/10 to-violet-500/10'
    }
  ];

  // =============================================================================
  // RENDEROWANIE KOMPONENTÓW
  // =============================================================================

  const renderHeader = () => (
    <header className="text-center mb-16">
      {/* Logo i nazwa marki */}
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

      {/* Slogan marketingowy */}
      <div className="max-w-3xl mx-auto mb-8">
        <p className="text-blue-200 text-lg md:text-xl lg:text-2xl mb-4 italic">
          Odkrywaj. Twórz. Powtarzaj.<br />
          Zamień dowolny obraz w idealny prompt dla AI.
        </p>
      </div>

      {/* Opis marketingowy */}
      <SimpleMotion
        className="max-w-4xl mx-auto mb-12 glass-effect p-8 rounded-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <p className="text-white text-lg md:text-xl leading-relaxed mb-8 text-center">
          <strong className="gradient-text">Prześlij do 10 obrazów</strong> i pozwól, aby Prompt Sherlock natychmiast "zbadał" każdy szczegół – styl, nastrój, postacie, kompozycję i wiele więcej. Otrzymaj gotowe do użycia prompty, dostosowane do czołowych silników AI, takich jak Midjourney, DALL·E, Stable Diffusion, Gemini Imagen i innych.
        </p>
        
        {/* Przycisk CTA (Call to Action) */}
        <div className="text-center">
          <SimpleMotion
            as="a" // Użycie 'as', jeśli SimpleMotion owija natywny tag, a nie inny komponent
            href="https://api.promptsherlock.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-button px-10 py-5 text-white font-bold text-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300 border border-blue-400/30 mx-auto cursor-pointer inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Zacznij już teraz
          </SimpleMotion>
          
          <p className="text-gray-400 text-sm mt-4">
            Prześlij swój pierwszy obraz i zobacz Sherlocka w akcji!
          </p>
        </div>
      </SimpleMotion>

      {/* Karuzela z funkcjami */}
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
        {/* Zawartość stopki */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8 max-w-4xl mx-auto">
          {/* Sekcja marki */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <Search className="w-6 h-6 text-blue-400 mr-2" />
              <span className="gradient-text font-bold text-xl">Prompt Sherlock</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Kreatywny asystent oparty na AI, który bada obrazy, aby tworzyć idealne prompty do generowania grafiki.
              Przekształć swoją wizualną inspirację w precyzyjne, gotowe do użycia prompty dla dowolnego silnika AI.
            </p>
          </div>

          {/* Oświadczenie o prywatności */}
          <div className="text-center md:text-right">
            <h4 className="text-white font-semibold mb-3 flex items-center justify-center md:justify-end">
              <Shield className="w-5 h-5 mr-2 text-green-400" />
              Obietnica prywatności
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Twoje obrazy są przetwarzane bezpiecznie i usuwane natychmiast po analizie.
              Nigdy nie przechowujemy ani nie udostępniamy Twoich danych. Pełna prywatność gwarantowana.
            </p>
          </div>
        </div>

        {/* Prawa autorskie i linki prawne */}
        <div className="text-center py-6 border-t border-white/5 mt-8">
          <SimpleMotion 
            className="text-gray-500 text-sm flex items-center justify-center mb-3"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Stworzone z <Heart className="w-4 h-4 mx-1 text-red-400" /> dla społeczności kreatywnej
          </SimpleMotion>
          
          {/* Linki prawne (użycie <Link> dla lepszej nawigacji) */}
          <div className="flex items-center justify-center space-x-4 mb-2 text-gray-400 text-sm">
            <Link to="/privacy" className="hover:text-blue-400 transition-colors">Polityka Prywatności</Link>
            <span>•</span>
            <Link to="/terms" className="hover:text-blue-400 transition-colors">Warunki Korzystania</Link>
          </div>
          
          <p className="text-gray-600 text-xs">
            © 2025 Prompt Sherlock. Generowanie promptów AI z poszanowaniem prywatności.
          </p>
        </div>
      </div>
    </SimpleMotion>
  );

  // =============================================================================
  // GŁÓWNE RENDEROWANIE
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
// GŁÓWNY KOMPONENT APLIKACJI Z ROUTINGIEM
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

// Poprawiony export - usunięto zbędny tekst
export default App;