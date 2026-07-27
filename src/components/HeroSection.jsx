import React, { useState, useEffect } from 'react';
import heroImage from '../assets/heroSectionImage.webp'; 

const HeroSection = () => {
  const slides = [
    {
      id: 1,
      image: heroImage, 
      title: "Your Complete Digital Solution Hub",
      description: "From top-tier smartphones to essential accessories and expert repairs, we power your digital life in Barigora.",
      buttonText: "Explore Products",
      buttonLink: "/#featuredProduct"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=2000&auto=format&fit=crop",
      title: "Grand Tech Sale",
      description: "Up to 50% OFF on premium accessories and smartphone repairs.",
      buttonText: "Shop Sale",
      buttonLink: "/products"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=2000&auto=format&fit=crop", 
      title: "Expert Repair Services",
      description: "Broken screen? Battery issues? Get it fixed by professionals today.",
      buttonText: "Book Repair",
      buttonLink: "/#services"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 5000); 
    return () => clearInterval(slideInterval);
  }, [currentIndex]);

  return (
    <div className="relative w-full h-[60vh] md:h-[75vh] overflow-hidden group bg-gray-900">
      
      <div 
        className="flex w-full h-full transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <div 
            key={slide.id} 
            className="w-full h-full flex-shrink-0 relative bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
            
            <div className="relative z-10 h-full max-w-7xl mx-auto flex flex-col justify-center items-start px-8 md:px-16 lg:px-24">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-montserrat tracking-wide mb-4 transform translate-y-0 opacity-100 transition-all duration-700">
                {slide.title}
              </h1>
              <p className="text-gray-200 font-inter text-base md:text-xl max-w-xl leading-relaxed mb-8">
                {slide.description}
              </p>
              <a 
                href={slide.buttonLink} 
                className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white text-base md:text-lg font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-blue-500/30"
              >
                {slide.buttonText}
              </a>
            </div>
          </div>
        ))}
      </div>

      <button 
        onClick={prevSlide}
        className="absolute top-1/2 left-4 md:left-8 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100 z-20"
      >
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
        </svg>
      </button>

      <button 
        onClick={nextSlide}
        className="absolute top-1/2 right-4 md:right-8 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100 z-20"
      >
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index ? 'bg-blue-600 w-8' : 'bg-white/50 hover:bg-white'
            }`}
          ></button>
        ))}
      </div>

    </div>
  );
};

export default HeroSection;