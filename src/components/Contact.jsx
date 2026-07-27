import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! Your message has been prepared for WhatsApp.`);
    const phoneNumber = "918340277845"; 
    const message = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const contactDetails = [
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Call Us",
      value: "+91 83402 77845",
      link: "tel:+918340277845"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email Us",
      value: "help@ominfotech.com",
      link: "mailto:help@ominfotech.com"
    }
  ];

  return (
    <div id="contact" className="py-20 px-4 bg-gray-50 w-full flex flex-col items-center">
      
      <h2 className="text-3xl md:text-4xl font-bold uppercase font-montserrat mb-16 text-center tracking-wide text-gray-900">
        Get In Touch
      </h2>

      <div className="container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-12 px-2 lg:px-6">

        {/* Left Side: Contact Form & Cards */}
        <div className="flex flex-col gap-10">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contactDetails.map((detail, index) => (
              <a href={detail.link} key={index} className="flex items-center gap-x-5 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 shadow-inner">
                  {detail.icon}
                </div>
                <div>
                  <h4 className="font-bold font-montserrat text-lg text-gray-900">{detail.title}</h4>
                  <p className="font-inter text-gray-700 mt-1 font-medium text-sm md:text-base">{detail.value}</p>
                </div>
              </a>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-gray-100 flex flex-col gap-6">
            <h3 className="text-2xl font-bold font-montserrat text-gray-900 mb-2">Send Us a Message</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="font-inter bg-gray-50 border border-gray-200 rounded-xl py-3.5 px-5 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00a8ff] focus:border-transparent transition" />
              <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required className="font-inter bg-gray-50 border border-gray-200 rounded-xl py-3.5 px-5 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00a8ff] focus:border-transparent transition" />
            </div>

            <input type="tel" name="phone" placeholder="Your Phone (Optional)" value={formData.phone} onChange={handleChange} className="font-inter bg-gray-50 border border-gray-200 rounded-xl py-3.5 px-5 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00a8ff] focus:border-transparent transition" />
            
            <textarea name="message" placeholder="How can we help you?" value={formData.message} onChange={handleChange} required rows="5" className="font-inter bg-gray-50 border border-gray-200 rounded-xl py-3.5 px-5 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00a8ff] focus:border-transparent transition resize-none"></textarea>

            <button type="submit" className="bg-whatsapp hover:bg-[#009ae5] text-white font-bold font-montserrat uppercase py-4 px-10 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 self-start">
              Send via WhatsApp
            </button>
          </form>

        </div>

        {/* Right Side: Map & Address */}
        <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex flex-col gap-y-10">
          
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-[#00a8ff]/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-[#00a8ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="font-bold font-montserrat text-xl text-gray-900 uppercase tracking-wide">Our Store</h4>
            </div>
            <p className="font-inter text-gray-700 leading-relaxed text-sm md:text-base bg-gray-50 p-5 rounded-2xl border border-gray-100">
              Om Infotech, Main Road,<br />
              Barigora, Jamshedpur,<br />
              Jharkhand - 831011
            </p>
          </div>

          <div className="w-full h-72 md:h-full min-h-[300px] bg-gray-100 rounded-2xl overflow-hidden shadow-inner border border-gray-200">
            <iframe
              title="Om Infotech Barigora Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.266721483087!2d86.23356551199745!3d22.755480879275805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5fd37e3f150b3%3A0xefb30a6445767e6a!2sNew%20Om%20Infotech!5e0!3m2!1sen!2sin!4v1785116340989!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ContactUs;