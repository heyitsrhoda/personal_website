'use client';

import React from 'react';
import Link from 'next/link';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'] });

export default function Logo() {
  return (
    <Link href="/">
      <div className="fixed top-4 left-4 z-50 w-14 h-14 bg-black border-2 border-[#FFD700] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer">
        <span className={`${playfair.className} text-2xl font-bold text-[#FFD700] italic`}>RR</span>
      </div>
    </Link>
  );
} 