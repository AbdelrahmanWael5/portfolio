"use client";
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaWhatsapp, 
  FaLocationDot, 
  FaCalendarDays, 
  FaArrowRight, 
  FaChartLine 
} from "react-icons/fa6";
import { HiOutlineDocumentArrowDown, HiOutlineCalendarDays, HiOutlineAcademicCap } from "react-icons/hi2";
import { FaBrain, FaRobot } from "react-icons/fa";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {

  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {

    const handleScroll = () => {

      const sections = [
        "about",
        "experience",
        "projects",
        "skills",
        "certificates",
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
              "projects",
              "skills",
              "certificates",
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
        className="relative z-10 mx-auto max-w-5xl px-8 pt-36 pb-20 text-center"
      >
        <div className="flex flex-col items-center">
          <h1 className="mb-4 text-6xl lg:text-7xl font-extrabold leading-none tracking-tight">
            Abdelrahman Wael
          </h1>
          <h2 className="mb-10 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-3xl font-bold text-transparent">
            AI & Machine Learning Engineer
          </h2>

          {/* Summary + Education */}
          <div className="grid w-full gap-6 md:grid-cols-2 text-left">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/20">
                  📄
                </div>
                <h3 className="text-xl font-semibold">Summary</h3>
              </div>
              <p className="leading-8 text-gray-300">
                Artificial Intelligence Engineer with expertise in deep learning, computer vision, LLMs, RAG, and agentic AI. Passionate about engineering high-fidelity generative systems and intelligent architectures that solve complex and real-world problems.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur flex flex-col">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/20">
                  🎓
                </div>
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <p className="text-gray-200 font-medium">Dual Bachelor in Artificial Intelligence</p>
              <p className="mt-1 text-purple-300">British University in Egypt (BUE)</p>
              <p className="mt-1 text-xs text-gray-500">Faculty of Informatics and Computer Science</p>
              
              <div className="mt-4 rounded-xl border border-white/5 bg-black/30 p-4">
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">•</span>
                    <span><strong className="text-white">UK Degree:</strong> First Class </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">•</span>
                    <span><strong className="text-white">Egyptian Degree:</strong> Very Good with Honours</span>
                  </li>
                </ul>
              </div>

              <div className="mt-auto pt-5 flex items-center gap-2 text-sm text-gray-500">
                <FaCalendarDays size={14} />
                <span>2022 - 2026</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
          <div className="grid gap-4 md:grid-cols-3">
            <a
              href="/Abdelrahman_Wael_CV.pdf"
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
        <h2 className="mb-10 text-5xl font-bold">Experience</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {/* ML Internship */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition hover:border-purple-500/40 hover:bg-white/[0.07]">
            <div className="mb-5 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/20">
                <FaBrain className="text-xl text-purple-300" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Machine Learning Engineering</h3>
                <p className="text-purple-400">DEPI Program</p>
              </div>
            </div>
            <div className="mb-5 flex items-center gap-2 text-gray-500">
              <HiOutlineCalendarDays />
              <span> October 2024 - May 2025</span>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li>• Applied machine learning and deep learning techniques using Python frameworks.</li>
              <li>• Worked with Computer Vision and Natural Language Processing models.</li>
              <li>• Studied statistics, probability, model evaluation, and optimization.</li>
              <li>• Built end-to-end machine learning workflows and projects.</li>
            </ul>
          </div>

          {/* GenAI Internship */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition hover:border-purple-500/40 hover:bg-white/[0.07]">
            <div className="mb-5 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/20">
                <FaRobot className="text-xl text-purple-300" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Generative AI Professional</h3>
                <p className="text-purple-400">DEPI Program</p>
              </div>
            </div>
            <div className="mb-5 flex items-center gap-2 text-gray-500">
              <HiOutlineCalendarDays />
              <span> November 2025 - July 2026</span>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li>• Worked with LLMs and modern Generative AI systems.</li>
              <li>• Built Retrieval-Augmented Generation (RAG) pipelines.</li>
              <li>• Explored Agentic AI and Multi-Agent Architectures.</li>
              <li>• Studied deployment, monitoring, and responsible AI practices.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ---------------------------------- Featured Projects (90/10 Hierarchy) ---------------------------------- */}

      <section
        id="projects"
        className="relative z-10 mx-auto max-w-6xl px-8 py-16"
      >
        <h2 className="mb-4 text-5xl font-bold">Featured Projects</h2>
        <p className="mb-14 text-lg text-gray-400">Deep technical projects exploring Generative AI, custom diffusion models, hybrid RAG pipelines, and multi-agent systems.</p>

        {/* ================= THE HEAVY HITTERS (90% Space) ================= */}
        
        <div className="mb-20 space-y-8">
          
          {/* HybridVTON (Graduation Project - Full Width Anchor 1) */}
          <div className="rounded-3xl border border-purple-500/30 bg-white/5 p-8 backdrop-blur transition hover:border-purple-500/60 hover:bg-white/[0.07]">
            <div className="mb-3 flex items-center gap-3">
              <span className="rounded-full bg-purple-500/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-purple-300">
                Graduation Project
              </span>
            </div>
            
            <h3 className="mb-3 text-3xl font-bold text-white">HybridVTON</h3>
            <p className="mb-6 max-w-4xl leading-7 text-gray-300">
              A diffusion-based virtual try-on framework that combines explicit geometric guidance with implicit garment–person feature interaction to achieve accurate garment alignment and high-fidelity synthesis. The framework integrates multi-level garment conditioning and identity-preserving mechanisms to generate realistic try-on results for both upper- and lower-body garments.
            </p>

            <div className="mb-6 rounded-2xl border border-white/5 bg-black/30 p-5">
              <div className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-purple-300">
                <FaChartLine />
                Quantitative Performance & Benchmarks (VITON-HD Dataset)
              </div>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">•</span>
                  <span>Achieved state-of-the-art results on <strong className="text-white">LPIPS (0.077)</strong> and <strong className="text-white">FID (6.27)</strong>, outperforming leading frameworks in virtual try-on like IDM-VTON, LaDI-VTON, and StableVTON.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">•</span>
                  <span>Successfully combined explicit pose-guided warping with implicit diffusion generation for artifact-free clothing alignment and preservation of intricate garment textures.</span>
                </li>
              </ul>
            </div>

            <div className="mb-8 space-y-4">
              <div>
                <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-400">Concepts & Architecture</span>
                <div className="flex flex-wrap gap-2">
                  {["Diffusion Models", "Virtual Try-On", "Pose Alignment", "Computer Vision", "Image Generation"].map((tag) => (
                    <span key={tag} className="rounded-lg border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs text-purple-300">{tag}</span>
                  ))}
                </div>
              </div>
              <div>
                <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-400">Tech Stack</span>
                <div className="flex flex-wrap gap-2">
                  {["PyTorch", "Diffusers", "Hugging Face", "Python", "OpenCV", "CUDA"].map((tech) => (
                    <span key={tech} className="rounded-lg bg-white/10 px-3 py-1 text-xs text-gray-300">{tech}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link href="/projects/hybrid-vton" className="flex items-center gap-2 rounded-xl bg-purple-600 px-6 py-3 font-medium text-white transition hover:bg-purple-500">
                View More Details <FaArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* AI Fashion Designer (Full Width Anchor 2) */}
          <div className="rounded-3xl border border-purple-500/30 bg-white/5 p-8 backdrop-blur transition hover:border-purple-500/60 hover:bg-white/[0.07]">
            <div className="mb-3 flex items-center gap-3">
              <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-300">
                Generative AI / Multi-Agent
              </span>
            </div>
            
            <h3 className="mb-3 text-3xl font-bold text-white">AI Fashion Designer</h3>
            <p className="mb-6 max-w-4xl leading-7 text-gray-300">
              A conversational multi-agent framework designed to bridge natural language user intent and high-end visual design generation. It coordinates specialized agents for prompt parsing, expansion, and style refinement, coupled with a fine-tuned Stable Diffusion XL model.
            </p>

            <div className="mb-6 rounded-2xl border border-white/5 bg-black/30 p-5">
              <div className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-purple-300">
                <FaChartLine />
                Architectural Impact & Technical Highlights
              </div>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">•</span>
                  <span>Engineered robust multi-agent orchestration for intent interpretation, style parsing, and structured parameter tuning.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">•</span>
                  <span>Trained custom SDXL LoRA weights on curated apparel design datasets to achieve superior visual fidelity and style consistency.</span>
                </li>
              </ul>
            </div>

            <div className="mb-8 space-y-4">
              <div>
                <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-400">Concepts & Architecture</span>
                <div className="flex flex-wrap gap-2">
                  {["Generative AI", "Multi-Agent AI", "LLMs", "Stable Diffusion XL", "LoRA Fine-Tuning"].map((tag) => (
                    <span key={tag} className="rounded-lg border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs text-purple-300">{tag}</span>
                  ))}
                </div>
              </div>
              <div>
                <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-400">Tech Stack</span>
                <div className="flex flex-wrap gap-2">
                  {["PyTorch", "Hugging Face", "LangChain", "Diffusers", "Python"].map((tech) => (
                    <span key={tech} className="rounded-lg bg-white/10 px-3 py-1 text-xs text-gray-300">{tech}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link href="/projects/fashion-text-to-image" className="flex items-center gap-2 rounded-xl bg-purple-600 px-6 py-3 font-medium text-white transition hover:bg-purple-500">
                View More Details <FaArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Sketch-to-Shoe & Healthcare RAG System (2-Column Grid) */}
          <div className="grid gap-8 lg:grid-cols-2">

            {/* Healthcare RAG System */}
            <div className="flex flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur transition hover:border-purple-500/40 hover:bg-white/[0.07]">
              <div>
                <h3 className="mb-3 text-2xl font-bold">Healthcare RAG System</h3>
                <p className="mb-6 text-sm leading-6 text-gray-300">
                  A specialized hypertension-focused Retrieval-Augmented Generation chatbot combining dense semantic retrieval, lexical BM25 hybrid search, BGE reranking, and Qwen3-4B for grounded medical answers.
                </p>

                <div className="mb-6 rounded-2xl border border-white/5 bg-black/30 p-4">
                  <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-300">
                    <FaChartLine /> Technical Highlights
                  </div>
                  <ul className="space-y-1.5 text-xs text-gray-300">
                    <li className="flex items-start gap-1.5"><span className="text-purple-400">•</span><span>Implemented multi-stage hybrid search matching semantic vector embeddings with keyword-based BM25.</span></li>
                    <li className="flex items-start gap-1.5"><span className="text-purple-400">•</span><span>Integrated BGE cross-encoder reranking and explicit source attribution for factual reliability.</span></li>
                  </ul>
                </div>

                <div className="mb-6 space-y-3">
                  <div>
                    <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-gray-400">Architecture</span>
                    <div className="flex flex-wrap gap-1.5">
                      {["RAG", "Hybrid Retrieval", "BM25", "Reranking", "Source Attribution"].map((tag) => (
                        <span key={tag} className="rounded-lg border border-purple-500/20 bg-purple-500/10 px-2.5 py-1 text-xs text-purple-300">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-gray-400">Tech Stack</span>
                    <div className="flex flex-wrap gap-1.5">
                      {["Python", "Qwen3-4B", "BGE Reranker", "LangChain", "Vector DB"].map((tech) => (
                        <span key={tech} className="rounded-lg bg-white/10 px-2.5 py-1 text-xs text-gray-300">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <Link href="/projects/healthcare-rag" className="inline-flex items-center justify-center gap-2 rounded-xl border border-purple-500/40 bg-purple-500/10 px-5 py-3 text-sm font-medium text-purple-300 transition hover:bg-purple-500/20 hover:text-white">
                View More Details <FaArrowRight size={12} />
              </Link>
            </div>
            
            {/* Sketch-to-Shoe */}
            <div className="flex flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur transition hover:border-purple-500/40 hover:bg-white/[0.07]">
              <div>
                <h3 className="mb-3 text-2xl font-bold">Sketch-to-Shoe</h3>
                <p className="mb-6 text-sm leading-6 text-gray-300">
                  A research-driven Diffusion Transformer (DiT) framework investigating advanced sketch-guided conditioning strategies to achieve precise spatial layout control and realistic footwear generation.
                </p>

                <div className="mb-6 rounded-2xl border border-white/5 bg-black/30 p-4">
                  <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-300">
                    <FaChartLine /> Technical Highlights
                  </div>
                  <ul className="space-y-1.5 text-xs text-gray-300">
                    <li className="flex items-start gap-1.5"><span className="text-purple-400">•</span><span>Implemented sketch-guided spatial conditioning and control mechanisms for fine-grained boundary preservation.</span></li>
                    <li className="flex items-start gap-1.5"><span className="text-purple-400">•</span><span>Evaluated edge adherence, geometric fidelity, and generative diversity across complex footwear styles.</span></li>
                  </ul>
                </div>

                <div className="mb-6 space-y-3">
                  <div>
                    <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-gray-400">Architecture</span>
                    <div className="flex flex-wrap gap-1.5">
                      {["Diffusion Transformers", "Conditioned Generation", "Edge Guidance", "DiT"].map((tag) => (
                        <span key={tag} className="rounded-lg border border-purple-500/20 bg-purple-500/10 px-2.5 py-1 text-xs text-purple-300">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-gray-400">Tech Stack</span>
                    <div className="flex flex-wrap gap-1.5">
                      {["PyTorch", "ControlNet", "Python", "Torchvision", "Diffusers"].map((tech) => (
                        <span key={tech} className="rounded-lg bg-white/10 px-2.5 py-1 text-xs text-gray-300">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <Link href="/projects/sketch-to-shoe" className="inline-flex items-center justify-center gap-2 rounded-xl border border-purple-500/40 bg-purple-500/10 px-5 py-3 text-sm font-medium text-purple-300 transition hover:bg-purple-500/20 hover:text-white">
                View More Details <FaArrowRight size={12} />
              </Link>
            </div>

          </div>
        </div>

        {/* ================= FOUNDATIONAL MODELS (10% Space) ================= */}
        
        <div>
          <h3 className="mb-6 text-xl font-bold text-gray-400">Additional Projects</h3>
          
          <div className="grid gap-4 md:grid-cols-3">
            
            {/* Heart Disease Prediction */}
            <div className="flex flex-col justify-between rounded-2xl border border-white/5 bg-white/[0.02] p-5 transition hover:bg-white/5">
              <div>
                <h4 className="mb-2 text-lg font-semibold text-white">Heart Disease Prediction</h4>
                <p className="mb-4 text-xs leading-5 text-gray-400">Clinical classification pipeline predicting cardiovascular disease risk using feature engineering.</p>
              </div>
              <a href="https://github.com/AbdelrahmanWael5/Heart-Disease-Prediction" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-semibold text-purple-400 transition hover:text-purple-300">
                <FaGithub size={12}/> View Source
              </a>
            </div>

            {/* Student Score Prediction */}
            <div className="flex flex-col justify-between rounded-2xl border border-white/5 bg-white/[0.02] p-5 transition hover:bg-white/5">
              <div>
                <h4 className="mb-2 text-lg font-semibold text-white">Student Score Prediction</h4>
                <p className="mb-4 text-xs leading-5 text-gray-400">Regression model predicting academic performance based on educational and demographic features.</p>
              </div>
              <a href="https://github.com/AbdelrahmanWael5/Student-Score-Prediction" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-semibold text-purple-400 transition hover:text-purple-300">
                <FaGithub size={12}/> View Source
              </a>
            </div>

            {/* Success Prediction */}
            <div className="flex flex-col justify-between rounded-2xl border border-white/5 bg-white/[0.02] p-5 transition hover:bg-white/5">
              <div>
                <h4 className="mb-2 text-lg font-semibold text-white">Success Prediction</h4>
                <p className="mb-4 text-xs leading-5 text-gray-400">Classification framework modeling student completion probability via comprehensive hyperparameter tuning.</p>
              </div>
              <a href="https://github.com/AbdelrahmanWael5/Success-Prediction" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-semibold text-purple-400 transition hover:text-purple-300">
                <FaGithub size={12}/> View Source
              </a>
            </div>

          </div>
        </div>

      </section>

      {/* ---------------------------------- Skills ---------------------------------- */}

      <section
        id="skills"
        className="relative z-10 mx-auto max-w-6xl px-8 py-16"
      >
        <h2 className="mb-10 text-5xl font-bold">Skills</h2>
        <div className="grid gap-12 md:grid-cols-2">
          {/* Technical Skills */}
          <div>
            <h3 className="mb-8 text-2xl font-semibold">Technical Skills</h3>
            <div className="space-y-8">
              <div>
                <h4 className="mb-3 text-lg font-medium text-purple-400">Programming Languages</h4>
                <div className="flex flex-wrap gap-3">
                  {["Python", "C++", "Java", "SQL"].map((skill) => (
                    <span key={skill} className="rounded-full bg-white/10 px-4 py-2">{skill}</span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="mb-3 text-lg font-medium text-purple-400">AI & Machine Learning</h4>
                <div className="flex flex-wrap gap-3">
                  {["Data Science", "Machine Learning", "Deep Learning", "Computer Vision", "Natural Language Processing", "Generative AI"].map((skill) => (
                    <span key={skill} className="rounded-full bg-white/10 px-4 py-2">{skill}</span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="mb-3 text-lg font-medium text-purple-400">Frameworks & Libraries</h4>
                <div className="flex flex-wrap gap-3">
                  {["PyTorch", "TensorFlow", "Scikit-Learn", "Transformers", "Diffusers", "Pandas", "NumPy", "Matplotlib", "Seaborn"].map((skill) => (
                    <span key={skill} className="rounded-full bg-white/10 px-4 py-2">{skill}</span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="mb-3 text-lg font-medium text-purple-400">Advanced Topics</h4>
                <div className="flex flex-wrap gap-3">
                  {["Diffusion Models", "LLMs", "RAG", "Agentic AI", "Model Deployment"].map((skill) => (
                    <span key={skill} className="rounded-full bg-white/10 px-4 py-2">{skill}</span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="mb-3 text-lg font-medium text-purple-400">Tools & Platforms</h4>
                <div className="flex flex-wrap gap-3">
                  {["Git", "GitHub", "Hugging Face", "Streamlit", "Gradio"].map((skill) => (
                    <span key={skill} className="rounded-full bg-white/10 px-4 py-2">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="mb-8 text-2xl font-semibold">Soft Skills</h3>
            <div className="flex flex-wrap gap-3">
              {[
                "Communication", "Teamwork", "Problem Solving", "Leadership", "Critical Thinking", 
                "Analytical Thinking", "Time Management", "Adaptability", "Research Skills", 
                "Presentation Skills", "Project Management", "Self Learning"
              ].map((skill) => (
                <span key={skill} className="rounded-full bg-white/10 px-4 py-2">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------- Certificates ---------------------------------- */}

      <section
        id="certificates"
        className="relative z-10 mx-auto max-w-6xl px-8 py-16"
      >
        <h2 className="mb-10 text-5xl font-bold">Certificates</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {/* Certificate 1 */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-purple-500/40">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/20">
                <HiOutlineAcademicCap className="text-xl text-purple-300" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Introduction to Machine Learning</h3>
                <p className="mt-1 text-purple-300">AITB</p>
                <p className="mt-1 text-sm text-gray-500">2023</p>
                <a href="https://aitbeg.com/verify-certification?cn=DT-AI-ML-230722074047" className="mt-3 inline-block text-sm text-purple-400 hover:text-purple-300">
                  View Credential →
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
                <h3 className="text-lg font-semibold">Supervised Machine Learning</h3>
                <p className="mt-1 text-purple-300">DeepLearning.AI</p>
                <p className="mt-1 text-sm text-gray-500">2025</p>
                <a href="https://coursera.org/verify/N3ZU3L9EBTEZ" className="mt-3 inline-block text-sm text-purple-400 hover:text-purple-300">
                  View Credential →
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
                <h3 className="text-lg font-semibold">Advanced Learning Algorithms</h3>
                <p className="mt-1 text-purple-300">DeepLearning.AI</p>
                <p className="mt-1 text-sm text-gray-500">2025</p>
                <a href="https://coursera.org/verify/JA0AZRSIGROR" className="mt-3 inline-block text-sm text-purple-400 hover:text-purple-300">
                  View Credential →
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
                <h3 className="text-lg font-semibold">Microsoft Machine Learning Engineer</h3>
                <p className="mt-1 text-purple-300">DEPI</p>
                <p className="mt-1 text-sm text-gray-500">2025</p>
                <a href="##" className="mt-3 inline-block text-sm text-purple-400 hover:text-purple-300">
                  View Credential →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------- Contact ---------------------------------- */}

      <section
        id="contact"
        className="relative z-10 mx-auto max-w-6xl px-8 py-24"
      >
        <h2 className="mb-10 text-5xl font-bold">Contact</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Email */}
          <a href="mailto:Abdelrahmanwael106@gmail.com" className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-purple-500 hover:bg-white/10">
            <p className="mb-2 flex items-center gap-2 text-sm uppercase tracking-widest text-purple-400">
              <FaEnvelope /> Email
            </p>
            <p className="text-white">Abdelrahmanwael106@gmail.com</p>
          </a>

          {/* WhatsApp */}
          <a href="https://wa.me/201029070837" target="_blank" className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-purple-500 hover:bg-white/10">
            <p className="mb-2 flex items-center gap-2 text-sm uppercase tracking-widest text-purple-400">
              <FaWhatsapp /> WhatsApp
            </p>
            <p className="text-white">Chat on WhatsApp</p>
          </a>

          {/* LinkedIn */}
          <a href="https://linkedin.com/in/abdelrahman-wael-ai" target="_blank" className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-purple-500 hover:bg-white/10">
            <p className="mb-2 flex items-center gap-2 text-sm uppercase tracking-widest text-purple-400">
              <FaLinkedin /> LinkedIn
            </p>
            <p className="text-white">View Profile</p>
          </a>

          {/* GitHub */}
          <a href="https://github.com/AbdelrahmanWael5" target="_blank" className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-purple-500 hover:bg-white/10">
            <p className="mb-2 flex items-center gap-2 text-sm uppercase tracking-widest text-purple-400">
              <FaGithub /> GitHub
            </p>
            <p className="text-white">Explore Projects</p>
          </a>

          {/* Location */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="mb-2 flex items-center gap-2 text-sm uppercase tracking-widest text-purple-400">
              <FaLocationDot /> Location
            </p>
            <p className="text-white">Egypt</p>
          </div>
        </div>
      </section>
    </main>
  );
}