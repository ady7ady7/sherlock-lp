// =============================================================================
// DEMO VIDEO COMPONENT - PRODUCTION VERSION
// File: src/components/DemoVideo.jsx
// =============================================================================

import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';
import { SimpleMotion } from './SimpleMotion';

const DemoVideo = ({ className = "" }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [isInView]);

  // Auto-play when video loads
  useEffect(() => {
    const video = videoRef.current;
    if (video && isLoaded && isInView) {
      video.play().catch(() => setIsPaused(true));
    }
  }, [isLoaded, isInView]);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play().then(() => setIsPaused(false)).catch(() => {});
      } else {
        video.pause();
        setIsPaused(true);
      }
    }
  };

  return (
    <SimpleMotion
      ref={containerRef}
      className={`relative max-w-4xl mx-auto ${className}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      {/* Video Container */}
      <div 
        className="relative rounded-2xl overflow-hidden shadow-2xl backdrop-blur-lg bg-white/5 border border-white/10"
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
      >
        {/* Loading Placeholder */}
        {!isLoaded && isInView && (
          <div className="aspect-video bg-gradient-to-br from-blue-900/50 to-purple-900/50 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="animate-spin rounded-full h-12 w-12 border-2 border-blue-400 border-t-transparent mx-auto mb-4"></div>
              <p className="text-lg font-medium">Loading Demo...</p>
              <p className="text-sm text-gray-300">Preparing HD video experience</p>
            </div>
          </div>
        )}

        {/* Lazy Loading Message */}
        {!isInView && (
          <div className="aspect-video bg-gradient-to-br from-slate-900 to-blue-900 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="w-8 h-8 text-blue-400" />
              </div>
              <p className="text-lg font-medium">Demo Video Ready</p>
              <p className="text-sm text-gray-300">Scroll down to watch Sherlock in action</p>
            </div>
          </div>
        )}

        {/* Actual Video */}
        {isInView && (
          <video
            ref={videoRef}
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            onLoadedData={() => setIsLoaded(true)}
            onError={() => setIsLoaded(true)}
          >
            <source src="/videos/demo.mp4" type="video/mp4" />
            
            {/* Fallback for browsers without video support */}
            <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
              <div className="text-center text-white p-8">
                <p className="text-lg mb-4">Your browser doesn't support video playback.</p>
                <a 
                  href="https://app.promptsherlock.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                >
                  Try the Live Demo →
                </a>
              </div>
            </div>
          </video>
        )}

        {/* Controls Overlay */}
        {isLoaded && (showControls || isPaused) && (
          <SimpleMotion
            className="absolute bottom-4 left-4 right-4 flex items-center justify-between"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="bg-black/60 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center space-x-3">
              <button
                onClick={togglePlayPause}
                className="text-white hover:text-blue-400 transition-colors p-1 hover:bg-white/10 rounded"
                aria-label={isPaused ? 'Play video' : 'Pause video'}
              >
                {isPaused ? <Play className="w-5 h-5" /> : <Pause className="w-5 h-5" />}
              </button>
              
              <span className="text-white text-sm font-medium">
                Demo Video • 16s • HD
              </span>
            </div>

            <div className="bg-black/60 backdrop-blur-sm rounded-lg px-3 py-2">
              <Volume2 className="w-4 h-4 text-gray-400" />
            </div>
          </SimpleMotion>
        )}

        {/* Video Label */}
        <div className="absolute top-4 left-4">
          <div className="bg-black/60 backdrop-blur-sm rounded-lg px-3 py-1">
            <span className="text-white text-sm font-medium">Live Demo</span>
          </div>
        </div>
      </div>

      {/* Video Description */}
      <div className="text-center mt-6">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
          See Sherlock in Action
        </h3>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Watch how Prompt Sherlock analyzes your images and generates perfect AI prompts in seconds. 
          This is the actual webapp you'll be using.
        </p>
      </div>
    </SimpleMotion>
  );
};

export default DemoVideo;