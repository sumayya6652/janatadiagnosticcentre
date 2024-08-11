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

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

        {/* Shape vector under the cards */}
        <div className="absolute bottom-0  right-0">
          <Image src={shape_vector} alt="Shape Vector" layout="responsive" width={1200} height={200} />
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-sm">© 2024 Janata Diagnostic Center. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
