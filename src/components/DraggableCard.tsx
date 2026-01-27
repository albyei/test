import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function DraggableCard({ children, className = '' }: Props) {
  return (
    <motion.div
      drag
      dragElastic={0.2}
      whileHover={{ scale: 1.02, rotate: 1, zIndex: 10 }}
      whileTap={{ scale: 0.98, cursor: "grabbing" }}
      whileDrag={{ scale: 1.05, cursor: "grabbing", zIndex: 50 }}
      className={`relative cursor-grab active:cursor-grabbing h-full ${className}`}
    >
      {children}
    </motion.div>
  );
}
