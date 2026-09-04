import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaPlay } from "react-icons/fa";
import { HiArrowLeft } from "react-icons/hi";

export default function FashionTextToImagePage() {
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
                Generative AI • Multi-Agent Systems
            </div>

            <h1 className="mb-6 text-6xl font-extrabold leading-tight">
                AI Fashion Designer
            </h1>

            <p className="max-w-4xl text-xl leading-9 text-gray-300">
                An end-to-end AI system that combines Large Language Models with a
                fine-tuned Stable Diffusion XL model to generate fashion images
                through natural conversations. Instead of requiring manually
                engineered prompts, the system interacts with users, collects
                clothing attributes, constructs structured fashion descriptions,
                and generates high-quality garment images.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
                <a
                href="https://github.com/AbdelrahmanWael5/fashion-text-to-image-sdxl"
                target="_blank"
                className="flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3 transition hover:bg-white/5"
                >
                <FaGithub />
                GitHub Repository
                </a>

                <a
                href="/projects/fashion-text-to-image/demo.mp4"
                target="_blank"
                className="flex items-center gap-2 rounded-xl border border-purple-500 px-6 py-3 transition hover:bg-purple-500/10"
                >
                <FaPlay />
                Demo Video
                </a>
            </div>

        </section>

        {/* My Contributions - Moved Up */}
        <section className="mx-auto max-w-7xl px-8 pb-20">
            <h2 className="mb-8 text-4xl font-bold text-purple-300">
                My Engineering Contributions
            </h2>

            <div className="grid gap-6 lg:grid-cols-2">
                {/* Diffusion */}
                <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                    <h3 className="text-2xl font-semibold">
                        Diffusion Model Development
                    </h3>
                    <ul className="mt-8 space-y-5 text-gray-300">
                        <li>• Built an automated fashion caption generation pipeline using Qwen2.5-VL.</li>
                        <li>• Developed a caption cleaning and vocabulary standardization pipeline.</li>
                        <li>• Constructed a high-quality fashion image-caption dataset from VITON-HD.</li>
                        <li>• Fine-tuned Stable Diffusion XL for fashion-specific image generation.</li>
                        <li>• Evaluated the adapted model through qualitative comparisons with the pretrained SDXL model.</li>
                    </ul>
                </div>

                {/* Multi-Agent */}
                <div className="rounded-3xl border border-purple-500/30 bg-purple-500/10 p-8">
                    <h3 className="text-2xl font-semibold">
                        Conversational AI Development
                    </h3>
                    <ul className="mt-8 space-y-5 text-gray-300">
                        <li>• Designed the complete conversational multi-agent architecture.</li>
                        <li>• Implemented the Fashion Consultant Agent.</li>
                        <li>• Implemented the Attribute Extractor Agent.</li>
                        <li>• Designed the structured clothing representation for maintaining conversation state.</li>
                        <li>• Built the prompt generation workflow connecting the agents with the diffusion model.</li>
                        <li>• Integrated all components into an end-to-end fashion image generation system.</li>
                    </ul>
                </div>
            </div>
        </section>

        {/* Generated Fashion Samples - Moved Up for Show, Don't Tell */}
        <section className="mx-auto max-w-7xl px-8 pb-24">
            <h2 className="mb-8 text-5xl font-bold">
                Generated Fashion Samples
            </h2>

            <div className="mb-12 max-w-4xl">
                <p className="leading-9 text-gray-300">
                The following examples demonstrate the capability of the proposed
                framework to generate diverse fashion images from structured clothing
                descriptions. After the conversational agents collect the required
                garment attributes, the resulting prompt is passed to the fine-tuned
                Stable Diffusion XL model to synthesize the final clothing image.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {[
                {
                    image: "image1.png",
                    category: "Hoodie",
                    prompt: "Black cotton hoodie",
                },
                {
                    image: "image2.png",
                    category: "Shirt",
                    prompt: "Green denim shirt",
                },
                {
                    image: "image3.png",
                    category: "T-Shirt",
                    prompt: "Black leather t-shirt",
                },
                {
                    image: "image4.png",
                    category: "T-Shirt",
                    prompt: "Plaid t-shirt",
                },
                {
                    image: "image5.png",
                    category: "T-Shirt",
                    prompt: "Floral t-shirt",
                },
                {
                    image: "image6.png",
                    category: "T-Shirt",
                    prompt: "Black Nike t-shirt",
                },
                {
                    image: "image7.png",
                    category: "Tank Top",
                    prompt: "Black sleeveless shirt",
                },
                {
                    image: "image8.png",
                    category: "Dress",
                    prompt: "Elegant casual dress",
                },
                ].map((item, index) => (
                <div
                    key={index}
                    className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur transition duration-300 hover:scale-[1.02] hover:border-purple-500/40"
                >
                    <div className="relative aspect-square">
                    <Image
                        src={`/projects/fashion-text-to-image/${item.image}`}
                        alt={item.prompt}
                        fill
                        className="object-cover"
                    />
                    </div>
                    <div className="p-5">
                    <p className="text-xs uppercase tracking-[0.25em] text-purple-400">
                        {item.category}
                    </p>
                    <p className="mt-3 leading-7 text-gray-300">
                        {item.prompt}
                    </p>
                    </div>
                </div>
                ))}
            </div>
        </section>

        {/* Project Overview */}
        <section className="mx-auto max-w-7xl px-8 pb-24">
            <h2 className="mb-8 text-5xl font-bold">
                Project Overview
            </h2>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                <p className="leading-9 text-gray-300">
                This project presents an end-to-end conversational AI system for
                fashion image generation that combines <span className="font-medium text-white">Large Language Models </span>
                with a <span className="font-medium text-white">fine-tuned Stable Diffusion XL</span> model.
                Instead of requiring users to manually write detailed prompts, the
                system guides them through a natural conversation, progressively
                collecting clothing attributes and transforming them into structured
                descriptions suitable for image generation.
                </p>

                <p className="mt-6 leading-9 text-gray-300">
                The framework consists of two complementary stages. First, Stable
                Diffusion XL is adapted to the fashion domain through supervised
                fine-tuning on a custom image-caption dataset automatically
                constructed from VITON-HD using Qwen2.5-VL. Second, a conversational
                multi-agent system bridges the gap between natural user language and
                the structured prompts expected by the diffusion model, enabling
                intuitive and accurate fashion image generation.
                </p>

                <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
                    <h3 className="text-lg font-semibold">Problem</h3>
                    <p className="mt-3 leading-7 text-gray-400">
                    General-purpose diffusion models struggle to understand
                    fine-grained fashion attributes and rely on carefully
                    engineered prompts.
                    </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
                    <h3 className="text-lg font-semibold">Dataset Preparation</h3>
                    <p className="mt-3 leading-7 text-gray-400">
                    Built an automated caption generation and preprocessing
                    pipeline to create a high-quality fashion image-caption
                    dataset for supervised training.
                    </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
                    <h3 className="text-lg font-semibold">Fashion SDXL</h3>
                    <p className="mt-3 leading-7 text-gray-400">
                    Fine-tuned Stable Diffusion XL to improve its understanding
                    of detailed clothing attributes and generate more accurate
                    fashion images.
                    </p>
                </div>

                <div className="rounded-2xl border border-purple-500/20 bg-purple-500/10 p-6">
                    <h3 className="text-lg font-semibold">Conversational AI</h3>
                    <p className="mt-3 leading-7 text-gray-300">
                    Developed a multi-agent framework that interacts naturally
                    with users, extracts clothing attributes, maintains
                    conversational context, and automatically prepares prompts
                    for image generation.
                    </p>
                </div>
                </div>
            </div>
        </section>

        {/* End-to-End Framework */}
        <section className="mx-auto max-w-7xl px-8 pb-24">
            <h2 className="mb-8 text-5xl font-bold">
                End-to-End Framework
            </h2>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                <p className="leading-9 text-gray-300">
                The proposed framework combines a fashion-specialized diffusion model
                with a conversational multi-agent system to transform natural user
                requests into high-quality fashion images. Instead of relying on
                manually engineered prompts, the system progressively gathers clothing
                attributes through dialogue, constructs a structured garment
                representation, and automatically generates the prompt required by the
                fine-tuned Stable Diffusion XL model.
                </p>

                {/* Architecture Diagram */}
                <div className="mt-10 overflow-hidden rounded-3xl border border-white/10">
                <Image
                    src="/projects/fashion-text-to-image/agentic.png"
                    alt="End-to-End Framework"
                    width={1800}
                    height={1000}
                    className="w-full"
                />
                </div>
                <p className="mt-5 text-center text-sm italic text-gray-400">
                Figure 1. End-to-end conversational fashion image generation framework.
                </p>
            </div>
        </section>

        {/* Stage 1 — Fashion Dataset Preparation */}
        <section className="mx-auto max-w-7xl px-8 pb-24">
            <div className="mb-4">
                <p className="text-sm font-medium uppercase tracking-[0.3em] text-purple-400">
                Stage 1
                </p>
                <h2 className="mt-3 text-5xl font-bold">
                Fashion Dataset Preparation
                </h2>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                <p className="leading-9 text-gray-300">
                The first stage focuses on constructing a high-quality
                <span className="font-medium text-white"> fashion image-caption dataset </span>
                for supervised fine-tuning. Since the VITON-HD dataset does not
                provide textual descriptions, an automated preprocessing pipeline
                was developed to transform the original image-only dataset into
                structured image-caption pairs suitable for text-to-image training.
                </p>

                <p className="mt-6 leading-9 text-gray-300">
                Each garment image is first captioned using
                <span className="font-medium text-white"> Qwen2.5-VL</span>,
                followed by a preprocessing pipeline that removes noisy information,
                standardizes fashion terminology, and converts the generated captions
                into a unified prompt format describing key garment attributes such
                as category, color, material, fit, neckline, sleeve length, and
                pattern. The resulting image-caption pairs form the training dataset
                used to adapt Stable Diffusion XL to the fashion domain.
                </p>

                {/* Dataset Preparation Pipeline */}
                <div className="mt-10 overflow-hidden rounded-3xl border border-white/10">
                <Image
                    src="/projects/fashion-text-to-image/dataset-preparation.png"
                    alt="Dataset Preparation Pipeline"
                    width={1800}
                    height={900}
                    className="w-full h-auto"
                />
                </div>
                <p className="mt-5 text-center text-sm italic text-gray-400">
                Figure 2. Automated pipeline for constructing the fashion
                image-caption dataset used to fine-tune Stable Diffusion XL.
                </p>

                {/* Dataset Statistics */}
                <div className="mt-12 grid gap-6 md:grid-cols-4">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-6 text-center">
                    <h3 className="text-4xl font-bold text-purple-400">13,679</h3>
                    <p className="mt-3 text-gray-300">Original Images</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-6 text-center">
                    <h3 className="text-4xl font-bold text-purple-400">10,482</h3>
                    <p className="mt-3 text-gray-300">Training Samples</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-6 text-center">
                    <h3 className="text-4xl font-bold text-purple-400">1,165</h3>
                    <p className="mt-3 text-gray-300">Validation Samples</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-6 text-center">
                    <h3 className="text-4xl font-bold text-purple-400">2,032</h3>
                    <p className="mt-3 text-gray-300">Test Samples</p>
                </div>
                </div>
            </div>
        </section>

        {/* Stage 2 — Fashion Text-to-Image Model */}
        <section className="mx-auto max-w-7xl px-8 pb-24">
            <div className="mb-4">
                <p className="text-sm font-medium uppercase tracking-[0.3em] text-purple-400">
                Stage 2
                </p>
                <h2 className="mt-3 text-5xl font-bold">
                Fashion Text-to-Image Model
                </h2>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                <p className="leading-9 text-gray-300">
                After constructing the fashion image-caption dataset, the second
                stage focuses on adapting <span className="font-medium text-white">
                Stable Diffusion XL (SDXL)</span> to the fashion domain. Rather
                than training a diffusion model from scratch, the pretrained SDXL
                model is fine-tuned using the prepared dataset, enabling it to
                learn the relationship between detailed fashion descriptions and
                their corresponding garment images while preserving the strong
                visual knowledge acquired during large-scale pretraining.
                </p>

                <p className="mt-6 leading-9 text-gray-300">
                To efficiently specialize the model, only the denoising
                <span className="font-medium text-white"> UNet</span> is
                fine-tuned, while the <span className="font-medium text-white">
                Variational Autoencoder (VAE)</span> and the dual
                <span className="font-medium text-white"> text encoders</span>
                remain frozen. This significantly reduces the number of trainable
                parameters while allowing the model to learn fashion-specific
                semantic relationships without sacrificing image quality.
                </p>

                {/* Architecture Diagram */}
                <div className="mt-10 overflow-hidden rounded-3xl border border-white/10">
                <Image
                    src="/projects/fashion-text-to-image/architecture.png"
                    alt="Fashion SDXL Fine-Tuning Architecture"
                    width={1800}
                    height={950}
                    className="w-full"
                />
                </div>
                <p className="mt-5 text-center text-sm italic text-gray-400">
                Figure 3. Fine-tuning pipeline for adapting Stable Diffusion XL to
                the fashion domain.
                </p>
            </div>
        </section>

        {/* Stage 3 — Conversational Multi-Agent Framework */}
        <section className="mx-auto max-w-7xl px-8 pb-24">
            <div className="mb-4">
                <p className="text-sm font-medium uppercase tracking-[0.3em] text-purple-400">
                Stage 3
                </p>
                <h2 className="mt-3 text-5xl font-bold">
                Conversational Multi-Agent Framework
                </h2>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                <p className="leading-9 text-gray-300">
                While the fine-tuned Stable Diffusion XL model significantly improves
                fashion image generation, it still relies on complete and structured
                textual prompts during inference. In practice, however, users naturally
                describe clothing through conversation, often omitting important
                attributes or modifying their preferences as the discussion progresses.
                </p>

                <p className="mt-6 leading-9 text-gray-300">
                To bridge this gap, a conversational multi-agent framework was developed
                to transform natural language into structured fashion descriptions.
                Instead of manually engineering prompts, users interact with intelligent
                agents that collaboratively collect clothing attributes, maintain
                conversational context, and automatically prepare the prompt required by
                the fine-tuned Stable Diffusion XL model.
                </p>

                {/* Agents */}
                <div className="mt-10 grid gap-6 lg:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
                    <h3 className="text-xl font-semibold">Fashion Consultant Agent</h3>
                    <p className="mt-3 text-gray-400">
                    Acts as an intelligent fashion assistant responsible for interacting
                    naturally with the user throughout the clothing design process.
                    </p>
                    <ul className="mt-6 space-y-3 text-gray-300">
                    <li>• Guides the conversation naturally.</li>
                    <li>• Answers fashion-related questions.</li>
                    <li>• Provides clothing recommendations.</li>
                    <li>• Requests only the missing garment attributes.</li>
                    <li>• Maintains a smooth conversational experience.</li>
                    </ul>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
                    <h3 className="text-xl font-semibold">Attribute Extractor Agent</h3>
                    <p className="mt-3 text-gray-400">
                    Continuously analyzes every user message and converts natural
                    language into structured clothing information.
                    </p>
                    <ul className="mt-6 space-y-3 text-gray-300">
                    <li>• Extracts clothing attributes.</li>
                    <li>• Detects user modifications.</li>
                    <li>• Updates the shared clothing state.</li>
                    <li>• Preserves previously collected information.</li>
                    <li>• Supports iterative conversation refinement.</li>
                    </ul>
                </div>

                <div className="rounded-2xl border border-purple-500/20 bg-purple-500/10 p-6">
                    <h3 className="text-xl font-semibold">Structured Clothing Representation</h3>
                    <p className="mt-3 text-gray-300">
                    A shared memory that stores the confirmed garment attributes and
                    enables both agents to collaborate while maintaining the
                    conversation state.
                    </p>
                    <div className="mt-6 rounded-xl border border-white/10 bg-black/30 p-4">
                        <pre className="overflow-x-auto text-sm leading-7 text-purple-300">
                        {`{
                        category: "Jacket",
                        color: "Brown",
                        material: "Leather",
                        fit: "Oversized",
                        neckline: "Collared",
                        sleeve_length: "Long",
                        pattern: "Solid"
                        }`}
                        </pre>
                    </div>
                </div>
                </div>
            </div>
        </section>

        {/* Future Work */}
        <section className="mx-auto max-w-7xl px-8 pb-24">
            <h2 className="mb-8 text-5xl font-bold">
                Future Work
            </h2>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                <h3 className="text-xl font-semibold">Dedicated Fashion LLM</h3>
                <p className="mt-4 leading-8 text-gray-300">
                    Fine-tune a language model on fashion consultation dialogues to
                    provide more personalized recommendations and conduct more
                    natural conversations.
                </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                <h3 className="text-xl font-semibold">Image Critic Agent</h3>
                <p className="mt-4 leading-8 text-gray-300">
                    Introduce an additional agent capable of evaluating generated
                    images and iteratively refining prompts until the desired design
                    is achieved.
                </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                <h3 className="text-xl font-semibold">Expanded Clothing Representation</h3>
                <p className="mt-4 leading-8 text-gray-300">
                    Extend the current attribute set with garment length, pockets,
                    buttons, zippers, textures, logos, printed text, and other
                    fine-grained fashion characteristics.
                </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                <h3 className="text-xl font-semibold">Outfit Generation</h3>
                <p className="mt-4 leading-8 text-gray-300">
                    Expand the framework beyond single garments to support complete
                    outfit generation and intelligent fashion recommendations.
                </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                <h3 className="text-xl font-semibold">Virtual Try-On Integration</h3>
                <p className="mt-4 leading-8 text-gray-300">
                    Integrate the conversational framework with virtual try-on
                    systems, allowing users to generate garments and visualize them
                    directly on a person.
                </p>
                </div>

                <div className="rounded-3xl border border-purple-500/20 bg-purple-500/10 p-8">
                <h3 className="text-xl font-semibold">Interactive Fashion Design</h3>
                <p className="mt-4 leading-8 text-gray-300">
                    Transform the current framework into a complete AI-powered design
                    assistant capable of editing, refining, and generating garments
                    through continuous user interaction.
                </p>
                </div>
            </div>
        </section>

      </div>
    </main>
  );
}