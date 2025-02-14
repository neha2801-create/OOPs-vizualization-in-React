import React from 'react';
import { motion } from 'framer-motion';
import { concepts } from '../../constants/conceptsData';

const ClassConcept = () => {
  const { example } = concepts.class;

  return (
    <div className="space-y-4">
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="p-4 rounded-lg bg-blue-100"
      >
        <h3 className="font-bold mb-2">Class {example.name} {'{'}</h3>
        <div className="pl-4">
          <p className="text-gray-600">// Properties</p>
          {example.properties.map(prop => (
            <motion.p
              key={prop}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-blue-700"
            >
              {prop}
            </motion.p>
          ))}
          <p className="text-gray-600 mt-2">// Methods</p>
          {example.methods.map(method => (
            <motion.p
              key={method}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-green-700"
            >
              {method}
            </motion.p>
          ))}
        </div>
        <p>{'}'}</p>
      </motion.div>
    </div>
  );
};

export default ClassConcept;