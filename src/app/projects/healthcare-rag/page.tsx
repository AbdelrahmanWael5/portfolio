import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { HiArrowLeft } from "react-icons/hi";
import { HiOutlineExternalLink } from "react-icons/hi";

export default function HealthcareRAGPage() {
  return (
    <main className="min-h-screen overflow-hidden text-white relative">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-950 to-purple-950" />

      <div className="relative z-10">

        {/* Back Button */}
        <section className="mx-auto max-w-7xl px-8 pt-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 transition hover:text-white"
          >
            <HiArrowLeft />
            Back to Portfolio
          </Link>
        </section>

        {/* Hero */}
        <section className="mx-auto max-w-7xl px-8 pt-12 pb-16">

            <div className="mb-5 inline-block rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
                Retrieval-Augmented Generation (RAG) • Medical AI
            </div>

            <h1 className="mb-6 text-6xl font-extrabold leading-tight">
                Healthcare RAG System
            </h1>

            <h2 className="mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-3xl font-bold text-transparent">
                A Hypertension-Focused Conversational Medical Assistant with Hybrid Retrieval and Reranking
            </h2>

            <p className="max-w-4xl text-xl leading-9 text-gray-300">
                A specialized Retrieval-Augmented Generation (RAG) chatbot designed to provide
                grounded, factual answers regarding hypertension. The system combines dense vector
                retrieval with lexical BM25 search, integrates BGE cross-encoder reranking, and
                utilizes Qwen3-4B to ensure clinical accuracy and strict source attribution.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
                <a
                href="https://github.com/AbdelrahmanWael5/Healthcare-RAG-System"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border border-purple-500 px-6 py-3 transition hover:bg-purple-500/10"
                >
                <FaGithub size={20} />
                View Repository
                </a>
            </div>

            {/* Tech Stack Pills */}
            <div className="mt-10 flex flex-wrap gap-3">
                <span className="rounded-full bg-white/10 px-4 py-2 text-sm">Python</span>
                <span className="rounded-full bg-white/10 px-4 py-2 text-sm">Qwen3-4B</span>
                <span className="rounded-full bg-white/10 px-4 py-2 text-sm">BGE Reranker</span>
                <span className="rounded-full bg-white/10 px-4 py-2 text-sm">LangChain</span>
                <span className="rounded-full bg-white/10 px-4 py-2 text-sm">Hybrid Retrieval (Dense + BM25)</span>
                <span className="rounded-full bg-white/10 px-4 py-2 text-sm">Vector Database</span>
            </div>

        </section>

        {/* Project Overview */}
        <section className="mx-auto max-w-7xl px-8 pb-24">
            <h2 className="mb-8 text-5xl font-bold">
                Project Overview
            </h2>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                <p className="leading-9 text-gray-300">
                General-purpose Large Language Models often struggle with domain-specific medical inquiries,
                frequently suffering from hallucination or lack of direct citation. In sensitive fields like
                healthcare—specifically chronic condition management such as hypertension—ensuring complete factual
                grounding and traceability is critical.
                </p>

                <p className="mt-6 leading-9 text-gray-300">
                This project implements an end-to-end RAG architecture explicitly engineered for medical document
                comprehension. By decoupling semantic retrieval from lexical matching and introducing a dedicated
                reranking phase before context generation, the system filters out irrelevant noise and delivers
                highly precise medical insights accompanied by explicit source references.
                </p>

                <div className="mt-12 grid gap-6 md:grid-cols-3">
                    <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
                        <h3 className="text-xl font-semibold text-purple-300">Domain Specialization</h3>
                        <p className="mt-3 leading-7 text-gray-400">
                        Tailored specifically for hypertension guidelines, medical literature, and patient care protocols.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
                        <h3 className="text-xl font-semibold text-purple-300">Hybrid Search</h3>
                        <p className="mt-3 leading-7 text-gray-400">
                        Combines dense vector embeddings with lexical BM25 keyword search to catch both conceptual and keyword-specific matches.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
                        <h3 className="text-xl font-semibold text-purple-300">Factual Grounding</h3>
                        <p className="mt-3 leading-7 text-gray-400">
                        Integrates BGE cross-encoder reranking and enforces strict source attribution for verifiable answers.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* Pipeline Architecture */}
        <section className="mx-auto max-w-7xl px-8 pb-24">
            <h2 className="mb-8 text-5xl font-bold">
                RAG Pipeline Architecture
            </h2>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                <p className="leading-9 text-gray-300">
                The pipeline processes user queries through four sequential stages to maximize precision:
                </p>

                <div className="mt-10 grid gap-6 lg:grid-cols-4">
                    <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
                        <span className="text-sm font-semibold uppercase tracking-widest text-purple-400">Step 01</span>
                        <h3 className="mt-2 text-xl font-semibold">Hybrid Retrieval</h3>
                        <p className="mt-3 text-sm leading-7 text-gray-400">
                        Queries are executed in parallel across a dense vector store (semantic matching) and a BM25 index (lexical keyword matching).
                        </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
                        <span className="text-sm font-semibold uppercase tracking-widest text-purple-400">Step 02</span>
                        <h3 className="mt-2 text-xl font-semibold">BGE Reranking</h3>
                        <p className="mt-3 text-sm leading-7 text-gray-400">
                        Retrieved document chunks are scored and re-ordered using a BGE cross-encoder model to surface the most contextually relevant chunks.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
                        <span className="text-sm font-semibold uppercase tracking-widest text-purple-400">Step 03</span>
                        <h3 className="mt-2 text-xl font-semibold">Context Prompting</h3>
                        <p className="mt-3 text-sm leading-7 text-gray-400">
                        Top-ranked context fragments are injected into a specialized system prompt enforcing strict adherence to provided source material.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-purple-500/20 bg-purple-500/10 p-6">
                        <span className="text-sm font-semibold uppercase tracking-widest text-purple-400">Step 04</span>
                        <h3 className="mt-2 text-xl font-semibold">Grounded Generation</h3>
                        <p className="mt-3 text-sm leading-7 text-gray-300">
                        Qwen3-4B generates the final medical response, complete with inline citations mapping directly back to source documents.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* Technical Implementation & Highlights */}
        <section className="mx-auto max-w-7xl px-8 pb-24">
            <h2 className="mb-8 text-5xl font-bold">
                Technical Highlights
            </h2>

            <div className="grid gap-8 lg:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                    <h3 className="text-2xl font-semibold text-white">Hybrid Retrieval Mechanism</h3>
                    <p className="mt-4 leading-8 text-gray-300">
                    Relying solely on vector embeddings can miss exact medical terminology, acronyms, or drug names.
                    By fusing dense retrieval with lexical BM25 matching, the system ensures robust recall even when
                    queries contain specific clinical nomenclature.
                    </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                    <h3 className="text-2xl font-semibold text-white">Cross-Encoder Reranking</h3>
                    <p className="mt-4 leading-8 text-gray-300">
                    Initial retrieval pulls a wide net of candidate passages. The BGE reranker performs deep cross-attention
                    scoring between the query and each document passage, dramatically reducing false positives before context
                    reaches the language model.
                    </p>
                </div>
            </div>
        </section>

        {/* Future Enhancements */}
        <section className="mx-auto max-w-7xl px-8 pb-24">
            <h2 className="mb-8 text-5xl font-bold">
                Future Improvements
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                    <h3 className="text-xl font-semibold">Expanded Medical Corpus</h3>
                    <p className="mt-4 leading-8 text-gray-300">
                    Extend the knowledge base beyond hypertension to incorporate broader cardiovascular and general internal medicine guidelines.
                    </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                    <h3 className="text-xl font-semibold">Evaluation Framework</h3>
                    <p className="mt-4 leading-8 text-gray-300">
                    Integrate RAG triad evaluation metrics (Context Relevance, Groundedness, and Answer Relevance) using automated frameworks.
                    </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                    <h3 className="text-xl font-semibold">Clinical UI Deployment</h3>
                    <p className="mt-4 leading-8 text-gray-300">
                    Package the pipeline into an interactive web application with real-time source inspection for clinician evaluation.
                    </p>
                </div>
            </div>
        </section>

      </div>
    </main>
  );
}