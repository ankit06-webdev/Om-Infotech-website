import React from 'react';

const Services = () => {
  const serviceImg1 = "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?q=80&w=400&auto=format&fit=crop"; 
  const serviceImg2 = "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=400&auto=format&fit=crop"; 
  const serviceImgTall = "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=400&auto=format&fit=crop"; 

  const serviceCategories = [
    { name: "REPAIRING", image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=400&auto=format&fit=crop" },
    { name: "SCREEN FIX", image: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?q=80&w=400&auto=format&fit=crop" },
    { name: "SOFTWARE", image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=400&auto=format&fit=crop" },
    { name: "DIAGNOSTICS", image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=400&auto=format&fit=crop" },
    { name: "DATA BACKUP", image: "https://images.unsplash.com/photo-1600267185393-e158a98703de?q=80&w=400&auto=format&fit=crop" },
    { name: "NETWORK", image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=400&auto=format&fit=crop" }
  ];

  return (
    <div id="services" className="py-16 px-4 bg-gradient-to-b from-blue-100 to-white w-full flex flex-col items-center">
      
      <h2 className="text-2xl md:text-3xl font-bold uppercase font-montserrat mb-16 text-center tracking-wide text-blue-900">
        Our Services
      </h2>

      <div className="container max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 px-4 mb-20">
        
        <div className="w-full md:w-1/2 flex flex-col gap-y-6">
          <h3 className="font-montserrat text-lg md:text-xl font-bold uppercase text-blue-800">
            Services We Offer
          </h3>
          <p className="text-gray-700 leading-relaxed text-justify text-sm md:text-base font-inter">
            Expert Digital Care: Fast diagnostic checks, screen and battery replacements, software updates, and expert hardware support. We ensure your devices are running at their absolute best.
          </p>
          <p className="text-gray-700 leading-relaxed text-justify text-sm md:text-base font-inter uppercase">
            From essential hardware fixes to complex software troubleshooting, our team is equipped to handle it all efficiently.
          </p>
          <div className="mt-2">
            <a href="/#contact" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              VISIT STORE
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2 grid grid-cols-2 grid-rows-2 gap-4 h-80 md:h-[400px]">
          <img 
            src={serviceImg1} 
            alt="Service Setup" 
            className="w-full h-full object-cover rounded-xl shadow-lg border-2 border-white col-start-1 row-start-1" 
          />
          <img 
            src={serviceImg2} 
            alt="Hardware Repair" 
            className="w-full h-full object-cover rounded-xl shadow-lg border-2 border-white col-start-1 row-start-2" 
          />
          <img 
            src={serviceImgTall} 
            alt="Expert Diagnostic" 
            className="w-full h-full object-cover rounded-xl shadow-lg border-2 border-white col-start-2 row-start-1 row-span-2" 
          />
        </div>

      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 md:gap-8 max-w-6xl w-full px-4">
        {serviceCategories.map((service, index) => (
          <div key={index} className="flex flex-col items-center gap-y-4 group cursor-pointer">
            
            <div className="w-40 h-40 md:w-28 md:h-28 rounded-2xl shadow-md overflow-hidden relative border-2 border-white">
              <img 
                src={service.image} 
                alt={service.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
            </div>
            
            <p className="font-bold text-gray-800 font-inter text-sm md:text-base text-center group-hover:text-blue-600 transition-colors">
              {service.name}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Services;