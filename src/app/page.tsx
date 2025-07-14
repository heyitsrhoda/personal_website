import { FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className="min-h-screen text-white scroll-smooth font-serif relative">
      {/* Background Image using images.jpeg */}
      <div className="fixed inset-0 w-full h-full">
        <img
          src="/images/images.jpeg"
          alt="Background"
          className="object-cover object-center w-full h-full"
        />
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="mb-8 sticky top-0 bg-black/80 backdrop-blur-sm py-4 z-20 flex justify-center items-center">
          <ul className="flex justify-center space-x-8 text-lg">
            <li><a href="#about" className="text-white hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all hover:after:w-full">About</a></li>
            <li><a href="#involvement" className="text-white hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all hover:after:w-full">Involvement</a></li>
            <li><a href="#experience" className="text-white hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all hover:after:w-full">Experience</a></li>
            <li><a href="#skills" className="text-white hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all hover:after:w-full">Skills</a></li>
            <li><a href="#contact" className="text-white hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all hover:after:w-full">Contact</a></li>
          </ul>
        </nav>

        <div className="relative min-h-[400px] mb-12 bg-gradient-to-b from-[#222222]/70 to-[#1a1a1a]/70 py-12 border-4 border-[#D4AF37] w-full">
          {/* Profile Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center max-w-3xl mx-auto px-4">
            <div>
              <div className="text-center md:text-left">
                <h1 className={`${playfair.className} text-4xl font-bold mb-2 text-white italic`}>Rhoda Roby</h1>
              </div>
              <p className="text-lg text-gray-300 mb-6 text-center md:text-left">Computer Science · Cedarville University</p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a
                  href="#contact"
                  className="border border-[#FFD700]/30 hover:border-[#FFD700]/50 hover:bg-[#FFD700]/20 text-white px-6 py-2 transition-all duration-300 hover:scale-105"
                >
                  Contact Me
                </a>
                <a
                  href="https://www.linkedin.com/in/rhoda-roby/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[#FFD700]/30 hover:border-[#FFD700]/50 text-white px-6 py-2 transition-all duration-300 hover:scale-105"
                >
                  LinkedIn
                </a>
              </div>
              <div className="mt-6 flex items-center space-x-4 text-sm text-gray-300 justify-center md:justify-start">
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  New York, NY
                </span>
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Software Engineer
                </span>
              </div>
            </div>
            <div className="relative w-[280px] h-[280px] mx-auto md:mx-0 group">
              <img
                src="/images/Rhoda.jpg"
                alt="Rhoda Roby"
                className="object-cover object-[center_10%] transition-transform duration-300 group-hover:scale-105 w-full h-full"
              />
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
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

          <div className="border-t-2 border-[#000000]/80 my-12 w-full max-w-4xl mx-auto shadow-sm"></div>

          <section id="involvement" className="mb-16 opacity-0 animate-fadeIn" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            <h2 className="text-3xl mb-12 text-center text-white">Involvement</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Model UN */}
              <div className="bg-gradient-to-b from-[#222222]/70 to-[#1a1a1a]/70 shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border border-[#FFD700]/20">
                <div className="flex flex-col">
                  <div className="relative h-[250px] w-full overflow-hidden mb-4 border-2 border-[#FFD700]/60">
                    <img
                      src="/images/UN(1).jpg"
                      alt="Model United Nations"
                      className="object-cover object-center w-full h-full opacity-80"
                    />
                  </div>
                  <div className="relative h-[250px] w-full overflow-hidden border-2 border-[#FFD700]/60">
                    <img
                      src="/images/UN(2).jpeg"
                      alt="Model United Nations"
                      className="object-cover object-[center_30%] w-full h-full opacity-80 scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-white">Model United Nations</h3>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      As a member of Cedarville University&apos;s award-winning Model UN team, Rhoda contributed to winning the Distinguished Delegation award at the National Model UN conference in New York City. Representing Belarus, our diverse team brought unique cultural perspectives to global issues, enhancing our diplomatic discussions and negotiations.
                    </p>
                  </div>
                </div>
              </div>

              {/* AEI */}
              <div className="bg-gradient-to-b from-[#222222]/70 to-[#1a1a1a]/70 shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border border-[#FFD700]/20">
                <div className="flex flex-col">
                  <div className="relative h-[250px] w-full overflow-hidden mb-4 border-2 border-[#FFD700]/60">
                    <img
                      src="/images/AEI(1).JPG"
                      alt="American Enterprise Institute"
                      className="object-cover object-center w-full h-full scale-130"
                    />
                  </div>
                  <div className="relative h-[250px] w-full overflow-hidden border-2 border-[#FFD700]/60">
                    <img
                      src="/images/aei.jpg"
                      alt="American Enterprise Institute"
                      className="object-cover object-center w-full h-full"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-white">American Enterprise Institute</h3>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      Rhoda is enthusiastic about her involvement with the American Enterprise Institute (AEI), where she has had the privilege to attend fully paid conference meets and summits. AEI&apos;s commitment to fostering dialogue on economic policy and promoting intellectual diversity aligns closely with her academic and professional interests.
                    </p>
                  </div>
                </div>
              </div>

              {/* Class Council */}
              <div className="bg-gradient-to-b from-[#222222]/70 to-[#1a1a1a]/70 shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border border-[#FFD700]/20">
                <div className="flex flex-col">
                  <div className="relative h-[250px] w-full overflow-hidden mb-4 border-2 border-[#FFD700]/60">
                    <img
                      src="/images/classcouncil(2).jpg"
                      alt="Class Council"
                      className="object-cover object-center w-full h-full"
                    />
                  </div>
                  <div className="relative h-[250px] w-full overflow-hidden border-2 border-[#FFD700]/60">
                    <img
                      src="/images/Classcouncil(3).png"
                      alt="Class Council"
                      className="object-cover object-[center_30%] w-full h-full scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-white">Class Council</h3>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      As Vice President of the Freshmen Class at Cedarville University, Rhoda played a pivotal role in fostering a welcoming and supportive environment for incoming students. Leading initiatives such as orientation programs and social events, she worked to create meaningful connections among students.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="border-t-2 border-[#000000]/80 my-12 w-full max-w-4xl mx-auto shadow-sm"></div>

          <section id="experience" className="mb-16 opacity-0 animate-fadeIn" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <h2 className="text-3xl mb-12 text-center text-white">Experience</h2>
            <div className="space-y-8">
              {/* Paychex - Centered image */}
              <div className="bg-gradient-to-b from-[#222222]/70 to-[#1a1a1a]/70 shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="relative h-[250px] flex items-center justify-start p-4">
                    <div className="relative w-full h-full">
                      <img
                        src="/images/Paychex(1).png"
                        alt="Paychex"
                        className="object-contain w-full h-full"
                      />
                    </div>
                  </div>
                  <div className="p-6 flex flex-col justify-center">
                    <h3 className="text-xl font-bold mb-4 text-white">Software Engineer Intern</h3>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      Rhoda contributed to one of the world&apos;s largest fintech companies, handling approximately $750 billion in annual transactions. She collaborated in an agile environment with multiple teams in two-week sprints, resolving critical defects affecting 745,000 clients using Python and Java. She enhanced system reliability and performance through comprehensive testing and debugging, while maintaining clear documentation and communication with stakeholders.
                    </p>
                  </div>
                </div>
              </div>

              {/* IT Support */}
              <div className="bg-gradient-to-b from-[#222222]/70 to-[#1a1a1a]/70 shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                <div className="grid md:grid-cols-2 gap-8">
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
                  <div className="p-6 flex flex-col justify-center">
                    <h3 className="text-xl font-bold mb-4 text-white">IT Support Specialist</h3>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      Rhoda provided technical support and troubleshooting for hardware and software issues, ensuring smooth operation of computer systems and networks. She assisted users with software installations, system configurations, and network connectivity problems, while maintaining detailed documentation of solutions and procedures.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="border-t-2 border-[#000000]/80 my-12 w-full max-w-4xl mx-auto shadow-sm"></div>

          <section id="skills" className="mb-16 opacity-0 animate-fadeIn" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            <h2 className="text-3xl mb-12 text-center text-white">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-b from-[#222222]/70 to-[#1a1a1a]/70 p-6 border border-[#FFD700]/20">
                <h3 className="text-xl font-bold mb-4 text-white">Programming Languages</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Python</li>
                  <li>• Java</li>
                  <li>• JavaScript</li>
                  <li>• HTML/CSS</li>
                  <li>• SQL</li>
                </ul>
              </div>
              <div className="bg-gradient-to-b from-[#222222]/70 to-[#1a1a1a]/70 p-6 border border-[#FFD700]/20">
                <h3 className="text-xl font-bold mb-4 text-white">Technologies</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• React.js</li>
                  <li>• Next.js</li>
                  <li>• Node.js</li>
                  <li>• Git</li>
                  <li>• Docker</li>
                </ul>
              </div>
              <div className="bg-gradient-to-b from-[#222222]/70 to-[#1a1a1a]/70 p-6 border border-[#FFD700]/20">
                <h3 className="text-xl font-bold mb-4 text-white">Soft Skills</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Leadership</li>
                  <li>• Public Speaking</li>
                  <li>• Problem Solving</li>
                  <li>• Team Collaboration</li>
                  <li>• Cross-cultural Communication</li>
                </ul>
              </div>
            </div>
          </section>

          <div className="border-t-2 border-[#000000]/80 my-12 w-full max-w-4xl mx-auto shadow-sm"></div>

          <section id="contact" className="mb-16 opacity-0 animate-fadeIn" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            <h2 className="text-3xl mb-12 text-center text-white">Contact</h2>
            <div className="max-w-2xl mx-auto">
              <div className="bg-gradient-to-b from-[#222222]/70 to-[#1a1a1a]/70 p-8 border border-[#FFD700]/20">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <FaEnvelope className="text-[#FFD700] text-xl" />
                    <a href="mailto:rhoda.roby@cedarville.edu" className="text-gray-300 hover:text-white transition-colors">
                      rhoda.roby@cedarville.edu
                    </a>
                  </div>
                  <div className="flex items-center space-x-4">
                    <FaPhone className="text-[#FFD700] text-xl" />
                    <a href="tel:+1234567890" className="text-gray-300 hover:text-white transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                  <div className="flex items-center space-x-4">
                    <FaLinkedin className="text-[#FFD700] text-xl" />
                    <a 
                      href="https://www.linkedin.com/in/rhoda-roby/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      linkedin.com/in/rhoda-roby
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
