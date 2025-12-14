import React from 'react';
import { ShoppingBag, Menu, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => navigate('/')}
          >
            <div className="bg-indigo-600 text-white p-1.5 rounded-lg">
              <ShoppingBag size={20} />
            </div>
            <span className="text-xl font-extrabold text-gray-800 tracking-tight">
              ERPDADDY <span className="text-indigo-600">STORE</span>
            </span>
          </div>
          <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-64 border border-transparent focus-within:border-indigo-300 focus-within:bg-white transition-all">
            <Search size={18} className="text-gray-400" />
            <input 
              type="text" 
              placeholder="Search products..." 
              className="bg-transparent border-none outline-none text-sm ml-2 w-full text-gray-700 placeholder-gray-400"
            />
          </div>
          <div className="flex items-center gap-4">
            <button className="text-gray-500 hover:text-indigo-600 font-medium text-sm transition-colors">
              Sign In
            </button>
            <button className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors shadow-lg shadow-gray-200">
              Cart (0)
            </button>

            <button className="md:hidden text-gray-600">
              <Menu size={24} />
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;