import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col">
      {/* Image Section */}
      <div className="w-full h-56 bg-gray-50 overflow-hidden relative group">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-2 right-2 bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded">
          {product.category}
        </div>
      </div>

      {/* Details Section */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-bold text-gray-900 text-lg font-montserrat truncate mb-1">
          {product.name}
        </h3>
        <p className="text-gray-500 text-sm font-inter line-clamp-2 mb-4 flex-grow">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between mt-auto">
          <p className="text-blue-600 font-bold text-xl font-inter">
            ₹{product.price}
          </p>
          <Link to={`/product/${product.id}`}>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg text-sm transition-colors shadow-sm">
              View
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;