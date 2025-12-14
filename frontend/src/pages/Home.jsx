import React from 'react';
import Carousel from '../components/Carousel';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">   
      <Navbar />

      <div className="max-w-6xl mx-auto">
        <Carousel />

        <div className="px-4">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">New Arrivals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;