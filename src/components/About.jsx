import React from 'react';

import img1 from '../assets/aboutImages/pexels-dothanhyb-5874513.jpg';
import img2 from '../assets/aboutImages/pexels-matreding-11297769.jpg';
import img3 from '../assets/aboutImages/pexels-czapp-arpad-3647289-11396009.jpg';

const About = () => {
  return (
    // Mobile par flex-col (upar-niche) aur Desktop par md:flex-row (aamne-saamne)
    <div id="about" className="container flex flex-col md:flex-row justify-between items-center mx-auto py-16 gap-10 md:gap-12 px-4 md:px-12 lg:px-20">
      
      {/* Text Section: Mobile par w-full, Desktop par w-1/2 */}
      <div className="about-section w-full md:w-1/2 flex flex-col gap-y-6">
        <p className="font-inter text-2xl md:text-3xl font-bold uppercase text-blue-600">
          Om Infotech
        </p>
        <p className="text-gray-700 leading-relaxed text-justify md:text-lg">
          Om Infotech is a company that provides information technology services to businesses and individuals. We offer a wide range of services, including web development, mobile app development, and digital marketing. Our team of experts is dedicated to providing high-quality services and support to our clients.
        </p>
        <p className="text-gray-700 leading-relaxed text-justify md:text-lg">
          We believe in bridging the gap between technology and everyday business needs. Whether you need reliable hardware repair or a custom digital catalog for your store, our comprehensive solutions ensure your business stays ahead in the digital age.
        </p>
      </div>

      {/* Images Section: Mobile par w-full, Desktop par w-1/2 */}
      <div className="images w-full md:w-1/2 flex flex-col gap-y-4 md:gap-y-5 mt-4 md:mt-0">
        
        {/* Main Image */}
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <img 
            src={img1} 
            alt="Main Setup" 
            className="w-full h-56 md:h-72 lg:h-80 object-cover hover:scale-105 transition-transform duration-500" 
          />
        </div>
        
        {/* Grid Images */}
        <div className="grid grid-cols-2 gap-x-4 md:gap-x-5">
          <div className="overflow-hidden rounded-2xl shadow-md">
            <img 
              src={img2} 
              alt="Service 1" 
              className="w-full h-32 md:h-40 lg:h-48 object-cover hover:scale-110 transition-transform duration-500" 
            />
          </div>
          <div className="overflow-hidden rounded-2xl shadow-md">
            <img 
              src={img3} 
              alt="Service 2" 
              className="w-full h-32 md:h-40 lg:h-48 object-cover hover:scale-110 transition-transform duration-500" 
            />
          </div>
        </div>

      </div>

    </div>
  );
}

export default About;