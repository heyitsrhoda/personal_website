'use client';

import Image from 'next/image';
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
        <Image
          src="/images/paychex-building.jpg"
          alt="Paychex Headquarters"
          width={500}
          height={300}
          className={`transition-transform duration-300 object-cover ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
      </div>
      <div 
        className="relative overflow-hidden h-[300px]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src="/images/paychex-office.jpg"
          alt="Paychex Office Interior"
          width={500}
          height={300}
          className={`transition-transform duration-300 object-cover ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
      </div>
    </div>
  );
} 