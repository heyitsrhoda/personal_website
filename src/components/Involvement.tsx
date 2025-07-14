import React from 'react';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

const Involvement = () => {
  return (
    <section id="involvement" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Involvement</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 shadow-lg border border-gray-200">
            <div className="relative h-48 mb-4">
              <Image
                src="/images/paychex-logo.png"
                alt="Paychex Logo"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Paychex</h3>
            <p className="text-gray-600 mb-4">
              Active member of the Paychex community, contributing to various initiatives and projects.
            </p>
            <a
              href="https://www.paychex.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800"
            >
              Learn More <FaArrowRight className="ml-2" />
            </a>
          </div>
          <div className="bg-white p-6 shadow-lg border border-gray-200">
            <div className="relative h-48 mb-4">
              <Image
                src="/images/temple-of-understanding.png"
                alt="Temple of Understanding"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Temple of Understanding</h3>
            <p className="text-gray-600 mb-4">
              Dedicated member of the Temple of Understanding, participating in various community events and programs.
            </p>
            <a
              href="https://www.templeofunderstanding.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800"
            >
              Learn More <FaArrowRight className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Involvement; 