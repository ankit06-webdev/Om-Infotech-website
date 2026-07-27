import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const FeaturedProducts = () => {
  const navigate = useNavigate();

  const categories = [
    { name: "Smartphones", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=400&auto=format&fit=crop" },
    { name: "Coolers", image: "https://images.unsplash.com/photo-1581622558667-3419a8dc5f83?q=80&w=400&auto=format&fit=crop" },
    { name: "Accessories", image: "https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?q=80&w=400&auto=format&fit=crop" },
    { name: "EARPHONES", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400&auto=format&fit=crop" },
    { name: "CHARGERS", image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=400&auto=format&fit=crop" },
    { name: "COVERS", image: "https://images.unsplash.com/photo-1601593346740-925612772716?q=80&w=400&auto=format&fit=crop" },
    { name: "SMART WATCHES", image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=400&auto=format&fit=crop" },
    { name: "LAPTOPS", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=400&auto=format&fit=crop" },
    { name: "PEN DRIVES", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=400&auto=format&fit=crop" },
    { name: "REPAIRS", image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?q=80&w=400&auto=format&fit=crop" }
  ];

  const handleCategoryClick = (categoryName) => {
    navigate('/products', { state: { category: categoryName.toLowerCase() } });
  };

  return (
    <div id='featuredProduct' className="py-12 md:py-16 px-4 flex flex-col items-center bg-gray-50 w-full">
      
      <h2 className="text-2xl md:text-3xl font-bold uppercase font-montserrat mb-8 md:mb-12 text-center tracking-wide text-gray-900">
        Our Categories
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 max-w-7xl w-full mb-12">
        {categories.map((category, index) => (
          <div 
            key={index} 
            onClick={() => handleCategoryClick(category.name)}
            className="relative group w-full aspect-square rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <img 
              src={category.image} 
              alt={category.name} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent md:hidden"></div>

            <div className="absolute inset-0 bg-blue-600/10 md:bg-blue-600/50 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center md:items-center items-end justify-center p-4 text-center">
              <p className="font-bold text-white font-montserrat text-sm sm:text-base leading-tight md:transform md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-300">
                {category.name.toUpperCase()}
              </p>
            </div>
            
          </div>
        ))}
      </div>

      <Link to="/products">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 tracking-wide">
          EXPLORE ALL PRODUCTS
        </button>
      </Link>
      
    </div>
  );
}

export default FeaturedProducts;