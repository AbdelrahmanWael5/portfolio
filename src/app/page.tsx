"use client";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaLocationDot, FaCalendarDays } from "react-icons/fa6";
import { HiOutlineDocumentArrowDown, HiOutlineCalendarDays } from "react-icons/hi2";
import { FaBrain, FaRobot } from "react-icons/fa";
import { useEffect, useState } from "react";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import Link from "next/link";
import Image from "next/image";
export default function Home() {

  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {

    const handleScroll = () => {

      const sections = [
        "about",
        "experience",
        "certificates",
        "projects",
        "skills",
        "contact",
      ];

      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {

        const section = document.getElementById(sections[i]);

        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }

      }

    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  return (
    <main className="min-h-screen text-white overflow-hidden relative">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-950 to-purple-950"></div>

      <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[150px]"></div>

      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-[150px]"></div>

      {/* Floating Navbar */}
      <nav className="fixed top-6 left-1/2 z-50 -translate-x-1/2">
        <div className="rounded-full border border-white/10 bg-black/40 px-6 py-3 backdrop-blur-xl">
          
          <div className="flex gap-6 text-sm">

            {[
              "about",
              "experience",
              "certificates",
              "projects",
              "skills",
              "contact",
            ].map((section) => (

              <a
                key={section}
                href={`#${section}`}
                className={`relative transition
                ${
                  activeSection === section
                    ? "text-purple-300"
                    : "text-gray-300 hover:text-white"
                }`}
              >

                {section.charAt(0).toUpperCase() + section.slice(1)}

                {activeSection === section && (
                  <span className="absolute left-1/2 top-6 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-purple-400"></span>
                )}

              </a>

            ))}

          </div>

        </div>
      </nav>


      {/* ---------------------------------- Landing Section ---------------------------------- */}
      
    
      <section
        id="about"
        className="relative z-10 mx-auto max-w-7xl px-8 pt-36 pb-20"
      >

        <div className="grid items-start gap-12 lg:grid-cols-[1.4fr_0.8fr]">

          {/* Left Side */}
          <div>

            <h1 className="mb-4 text-6xl lg:text-7xl font-extrabold leading-none tracking-tight">
              Abdelrahman Wael
            </h1>

            <h2 className="mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-3xl font-bold text-transparent">
              AI & Machine Learning Engineer
            </h2>

            {/* Summary + Education */}
            <div className="grid gap-6 md:grid-cols-2">

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">

                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/20">
                    📄
                  </div>

                  <h3 className="text-xl font-semibold">
                    Summary
                  </h3>
                </div>

                <p className="leading-8 text-gray-300">
                  Passionate AI Engineer specializing in Machine Learning, Computer Vision, Natural Language Processing,
                  Generative AI, Data Science, and Internet of Things. Experienced 
                  in developing intelligent systems and solving real-world problems through scalable AI solutions.
                </p>

              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">

                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/20">
                    🎓
                  </div>

                  <h3 className="text-xl font-semibold">
                    Education
                  </h3>
                </div>

                <p className="text-gray-300">
                  Bachelor in Artificial Intelligence
                </p>

                <p className="mt-2 text-purple-300">
                  British University in Egypt (BUE)
                </p>

                <p className="mt-1 text-sm text-gray-400">
                  Faculty of Informatics and Computer Science
                </p>

                <div className="mt-5 flex items-center gap-2 text-gray-500">
                  <FaCalendarDays size={14} />
                  <span>2022 - 2026</span>
                </div>

              </div>

            </div>

          </div>

          {/* Right Side */}
          <div className="relative flex justify-center">

            {/* Glow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-72 w-72 rounded-full bg-blue-500/20 blur-[100px]"></div>
            </div>

            {/* Dots Pattern */}
            <div className="absolute right-0 top-20 h-64 w-64 opacity-20">
              <div
                className="h-full w-full"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #8b5cf6 1px, transparent 1px)",
                  backgroundSize: "18px 18px",
                }}
              />
            </div>

            {/* Photo */}
            <div className="relative h-72 w-72 overflow-hidden rounded-full border-2 border-purple-500/50 shadow-[0_0_40px_rgba(168,85,247,0.35)]">

              <Image
                src="/profile.jpg"
                alt="Abdelrahman Wael"
                fill
                className="object-cover"
                priority
              />

            </div>

          </div>

        </div>

        {/* Action Buttons */}
        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">

          <div className="grid gap-4 md:grid-cols-3">

            <a
              href="/Abdelrahman_Wael_Resume.pdf"
              download
              className="flex items-center justify-center gap-2 rounded-xl border border-purple-500 px-6 py-4 transition hover:bg-purple-500/10"
            >
              <HiOutlineDocumentArrowDown size={20} />
              Download CV
            </a>

            <a
              href="https://github.com/AbdelrahmanWael5"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl border border-white/10 px-6 py-4 transition hover:bg-white/5"
            >
              <FaGithub size={20} />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/abdelrahman-wael-ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl border border-white/10 px-6 py-4 transition hover:bg-white/5"
            >
              <FaLinkedin size={20} />
              LinkedIn
            </a>

          </div>

        </div>

      </section>

      
      {/* ---------------------------------- Experience ---------------------------------- */}


      <section
        id="experience"
        className="relative z-10 mx-auto max-w-6xl px-8 py-16"
      >
        <h2 className="mb-10 text-5xl font-bold">
          Experience
        </h2>

        <div className="grid gap-8 md:grid-cols-2">

          {/* ML Internship */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition hover:border-purple-500/40 hover:bg-white/[0.07]">

            <div className="mb-5 flex items-center gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/20">
                <FaBrain className="text-xl text-purple-300" />
              </div>

              <div>
                <h3 className="text-2xl font-semibold">
                  Machine Learning Engineering
                </h3>

                <p className="text-purple-400">
                  DEPI Program
                </p>
              </div>

            </div>

            <div className="mb-5 flex items-center gap-2 text-gray-500">
              <HiOutlineCalendarDays />
              <span> October 2024 - May 2025</span>
            </div>

            <ul className="space-y-3 text-gray-300">

              <li>
                • Applied machine learning and deep learning techniques using Python frameworks.
              </li>

              <li>
                • Worked with Computer Vision and Natural Language Processing models.
              </li>

              <li>
                • Studied statistics, probability, model evaluation, and optimization.
              </li>

              <li>
                • Built end-to-end machine learning workflows and projects.
              </li>

            </ul>

          </div>

          {/* GenAI Internship */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition hover:border-purple-500/40 hover:bg-white/[0.07]">

            <div className="mb-5 flex items-center gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/20">
                <FaRobot className="text-xl text-purple-300" />
              </div>

              <div>
                <h3 className="text-2xl font-semibold">
                  Generative AI Professional
                </h3>

                <p className="text-purple-400">
                  DEPI Program
                </p>
              </div>

            </div>

            <div className="mb-5 flex items-center gap-2 text-gray-500">
              <HiOutlineCalendarDays />
              <span> November 2025 - July 2026</span>
            </div>

            <ul className="space-y-3 text-gray-300">

              <li>
                • Worked with LLMs and modern Generative AI systems.
              </li>

              <li>
                • Built Retrieval-Augmented Generation (RAG) pipelines.
              </li>

              <li>
                • Explored Agentic AI and Multi-Agent Architectures.
              </li>

              <li>
                • Studied deployment, monitoring, and responsible AI practices.
              </li>

            </ul>

          </div>

        </div>
      </section>


      {/* ---------------------------------- Certificates ---------------------------------- */}


      <section
        id="certificates"
        className="relative z-10 mx-auto max-w-6xl px-8 py-16"
      >
        <h2 className="mb-10 text-5xl font-bold">
          Certificates
        </h2>

        <div className="grid gap-6 md:grid-cols-2">

          {/* Certificate 1 */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-purple-500/40">

            <div className="flex items-start gap-4">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/20">
                <HiOutlineAcademicCap className="text-xl text-purple-300" />
              </div>

              <div>
                <h3 className="text-lg font-semibold">
                  Python Programming Fundamentals
                </h3>

                <p className="mt-1 text-purple-300">
                  Mahara-Tech
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  2025
                </p>

                <a
                  href="Python_Course_MaharaTech.pdf"
                  className="mt-3 inline-block text-sm text-purple-400 hover:text-purple-300"
                >
                  View Certificate →
                </a>
              </div>

            </div>

          </div>

          {/* Certificate 2 */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-purple-500/40">

            <div className="flex items-start gap-4">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/20">
                <HiOutlineAcademicCap className="text-xl text-purple-300" />
              </div>

              <div>
                <h3 className="text-lg font-semibold">
                  Python for Data Science, AI & Development
                </h3>

                <p className="mt-1 text-purple-300">
                  IBM / Coursera
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  2024
                </p>

                <a
                  href="#"
                  className="mt-3 inline-block text-sm text-purple-400 hover:text-purple-300"
                >
                  View Certificate →
                </a>
              </div>

            </div>

          </div>

          {/* Certificate 3 */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-purple-500/40">

            <div className="flex items-start gap-4">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/20">
                <HiOutlineAcademicCap className="text-xl text-purple-300" />
              </div>

              <div>
                <h3 className="text-lg font-semibold">
                  Introduction to Machine Learning
                </h3>

                <p className="mt-1 text-purple-300">
                  AITB
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  2023
                </p>

                <a
                  href="ML_AITB.pdf"
                  className="mt-3 inline-block text-sm text-purple-400 hover:text-purple-300"
                >
                  View Certificate →
                </a>
              </div>

            </div>

          </div>

          {/* Certificate 4 */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-purple-500/40">

            <div className="flex items-start gap-4">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/20">
                <HiOutlineAcademicCap className="text-xl text-purple-300" />
              </div>

              <div>
                <h3 className="text-lg font-semibold">
                  Supervised Machine Learning
                </h3>

                <p className="mt-1 text-purple-300">
                  DeepLearning.AI
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  2025
                </p>

                <a
                  href="Coursera1_Andrew.pdf"
                  className="mt-3 inline-block text-sm text-purple-400 hover:text-purple-300"
                >
                  View Certificate →
                </a>
              </div>

            </div>

          </div>

          {/* Certificate 5 */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-purple-500/40">

            <div className="flex items-start gap-4">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/20">
                <HiOutlineAcademicCap className="text-xl text-purple-300" />
              </div>

              <div>
                <h3 className="text-lg font-semibold">
                  Advanced Learning Algorithms
                </h3>

                <p className="mt-1 text-purple-300">
                  DeepLearning.AI
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  2025
                </p>

                <a
                  href="Coursera2_Andrew.pdf"
                  className="mt-3 inline-block text-sm text-purple-400 hover:text-purple-300"
                >
                  View Certificate →
                </a>
              </div>

            </div>

          </div>

          {/* Certificate 6 */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-purple-500/40">

            <div className="flex items-start gap-4">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/20">
                <HiOutlineAcademicCap className="text-xl text-purple-300" />
              </div>

              <div>
                <h3 className="text-lg font-semibold">
                  Microsoft Machine Learning Engineer
                </h3>

                <p className="mt-1 text-purple-300">
                  DEPI
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  2025
                </p>

                <a
                  href="ML_DEPI.pdf"
                  className="mt-3 inline-block text-sm text-purple-400 hover:text-purple-300"
                >
                  View Credential →
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ---------------------------------- Projects ---------------------------------- */}


      <section
        id="projects"
        className="relative z-10 mx-auto max-w-6xl px-8 py-16"
      >
        <h2 className="mb-10 text-5xl font-bold">
          Featured Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-3">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-3 text-xl font-semibold">
              HybridVTON
            </h3>

            <p className="mb-5 text-gray-300">
              Diffusion-based virtual try-on system for realistic garment transfer.
            </p>

            <button className="rounded-lg border border-purple-500 px-4 py-2">
              Project Details
            </button>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-3 text-xl font-semibold">
              Fashion Text-to-Image
            </h3>

            <p className="mb-5 text-gray-300">
              Fine-tuned SDXL model for fashion image generation.
            </p>

            <Link
              href="/projects/fashion-text-to-image"
              className="inline-block rounded-lg border border-purple-500 px-4 py-2 hover:bg-purple-500/10 transition"
            >
              Project Details
            </Link>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-3 text-xl font-semibold">
              Sketch-to-Image
            </h3>

            <p className="mb-5 text-gray-300">
              Generate realistic footwear images from sketches.
            </p>

            <button className="rounded-lg border border-purple-500 px-4 py-2">
              Project Details
            </button>
          </div>

        </div>
      </section>

      
      {/* ---------------------------------- Skills ---------------------------------- */}


      <section
        id="skills"
        className="relative z-10 mx-auto max-w-6xl px-8 py-16"
      >
        <h2 className="mb-10 text-5xl font-bold">
          Skills
        </h2>

        <div className="grid gap-12 md:grid-cols-2">

          {/* Technical Skills */}
          <div>

            <h3 className="mb-8 text-2xl font-semibold">
              Technical Skills
            </h3>

            <div className="space-y-8">

              <div>
                <h4 className="mb-3 text-lg font-medium text-purple-400">
                  Programming Languages
                </h4>

                <div className="flex flex-wrap gap-3">
                  {[
                    "Python",
                    "C++",
                    "Java",
                    "SQL",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-white/10 px-4 py-2"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="mb-3 text-lg font-medium text-purple-400">
                  AI & Machine Learning
                </h4>

                <div className="flex flex-wrap gap-3">
                  {[
                    "Data Science",
                    "Machine Learning",
                    "Deep Learning",
                    "Computer Vision",
                    "Natural Language Processing",
                    "Generative AI",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-white/10 px-4 py-2"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="mb-3 text-lg font-medium text-purple-400">
                  Frameworks & Libraries
                </h4>

                <div className="flex flex-wrap gap-3">
                  {[
                    "PyTorch",
                    "TensorFlow",
                    "Scikit-Learn",
                    "Transformers",
                    "Diffusers",
                    "Pandas",
                    "NumPy",
                    "Matplotlib",
                    "Seaborn"
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-white/10 px-4 py-2"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="mb-3 text-lg font-medium text-purple-400">
                  Advanced Topics
                </h4>

                <div className="flex flex-wrap gap-3">
                  {[
                    "Diffusion Models",
                    "LLMs",
                    "RAG",
                    "Agentic AI",
                    "Model Deployment",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-white/10 px-4 py-2"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="mb-3 text-lg font-medium text-purple-400">
                  Tools & Platforms
                </h4>

                <div className="flex flex-wrap gap-3">
                  {[
                    "Git",
                    "GitHub",
                    "Hugging Face",
                    "Streamlit",
                    "Gradio",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-white/10 px-4 py-2"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Soft Skills */}
          <div>

            <h3 className="mb-8 text-2xl font-semibold">
              Soft Skills
            </h3>

            <div className="flex flex-wrap gap-3">

              {[
                "Communication",
                "Teamwork",
                "Problem Solving",
                "Leadership",
                "Critical Thinking",
                "Analytical Thinking",
                "Time Management",
                "Adaptability",
                "Research Skills",
                "Presentation Skills",
                "Project Management",
                "Self Learning",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-white/10 px-4 py-2"
                >
                  {skill}
                </span>
              ))}

            </div>

          </div>

        </div>
      </section>


      {/* ---------------------------------- Contact ---------------------------------- */}


      <section
        id="contact"
        className="relative z-10 mx-auto max-w-6xl px-8 py-24"
      >
        <h2 className="mb-10 text-5xl font-bold">
          Contact
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {/* Email */}
          <a
            href="mailto:Abdelrahmanwael106@gmail.com"
            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-purple-500 hover:bg-white/10"
          >
            <p className="mb-2 flex items-center gap-2 text-sm uppercase tracking-widest text-purple-400">
              <FaEnvelope />
              Email
            </p>

            <p className="text-white">
              Abdelrahmanwael106@gmail.com
            </p>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/201029070837"
            target="_blank"
            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-purple-500 hover:bg-white/10"
          >
            <p className="mb-2 flex items-center gap-2 text-sm uppercase tracking-widest text-purple-400">
              <FaWhatsapp />
              WhatsApp
            </p>

            <p className="text-white">
              Chat on WhatsApp
            </p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/abdelrahman-wael-ai"
            target="_blank"
            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-purple-500 hover:bg-white/10"
          >
            <p className="mb-2 flex items-center gap-2 text-sm uppercase tracking-widest text-purple-400">
              <FaLinkedin />
              LinkedIn
            </p>

            <p className="text-white">
              View Profile
            </p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/AbdelrahmanWael5"
            target="_blank"
            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-purple-500 hover:bg-white/10"
          >
            <p className="mb-2 flex items-center gap-2 text-sm uppercase tracking-widest text-purple-400">
              <FaGithub />
              GitHub
            </p>

            <p className="text-white">
              Explore Projects
            </p>
          </a>

          {/* Location */}
          <div
            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <p className="mb-2 flex items-center gap-2 text-sm uppercase tracking-widest text-purple-400">
              <FaLocationDot />
              Location
            </p>

            <p className="text-white">
              Egypt
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}