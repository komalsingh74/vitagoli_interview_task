import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageSquarePlus } from 'lucide-react'; 
import Button  from './Button'; 

const ProductCard = ({ product }) => {
    const navigate = useNavigate();

    return (
        <div className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col">
            {/* Image Section */}
            <div className="h-48 overflow-hidden relative">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
            </div>

            {/* content Section */}
            <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-gray-800 mb-1">{product.name}</h3>
                <p className="text-indigo-600 font-bold text-xl mb-4">{product.price}</p>

                {/*  Button component*/}
                <Button
                    onClick={() => navigate(`/feedback/${product.id}`)}
                    variant="primary"
                    className="w-full"
                >
                    <MessageSquarePlus size={18} />
                    Give Feedback
                </Button>
            </div>
        </div>
    );
};

export default ProductCard;