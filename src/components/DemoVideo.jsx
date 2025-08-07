// =============================================================================
// DEBUG DEMO VIDEO COMPONENT
// File: src/components/DemoVideo.jsx - Debug Version
// =============================================================================

import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, AlertCircle } from 'lucide-react';
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

  // Debug logging
  useEffect(() => {
    console.log('🎥 DemoVideo component mounted');
    console.log('📁 Video path should be: /videos/demo.mp4');
    
    // Check if video file exists
    fetch('/videos/demo.mp4', { method: 'HEAD' })
      .then(response => {
        console.log('🔍 Video file check:', response.status);
        if (!response.ok) {
          console.error('❌ Video file not found at /videos/demo.mp4');
          setHasError(true);
          setErrorMessage(`Video file not found (${response.status})`);
        } else {
          console.log('✅ Video file found!');
        }
      })
      .catch(error => {
        console.error('❌ Error checking video file:', error);
        setHasError(true);
        setErrorMessage('Cannot access video file');
      });
  }, []);

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log('👁️ Video in view:', entry.isIntersecting);
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
      console.log('🎬 Attempting to play video...');
      video.play()
        .then(() => {
          console.log('✅ Video playing successfully');
          setIsPaused(false);
        })
        .catch(error => {
          console.error('❌ Autoplay failed:', error);
          setIsPaused(true);
        });
    }
  }, [isLoaded, isInView]);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (video) {
      console.log('🎮 Toggle play/pause clicked');
      if (video.paused) {
        video.play()
          .then(() => {
            console.log('▶️ Video resumed');
            setIsPaused(false);
          })
          .catch(error => {
            console.error('❌ Play failed:', error);
          });
      } else {
        video.pause();
        console.log('⏸️ Video paused');
        setIsPaused(true);
      }
    }
  };

  const handleVideoLoad = () => {
    console.log('📺 Video loaded successfully');
    setIsLoaded(true);
    setHasError(false);
  };

  const handleVideoError = (e) => {
    console.error('❌ Video error:', e);
    console.error('Error details:', e.target.error);
    setHasError(true);
    setErrorMessage('Video failed to load');
    setIsLoaded(true); // Show error state
  };

  // Force show video for debugging
  useEffect(() => {
    // Auto-trigger in view for debugging
    setTimeout(() => {
      if (!isInView) {
        console.log('🔧 Debug: Force triggering video load');
        setIsInView(true);
      }
    }, 1000);
  }, [isInView]);

  return (
    <SimpleMotion
      ref={containerRef}
      className={`relative max-w-4xl mx-auto ${className}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      {/* Debug Info */}
      <div className="mb-4 p-3 bg-gray-800/50 rounded-lg text-sm text-gray-300">
        <p>🔧 Debug Info:</p>
        <p>• Video path: /videos/demo.mp4</p>
        <p>• In view: {isInView ? '✅' : '❌'}</p>
        <p>• Loaded: {isLoaded ? '✅' : '❌'}</p>
        <p>• Error: {hasError ? '❌' : '✅'}</p>
        {errorMessage && <p>• Error: {errorMessage}</p>}
      </div>

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
              <div className="text-xs text-gray-400 max-w-md">
                <p>Please check that demo.mp4 is in:</p>
                <p className="font-mono bg-black/20 px-2 py-1 rounded mt-1">
                  public/videos/demo.mp4
                </p>
              </div>
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
            onCanPlay={() => console.log('📺 Video can play')}
            onPlay={() => console.log('▶️ Video started playing')}
            onPause={() => console.log('⏸️ Video paused')}
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