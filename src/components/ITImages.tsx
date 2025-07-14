'use client';

import React from 'react';

const ITImages = () => {
  return (
    <div className="flex flex-col">
      <div className="relative h-[250px] w-full overflow-hidden mb-4">
        <img
          src="/images/IT(1).png"
          alt="IT Support"
          className="object-cover object-center w-full h-full"
        />
      </div>
      <div className="relative h-[250px] w-full overflow-hidden">
        <img
          src="/images/IT(2).png"
          alt="IT Support"
          className="object-cover object-[center_30%] w-full h-full scale-110"
        />
      </div>
    </div>
  );
};

export default ITImages; 