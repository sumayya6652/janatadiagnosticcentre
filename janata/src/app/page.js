"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Dots from '../../public/assets/dots.png';
import JLogo from '../../public/assets/janata_logo.png';
import Vector_doctor from '../../public/assets/vector_doctor.png';
import first_aid from '../../public/assets/first_aid.png';
import consult_paper from '../../public/assets/consult_paper.png';
import phone from '../../public/assets/phone.png';
import pill_bottle from '../../public/assets/pill_bottle.png';
import readings from '../../public/assets/readings.png';
import serach from '../../public/assets/serach.png';
import shape_vector from '../../public/assets/shape_vector.png';
import Vector_doctor2 from '../../public/assets/vector_doctor2.png'
import { FaUserCircle } from 'react-icons/fa';
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';



export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0); 

  const testimonials = [
    {
      name: "Edward Newgate",
      title: "Founder Circle",
      feedback: "Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedious form, long calls, or administrative hassle) and securely."
    },
    {
      name: "Jane Doe",
      title: "CEO, HealthCorp",
      feedback: "The integration with our system was seamless, and the user experience has been fantastic. We’ve seen a significant improvement in patient satisfaction."
    },
    {
      name: "John Smith",
      title: "Healthcare Specialist",
      feedback: "This platform has revolutionized the way we manage patient data. It’s intuitive, secure, and reliable."
    }
  ];

  
  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? testimonials.length - 1 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === testimonials.length - 1 ? 0 : prevSlide + 1));
  };


  return (
    <div className="min-h-screen flex flex-col justify-between">
      <header className="flex justify-between items-center py-4 px-8">
        <Image src={JLogo} alt="Janata Diagnostics Logo" width={100} height={100} />
        <nav>
          <button 
            className="block md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          <ul className="hidden md:flex space-x-8">
            <li><a href="#" className="text-gray-500 hover:text-gray-700 transition-colors duration-200">Home</a></li>
            <li><a href="#" className="text-gray-500 hover:text-gray-700 transition-colors duration-200">Packages</a></li>
            <li><a href="#" className="text-gray-500 hover:text-gray-700 transition-colors duration-200">Apps</a></li>
            <li><a href="#" className="text-gray-500 hover:text-gray-700 transition-colors duration-200">Testimonials</a></li>
            <li><a href="#" className="text-gray-500 hover:text-gray-700 transition-colors duration-200">About us</a></li>
          </ul>
        </nav>
      </header>

      {/* Sidebar for Mobile */}
      <div className={`fixed inset-0 z-40 bg-sky-200 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 md:hidden`}>
        <div className="flex justify-between items-center p-2 mr-12">
          <Image src={JLogo} alt="Janata Diagnostics Logo" width={80} height={80} />
          <button 
            className="text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(false)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <ul className="flex flex-col space-y-4 p-4">
          <li><a href="#" className="text-gray-500 hover:text-gray-700 transition-colors duration-200">Home</a></li>
          <li><a href="#" className="text-gray-500 hover:text-gray-700 transition-colors duration-200">Packages</a></li>
          <li><a href="#" className="text-gray-500 hover:text-gray-700 transition-colors duration-200">Apps</a></li>
          <li><a href="#" className="text-gray-500 hover:text-gray-700 transition-colors duration-200">Testimonials</a></li>
          <li><a href="#" className="text-gray-500 hover:text-gray-700 transition-colors duration-200">About us</a></li>
        </ul>
      </div>

      <main className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 lg:px-24 py-16">
        <div className="max-w-lg relative">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Virtual healthcare for you</h1>
          <p className="text-gray-700 mb-6">
            Janata provides progressive, and affordable healthcare, accessible on mobile and online for everyone.
          </p>
          <a href="#" className="inline-block bg-blue-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-600">
            Consult today
          </a>
        </div>
        <div className="mt-8 md:mt-0 relative">
          <Image src={Vector_doctor} alt="Doctor Vector" width={500} height={500} />
        </div>
      </main>

      {/* Our Services Section */}
      <section className="relative px-8 md:px-16 lg:px-24 py-16 bg-white">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Our services
          <div className="h-1 w-24 bg-blue-500 mx-auto mt-2"></div>
        </h2>
        <p className="text-center text-gray-600 mb-12">
          We provide you with the best choices for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <Image src={serach} alt="Search doctor" width={60} height={60} />
            <h3 className="text-xl font-semibold mt-4 text-left">Search doctor</h3>
            <p className="text-gray-600 mt-2 text-left">
              Choose your doctor from thousands of specialists, general, and trusted hospitals.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <Image src={pill_bottle} alt="Online pharmacy" width={60} height={60} />
            <h3 className="text-xl font-semibold mt-4 text-left">Online pharmacy</h3>
            <p className="text-gray-600 mt-2 text-left">
              Buy your medicines with our mobile application with a simple delivery system.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <Image src={consult_paper} alt="Consultation" width={60} height={60} />
            <h3 className="text-xl font-semibold mt-4 text-left">Consultation</h3>
            <p className="text-gray-600 mt-2 text-left">
              Free consultation with our trusted doctors and get the best recommendations.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <Image src={readings} alt="Details info" width={60} height={60} />
            <h3 className="text-xl font-semibold mt-4 text-left">Details info</h3>
            <p className="text-gray-600 mt-2 text-left">
              Free consultation with our trusted doctors and get the best recommendations.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <Image src={first_aid} alt="Emergency care" width={60} height={60} />
            <h3 className="text-xl font-semibold mt-4 text-left">Emergency care</h3>
            <p className="text-gray-600 mt-2 text-left">
              You can get 24/7 urgent care for yourself or your children and your lovely family.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <Image src={phone} alt="Tracking" width={60} height={60} />
            <h3 className="text-xl font-semibold mt-4 text-left">Tracking</h3>
            <p className="text-gray-600 mt-2 text-left">
              Track and save your medical history and health data.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 flex justify-center items-center z-0 opacity-30">
          <Image src={Dots} alt="Decorative Dots" />
        </div>
      </section>

      {/* New Section Below Our Services */}
      <section className="px-8 md:px-16 lg:px-24 py-16 bg-white">
  <div className="flex flex-col md:flex-row items-center justify-between">
    <div className="order-1 md:order-1 mb-8 md:mb-0">
      <Image src={Vector_doctor2} alt="Doctor Vector" width={400} height={400} />
    </div>
    <div className="order-2 md:order-2 max-w-md">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Leading healthcare providers</h2>
      <p className="text-gray-700 mb-6">
        Janata provides progressive, and affordable healthcare, accessible on mobile and offline for everyone. To us, it’s not just work. We take pride in the solutions we deliver.
      </p>
      <a href="#" className="inline-block bg-blue-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-600">
        Learn more
      </a>
    </div>
  </div>
</section>
<section className="bg-gray-100 py-16 px-8 md:px-16 lg:px-24">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          What our customers are saying
          <div className="h-1 w-24 bg-blue-500 mx-auto mt-2"></div>
        </h2>

        <div className="relative">
          <div className="flex overflow-hidden space-x-8 transform transition-transform duration-300" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg min-w-full"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <FaUserCircle className="text-5xl text-blue-500" />
                  <div>
                    <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
                <p className="text-gray-600">{testimonial.feedback}</p>
              </div>
            ))}
          </div>

          <button onClick={handlePrevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full">
            <FaArrowLeft />
          </button>
          <button onClick={handleNextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full">
            <FaArrowRight />
          </button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`h-2 w-2 rounded-full ${index === currentSlide ? 'bg-blue-500' : 'bg-gray-300'}`}
            ></span>
          ))}
        </div>
      </section>


      <footer className="bg-gray-800 py-4">
        <div className="text-center text-gray-400">
          &copy; 2024 Janata Diagnostics. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
