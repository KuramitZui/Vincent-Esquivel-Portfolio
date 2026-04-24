import React, { useState, useEffect } from 'react';
import { FaComments, FaCopy, FaFacebook, FaEnvelope, FaGithub, FaCopyright } from "react-icons/fa";
import myImage from "../media/ZuiTech-removedbf.png";
import myImage2 from "../media/ZuiTech.png";
import paginas from "../media/paginasprimne.png";
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

  const sections = ["home", "work", "stack", "labs", "team", "contact"];

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

  const projects = [
    {
      title: "Paginas Prime Pub Corp",
      tag: "Publishing Platform",
      desc: "A comprehensive digital publishing platform where users can view, read, download, and purchase books online. Features personalized reading lists, search/filter by genre and author, and secure e-commerce checkout. Currently on hold by the client.",
      img: paginas,
    },
    {
      title: "Clubs & Organizations Website",
      tag: "Capstone · Education",
      desc: "Central hub for a university's clubs and organizations. Includes org profiles, event calendars, announcements, and a secure admin dashboard for officers to manage their content. Built as a Capstone project.",
      img: collegethesis,
    },
  ];

  const softSkills = [
    "Problem-solving and analytical thinking",
    "Clear and direct communication",
    "Adaptable, flexible, and fast learners",
    "Computer literate across environments",
    "Maintain focus and quality under pressure",
    "Time management and organizational skills",
    "Strong, justified decision-making",
  ];

  const labProjects = [
    {
      icon: <FaComments size={18} color="#1877f2" />,
      name: "Chat Drift — Find Your Partner",
      desc: "Real-time chat web app where users can find and talk to new people instantly. Anonymous, fast, and minimalist.",
      link: "https://chatdrift.esquivince.online/",
    },
    {
      icon: <FaGithub size={18} color="#1a237e" />,
      name: "PH Address Location (NPM Module)",
      desc: "Open-source NPM package providing a complete list of Philippine regions, provinces, cities, and barangays.",
      link: "https://github.com/Kuramitzui/ph-addresses-location",
    },
    {
      icon: <FaGithub size={18} color="#1a237e" />,
      name: "More on GitHub",
      desc: "Always building in the background. Follow our GitHub to catch new releases and experiments as they drop.",
      link: "https://github.com/Kuramitzui",
    },
  ];

  const contactLinks = [
    {
      icon: <FaFacebook size={20} color="#1877f2" />,
      label: "facebook.com/zuiTech",
      url: "https://www.facebook.com/zuiTech",
      copyVal: "https://www.facebook.com/zuiTech",
      copyKey: "Facebook",
    },
    {
      icon: <FaEnvelope size={20} color="#ea4335" />,
      label: "hello@esquivince.online",
      url: "mailto:hello@esquivince.online",
      copyVal: "hello@esquivince.online",
      copyKey: "Email",
    },
    {
      icon: <FaGithub size={20} color="#1a237e" />,
      label: "github.com/KuramitZui",
      url: "https://github.com/KuramitZui",
      copyVal: "https://github.com/KuramitZui",
      copyKey: "Github",
    },
  ];

  return (
    <div className="relative font-sans" style={{ background: "#ffffff", color: "#0d1b2a", minHeight: "100vh" }}>

      {/* Background — subtle blue tint overlay using original bg image */}
      <div
        className="fixed inset-0 bg-cover bg-center z-[-1] bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(232,240,254,0.6), rgba(245,248,255,0.5)), url(${bg})`,
        }}
      />

      {/* ---------- NAV ---------- */}
      <nav
        className="fixed top-0 w-full z-10 px-4 md:px-16"
        style={{
          background: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid #e3eaf5",
        }}
      >
        <div className="hidden md:flex justify-between items-center py-4 max-w-7xl mx-auto">
          <span
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: "1.5rem",
              letterSpacing: "-0.03em",
              color: "#0d1b2a",
            }}
          >
            Zui<span style={{ color: "#1877f2" }}>Tech</span>
          </span>
          <div className="flex gap-8">
            {sections.map((s) => (
              <span
                key={s}
                className="cursor-pointer transition-colors duration-200"
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.75rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#6b8aaa",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#1877f2")}
                onMouseLeave={(e) => (e.target.style.color = "#6b8aaa")}
                onClick={() => handleClick(s)}
              >
                {s}
              </span>
            ))}
          </div>
          <button
            onClick={handleTalkClick}
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.75rem",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              background: "#1877f2",
              color: "#fff",
              border: "none",
              padding: "0.55rem 1.2rem",
              borderRadius: "4px",
              cursor: "pointer",
              fontWeight: 600,
            }}
          >
            Hire Us
          </button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex justify-between items-center py-3">
          <span
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: "1.3rem",
              color: "#0d1b2a",
            }}
          >
            Zui<span style={{ color: "#1877f2" }}>Tech</span>
          </span>
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{ color: "#0d1b2a", fontSize: "1.4rem", background: "none", border: "none", cursor: "pointer" }}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <div
          className={`md:hidden flex flex-col items-center py-4 gap-4 transition-all duration-500 ease-in-out ${
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
          style={{ borderTop: "1px solid #e3eaf5" }}
        >
          {sections.map((s) => (
            <span
              key={s}
              className="cursor-pointer"
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.8rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#6b8aaa",
              }}
              onClick={() => {
                handleClick(s);
                setIsOpen(false);
              }}
            >
              {s}
            </span>
          ))}
        </div>
      </nav>

      {/* ---------- HERO ---------- */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4 md:px-16"
        style={{ paddingTop: "6rem" }}
      >
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 w-full max-w-7xl">

          {/* Left — image */}
          <div className="relative flex justify-center items-center">
            <div
              className="absolute w-[120%] h-[120%] blur-3xl opacity-30"
              style={{
                background: "radial-gradient(circle, rgba(24,119,242,0.25), transparent 70%)",
              }}
            ></div>
            <img
              src={myImage}
              alt="ZuiTech"
              className="relative w-2/3 md:w-full max-w-[500px]"
              style={{
                filter: "drop-shadow(0 4px 24px rgba(24,119,242,0.18))",
              }}
            />
          </div>

          {/* Right — copy */}
          <div className="w-full md:w-1/2 flex flex-col">
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.72rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#1877f2",
                border: "1px solid #1877f2",
                display: "inline-block",
                padding: "0.3rem 0.75rem",
                borderRadius: "3px",
                marginBottom: "1.25rem",
                width: "fit-content",
              }}
            >
              Full-Stack Tech Collective
            </span>
            <p className="font-bold mb-2" style={{ fontSize: "1.3rem", color: "#6b8aaa" }}>
              We are ZuiTech —
            </p>
            <h1
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                lineHeight: 0.95,
                letterSpacing: "-0.04em",
                color: "#0d1b2a",
                marginBottom: "1rem",
              }}
            >
              We build things<br />that{" "}
              <span style={{ color: "#1877f2" }}>actually work.</span>
            </h1>
            <hr style={{ borderColor: "#1877f2", width: "40%", marginBottom: "1.25rem" }} />
            <p
              style={{
                color: "#6b8aaa",
                fontSize: "1rem",
                lineHeight: 1.75,
                marginBottom: "2rem",
                fontFamily: "sans-serif",
              }}
            >
              ZuiTech is a lean team of full-stack developers who ship fast, think in systems, and obsess over the
              craft. From pixel-perfect UIs to scalable back-end architecture — we own the full stack.
            </p>

            <div className="flex gap-3 flex-wrap">
              <button
                onClick={handleTalkClick}
                className="flex items-center gap-2"
                style={{
                  background: "#1877f2",
                  color: "#fff",
                  border: "none",
                  padding: "0.8rem 1.75rem",
                  borderRadius: "999px",
                  fontWeight: 700,
                  cursor: "pointer",
                  fontSize: "0.9rem",
                }}
              >
                <FaComments /> Let's Talk
              </button>
              <button
                onClick={() => handleClick("work")}
                className="flex items-center gap-2"
                style={{
                  background: "transparent",
                  color: "#0d1b2a",
                  border: "1px solid #b0c4de",
                  padding: "0.8rem 1.75rem",
                  borderRadius: "999px",
                  fontWeight: 500,
                  cursor: "pointer",
                  fontSize: "0.9rem",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#1877f2";
                  e.currentTarget.style.color = "#1877f2";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#b0c4de";
                  e.currentTarget.style.color = "#0d1b2a";
                }}
              >
                See Our Work →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- CONNECT MODAL ---------- */}
      {showOptions && (
        <div
          className="fixed inset-0 flex items-center justify-center z-20 px-4"
          style={{ background: "rgba(13,27,42,0.55)", backdropFilter: "blur(8px)" }}
        >
          <div
            style={{
              background: "#ffffff",
              border: "1px solid #b8d0f8",
              padding: "2.5rem",
              borderRadius: "16px",
              width: "100%",
              maxWidth: "460px",
              textAlign: "center",
              boxShadow: "0 8px 40px rgba(24,119,242,0.12)",
            }}
          >
            <img
              src={myImage}
              alt="ZuiTech"
              className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              style={{ border: "2px solid #1877f2", background: "#1a237e", padding: "6px" }}
            />
            <h3
              style={{
                color: "#1877f2",
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800,
                fontSize: "1.5rem",
                marginBottom: "0.4rem",
              }}
            >
              Let's Connect
            </h3>
            <p style={{ color: "#6b8aaa", fontSize: "0.85rem", marginBottom: "1.75rem" }}>
              Reach the ZuiTech team directly.
            </p>

            <div className="flex flex-col gap-3 mb-6">
              {contactLinks.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    background: "#f5f8ff",
                    border: "1px solid #e3eaf5",
                    padding: "0.75rem 1rem",
                    borderRadius: "8px",
                  }}
                >
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.6rem",
                      color: "#0d1b2a",
                      textDecoration: "none",
                      fontSize: "0.9rem",
                    }}
                  >
                    {item.icon}
                    <span className="hidden sm:inline">{item.label}</span>
                    <span className="sm:hidden">{item.copyKey}</span>
                  </a>
                  <button
                    onClick={() => handleCopy(item.copyVal, item.copyKey)}
                    style={{ background: "none", border: "none", cursor: "pointer", color: "#1877f2" }}
                  >
                    <FaCopy />
                  </button>
                </div>
              ))}
            </div>

            <button
              onClick={() => setShowOptions(false)}
              style={{
                background: "#1877f2",
                color: "#fff",
                border: "none",
                padding: "0.65rem 1.75rem",
                borderRadius: "8px",
                fontWeight: 700,
                cursor: "pointer",
                fontSize: "0.85rem",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* ---------- STATS BAR ---------- */}
      <section style={{ padding: "2.5rem 5%" }}>
        <div
          className="grid grid-cols-2 md:grid-cols-3 max-w-7xl mx-auto"
          style={{
            border: "1px solid #e3eaf5",
            borderRadius: "10px",
            overflow: "hidden",
            background: "#fff",
          }}
        >
          {[
            { num: "3", label: "Core Developers" },
            { num: "5+", label: "Tech Stacks" },
            { num: "∞", label: "Coffee Consumed" },
          ].map((s, i) => (
            <div
              key={i}
              style={{
                padding: "2rem",
                textAlign: "center",
                borderRight: i < 2 ? "1px solid #e3eaf5" : "none",
              }}
            >
              <span
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 800,
                  fontSize: "2.25rem",
                  color: "#1877f2",
                  display: "block",
                }}
              >
                {s.num}
              </span>
              <span
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.7rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#8aa3c0",
                }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- WORK / PORTFOLIO ---------- */}
      <section id="work" className="py-16 px-4 md:px-16" style={{ background: "#f5f8ff" }}>
        <div className="max-w-7xl mx-auto">
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.72rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#1877f2",
            }}
          >
            // portfolio
          </span>
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              letterSpacing: "-0.03em",
              color: "#0d1b2a",
              margin: "0.5rem 0 0.75rem",
            }}
          >
            Selected Work
          </h2>
          <p style={{ color: "#6b8aaa", marginBottom: "2.5rem", fontFamily: "sans-serif" }}>
            Projects we've built end-to-end — from requirements to deployment.
          </p>

          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <div
                key={i}
                style={{
                  background: "#fff",
                  border: "1px solid #e3eaf5",
                  borderRadius: "12px",
                  overflow: "hidden",
                  transition: "border-color 0.25s, transform 0.25s, box-shadow 0.25s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#1877f2";
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 8px 32px rgba(24,119,242,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#e3eaf5";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <img src={p.img} alt={p.title} className="w-full object-cover" style={{ height: "220px" }} />
                <div style={{ padding: "1.5rem" }}>
                  <span
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.68rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#1877f2",
                      background: "#e8f0fe",
                      border: "1px solid #b8d0f8",
                      padding: "0.2rem 0.6rem",
                      borderRadius: "3px",
                      display: "inline-block",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {p.tag}
                  </span>
                  <h3
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontWeight: 700,
                      fontSize: "1.1rem",
                      color: "#0d1b2a",
                      marginBottom: "0.6rem",
                    }}
                  >
                    {p.title}
                  </h3>
                  <p style={{ color: "#6b8aaa", fontSize: "0.875rem", lineHeight: 1.65, fontFamily: "sans-serif" }}>
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- SKILLS / STACK ---------- */}
      <section id="stack" className="py-16 px-4 md:px-16" style={{ background: "#fff" }}>
        <div className="max-w-7xl mx-auto">
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.72rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#1877f2",
            }}
          >
            // capabilities
          </span>
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              letterSpacing: "-0.03em",
              color: "#0d1b2a",
              margin: "0.5rem 0 2.5rem",
            }}
          >
            What We Bring
          </h2>

          <div className="flex flex-col md:flex-row gap-10 w-full">
            {/* Soft Skills */}
            <div className="md:w-1/3" style={{ borderRight: "2px solid #1877f2", paddingRight: "2rem" }}>
              <p
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.72rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#8aa3c0",
                  marginBottom: "1.25rem",
                }}
              >
                Soft Skills
              </p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {softSkills.map((s, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.75rem",
                      padding: "1rem",
                      background: "#f5f8ff",
                      border: "1px solid #e3eaf5",
                      borderRadius: "8px",
                      fontSize: "0.9rem",
                      color: "#3a5a7a",
                      fontFamily: "sans-serif",
                    }}
                  >
                    <span
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: "#1877f2",
                        flexShrink: 0,
                        marginTop: "6px",
                      }}
                    ></span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Skills */}
            <div className="md:w-2/3 pl-0 md:pl-6">
              <p
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.72rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#8aa3c0",
                  marginBottom: "1.25rem",
                }}
              >
                Technical Stack
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
                {svgFiles.map((skill, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      background: "#00000000",
                      border: "1px solid #e3eaf5",
                      borderRadius: "8px",
                      padding: "1rem 0.75rem",
                      transition: "border-color 0.2s, transform 0.2s",
                      cursor: "default",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "#1877f2";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "#e3eaf5";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <img src={skill.src} alt={skill.alt} style={{ width: "48px", height: "48px", objectFit: "contain" }} />
                    <p
                      style={{
                        marginTop: "0.5rem",
                        fontWeight: 600,
                        fontSize: "0.78rem",
                        color: "#3a5a7a",
                        textAlign: "center",
                      }}
                    >
                      {skill.alt}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- LABS ---------- */}
      <section id="labs" className="py-16 px-4 md:px-16" style={{ background: "#f5f8ff" }}>
        <div className="max-w-7xl mx-auto">
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.72rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#1877f2",
            }}
          >
            // open source & experiments
          </span>
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              letterSpacing: "-0.03em",
              color: "#0d1b2a",
              margin: "0.5rem 0 0.5rem",
            }}
          >
            Labs
          </h2>
          <p style={{ color: "#6b8aaa", marginBottom: "2.5rem", fontFamily: "sans-serif" }}>
            Things we built for fun, for the community, or just because we could.
          </p>

          <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {labProjects.map((p, i) => (
              <div
                key={i}
                style={{
                  background: "#fff",
                  border: "1px solid #e3eaf5",
                  borderRadius: "12px",
                  padding: "1.75rem",
                  transition: "border-color 0.2s, transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#1877f2";
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = "0 6px 24px rgba(24,119,242,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#e3eaf5";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "8px",
                      background: "#e8f0fe",
                      border: "1px solid #b8d0f8",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {p.icon}
                  </div>
                  <span
                    style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#0d1b2a" }}
                  >
                    {p.name}
                  </span>
                </div>
                <p
                  style={{
                    color: "#6b8aaa",
                    fontSize: "0.875rem",
                    lineHeight: 1.65,
                    marginBottom: "1rem",
                    fontFamily: "sans-serif",
                  }}
                >
                  {p.desc}
                </p>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.72rem",
                    color: "#1877f2",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.3rem",
                  }}
                >
                  {p.link.replace("https://", "")} ↗
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- TEAM ---------- */}
      <section id="team" className="min-h-screen py-16 px-4 md:px-16 flex items-center" style={{ background: "#fff" }}>
        <div className="flex flex-col md:flex-row w-full max-w-7xl items-center gap-10 mx-auto">
          <div className="md:w-1/2 space-y-4">
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.72rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#1877f2",
              }}
            >
              // team
            </span>
            <h2
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2rem, 4vw, 3rem)",
                letterSpacing: "-0.03em",
                color: "#0d1b2a",
              }}
            >
              Who We Are
            </h2>
            <p style={{ color: "#6b8aaa", lineHeight: 1.8, fontSize: "1rem", fontFamily: "sans-serif" }}>
              ZuiTech is a small, focused development collective of BS Information Technology graduates specializing
              in Database System Technology. We're self-taught builders with a shared obsession: making software that
              is fast, maintainable, and actually ships.
            </p>
            <p style={{ color: "#6b8aaa", lineHeight: 1.8, fontSize: "1rem", fontFamily: "sans-serif" }}>
              We don't pad projects with unnecessary complexity. We scope clearly, build iteratively, and communicate
              honestly at every step. Whether you need a full product built from scratch or a specific piece of your
              stack hardened — we're the team for it.
            </p>
            <p style={{ color: "#6b8aaa", lineHeight: 1.8, fontSize: "1rem", fontFamily: "sans-serif" }}>
              We are open to freelance projects, product collaborations, and long-term retainers. If you've got
              something interesting, reach out.
            </p>
            <div className="flex gap-2 flex-wrap pt-1">
              {["Front-End", "Back-End", "Database", "UI/UX", "Open Source"].map((tag) => (
                <span
                  key={tag}
                  style={{
                    background: "#e8f0fe",
                    border: "1px solid #b8d0f8",
                    color: "#1877f2",
                    padding: "0.3rem 0.8rem",
                    borderRadius: "4px",
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.72rem",
                    letterSpacing: "0.05em",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <img
              src={myImage2}
              alt="ZuiTech Team"
              className="rounded-lg w-full max-w-xs md:max-w-full object-cover"
              style={{ border: "2px solid #e3eaf5" }}
            />
          </div>
        </div>
      </section>

      {/* ---------- CONTACT ---------- */}
      <section id="contact" className="py-16 px-4 md:px-16" style={{ background: "#f5f8ff" }}>
        <div className="max-w-7xl mx-auto">
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.72rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#1877f2",
            }}
          >
            // contact
          </span>
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              letterSpacing: "-0.03em",
              color: "#0d1b2a",
              margin: "0.5rem 0 0.5rem",
            }}
          >
            Get In Touch
          </h2>
          <p style={{ color: "#6b8aaa", marginBottom: "2.5rem", fontFamily: "sans-serif" }}>
            Have a project? Want to talk scope or see if we're a good fit? We reply fast.
          </p>
          <hr style={{ borderColor: "#e3eaf5", marginBottom: "2.5rem" }} />

          <div className="flex flex-col md:flex-row gap-10">
            {/* Links */}
            <div className="md:w-1/2 flex flex-col gap-3">
              {contactLinks.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    background: "#fff",
                    border: "1px solid #e3eaf5",
                    padding: "0.875rem 1.25rem",
                    borderRadius: "8px",
                  }}
                >
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.65rem",
                      color: "#3a5a7a",
                      textDecoration: "none",
                      fontSize: "0.9rem",
                      fontFamily: "sans-serif",
                    }}
                  >
                    {item.icon} {item.label}
                  </a>
                  <button
                    onClick={() => handleCopy(item.copyVal, item.copyKey)}
                    style={{ background: "none", border: "none", cursor: "pointer", color: "#1877f2" }}
                  >
                    <FaCopy />
                  </button>
                </div>
              ))}
            </div>

            {/* Contact note */}
            <div
              className="md:w-1/2"
              style={{
                background: "#fff",
                border: "1px solid #e3eaf5",
                borderRadius: "12px",
                padding: "2rem",
              }}
            >
              <p
                style={{
                  color: "#6b8aaa",
                  lineHeight: 1.8,
                  marginBottom: "1.25rem",
                  fontSize: "0.95rem",
                  fontFamily: "sans-serif",
                }}
              >
                The fastest way to reach us is via email or Facebook Messenger. We're always down to talk about new
                projects, collabs, or open-source contributions.
              </p>
              <p style={{ color: "#6b8aaa", lineHeight: 1.8, fontSize: "0.95rem", fontFamily: "sans-serif" }}>
                Available for <span style={{ color: "#1877f2", fontWeight: 600 }}>remote projects worldwide.</span>
              </p>
              <button
                onClick={handleTalkClick}
                className="flex items-center gap-2 mt-6"
                style={{
                  background: "#1877f2",
                  color: "#fff",
                  border: "none",
                  padding: "0.8rem 1.75rem",
                  borderRadius: "999px",
                  fontWeight: 700,
                  cursor: "pointer",
                  fontSize: "0.9rem",
                }}
              >
                <FaComments /> Let's Talk
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- FOOTER ---------- */}
      <footer
        className="py-6 px-4 md:px-16 flex justify-between items-center flex-wrap gap-4"
        style={{ borderTop: "1px solid #e3eaf5", background: "#fff" }}
      >
        <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.2rem", color: "#0d1b2a" }}>
          Zui<span style={{ color: "#1877f2" }}>Tech</span>
        </span>
        <div
          className="flex items-center gap-2"
          style={{ color: "#8aa3c0", fontFamily: "'DM Mono', monospace", fontSize: "0.72rem" }}
        >
          <FaCopyright /> 2025 ZuiTech — Full-Stack Tech Collective.
        </div>
      </footer>

      {/* Scroll Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "1.5rem",
            right: "1.5rem",
            width: "44px",
            height: "44px",
            borderRadius: "8px",
            background: "#1877f2",
            color: "#fff",
            border: "none",
            fontSize: "1.1rem",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 99,
            boxShadow: "0 4px 16px rgba(24,119,242,0.3)",
          }}
        >
          ↑
        </button>
      )}

      {/* Copied Toast */}
      {copied && (
        <div
          style={{
            position: "fixed",
            bottom: "5rem",
            right: "1.5rem",
            background: "#fff",
            border: "1px solid #b8d0f8",
            color: "#1877f2",
            padding: "0.6rem 1.2rem",
            borderRadius: "6px",
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.78rem",
            zIndex: 200,
            boxShadow: "0 4px 16px rgba(24,119,242,0.1)",
          }}
        >
          ✓ {copied} copied
        </div>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Mono:wght@400;500&family=DM+Sans:wght@300;400;500&display=swap');
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { background: #ffffff; }
      `}</style>
    </div>
  );
};

export default Welcome;