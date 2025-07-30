import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = '', hover = true }) => {
  return (
    <motion.div
      whileHover={hover ? { y: -1, shadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' } : {}}
      className={`bg-white rounded-lg shadow-md p-6 transition-shadow ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;