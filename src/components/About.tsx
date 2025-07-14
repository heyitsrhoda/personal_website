'use client';

import React from 'react';

const About = () => {
  return (
    <section id="about" className="mb-16 opacity-0 animate-fadeIn" style={{ animationDelay: '0s', animationFillMode: 'forwards' }}>
      <div className="bg-gradient-to-b from-[#222222]/70 to-[#1a1a1a]/70 p-8 border border-[#FFD700]/20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl mb-8 text-white text-center">Background</h2>
          <div className="space-y-12">
            <div>
              <div className="space-y-4 text-gray-300">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Rhoda Roby is a senior majoring in Computer Science at Cedarville University, set to graduate in 2026. Originally from the Kingdom of Bahrain and an Indian citizen, she brings a unique global perspective to her work in technology and leadership.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  With a strong foundation in computer science and a passion for innovation, Rhoda has demonstrated exceptional leadership skills through various roles, including serving as the Vice President of the Freshmen Class at Cedarville University. Her experience spans from software engineering to IT support, showcasing her versatility and technical expertise.
                </p>
                
                <p className="text-lg text-gray-300 leading-relaxed">
                  An avid traveler, Rhoda has explored 14 states across the United States in the last three years, embracing every opportunity to experience new cultures and perspectives. Beyond her academic and professional pursuits, she has recently developed a passion for reading and content creation, while continuing to excel in public speaking. Her diverse interests and experiences have enriched her understanding of global perspectives and enhanced her ability to connect with people from various backgrounds.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Guided by her faith and favorite verse, Psalm 119:105, &quot;Your word is a lamp for my feet, a light on my path,&quot; Rhoda approaches each opportunity with purpose and determination. Her experiences across multiple states and international travel have enriched her understanding of diverse cultures and perspectives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 