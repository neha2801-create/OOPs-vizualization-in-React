import React, { useState } from 'react';
import { Box, Package, Copy, GitBranch } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const OOPVisualizer = () => {
  const [selectedConcept, setSelectedConcept] = useState('class');

  const concepts = {
    class: {
      icon: Box,
      title: 'Class',
      color: 'bg-blue-500',
      description: 'A blueprint for creating objects',
      example: {
        code: `class Animal {
  name: string
  sound: string
  
  makeSound() {
    return this.sound
  }
}`,
        visualization: (
          <div className="flex items-center justify-center space-x-4">
            <motion.div
              className="bg-blue-100 p-4 rounded-lg"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-blue-800 font-mono">Blueprint</div>
              <div className="mt-2">🏗️</div>
            </motion.div>
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              ➡️
            </motion.div>
            <motion.div
              className="bg-blue-100 p-4 rounded-lg"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.7 }}
            >
              <div className="text-blue-800 font-mono">Object</div>
              <div className="mt-2">🐕</div>
            </motion.div>
          </div>
        )
      }
    },
    inheritance: {
      icon: GitBranch,
      title: 'Inheritance',
      color: 'bg-green-500',
      description: 'A mechanism that allows a class to inherit properties and methods from another class',
      example: {
        code: `class Dog extends Animal {
  breed: string
  
  wagTail() {
    return "Wagging tail!"
  }
}`,
        visualization: (
          <div className="flex flex-col items-center space-y-4">
            <motion.div
              className="bg-green-100 p-4 rounded-lg"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <div className="text-green-800 font-mono">Parent (Animal)</div>
              <div className="mt-2">🦊</div>
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              ⬇️
            </motion.div>
            <motion.div
              className="bg-green-100 p-4 rounded-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="text-green-800 font-mono">Child (Dog)</div>
              <div className="mt-2">🐕</div>
            </motion.div>
          </div>
        )
      }
    },
    encapsulation: {
      icon: Package,
      title: 'Encapsulation',
      color: 'bg-purple-500',
      description: 'Bundling of data and the methods that operate on that data within a single unit',
      example: {
        code: `class BankAccount {
  private balance: number
  
  deposit(amount: number) {
    this.balance += amount
  }
}`,
        visualization: (
          <motion.div
            className="flex justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <div className="bg-purple-100 p-6 rounded-lg">
              <div className="text-purple-800 font-mono text-center">Private Data</div>
              <motion.div
                className="border-2 border-purple-400 rounded-lg p-4 mt-2"
                animate={{ boxShadow: ["0px 0px 0px rgba(167,139,250,0)", "0px 0px 20px rgba(167,139,250,0.5)", "0px 0px 0px rgba(167,139,250,0)"] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🔒 Protected Content
              </motion.div>
            </div>
          </motion.div>
        )
      }
    },
    polymorphism: {
      icon: Copy,
      title: 'Polymorphism',
      color: 'bg-pink-500',
      description: 'The ability of different objects to respond to the same message in different ways',
      example: {
        code: `interface Animal {
  makeSound(): string
}

class Dog implements Animal {
  makeSound() { return "Woof!" }
}

class Cat implements Animal {
  makeSound() { return "Meow!" }
}`,
        visualization: (
          <div className="flex flex-col items-center space-y-4">
            <motion.div
              className="bg-pink-100 p-4 rounded-lg w-full text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <div className="text-pink-800 font-mono">makeSound()</div>
            </motion.div>
            <div className="flex space-x-8">
              {['🐕', '🐈', '🦆'].map((animal, index) => (
                <motion.div
                  key={animal}
                  className="bg-pink-100 p-4 rounded-lg"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.2 }}
                >
                  {animal}
                </motion.div>
              ))}
            </div>
          </div>
        )
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          className="text-4xl font-bold text-center mb-8 text-gray-800"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          Learn Object-Oriented Programming 🚀
        </motion.h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {Object.entries(concepts).map(([key, concept]) => {
            const Icon = concept.icon;
            return (
              <motion.button
                key={key}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedConcept(key)}
                className={`${
                  selectedConcept === key ? concept.color : 'bg-white'
                } concept-card p-6 rounded-lg flex flex-col items-center transition-colors duration-200`}
              >
                <Icon 
                  size={32} 
                  className={selectedConcept === key ? 'text-white' : 'text-gray-600'} 
                />
                <span className={`mt-2 font-medium ${
                  selectedConcept === key ? 'text-white' : 'text-gray-800'
                }`}>
                  {concept.title}
                </span>
              </motion.button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedConcept}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              {concepts[selectedConcept].title}
            </h2>
            <p className="text-gray-600 mb-6">
              {concepts[selectedConcept].description}
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="concept-content bg-gray-50">
                <h3 className="text-lg font-semibold mb-3">Code Example</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{concepts[selectedConcept].example.code}</code>
                </pre>
              </div>
              
              <div className="concept-content bg-gray-50">
                <h3 className="text-lg font-semibold mb-3">Visual Representation</h3>
                {concepts[selectedConcept].example.visualization}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default OOPVisualizer;