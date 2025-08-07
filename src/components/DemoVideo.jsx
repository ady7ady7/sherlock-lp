// =============================================================================
// DEMO VIDEO COMPONENT - Working Clean Version
// File: src/components/DemoVideo.jsx
// =============================================================================

import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, AlertCircle } from 'lucide-react';
import { SimpleMotion } from './SimpleMotion';

const DemoVideo = ({ className = "" }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  // Check if video file exists (silent)
  useEffect(() => {
    fetch('/videos/demo.mp4', { method: 'HEAD' })
      .then(response => {
        if (!response.ok) {
          setHasError(true);
          setErrorMessage(`Video file not found (${response.status})`);
        }
      })
      .catch(error => {
        setHasError(true);
        setErrorMessage('Cannot access video file');
      });
  }, []);

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
      video.play()
        .then(() => {
          setIsPaused(false);
        })
        .catch(error => {
          setIsPaused(true);
        });
    }
  }, [isLoaded, isInView]);

  // Force show video for debugging (IMPORTANT: This was missing!)
  useEffect(() => {
    // Auto-trigger in view after 1 second
    setTimeout(() => {
      if (!isInView) {
        setIsInView(true);
      }
    }, 1000);
  }, [isInView]);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play()
          .then(() => {
            setIsPaused(false);
          })
          .catch(error => {
            // Silent error handling
          });
      } else {
        video.pause();
        setIsPaused(true);
      }
    }
  };

  const handleVideoLoad = () => {
    setIsLoaded(true);
    setHasError(false);
  };

  const handleVideoError = (e) => {
    setHasError(true);
    setErrorMessage('Video failed to load');
    setIsLoaded(true); // Show error state
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
        {/* Error State */}
        {hasError && (
          <div className="aspect-video bg-gradient-to-br from-red-900/50 to-purple-900/50 flex items-center justify-center">
            <div className="text-center text-white">
              <AlertCircle className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <p className="text-lg font-medium">Video Not Available</p>
              <p className="text-sm text-gray-300 mb-4">{errorMessage}</p>
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
        )}

        {/* Loading Placeholder */}
        {!isLoaded && isInView && !hasError && (
          <div className="aspect-video bg-gradient-to-br from-blue-900/50 to-purple-900/50 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="animate-spin rounded-full h-12 w-12 border-2 border-blue-400 border-t-transparent mx-auto mb-4"></div>
              <p className="text-lg font-medium">Loading Demo...</p>
              <p className="text-sm text-gray-300">Preparing HD video experience</p>
            </div>
          </div>
        )}

        {/* Lazy Loading Message */}
        {!isInView && !hasError && (
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
        {isInView && !hasError && (
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
            onLoadedData={handleVideoLoad}
            onError={handleVideoError}
            onCanPlay={() => {}} // Silent
            onPlay={() => {}} // Silent
            onPause={() => {}} // Silent
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

        {/* Enhanced Controls Overlay */}
        {isLoaded && !hasError && (showControls || isPaused) && (
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
            <span className="text-white text-sm font-medium">App Demo</span>
          </div>
        </div>
      </div>


    </SimpleMotion>
  );
};

export default DemoVideo;