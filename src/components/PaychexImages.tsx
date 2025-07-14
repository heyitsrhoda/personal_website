'use client';

import { useState } from 'react';

export default function PaychexImages() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div 
        className="relative overflow-hidden h-[300px]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src="/images/Paychex(1).png"
          alt="Paychex Headquarters"
          className={`transition-transform duration-300 object-cover w-full h-full ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
      </div>
      <div 
        className="relative overflow-hidden h-[300px]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src="/images/Paychex(1).png"
          alt="Paychex Office Interior"
          className={`transition-transform duration-300 object-cover w-full h-full ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
      </div>
    </div>
  );
} 