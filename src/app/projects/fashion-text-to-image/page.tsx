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

        {/* Featured Results */}
        <section className="mx-auto max-w-7xl px-8 pb-24">

            <h2 className="mb-10 text-4xl font-bold">
                Featured Results
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

        {/* Overview */}
        <section className="mx-auto max-w-7xl px-8 py-20">

          <h2 className="mb-10 text-4xl font-bold">
            Overview
          </h2>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">

            <p className="text-lg leading-9 text-gray-300">

              This project focuses on generating realistic fashion
              images from natural language prompts by fine-tuning
              Stable Diffusion XL (SDXL) on a custom fashion
              image-text dataset.

              <br /><br />

              The dataset was created using clothing images from
              VITON-HD combined with automatically generated
              captions produced by Qwen2.5-VL, followed by a
              caption cleaning and preprocessing pipeline.

            </p>

          </div>

        </section>

        {/* Why I Built It */}
        <section className="mx-auto max-w-7xl px-8 py-20">

            <h2 className="mb-10 text-4xl font-bold">
                Why I Built It
            </h2>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">

                <p className="text-lg leading-9 text-gray-300">

                General-purpose text-to-image models often struggle
                with fashion-specific attributes such as garment type,
                fit, material, sleeve length, and style.

                <br /><br />

                This project explores whether domain-specific
                fine-tuning on fashion data can improve image quality
                and generate more realistic apparel images from
                natural language descriptions.

                </p>

            </div>

        </section>

        {/* Pipeline */}
        <section className="mx-auto max-w-7xl px-8 py-20">

            <h2 className="mb-10 text-4xl font-bold">
                End-to-End Pipeline
            </h2>

            <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-6">

                {[
                "VITON-HD Images",
                "Qwen2.5-VL Captions",
                "Caption Cleaning",
                "Dataset Creation",
                "SDXL Fine-Tuning",
                "Image Generation",
                ].map((step, index) => (

                <div
                    key={index}
                    className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur"
                >

                    <div className="mb-4 text-3xl font-bold text-purple-400">
                    {index + 1}
                    </div>

                    <p className="text-gray-300">
                    {step}
                    </p>

                </div>

                ))}

            </div>

        </section>

        {/* Dataset */}
        <section className="mx-auto max-w-7xl px-8 py-20">

            <h2 className="mb-10 text-4xl font-bold">
                Dataset
            </h2>

            <div className="grid gap-6 md:grid-cols-4">

                <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
                <h3 className="text-4xl font-bold text-purple-400">
                    10,482
                </h3>
                <p className="mt-3 text-gray-300">
                    Training Samples
                </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
                <h3 className="text-4xl font-bold text-purple-400">
                    1,165
                </h3>
                <p className="mt-3 text-gray-300">
                    Validation Samples
                </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
                <h3 className="text-4xl font-bold text-purple-400">
                    2,032
                </h3>
                <p className="mt-3 text-gray-300">
                    Test Samples
                </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
                <h3 className="text-4xl font-bold text-purple-400">
                    VITON-HD
                </h3>
                <p className="mt-3 text-gray-300">
                    Source Dataset
                </p>
                </div>

            </div>

        </section>

        {/* Tech Stack */}
        <section className="mx-auto max-w-7xl px-8 py-20">

            <h2 className="mb-10 text-4xl font-bold">
                Technologies Used
            </h2>

            <div className="flex flex-wrap gap-4">

                {[
                "Python",
                "PyTorch",
                "Transformers",
                "Diffusers",
                "Qwen2.5-VL",
                "Stable Diffusion XL",
                "Streamlit",
                "Hugging Face",
                ].map((tech) => (

                <span
                    key={tech}
                    className="rounded-full border border-purple-500/30 bg-purple-500/10 px-5 py-3 text-purple-300"
                >
                    {tech}
                </span>

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