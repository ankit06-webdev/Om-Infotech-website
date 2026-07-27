import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/#about' },
    { name: 'Products', link: '/products' }, 
    { name: 'Services', link: '/#services' },
    { name: 'Contact', link: '/#contact' }
  ];

  return (
    <nav className="relative flex justify-between items-center px-4 md:px-20 py-5 bg-blue-600 shadow-md">
      
      {/* Logo Section */}
      <div className="logo cursor-pointer z-50">
        <h1 className="title text-xl md:text-2xl font-bold uppercase font-montserrat text-white tracking-wide">
          Om Infotech
        </h1>
      </div>
      
      {/* Desktop Menu (Sirf badi screen par dikhega) */}
      <div className="hidden md:block menu font-montserrat text-white">
        <ul className="flex items-center gap-x-10">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a 
                href={item.link}
                className="pb-1 border-b-2 border-transparent hover:border-white transition-all duration-300"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Hamburger Icon (Sirf choti screen par dikhega) */}
      <div 
        className="md:hidden text-white cursor-pointer z-50"
        onClick={() => setIsOpen(true)}
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </div>

      {/* Dark Overlay Backdrop (Sidebar ke peeche ka dark background) */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300"
          onClick={() => setIsOpen(false)} // Bahar click karne par menu band hoga
        ></div>
      )}

      {/* Sidebar Menu (Right side se slide hokar aayega) */}
      <div className={`
        fixed top-0 right-0 h-full w-64 bg-blue-700 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        {/* Close Button Header */}
        <div className="flex justify-end p-5">
          <button 
            className="text-white hover:text-gray-200 focus:outline-none"
            onClick={() => setIsOpen(false)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        {/* Sidebar Links */}
        <ul className="flex flex-col items-start px-8 gap-y-8 mt-4 font-montserrat text-white text-lg">
          {menuItems.map((item, index) => (
            <li key={index} className="w-full border-b border-blue-500 pb-2">
              <a 
                href={item.link}
                className="block w-full hover:text-blue-200 transition-colors duration-300"
                onClick={() => setIsOpen(false)} // Link click karne par sidebar band ho jayega
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      
    </nav>
  );
}

export default Navbar;