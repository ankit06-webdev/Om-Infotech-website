import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import productsData from '../data/data.json';
import Navbar from '../components/Navbar';

const AllProducts = () => {
  const location = useLocation();

  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const uniqueCategories = [
    "all",
    ...new Set(productsData.map((item) => item.category.toLowerCase()))
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
    // Home page se aane wali category ko catch karne ke liye
    if (location.state?.category) {
      setActiveCategory(location.state.category.toLowerCase());
    }
  }, [location.state]);

  const filteredProducts = productsData.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = 
      activeCategory === 'all' || 
      product.category.toLowerCase() === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-10 md:py-16 px-4 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">

          <div className="mb-8">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:text-blue-600 font-bold font-montserrat text-sm py-2.5 px-5 rounded-xl shadow-sm transition-all w-fit"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              Back to Home
            </Link>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold uppercase font-montserrat text-gray-900 tracking-wide">
              {activeCategory === 'all' ? 'Our Products' : `${activeCategory} Products`}
            </h1>
            <p className="text-gray-600 mt-3 font-inter max-w-2xl mx-auto">
              Explore our wide range of smartphones, cooling solutions, and premium accessories.
            </p>
          </div>

          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-4 mb-10">
            
            <div className="relative w-full md:w-3/4">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search for a product..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-inter transition-all duration-300"
              />
            </div>

            <div className="relative w-full md:w-1/4">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full flex justify-between items-center bg-white border border-gray-300 rounded-xl py-3 px-5 text-gray-700 font-inter font-medium text-sm md:text-base leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
              >
                <span className="capitalize">{activeCategory === 'all' ? 'All Categories' : activeCategory}</span>
                <svg className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180 text-blue-600' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>

              {isDropdownOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-10" 
                    onClick={() => setIsDropdownOpen(false)}
                  ></div>
                  <ul className="absolute z-20 w-full mt-2 bg-white border border-gray-100 rounded-xl shadow-xl max-h-60 overflow-y-auto py-2">
                    {uniqueCategories.map((cat, index) => (
                      <li
                        key={index}
                        onClick={() => {
                          setActiveCategory(cat);
                          setIsDropdownOpen(false);
                        }}
                        className={`px-5 py-2.5 cursor-pointer capitalize font-inter text-sm md:text-base transition-colors ${
                          activeCategory === cat 
                            ? 'text-blue-600 font-bold bg-blue-50/50' 
                            : 'text-gray-600 hover:bg-gray-50 hover:text-blue-500'
                        }`}
                      >
                        {cat === 'all' ? 'All Categories' : cat}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>

          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="text-xl font-bold text-gray-700 font-montserrat mb-2">No products found</h3>
              <p className="text-gray-500 font-inter">Try searching with a different keyword or select another category.</p>
            </div>
          )}

        </div>
      </div>
    </>
  );
};

export default AllProducts;