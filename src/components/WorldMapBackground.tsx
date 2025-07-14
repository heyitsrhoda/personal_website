import React from 'react';

const WorldMapBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 opacity-[0.07]">
        <svg
          viewBox="0 0 1000 500"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* North America */}
          <path
            d="M 150,100 C 200,50 300,50 350,100 C 400,150 450,150 500,100 C 550,50 600,50 650,100 C 700,150 750,150 800,100"
            fill="none"
            stroke="white"
            strokeWidth="0.5"
          />
          {/* South America */}
          <path
            d="M 300,200 C 350,250 400,250 450,200 C 500,150 550,150 600,200 C 650,250 700,250 750,200"
            fill="none"
            stroke="white"
            strokeWidth="0.5"
          />
          {/* Europe */}
          <path
            d="M 400,50 C 450,100 500,100 550,50 C 600,0 650,0 700,50"
            fill="none"
            stroke="white"
            strokeWidth="0.5"
          />
          {/* Africa */}
          <path
            d="M 400,150 C 450,200 500,200 550,150 C 600,100 650,100 700,150 C 750,200 800,200 850,150"
            fill="none"
            stroke="white"
            strokeWidth="0.5"
          />
          {/* Asia */}
          <path
            d="M 500,50 C 550,100 600,100 650,50 C 700,0 750,0 800,50 C 850,100 900,100 950,50"
            fill="none"
            stroke="white"
            strokeWidth="0.5"
          />
          {/* Australia */}
          <path
            d="M 700,200 C 750,250 800,250 850,200 C 900,150 950,150 1000,200"
            fill="none"
            stroke="white"
            strokeWidth="0.5"
          />
          {/* Decorative elements */}
          <circle cx="400" cy="100" r="2" fill="white" />
          <circle cx="600" cy="150" r="2" fill="white" />
          <circle cx="800" cy="200" r="2" fill="white" />
          <circle cx="500" cy="250" r="2" fill="white" />
          <circle cx="700" cy="300" r="2" fill="white" />
        </svg>
      </div>
    </div>
  );
};

export default WorldMapBackground; 