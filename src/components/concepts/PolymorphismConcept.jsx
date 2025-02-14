import React from 'react';
import { motion } from 'framer-motion';
import { concepts } from '../../constants/conceptsData';

const PolymorphismConcept = () => {
  const { example } = concepts.polymorphism;

  return (
    <div className="space-y-4">
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="p-4 rounded-lg bg-pink-100"
      >
        <h3 className="font-bold mb-2">Method: {example.method}</h3>
        <div className="pl-4">
          {example.variations.map((variation, index) => (
            <motion.div
              key={variation}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
              className="flex items-center space-x-2"
            >
              <span className="text-pink-600">→</span>
              <p className="text-gray-700">{variation}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default PolymorphismConcept;