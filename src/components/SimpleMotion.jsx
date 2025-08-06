// =============================================================================
// SIMPLE MOTION COMPONENT - OPTIMIZED LAZY LOADING
// File: src/components/SimpleMotion.jsx
// =============================================================================

import React, { useState, useEffect } from 'react';

/**
 * Simple Motion Component - Lazy loads Framer Motion
 * Shows blank until motion is loaded, then animates smoothly
 */
export const SimpleMotion = ({ 
  children, 
  className = "", 
  style = {},
  whileHover,
  whileTap,
  initial,
  animate,
  variants,
  transition,
  onClick,
  ...props 
}) => {
  const [MotionComponent, setMotionComponent] = useState(null);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Load motion after a tiny delay to not block initial render
    const timer = setTimeout(async () => {
      try {
        const { motion } = await import('framer-motion');
        setMotionComponent(() => motion.div);
        setShowContent(true);
      } catch (error) {
        console.warn('Framer Motion failed to load, using fallback');
        // Fallback: just show content without motion
        setShowContent(true);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Don't render anything until motion is loaded or fallback is triggered
  if (!showContent) {
    return null; // Blank until ready
  }

  // Use motion if available, otherwise plain div
  if (MotionComponent) {
    return (
      <MotionComponent
        className={className}
        style={style}
        initial={initial}
        animate={animate}
        variants={variants}
        whileHover={whileHover}
        whileTap={whileTap}
        transition={transition}
        onClick={onClick}
        {...props}
      >
        {children}
      </MotionComponent>
    );
  }

  // Plain fallback with CSS animations
  return (
    <div 
      className={`${className} animate-fade-in`} 
      style={style}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * Preload motion globally after initial page load
 */
let motionPreloaded = false;

export const preloadMotion = () => {
  if (!motionPreloaded) {
    motionPreloaded = true;
    // Preload after page is fully loaded
    setTimeout(() => {
      import('framer-motion').catch(() => {
        console.warn('Could not preload Framer Motion');
      });
    }, 2000);
  }
};