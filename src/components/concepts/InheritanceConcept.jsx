// src/components/concepts/InheritanceConcept.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { concepts } from '../../constants/conceptsData';

const InheritanceConcept = () => {
  const { example } = concepts.inheritance;

  return (
    <div className="space-y-4">
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="p-4 rounded-lg bg-green-100"
      >
        <div className="mb-4">
          <h3 className="font-bold">Parent: {example.parent}</h3>
          <div className="pl-4">
            {example.inherited.map(trait => (
              <motion.p
                key={trait}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-gray-600"
              >
                ↑ {trait}
              </motion.p>
            ))}
          </div>
        </div>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="font-bold">Child: {example.child}</h3>
          <div className="pl-4">
            {example.added.map(trait => (
              <motion.p
                key={trait}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-green-600"
              >
                + {trait}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default InheritanceConcept;