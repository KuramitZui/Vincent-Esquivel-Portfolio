import React, { useState, useEffect } from 'react';
import { FaComments, FaCopy, FaFacebook, FaEnvelope, FaGithub, FaCopyright } from "react-icons/fa";
import myImage from "../media/vincent.png"; 
import myImage2 from "../media/vincent3.png"; 
import paginas from "../media/paginasprimne.png";
import sweetquest from "../media/sweet-quest.png";
import collegethesis from "../media/collegethesis.png";
import bg from "../media/background.png";
import { FaBars, FaTimes } from "react-icons/fa";

const requireContext = require.context('../svg', false, /\.svg$/);
const svgFiles = requireContext.keys().map((filename) => ({
  src: requireContext(filename),
  alt: filename.replace('./', '').replace('.svg', ''),
}));

const Welcome = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [copied, setCopied] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const sections = ["home", "portfolio", "skills", "about"];

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(""), 2000);
  };

  const handleClick = (section) => {
    const element = document.getElementById(section);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTalkClick = () => setShowOptions(!showOptions);

  return (
    <div className="relative font-sans">
      {/* Background */}
      <div
        className="fixed inset-0 bg-cover bg-center z-[-1] bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.85), rgba(0,0,0,0.6)), url(${bg})`,
        }}
      />

      <nav className="absolute top-5 w-full z-10 px-4 md:px-16">
      {/* Desktop Navbar */}
      <div className="hidden md:flex justify-center gap-20 w-full">
        {sections.map((section) => (
          <span
            key={section}
            className="text-white text-lg md:text-1xl cursor-pointer font-semibold hover:text-yellow-400 transition-colors duration-300"
            onClick={() => handleClick(section)}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </span>
        ))}
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden flex justify-between items-center bg-white/10 backdrop-blur-md rounded-xl px-4 py-2 shadow-md">
        <span className="text-white text-xl font-bold">Menu</span>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white text-2xl focus:outline-none transition-transform duration-300"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Animated Dropdown */}
      <div
        className={`md:hidden absolute top-16 left-0 w-full bg-white/10 backdrop-blur-md text-white flex flex-col items-center py-4 gap-4 shadow-lg rounded-b-xl transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0 pointer-events-none"
        }`}
      >
        {sections.map((section) => (
          <span
            key={section}
            className="cursor-pointer font-semibold text-lg hover:text-yellow-400 transition-colors duration-300"
            onClick={() => {
              handleClick(section);
              setIsOpen(false);
            }}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </span>
        ))}
      </div>
    </nav>


      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 md:px-16">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 w-full max-w-7xl">
          {/* Left Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img src={myImage} alt="Welcome" className="w-2/3 md:w-full max-w-[500px] rounded-lg shadow-lg" />
          </div>

          {/* Right Text */}
          <div className="w-full md:w-1/2 flex flex-col">
            <p className="text-3xl md:text-4xl font-bold text-white mb-2" >Hi! I`m Vincent</p>
            <h1 className="text-4xl md:text-6xl font-extrabold text-yellow-400 mb-4">Fullstack Developer</h1>
            <hr className="w-1/2 border-yellow-400 mb-4" />
            <p className="text-white text-base md:text-lg mb-6">
              I am a Full-Stack Developer committed to building scalable and high-quality web solutions. I effectively apply my knowledge across the full technology stack, while simultaneously expanding my expertise by integrating new skills directly into the development process. 
            </p>

            <button
              onClick={handleTalkClick}
              className="flex items-center gap-2 w-2/3 md:w-1/2 px-5 py-3 bg-yellow-400 text-black rounded-full font-semibold hover:bg-yellow-300 transition-shadow shadow-md"
            >
              <FaComments /> Let's Talk
            </button>

            {/* Social Options Modal */}
           {showOptions && (
  <div className="fixed inset-0 flex items-center justify-center z-20 px-4">
    <div className="bg-black/60 backdrop-blur-md border border-white/40 p-6 md:p-8 rounded-xl shadow-2xl w-full max-w-md text-center">
      <img
        src={myImage}
        alt="logo"
        className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-yellow-400 object-cover"
      />
      <h3 className="text-yellow-400 text-xl md:text-2xl mb-6">Let's Connect</h3>

      <div className="flex flex-col gap-4">
        {/* Facebook */}
        <div className="flex justify-between items-center bg-white/10 backdrop-blur-sm p-3 rounded-lg border border-white/20">
          <a
            href="https://www.facebook.com/vincent.esquivel27"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:text-yellow-400 text-base md:text-lg"
          >
            <FaFacebook size={25} color="#1877f2" />
            <span className="hidden sm:inline">facebook.com/vincent.esquivel27</span>
            <span className="sm:hidden">Facebook</span>
          </a>
          <button
            onClick={() => handleCopy("https://www.facebook.com/vincent.esquivel27", "Facebook")}
            className="text-yellow-400"
          >
            <FaCopy />
          </button>
        </div>

        {/* Gmail */}
        <div className="flex justify-between items-center bg-white/10 backdrop-blur-sm p-3 rounded-lg border border-white/20">
          <a
            href="mailto:Vincentesquivel47@gmail.com"
            className="flex items-center gap-2 text-white hover:text-yellow-400 text-base md:text-lg"
          >
            <FaEnvelope size={25} color="#ea4335" />
            <span className="hidden sm:inline">Vincentesquivel47@gmail.com</span>
            <span className="sm:hidden">Gmail</span>
          </a>
          <button
            onClick={() => handleCopy("Vincentesquivel47@gmail.com", "Gmail")}
            className="text-yellow-400"
          >
            <FaCopy />
          </button>
        </div>

        {/* Github */}
        <div className="flex justify-between items-center bg-white/10 backdrop-blur-sm p-3 rounded-lg border border-white/20">
          <a
            href="https://github.com/KuramitZui"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:text-yellow-400 text-base md:text-lg"
          >
            <FaGithub size={25} />
            <span className="hidden sm:inline">github.com/KuramitZui</span>
            <span className="sm:hidden">Github</span>
          </a>
          <button
            onClick={() => handleCopy("https://github.com/KuramitZui", "Github")}
            className="text-yellow-400"
          >
            <FaCopy />
          </button>
        </div>
      </div>

      <button
        onClick={() => setShowOptions(false)}
        className="mt-6 bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition"
      >
        Close
      </button>
    </div>
  </div>
)}

          </div>
        </div>
      </section>

      {/* Portfolio Section */}
       <section id="portfolio" className="min-h-screen py-16 px-4 md:px-16 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Portfolio</h2>
        <p className="text-white text-lg mb-12">Here are some of the projects I have worked on.</p>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {[{
             title: "Paginas Prime Pub Corp",
        desc:
          "Paginas Prime is envisioned as a comprehensive digital publishing platform where users can view and read books online, as well as download and purchase both digital and physical copies. The platform was designed to include features like a personalized reading list, a robust search and filter system by genre and author, and a secure e-commerce checkout. However, the website is currently on hold, still under development as the owner decided to pause the project temporarily due to unforeseen business challenges.",
        img: paginas,
      },
      {
        title: "Sweet Quest",
        desc:
          "Sweet Quest is an early-stage draft of an online ordering system for a variety of desserts, including graham treats, milkshakes, and other baked goods. The initial concept included key features like a menu display, order customization, and a simple checkout process. Unfortunately, the project is currently paused and has not progressed past the initial design and wireframing due to financial concerns that emerged early in the development cycle, preventing the necessary resources for completion.",
    img: sweetquest,
      },
      {
        title: "Clubs and Organizations Events and Announcements Website",
        desc:
          "Developed as our Capstone Project, this website serves as a central hub for all information related to a university's Clubs and Organizations, specifically designed for university students(NEUST). It provides detailed profiles for each  , a dedicated section for posting their upcoming events and announcements, and a comprehensive calendar view. The platform is designed to be highly user-friendly and easy to navigate, allowing students to efficiently discover new groups and stay informed. The back-end features a secure administrator dashboard for   officers to upload and manage their content.",
        img: collegethesis,
          }].map((p, i) => (
            <div key={i} className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300">
              <img src={p.img} alt={p.title} className="w-full h-64 object-cover"/>
              <div className="p-5 text-left">
                <h3 className="text-yellow-400 text-xl mb-2">{p.title}</h3>
                <p className="text-white text-sm">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
<section id="skills" className="py-16 px-4 md:px-16 flex flex-col md:flex-row gap-8 text-white justify-center">
  <div className="flex flex-col md:flex-row w-full max-w-7xl gap-8">
    {/* Soft Skills */}
    <div className="md:w-1/3 border-r-2 border-yellow-400 pr-4">
      <h2 className="text-3xl font-bold mb-2" style={{ fontFamily: ['Funnel', 'sans-serif'] }}>Soft Skills</h2>
      <ul className="list-none space-y-1.5 text-lg">
        <li >● Problem-solving and analytical thinking</li>
        <li >● Good communication skills</li>
        <li >● Adaptable, flexible and fast learner</li>
        <li >● Computer Literate</li>
        <li >● Maintain focus and productivity under pressure</li>
        <li >● Time management and organizational skills</li>
        <li >● Strong decision-making skills</li>
      </ul>
    </div>

    {/* Technical Skills */}
    <div className="md:w-2/3 grid grid-cols-2 sm:grid-cols-4 gap-6 pl-4">
      <h2 className="text-3xl font-bold col-span-full mb-2">Technical Skills</h2>
      {svgFiles.map((skill, i) => (
        <div key={i} className="flex flex-col items-center border-b border-yellow-400 pb-2">
          <img src={skill.src} alt={skill.alt} className="w-20 h-20 object-contain"/>
          <p className="mt-1 font-bold">{skill.alt}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* About Section */}
<section id="about" className="min-h-screen flex justify-center px-4 md:px-16 py-16 text-white">
  <div className="flex flex-col md:flex-row w-full max-w-7xl items-center gap-8">
    <div className="md:w-1/2 text-left space-y-4">
      <p className="text-3xl font-bold text-yellow-400">Hi, I'm Vincent</p>
      <p className="text-base md:text-lg">
        I am a recent graduate with a Bachelor of Science in Information Technology from the Nueva Ecija University of Science and Technology, specializing in Database System Technology. I bring strong front-end expertise and established foundational back-end knowledge, allowing me to effectively manage everything from user interface development to data-driven application logic and database architecture. I am prepared to apply my skills to drive development and streamline production cycles, and I am driven to aggressively learn new technologies and methodologies through practical, hands-on experience in a professional setting.
      </p>
      <div className="flex gap-2 flex-wrap mt-2">
        <span className="bg-yellow-400 text-black px-3 py-1 rounded-lg font-medium">Front-End</span>
        <span className="bg-yellow-400 text-black px-3 py-1 rounded-lg font-medium">Back-End</span>
        <span className="bg-yellow-400 text-black px-3 py-1 rounded-lg font-medium">Database</span>
      </div>
    </div>
    <div className="md:w-1/2 flex justify-center">
      <img
        src={myImage2}
        alt="About Me"
        className="rounded-lg w-full max-w-xs md:max-w-full object-cover"
      />
    </div>
  </div>
</section>



      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 md:px-16 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Me</h2>
        <hr className="border-gray-400 mb-4" />
        <div className="text-lg space-y-2 mb-4">
          <p>Email: <a href="mailto:Vincentesquivel47@gmail.com" className="text-yellow-400">Vincentesquivel47@gmail.com</a></p>
          <p>Phone: <a href="tel:+639098052172" className="text-yellow-400">+639098052172</a></p>
        </div>
        <div className="flex justify-center items-center gap-2 text-white text-sm">
          <FaCopyright /> 2025 Developed by Vincent S. Esquivel.
        </div>
      </section>

      {/* Scroll Top */}
      {showScrollTop && (
        <button onClick={scrollToTop} className="fixed bottom-5 right-5 w-12 h-12 rounded-full bg-yellow-400 text-black text-2xl flex items-center justify-center shadow-lg hover:bg-yellow-300 transition">↑</button>
      )}

      {/* Copied Notification */}
      {copied && (
        <div className="fixed bottom-20 right-5 bg-gray-900 text-yellow-400 px-4 py-2 rounded shadow-lg animate-slideUpFade">
          ✅ {copied} copied!
        </div>
      )}

      <style>{`
        @keyframes slideUpFade {
          0% { opacity:0; transform: translateY(20px); }
          20% { opacity:1; transform: translateY(0); }
          80% { opacity:1; transform: translateY(0); }
          100% { opacity:0; transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
};

export default Welcome;
