import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const ThankYou = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, rating } = location.state || { name: 'Customer', rating: 5 };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white p-10 rounded-3xl shadow-2xl text-center max-w-sm w-full animate-fade-in-up">
        
        {/* Animated Icon */}
        <div className="flex justify-center mb-6">
          <CheckCircle size={80} className="text-green-500 animate-bounce" />
        </div>

        <h1 className="text-3xl font-extrabold text-gray-800 mb-2">Thank You!</h1>
        <p className="text-lg text-indigo-600 font-semibold mb-6">
          {name}, we received your {rating} Star rating! ⭐
        </p>
        
        <p className="text-gray-500 text-sm mb-8">
          Your feedback helps us improve our products for everyone.
        </p>

        <button 
          onClick={() => navigate('/')}
          className="w-full bg-gray-900 text-white py-3 rounded-xl font-medium hover:bg-gray-800 transition-colors"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default ThankYou;