import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function DraggableCard({ children, className = '' }: Props) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.matchMedia('(min-width: 768px)').matches);
    };

    // Initial check
    checkDesktop();

    // Listen for resize
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  // Animation variants
  const variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    hover: isDesktop ? { scale: 1.02, rotate: 1, zIndex: 10 } : {},
    tap: { scale: 0.98 }
  } as const;

  return (
    <motion.div
      // Layout props
      layout
      initial="initial"
      animate="animate"
      whileHover="hover"
      whileTap="tap"
      variants={variants}

      // Drag props (only enabled on desktop)
      drag={isDesktop}
      dragElastic={0.2}
      dragMomentum={false} // Reduces "throwing" effect which can be chaotic
      whileDrag={{ scale: 1.05, cursor: "grabbing", zIndex: 50 }}

      className={`relative h-full ${className} ${isDesktop ? 'cursor-grab active:cursor-grabbing' : 'cursor-auto'}`}
    >
      {children}
    </motion.div>
  );
}
