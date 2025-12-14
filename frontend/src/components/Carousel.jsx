import React, { useRef, useState } from 'react';
import { products } from '../data/products';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Carousel = () => {
  const scrollRef = useRef(null);
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 300; 
      
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };


  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / 300); 
      setActiveIndex(index);
    }
  };

  return (
    <div className="my-10 px-4 max-w-7xl mx-auto">
      
      <div className="flex justify-between items-center mb-4">

      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Trending Products 🔥</h2>
        <p className="text-gray-500 text-sm mt-1">Top picks for you this week</p>
      </div>
  
        <div className="flex gap-4">
          <button 
            onClick={() => scroll('left')}
            className="p-3 rounded-full border border-gray-200 hover:bg-gray-100 hover:shadow-md transition-all active:scale-95"
          >
            <ChevronLeft size={20} className="text-gray-600" />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="p-3 rounded-full bg-gray-900 text-white hover:bg-gray-800 hover:shadow-lg transition-all active:scale-95"
          >
            <ChevronRight size={20} />
          </button>
        </div>

</div>
      <div 
        ref={scrollRef}
        onScroll={handleScroll} 
        className="flex gap-6 overflow-x-auto pb-8 scroll-smooth scrollbar-hide snap-x px-2"
        style={{ scrollbarWidth: 'none' }}
      >
        {products.map((product) => (
          <div 
            key={product.id}
            className="min-w-[280px] md:min-w-[300px] bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 snap-center flex flex-col"
          >
 
            <div className="h-48 w-full bg-gray-50 rounded-t-2xl overflow-hidden relative group">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                {product.price}
              </div>
            </div>


            <div className="p-4 flex flex-col flex-grow">
              <h3 className="font-semibold text-gray-800 mb-1">{product.name}</h3>
              <div className="flex items-center gap-1 mb-3">
                <Star size={14} className="fill-yellow-400 text-yellow-400" />
                <span className="text-xs text-gray-500">4.5 (120 Reviews)</span>
              </div>
              <button 
                onClick={() => navigate(`/feedback/${product.id}`)}
                className="mt-auto w-full py-2 px-4 border border-indigo-600 text-indigo-600 rounded-lg text-sm font-medium hover:bg-indigo-600 hover:text-white transition-colors"
              >
                Give Feedback
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center gap-4 mt-2">
        <div className="flex gap-2">
          {products.map((_, index) => (
            <div 
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'w-8 bg-indigo-600' : 'w-2 bg-gray-300'
              }`}
            />
          ))}
        </div>

      </div>

    </div>
  );
};

export default Carousel;