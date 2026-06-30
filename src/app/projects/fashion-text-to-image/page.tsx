import Image from "next/image";
import Link from "next/link";

import { FaGithub, FaLinkedin } from "react-icons/fa";
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
        <section className="mx-auto max-w-7xl px-8 pt-12 pb-20">

          <div className="mb-5 inline-block rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
            Generative AI Project
          </div>

          <h1 className="mb-6 text-6xl font-extrabold md:text-7xl">
            Fashion Text-to-Image
          </h1>

          <p className="max-w-3xl text-xl leading-9 text-gray-300">
            Generate realistic fashion images from natural language
            descriptions using a fine-tuned Stable Diffusion XL model
            trained on a custom fashion dataset.
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
              href="https://www.linkedin.com/posts/abdelrahman-wael-ai_ai-generativeai-computervision-activity-7472330762009231362-vJJp"
              target="_blank"
              className="flex items-center gap-2 rounded-xl border border-purple-500 px-6 py-3 transition hover:bg-purple-500/10"
            >
              <FaLinkedin />
              Demo Post
            </a>

          </div>

        </section>

        {/* Project Overview */}
        <section className="mx-auto max-w-7xl px-8 pb-20">

            <h2 className="mb-8 text-5xl font-bold">
                Project Overview
            </h2>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">

                <p className="leading-9 text-gray-300">
                    This project investigates domain-specific text-to-image generation by
                    fine-tuning <span className="font-medium text-white">Stable Diffusion XL (SDXL) </span> 
                    on a custom fashion dataset. Rather than relying on generic image-caption
                    pairs, a dedicated dataset was constructed from the VITON-HD clothing
                    collection using automatically generated captions produced by
                    <span className="font-medium text-white"> Qwen2.5-VL</span>.
                </p>

                <p className="mt-6 leading-9 text-gray-300">
                    To improve caption consistency and training quality, a preprocessing
                    pipeline was developed to clean, normalize, and standardize the generated
                    descriptions before fine-tuning SDXL. This enables the model to better
                    understand fashion-specific attributes such as garment category, color,
                    material, sleeve length, fit, and patterns.
                </p>

                <div className="mt-10 grid gap-6 md:grid-cols-3">

                    <div className="rounded-2xl border border-white/10 bg-black/20 p-6">

                        <h3 className="text-lg font-semibold">
                            Objective
                        </h3>

                        <p className="mt-3 leading-7 text-gray-400">
                            Fine-tune Stable Diffusion XL for fashion-specific
                            text-to-image generation.
                        </p>

                    </div>

                    <div className="rounded-2xl border border-white/10 bg-black/20 p-6">

                        <h3 className="text-lg font-semibold">
                            Contribution
                        </h3>

                        <p className="mt-3 leading-7 text-gray-400">
                            Built an automated caption generation and preprocessing
                            pipeline tailored for fashion data.
                        </p>

                    </div>

                    <div className="rounded-2xl border border-white/10 bg-black/20 p-6">

                        <h3 className="text-lg font-semibold">
                            Outcome
                        </h3>

                        <p className="mt-3 leading-7 text-gray-400">
                            Improved generation of detailed apparel images from
                            natural language descriptions.
                        </p>

                    </div>

                </div>

            </div>

        </section>

        {/* Motivation */}
        <section className="mx-auto max-w-7xl px-8 pb-24">

            <h2 className="mb-8 text-5xl font-bold">
                Motivation
            </h2>

            <div className="grid gap-6 md:grid-cols-2">

                <div className="rounded-3xl border border-white/10 bg-white/5 p-7">

                    <h3 className="text-xl font-semibold">
                        Domain Gap
                    </h3>

                    <p className="mt-4 leading-8 text-gray-300">
                        General-purpose text-to-image models often struggle to accurately
                        capture fine-grained fashion attributes such as garment type,
                        sleeve length, materials, patterns, and fit.
                    </p>

                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-7">

                    <h3 className="text-xl font-semibold">
                        Dataset Quality
                    </h3>

                    <p className="mt-4 leading-8 text-gray-300">
                        Existing fashion datasets typically lack high-quality,
                        standardized captions suitable for training modern
                        diffusion models.
                    </p>

                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-7">

                    <h3 className="text-xl font-semibold">
                        Research Question
                    </h3>

                    <p className="mt-4 leading-8 text-gray-300">
                        Can domain-specific caption generation and dataset refinement
                        improve the ability of Stable Diffusion XL to generate more
                        realistic and controllable fashion images?
                    </p>

                </div>

                <div className="rounded-3xl border border-purple-500/20 bg-purple-500/10 p-7">

                    <h3 className="text-xl font-semibold">
                        Proposed Solution
                    </h3>

                    <p className="mt-4 leading-8 text-gray-300">
                        Generate high-quality fashion captions using Qwen2.5-VL,
                        preprocess them into a unified training format, and fine-tune
                        Stable Diffusion XL on the resulting dataset.
                    </p>

                </div>

            </div>

        </section>

        {/* Dataset Preparation */}
        <section className="mx-auto max-w-7xl px-8 pb-24">

            <h2 className="mb-8 text-5xl font-bold">
                Dataset Preparation
            </h2>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">

                <p className="leading-9 text-gray-300">
                    Rather than directly fine-tuning Stable Diffusion XL on an existing
                    fashion dataset, a dedicated training dataset was constructed from
                    the VITON-HD clothing collection. Each garment image was
                    automatically captioned using <span className="font-medium text-white">Qwen2.5-VL</span>,
                    followed by a preprocessing pipeline that cleaned, standardized,
                    and unified the generated captions into a consistent prompt format.
                    The resulting dataset was then used to fine-tune SDXL for
                    fashion-specific image generation.
                </p>

                {/* Dataset Construction Diagram */}

                <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-[#111827]">

                    <Image
                        src="/projects/fashion-text-to-image/dataset-preparation.png"
                        alt="Dataset Preparation Pipeline"
                        width={1600}
                        height={900}
                        className="w-full h-auto"
                    />

                </div>

                <p className="mt-5 text-center text-sm italic text-gray-400">
                    Figure 1. Dataset preparation pipeline used to construct the
                    fashion-specific image-text dataset for SDXL fine-tuning.
                </p>

                {/* Dataset Statistics */}

                <div className="mt-12 grid gap-6 md:grid-cols-4">

                    <div className="rounded-2xl border border-white/10 bg-black/20 p-6 text-center">

                        <h3 className="text-4xl font-bold text-purple-400">
                            13,679
                        </h3>

                        <p className="mt-3 text-gray-300">
                            Original Images
                        </p>

                    </div>

                    <div className="rounded-2xl border border-white/10 bg-black/20 p-6 text-center">

                        <h3 className="text-4xl font-bold text-purple-400">
                            10,482
                        </h3>

                        <p className="mt-3 text-gray-300">
                            Training Samples
                        </p>

                    </div>

                    <div className="rounded-2xl border border-white/10 bg-black/20 p-6 text-center">

                        <h3 className="text-4xl font-bold text-purple-400">
                            1,165
                        </h3>

                        <p className="mt-3 text-gray-300">
                            Validation Samples
                        </p>

                    </div>

                    <div className="rounded-2xl border border-white/10 bg-black/20 p-6 text-center">

                        <h3 className="text-4xl font-bold text-purple-400">
                            2,032
                        </h3>

                        <p className="mt-3 text-gray-300">
                            Test Samples
                        </p>

                    </div>

                </div>

            </div>

        </section>
        
        {/* SDXL Fine-Tuning Architecture */}
        <section className="mx-auto max-w-7xl px-8 pb-24">

            <h2 className="mb-10 text-5xl font-bold">
                SDXL Fine-Tuning Architecture
            </h2>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">

                <p className="leading-8 text-gray-300">
                    This project builds upon the original Stable Diffusion XL (SDXL)
                    architecture to generate high-quality fashion images from structured
                    textual descriptions. Rather than training a diffusion model from
                    scratch, the pretrained SDXL backbone is adapted for the fashion
                    domain through supervised fine-tuning on a custom captioned dataset.
                    The objective is to enable the model to accurately translate detailed
                    clothing descriptions into realistic garment images while preserving
                    visual fidelity and attribute consistency.
                </p>

                <p className="mt-6 leading-8 text-gray-300">
                    During training, only the denoising UNet is fine-tuned while the
                    VAE and text encoder remain frozen. This significantly reduces the
                    number of trainable parameters while leveraging the strong prior
                    knowledge learned by the pretrained SDXL model. The resulting
                    architecture provides an efficient framework for controllable
                    fashion image synthesis without requiring full model retraining.
                </p>

                {/* Architecture Diagram */}

                <div className="mt-10 overflow-hidden rounded-3xl border border-white/10">

                    <Image
                        src="/projects/fashion-text-to-image/architecture.png"
                        alt="SDXL Fine-Tuning Architecture"
                        width={1800}
                        height={950}
                        className="w-full"
                    />

                </div>

                {/* Summary Cards */}

                <div className="mt-10 grid gap-6 md:grid-cols-2">

                    <div className="rounded-2xl bg-white/5 p-6">

                        <h3 className="mb-4 text-xl font-semibold">
                            Base SDXL Components
                        </h3>

                        <ul className="space-y-3 text-gray-300">

                            <li>• Pretrained Stable Diffusion XL</li>

                            <li>• Frozen Variational Autoencoder (VAE)</li>

                            <li>• Frozen Dual Text Encoders</li>

                            <li>• DDPM Noise Scheduler</li>

                        </ul>

                    </div>

                    <div className="rounded-2xl border border-purple-500/20 bg-purple-500/10 p-6">

                        <h3 className="mb-4 text-xl font-semibold">
                            Project Contributions
                        </h3>

                        <ul className="space-y-3 text-gray-300">

                            <li>• Fine-tuned the SDXL UNet for fashion generation.</li>

                            <li>• Built a custom caption preparation pipeline.</li>

                            <li>• Trained using structured fashion descriptions.</li>

                            <li>• Generated controllable clothing images from text.</li>

                        </ul>

                    </div>

                </div>

            </div>

        </section>


        {/* Results */}
        <section className="mx-auto max-w-7xl px-8 pb-24">

            <h2 className="mb-10 text-4xl font-bold">
                Results
            </h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

                {[
                {
                    image: "image1.png",
                    prompt: "hoodie",
                },
                {
                    image: "image2.png",
                    prompt: "shirt, green, denim",
                },
                {
                    image: "image3.png",
                    prompt: "t-shirt, black, leather",
                },
                {
                    image: "image4.png",
                    prompt: "t-shirt, plaid",
                },
                {
                    image: "image5.png",
                    prompt: "t-shirt, floral",
                },
                {
                    image: "image6.png",
                    prompt: "black t-shirt, Nike logo",
                },
                {
                    image: "image7.png",
                    prompt: "t-shirt, sleeveless",
                },
                {
                    image: "image8.png",
                    prompt: "dress",
                },
                ].map((result, index) => (

                <div
                    key={index}
                    className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur transition hover:scale-[1.02]"
                >

                    <div className="relative aspect-square">

                    <Image
                        src={`/projects/fashion-text-to-image/${result.image}`}
                        alt={`Generated Result ${index + 1}`}
                        fill
                        className="object-cover"
                    />

                    </div>

                    <div className="p-4">

                    <p className="text-xs uppercase tracking-widest text-purple-400">
                        Prompt
                    </p>

                    <p className="mt-2 text-gray-300">
                        {result.prompt}
                    </p>

                    </div>

                </div>

                ))}

            </div>

        </section>

        {/* Future Improvements */}
        <section className="mx-auto max-w-7xl px-8 py-20">

            <h2 className="mb-10 text-4xl font-bold">
                Future Improvements
            </h2>

            <div className="grid gap-6 md:grid-cols-2">

                {[
                "Training on larger fashion datasets",
                "Advanced prompt engineering",
                "Cloud deployment",
                "Improved garment detail generation",
                ].map((item) => (

                <div
                    key={item}
                    className="rounded-3xl border border-white/10 bg-white/5 p-6"
                >
                    {item}
                </div>

                ))}

            </div>

        </section>

        {/* Links */}
        <section className="mx-auto max-w-7xl px-8 pt-20 pb-32">

            <h2 className="mb-10 text-4xl font-bold">
                Resources
            </h2>

            <div className="grid gap-6 md:grid-cols-3">

                <a
                href="https://github.com/AbdelrahmanWael5/fashion-text-to-image-sdxl"
                target="_blank"
                className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-purple-500"
                >
                GitHub Repository
                </a>

                <a
                href="https://github.com/shadow2496/VITON-HD"
                target="_blank"
                className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-purple-500"
                >
                VITON-HD Dataset
                </a>

                <a
                href="https://www.linkedin.com/posts/abdelrahman-wael-ai_ai-generativeai-computervision-activity-7472330762009231362-vJJp"
                target="_blank"
                className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-purple-500"
                >
                LinkedIn Demonstration
                </a>

            </div>

        </section>

      </div>

    </main>
  );
}