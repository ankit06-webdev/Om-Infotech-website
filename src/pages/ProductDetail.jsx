import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import productsData from '../data/data.json';
import ProductCard from '../components/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const product = productsData.find((item) => item.id === id);

  const [mainImage, setMainImage] = useState('');

  useEffect(() => {
    if (product) {
      setMainImage(product.image);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [id, product]);

  if (!product) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-gray-50 px-4">
        <h2 className="text-2xl md:text-3xl font-bold font-montserrat text-gray-800 mb-2">Product Not Found</h2>
        <p className="text-gray-500 font-inter mb-6">The product you are looking for does not exist or has been removed.</p>
        <Link to="/products" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-6 rounded-lg transition-colors shadow-md">
          Back to All Products
        </Link>
      </div>
    );
  }

  const relatedProducts = productsData
    .filter((item) => item.category === product.category && item.id !== product.id)
    .slice(0, 4);

  const productImages = product.images || [product.image]; 

  const phoneNumber = "918340277845"; 
  const message = `Hi Om Infotech, I want to inquire about:\n\n*Product:* ${product.name}\n*Price:* ₹${product.price}\n\nPlease let me know if it's available.`;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-8">
          <Link 
            to="/products" 
            className="inline-flex items-center gap-2 bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:text-blue-600 font-bold font-montserrat text-sm py-2.5 px-5 rounded-xl shadow-sm transition-all w-fit"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Back to Products
          </Link>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 p-6 md:p-12 mb-16 items-start">
          
          <div className="w-full flex flex-col gap-4">
            <div className="w-full bg-gray-50 rounded-2xl p-8 flex items-center justify-center border border-gray-100 relative h-[350px] md:h-[450px]">
              <span className="absolute top-4 left-4 bg-blue-100 text-blue-700 text-xs font-bold font-montserrat uppercase px-3 py-1 rounded-full z-10">
                {product.category}
              </span>
              <img 
                src={mainImage} 
                alt={product.name} 
                className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
              />
            </div>
            
            {productImages.length > 1 && (
              <div className="flex gap-4 overflow-x-auto pb-2 custom-scrollbar">
                {productImages.map((img, index) => (
                  <div 
                    key={index} 
                    onClick={() => setMainImage(img)}
                    className={`w-20 h-20 md:w-24 md:h-24 flex-shrink-0 rounded-xl border-2 cursor-pointer p-2 flex items-center justify-center transition-all duration-300 ${
                      mainImage === img ? 'border-blue-600 bg-white shadow-md' : 'border-gray-200 bg-gray-50 hover:border-blue-400'
                    }`}
                  >
                    <img src={img} alt={`View ${index + 1}`} className="max-w-full max-h-full object-contain" />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-col justify-center">
            
            <h1 className="text-3xl md:text-4xl font-bold font-montserrat text-gray-900 mb-3">
              {product.name}
            </h1>
            
            <div className="text-3xl md:text-4xl font-bold text-blue-600 font-inter mb-6">
              ₹{product.price}
            </div>

            <p className="text-gray-600 font-inter text-base md:text-lg mb-8 leading-relaxed">
              {product.description}
            </p>

            {product.specs && (
              <div className="mb-8 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h3 className="font-bold text-gray-900 uppercase font-montserrat text-sm mb-4 tracking-wider">
                  Key Specifications
                </h3>
                <ul className="flex flex-col gap-y-3">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <li key={key} className="flex font-inter text-sm md:text-base border-b border-gray-200/80 pb-2.5 last:border-none last:pb-0">
                      <span className="w-1/3 text-gray-500 font-medium capitalize">{key}</span>
                      <span className="w-2/3 text-gray-900 font-semibold">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-2">
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold font-montserrat uppercase py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Inquire on WhatsApp
              </a>
            </div>
          </div>

        </div>

        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <h2 className="text-2xl md:text-3xl font-bold uppercase font-montserrat text-gray-900 mb-8 border-b-2 border-blue-600 inline-block pb-2">
              You Might Also Like
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default ProductDetail;