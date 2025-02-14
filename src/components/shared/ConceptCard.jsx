import React from 'react';
import { motion } from 'framer-motion';
import { Box, Package, Copy, GitBranch } from 'lucide-react';

const icons = {
  class: Box,
  inheritance: GitBranch,
  encapsulation: Package,
  polymorphism: Copy
};

const ConceptCard = ({ concept, isSelected, onClick }) => {
  const Icon = icons[concept.toLowerCase()];

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${
        isSelected ? concept.color : 'bg-gray-100'
      } p-4 rounded-lg flex flex-col items-center transition-colors duration-200`}
    >
      <Icon 
        size={32} 
        className={isSelected ? 'text-white' : 'text-gray-600'} 
      />
      <span className={`mt-2 font-medium ${
        isSelected ? 'text-white' : 'text-gray-800'
      }`}>
        {concept}
      </span>
    </motion.button>
  );
};
export default ConceptCard;