import React from 'react';
import { motion } from 'framer-motion';
import { concepts } from '../../constants/conceptsData';

const EncapsulationConcept = () => {
  const { example } = concepts.encapsulation;

  return (
    <div className="space-y-4">
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="p-4 rounded-lg bg-purple-100"
      >
        <h3 className="font-bold mb-2">BankAccount {'{'}</h3>
        <div className="pl-4">
          <p className="text-gray-600">// Private (Hidden)</p>
          {example.private.map(item => (
            <motion.p
              key={item}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-red-600"
            >
              🔒 {item}
            </motion.p>
          ))}
          <p className="text-gray-600 mt-2">// Public (Accessible)</p>
          {example.public.map(item => (
            <motion.p
              key={item}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-green-600"
            >
              🔓 {item}
            </motion.p>
          ))}
        </div>
        <p>{'}'}</p>
      </motion.div>
    </div>
  );
};

export default EncapsulationConcept;