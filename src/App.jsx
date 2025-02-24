import React from 'react';
import OOPVisualizer from './components/OOPVisualizer';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-blue-500 text-white p-4 rounded-lg shadow-lg mb-4">
          Test Tailwind
        </div>
        <OOPVisualizer />
      </div>
    </div>
  );
}

export default App;