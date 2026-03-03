import { FaEnvelope, FaPhone, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Home() {
  return (
    <div className="min-h-screen text-white scroll-smooth font-serif relative">
      {/* Background Image using images.jpeg */}
      <div className="fixed inset-0 w-full h-full">
        <img
          src={`${basePath}/images/images.jpeg`}
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
              <p className="text-lg text-gray-300 mb-4 text-center md:text-left">
                Computer Science · Cedarville University
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-6">
                <a
                  href="#contact"
                  className="border border-[#FFD700]/30 hover:border-[#FFD700]/50 hover:bg-[#FFD700]/20 text-white px-6 py-2 transition-all duration-300 hover:scale-105"
                >
                  Contact Me
                </a>
                <a
                  href="https://www.linkedin.com/in/rhodaroby/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[#FFD700]/30 hover:border-[#FFD700]/50 text-white px-6 py-2 transition-all duration-300 hover:scale-105"
                >
                  LinkedIn
                </a>
              </div>

              {/* Hero metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-md mx-auto md:mx-0 text-center md:text-left">
                <div className="border border-[#FFD700]/30 bg-black/30 px-4 py-3">
                  <p className="text-2xl font-semibold text-[#FFD700]">3.2M+</p>
                  <p className="text-xs uppercase tracking-[0.18em] text-gray-400 mt-1">
                    Social video views
                  </p>
                </div>
                <div className="border border-[#FFD700]/30 bg-black/30 px-4 py-3">
                  <p className="text-2xl font-semibold text-[#FFD700]">23K+</p>
                  <p className="text-xs uppercase tracking-[0.18em] text-gray-400 mt-1">
                    New subscribers driven
                  </p>
                </div>
                <div className="border border-[#FFD700]/30 bg-black/30 px-4 py-3">
                  <p className="text-2xl font-semibold text-[#FFD700]">14</p>
                  <p className="text-xs uppercase tracking-[0.18em] text-gray-400 mt-1">
                    States explored
                  </p>
                </div>
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
            <div className="relative w-[280px] h-[280px] mx-auto md:mx-0 group overflow-hidden rounded-lg border-2 border-[#FFD700]/50">
              <img
                src={`${basePath}/images/Rhoda.jpg`}
                alt="Rhoda Roby"
                className="object-cover object-[center_10%] transition-transform duration-300 group-hover:scale-105 w-full h-full"
              />
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          <section id="about" className="mb-16 opacity-0 animate-fadeIn" style={{ animationDelay: '0s', animationFillMode: 'forwards' }}>
            <div className="bg-gradient-to-b from-[#222222]/70 to-[#1a1a1a]/70 p-8 border border-[#FFD700]/20 rounded-lg overflow-hidden">
              <div className="max-w-4xl mx-auto px-4">
                <p className="text-xs tracking-[0.25em] text-[#FFD700]/80 uppercase text-center mb-2">
                  01 / Background
                </p>
                <h2 className="text-3xl mb-8 text-white text-center">
                  Building at the intersection of tech, impact & story
                </h2>
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
            <div className="text-center mb-4">
              <p className="text-xs tracking-[0.25em] text-[#FFD700]/80 uppercase">
                02 / Involvement & Leadership
              </p>
              <h2 className="text-3xl mt-2 text-white">Involvement</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Model UN */}
              <div className="bg-gradient-to-b from-[#222222]/70 to-[#1a1a1a]/70 shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border border-[#FFD700]/20 rounded-lg overflow-hidden">
                <div className="flex flex-col">
                  <div className="relative h-[250px] w-full overflow-hidden mb-4 rounded-lg border-2 border-[#FFD700]/50">
                    <img
                      src={`${basePath}/images/UN(1).jpg`}
                      alt="Model United Nations"
                      className="object-cover object-center w-full h-full opacity-80"
                    />
                  </div>
                  <div className="relative h-[250px] w-full overflow-hidden rounded-lg border-2 border-[#FFD700]/50">
                    <img
                      src={`${basePath}/images/UN(2).jpeg`}
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
              <div className="bg-gradient-to-b from-[#222222]/70 to-[#1a1a1a]/70 shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border border-[#FFD700]/20 rounded-lg overflow-hidden">
                <div className="flex flex-col">
                  <div className="relative h-[250px] w-full overflow-hidden mb-4 rounded-lg border-2 border-[#FFD700]/50">
                    <img
                      src={`${basePath}/images/AEI(1).JPG`}
                      alt="American Enterprise Institute"
                      className="object-cover object-center w-full h-full scale-130"
                    />
                  </div>
                  <div className="relative h-[250px] w-full overflow-hidden rounded-lg border-2 border-[#FFD700]/50">
                    <img
                      src={`${basePath}/images/aei.jpg`}
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
              <div className="bg-gradient-to-b from-[#222222]/70 to-[#1a1a1a]/70 shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border border-[#FFD700]/20 rounded-lg overflow-hidden">
                <div className="flex flex-col">
                  <div className="relative h-[250px] w-full overflow-hidden mb-4 rounded-lg border-2 border-[#FFD700]/50">
                    <img
                      src={`${basePath}/images/classcouncil(2).jpg`}
                      alt="Class Council"
                      className="object-cover object-center w-full h-full"
                    />
                  </div>
                  <div className="relative h-[250px] w-full overflow-hidden rounded-lg border-2 border-[#FFD700]/50">
                    <img
                      src={`${basePath}/images/Classcouncil(3).png`}
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
            <div className="text-center mb-4">
              <p className="text-xs tracking-[0.25em] text-[#FFD700]/80 uppercase">
                03 / Experience & Ventures
              </p>
              <h2 className="text-3xl mt-2 text-white">Experience</h2>
            </div>
            <div className="space-y-8">
              {/* Pitch Competition - TwinWorld */}
              <div className="bg-gradient-to-b from-[#222222]/70 to-[#1a1a1a]/70 shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border border-[#FFD700]/20 rounded-lg overflow-hidden">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="grid grid-cols-1 gap-3 p-4">
                    <div className="relative w-full h-56 overflow-hidden rounded-lg border-2 border-[#FFD700]/50">
                      <img
                        src={`${basePath}/images/pitch-speaking.png`}
                        alt="Rhoda pitching TwinWorld at Cedarville University"
                        className="object-cover object-center w-full h-full"
                      />
                    </div>
                    <div className="relative w-full h-48 overflow-hidden rounded-lg border-2 border-[#FFD700]/50">
                      <img
                        src={`${basePath}/images/pitch-winners.png`}
                        alt="Pitch competition winners at Cedarville University"
                        className="object-cover object-center w-full h-full"
                      />
                    </div>
                  </div>
                  <div className="p-6 flex flex-col justify-center">
                    <h3 className="text-xl font-bold mb-1 text-white">
                      TwinWorld — Circular Textile Systems
                    </h3>
                    <p className="text-sm text-[#FFD700]/90 mb-1">
                      3rd Place · Cedarville University Pitch Competition · Spring 2026
                    </p>
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-4">
                      Sustainability · Circular Economy · AI Systems
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed mb-4">
                      I am a sustainability-driven entrepreneur and innovator focused on solving the global textile waste crisis through circular systems. As the founder of TwinWorld, I am building a two-phase solution that keeps wearable clothing in circulation through brand-to-brand recovery, while transforming non-reusable textiles into modular construction bricks.
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      My work sits at the intersection of fashion, infrastructure, and technology, combining circular economy principles with AI-powered systems to create environmental and economic value. Through research, pitching, and hands-on collaboration, I am committed to redesigning how we view waste — not as an end, but as the foundation for something new.
                    </p>
                  </div>
                </div>
              </div>

              {/* Brand Ambassador - Cedarville Marketing */}
              <div className="bg-gradient-to-b from-[#222222]/70 to-[#1a1a1a]/70 shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border border-[#FFD700]/20 rounded-lg overflow-hidden">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="grid grid-cols-2 gap-3 p-4">
                    {[
                      { url: 'https://www.instagram.com/reel/DUUmHmujA2l/', img: `${basePath}/images/brand-reel1.png` },
                      { url: 'https://www.instagram.com/reel/DRLQ8nMDs3M/', img: `${basePath}/images/brand-reel2.png` },
                      { url: 'https://www.instagram.com/reel/DH4n5weoXx8/', img: `${basePath}/images/brand-reel3.png` },
                      { url: 'https://www.instagram.com/reel/C56sFLoS1hQ/', img: `${basePath}/images/brand-reel4.png` },
                    ].map((reel, i) => (
                      <a key={i} href={reel.url} target="_blank" rel="noopener noreferrer" aria-label={`Watch viral reel ${i + 1} on Instagram`} className="group relative aspect-square overflow-hidden rounded-lg border-2 border-[#FFD700]/50 bg-gradient-to-br from-[#1a1a2e] to-[#16213e] hover:border-[#FFD700]/70 transition-all">
                        <div
                          className="absolute inset-0 bg-cover opacity-90 group-hover:opacity-100 transition-opacity"
                          style={{
                            backgroundImage: `url(${reel.img})`,
                            backgroundPosition: [0, 2, 3].includes(i) ? 'center top' : 'center',
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute bottom-2 left-0 right-0 flex items-center justify-center gap-2 text-white/90 group-hover:text-[#FFD700] transition-colors pointer-events-none">
                          <FaInstagram className="text-lg" />
                          <span className="text-xs font-medium">Watch Reel</span>
                        </div>
                      </a>
                    ))}
                  </div>
                  <div className="p-6 flex flex-col justify-center">
                    <h3 className="text-xl font-bold mb-4 text-white">Brand Ambassador — Cedarville University Marketing Team</h3>
                    <p className="text-lg text-gray-300 leading-relaxed mb-4">
                      Rhoda serves as a Brand Ambassador on Cedarville University&apos;s marketing team — an opportunity that positions her as the face of the university. She creates content that has resonated with millions, including viral videos that reached 3.2 million views on Instagram and 52 million views on YouTube, growing the university&apos;s YouTube channel by 23,000 subscribers.
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      Through strategic storytelling and authentic representation, she helps showcase Cedarville&apos;s community, values, and student experience to a global audience.
                    </p>
                  </div>
                </div>
              </div>

              {/* Paychex - Centered image */}
              <div className="bg-gradient-to-b from-[#222222]/70 to-[#1a1a1a]/70 shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border border-[#FFD700]/20 rounded-lg overflow-hidden">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="relative h-[250px] flex items-center justify-start p-4">
                    <div className="relative w-full h-full rounded-lg border-2 border-[#FFD700]/50 overflow-hidden">
                      <img
                        src={`${basePath}/images/Paychex(1).png`}
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

              {/* United Nations */}
              <div className="bg-gradient-to-b from-[#222222]/70 to-[#1a1a1a]/70 shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border border-[#FFD700]/20 rounded-lg overflow-hidden">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="grid grid-cols-2 gap-3 p-4">
                    <div className="relative w-full h-40 overflow-hidden rounded-lg border-2 border-[#FFD700]/50">
                      <img
                        src={`${basePath}/images/UN(1).png`}
                        alt="United Nations session"
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="relative w-full h-40 overflow-hidden rounded-lg border-2 border-[#FFD700]/50">
                      <img
                        src={`${basePath}/images/UN(2).png`}
                        alt="United Nations conference"
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="relative w-full h-40 overflow-hidden rounded-lg border-2 border-[#FFD700]/50">
                      <img
                        src={`${basePath}/images/UN(3).png`}
                        alt="Delegates at United Nations"
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="relative w-full h-40 overflow-hidden rounded-lg border-2 border-[#FFD700]/50">
                      <img
                        src={`${basePath}/images/UN(4).png`}
                        alt="United Nations team"
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                  <div className="p-6 flex flex-col justify-center">
                    <h3 className="text-xl font-bold mb-4 text-white">United Nations Experience</h3>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      Participated in United Nations programs focused on global diplomacy and cross-cultural collaboration. Engaged with delegates on policy discussions, contributed to position papers, and developed practical skills in negotiation, research, and public speaking while representing diverse perspectives.
                    </p>
                  </div>
                </div>
              </div>

              {/* IT Support */}
              <div className="bg-gradient-to-b from-[#222222]/70 to-[#1a1a1a]/70 shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border border-[#FFD700]/20 rounded-lg overflow-hidden">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="flex flex-col">
                    <div className="relative h-[250px] w-full overflow-hidden mb-4 rounded-lg border-2 border-[#FFD700]/50">
                      <img
                        src={`${basePath}/images/IT(1).png`}
                        alt="IT Support"
                        className="object-cover object-center w-full h-full"
                      />
                    </div>
                    <div className="relative h-[250px] w-full overflow-hidden rounded-lg border-2 border-[#FFD700]/50">
                      <img
                        src={`${basePath}/images/IT(2).png`}
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

              {/* Yearbook Administrative Assistant */}
              <div className="bg-gradient-to-b from-[#222222]/70 to-[#1a1a1a]/70 shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border border-[#FFD700]/20 rounded-lg overflow-hidden">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="grid grid-cols-1 gap-3 p-4">
                    <div className="relative w-full h-56 overflow-hidden rounded-lg border-2 border-[#FFD700]/50">
                      <img
                        src={`${basePath}/images/yearbook-portrait.png`}
                        alt="Rhoda Roby"
                        className="object-cover object-[center_35%] w-full h-full"
                      />
                    </div>
                    <div className="relative w-full h-48 overflow-hidden rounded-lg border-2 border-[#FFD700]/50">
                      <img
                        src={`${basePath}/images/yearbook-team.png`}
                        alt="Yearbook team at Cedarville University"
                        className="object-cover object-center w-full h-full"
                      />
                    </div>
                  </div>
                  <div className="p-6 flex flex-col justify-center">
                    <h3 className="text-xl font-bold mb-4 text-white">Administrative Assistant — Yearbook</h3>
                    <p className="text-sm text-[#FFD700]/90 mb-4">Cedarville University</p>
                    <p className="text-lg text-gray-300 leading-relaxed mb-4">
                      Rhoda serves as administrative assistant for the yearbook at Cedarville University. Her responsibilities include communication across the team, payroll submissions, event planning, scheduling portrait sessions, and managing orders for the yearbook.
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      Working with the yearbook team has strengthened her communication skills and ability to collaborate effectively with others. She also handles approval for photo usage and manages the team mailbox, ensuring smooth operations and coordination.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="border-t-2 border-[#000000]/80 my-12 w-full max-w-4xl mx-auto shadow-sm"></div>

          <section
            id="skills"
            className="mb-16 opacity-0 animate-fadeIn"
            style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
          >
            <div className="text-center mb-4">
              <p className="text-xs tracking-[0.25em] text-[#FFD700]/80 uppercase">
                04 / Technical Arsenal
              </p>
              <h2 className="text-3xl mt-2 text-white">Skills</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-b from-[#222222]/70 to-[#1a1a1a]/70 p-6 border border-[#FFD700]/20 rounded-lg overflow-hidden">
                <h3 className="text-xl font-bold mb-4 text-white">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {["Python", "Java", "JavaScript", "TypeScript", "SQL"].map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 text-sm rounded-full border border-[#FFD700]/40 bg-black/40 text-gray-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-b from-[#222222]/70 to-[#1a1a1a]/70 p-6 border border-[#FFD700]/20 rounded-lg overflow-hidden">
                <h3 className="text-xl font-bold mb-4 text-white">Tech & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "Node.js", "Git", "Docker", "REST APIs"].map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 text-sm rounded-full border border-[#FFD700]/40 bg-black/40 text-gray-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-b from-[#222222]/70 to-[#1a1a1a]/70 p-6 border border-[#FFD700]/20 rounded-lg overflow-hidden">
                <h3 className="text-xl font-bold mb-4 text-white">Human Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Leadership",
                    "Public Speaking",
                    "Problem Solving",
                    "Team Collaboration",
                    "Cross-cultural Communication",
                  ].map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 text-sm rounded-full border border-[#FFD700]/40 bg-black/40 text-gray-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <div className="border-t-2 border-[#000000]/80 my-12 w-full max-w-4xl mx-auto shadow-sm"></div>

          <section
            id="contact"
            className="mb-16 opacity-0 animate-fadeIn"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            <div className="text-center mb-4">
              <p className="text-xs tracking-[0.25em] text-[#FFD700]/80 uppercase">
                05 / Connect
              </p>
              <h2 className="text-3xl mt-2 text-center text-white">Contact</h2>
            </div>
            <div className="max-w-2xl mx-auto">
              <div className="bg-gradient-to-b from-[#222222]/70 to-[#1a1a1a]/70 p-8 border border-[#FFD700]/20 rounded-lg overflow-hidden">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <FaEnvelope className="text-[#FFD700] text-xl" />
                    <a href="mailto:rhodaannroby@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                      rhodaannroby@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-4">
                    <FaPhone className="text-[#FFD700] text-xl" />
                    <a href="tel:9379723515" className="text-gray-300 hover:text-white transition-colors">
                      937-972-3515
                    </a>
                  </div>
                  <div className="flex items-center space-x-4">
                    <FaLinkedin className="text-[#FFD700] text-xl" />
                    <a 
                      href="https://www.linkedin.com/in/rhodaroby/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      linkedin.com/in/rhodaroby
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
