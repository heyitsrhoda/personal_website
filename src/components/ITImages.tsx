'use client';

import React from 'react';
import Image from 'next/image';

const ITImages = () => {
  return (
    <div className="flex flex-col">
      <div className="relative h-[250px] w-full overflow-hidden mb-4">
        <Image
          src="/images/IT(1).png"
          alt="IT Support"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-center w-full h-full"
          priority
        />
      </div>
      <div className="relative h-[250px] w-full overflow-hidden">
        <Image
          src="/images/IT(2).png"
          alt="IT Support"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-[center_30%] w-full h-full scale-110"
          priority
        />
      </div>
    </div>
  );
};

export default ITImages; 