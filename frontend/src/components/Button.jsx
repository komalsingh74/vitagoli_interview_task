import React from 'react';

const Button = ({ 
  children,      
  onClick,        
  variant = 'primary',
  className = '',
  type = 'button' 
}) => {
  

  const baseStyles = "flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-medium transition-all duration-200 active:scale-95";


  const variants = {
    primary: "bg-gray-900 text-white hover:bg-indigo-600 hover:shadow-lg shadow-gray-200",
    secondary: "bg-indigo-50 text-indigo-700 hover:bg-indigo-100",
    outline: "border-2 border-gray-200 text-gray-700 hover:border-gray-900 hover:text-gray-900 bg-transparent"
  };

  return (
    <button 
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;