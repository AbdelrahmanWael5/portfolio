import Image from "next/image";
import Link from "next/link";

import {
  FaGithub,
  FaArrowLeft,
} from "react-icons/fa";

import {
  HiOutlineExternalLink,
} from "react-icons/hi";
import { HiArrowLeft } from "react-icons/hi";


export default function SketchToShoe() {

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

            <h1 className="mb-6 text-6xl font-extrabold leading-tight">
                Sketch-to-Shoe
            </h1>

            <h2 className="mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-3xl font-bold text-transparent">
                Investigating Conditioning Strategies for Diffusion Transformers
            </h2>

            <p className="max-w-4xl text-lg leading-9 text-gray-300">
                A research-oriented project that explores different conditioning
                mechanisms for Diffusion Transformers (DiT) to generate realistic
                shoe images from edge sketches. The project investigates how
                conditioning design influences spatial structure preservation
                and overall generation quality.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">

                <a
                href="YOUR_GITHUB_REPOSITORY"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border border-purple-500 px-6 py-3 transition hover:bg-purple-500/10"
                >
                <FaGithub size={20} />
                View Repository
                </a>

                <a
                href="https://www.kaggle.com/datasets/balraj98/edges2shoes-dataset"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3 transition hover:bg-white/5"
                >
                <HiOutlineExternalLink size={20} />
                Dataset
                </a>

            </div>

            {/* Tech Stack */}
            <div className="mt-10 flex flex-wrap gap-3">

                <span className="rounded-full bg-white/10 px-4 py-2">
                PyTorch
                </span>

                <span className="rounded-full bg-white/10 px-4 py-2">
                Diffusion Transformers (DiT)
                </span>

                <span className="rounded-full bg-white/10 px-4 py-2">
                VAE
                </span>

                <span className="rounded-full bg-white/10 px-4 py-2">
                Diffusers
                </span>

                <span className="rounded-full bg-white/10 px-4 py-2">
                Computer Vision
                </span>

                <span className="rounded-full bg-white/10 px-4 py-2">
                Generative AI
                </span>

            </div>

        </section>

        {/* Project Overview */}
        <section className="mx-auto max-w-7xl px-8 pb-20">

            <h2 className="mb-8 text-5xl font-bold">
                Project Overview
            </h2>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">

                <p className="leading-9 text-gray-300">
                    The original Diffusion Transformer (DiT) is designed for class-conditional
                    image generation, where class labels are used to guide the denoising process.
                    While effective for image classification datasets, this conditioning mechanism
                    is not suitable for sketch-guided image generation, where preserving the
                    spatial structure of the input sketch is far more important than its semantic
                    class.
                </p>

                <p className="mt-6 leading-9 text-gray-300">
                    This project redesigns the original DiT conditioning mechanism by replacing
                    class-label conditioning with alternative guidance strategies and
                    experimentally evaluates which approach provides stronger spatial guidance
                    while generating realistic shoe images from edge sketches.
                </p>

                {/* Overview Cards */}
                <div className="mt-12 grid gap-6 md:grid-cols-2">

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                        <h3 className="text-lg font-semibold text-white">
                            Research Goal
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-gray-300">
                            Investigate whether modifying the original DiT conditioning
                            mechanism can improve sketch-guided image generation while
                            preserving the structural geometry of the input sketch.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                        <h3 className="text-lg font-semibold text-white">
                            Research Focus
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-gray-300">
                            This study focuses on redesigning the conditioning mechanism of the original
                            Diffusion Transformer and evaluating how different conditioning representations
                            influence structural preservation during sketch-guided image generation.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                        <h3 className="text-lg font-semibold text-white">
                            Compared Strategies
                        </h3>

                        <div className="mt-4 flex items-center justify-center gap-4">

                            <div className="rounded-xl bg-white/5 px-4 py-3 text-center">
                                CLIP Image
                                <br />
                                Conditioning
                            </div>

                            <span className="text-purple-400 font-semibold">
                                VS
                            </span>

                            <div className="rounded-xl bg-white/5 px-4 py-3 text-center">
                                Sketch Latent
                                <br />
                                Conditioning
                            </div>

                        </div>

                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                        <h3 className="text-lg font-semibold text-white">
                            Research Question
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-gray-300">
                            Which conditioning strategy enables Diffusion Transformers
                            to better preserve the spatial structure of an input sketch
                            while generating photorealistic shoe images?
                        </p>
                    </div>

                </div>

            </div>

        </section>

        {/* Dataset */}
        <section className="mx-auto max-w-7xl px-8 pb-20">

            <h2 className="mb-8 text-5xl font-bold">
                Dataset
            </h2>

            <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">

                {/* Left Card */}
                <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">

                <h3 className="mb-6 text-2xl font-semibold">
                    Edges2Shoes Dataset
                </h3>

                <p className="leading-9 text-gray-300">
                    The project is based on the Edges2Shoes dataset, which contains over 50,000 paired edge sketches and
                    corresponding shoe images for sketch-guided image generation. To enable efficient experimentation,
                    a subset of 10,000 training pairs and 1,000 testing pairs was selected for all experiments.
                </p>

                <p className="mt-6 leading-9 text-gray-300">
                    During training, the sketch image serves as the conditioning input, while the paired shoe image acts
                    as the reconstruction target that the Diffusion Transformer learns to generate through iterative denoising.
                </p>

                <a
                    href="https://www.kaggle.com/datasets/balraj98/edges2shoes-dataset"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-2 text-purple-400 transition hover:text-purple-300"
                >
                    <HiOutlineExternalLink size={18} />
                    View Dataset
                </a>

                </div>

                {/* Right Card */}
                <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">

                <h3 className="mb-6 text-2xl font-semibold">
                    Dataset Statistics
                </h3>

                <div className="space-y-5">

                    <div className="flex justify-between">
                    <span className="text-gray-400">
                        Original Dataset
                    </span>

                    <span className="font-semibold">
                        50,025
                    </span>
                    </div>
                    
                    <div className="flex justify-between">
                    <span className="text-gray-400">
                        Training Subset
                    </span>

                    <span className="font-semibold">
                        10,000
                    </span>
                    </div>

                    <div className="flex justify-between">
                    <span className="text-gray-400">
                        Testing Subset
                    </span>

                    <span className="font-semibold">
                        1,000
                    </span>
                    </div>

                    <div className="flex justify-between">
                    <span className="text-gray-400">
                        Resolution
                    </span>

                    <span className="font-semibold">
                        256 × 256
                    </span>
                    </div>

                </div>

                </div>

            </div>

        </section>

        {/* Proposed Architecture */}
        <section className="mx-auto max-w-7xl px-8 pb-24">

            <h2 className="mb-8 text-5xl font-bold">
                Proposed Architecture
            </h2>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">

                <p className="max-w-5xl leading-9 text-gray-300">
                    The proposed architecture extends the original Diffusion Transformer (DiT) by replacing
                    the default class-label conditioning with a sketch-guided conditioning module.
                    Rather than relying on a fixed conditioning representation, the architecture is designed
                    to support multiple conditioning mechanisms while preserving the original diffusion framework.
                    During training, the paired shoe image is encoded into the Stable Diffusion latent space,
                    whereas the sketch provides the conditioning signal that guides the denoising process.
                    Different conditioning representations are investigated within this unified architecture and
                    are compared in the following section.
                </p>

                {/* Architecture Diagram */}
                <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-[#111827]">

                    <Image
                        src="/projects/sketch-to-shoe/architecture.png"
                        alt="Proposed Diffusion Transformer Architecture"
                        width={1600}
                        height={900}
                        priority
                        className="h-auto w-full"
                    />

                </div>

                {/* Figure Caption */}
                <p className="mt-5 text-center text-sm italic text-gray-400">
                    Figure 1. Overview of the proposed Diffusion Transformer architecture
                    for sketch-to-shoe image generation. The primary contribution of
                    this work lies in replacing the original DiT class-label
                    conditioning with alternative conditioning mechanisms specifically
                    designed for sketch-guided generation.
                </p>

            </div>

        </section>

        {/* Conditioning Strategies */}
        <section className="mx-auto max-w-7xl px-8 pb-24">

            <h2 className="mb-4 text-5xl font-bold">
                Conditioning Strategies
            </h2>

            <p className="mb-12 max-w-5xl text-lg leading-8 text-gray-400">
                Two different conditioning mechanisms were implemented on top of the
                original Diffusion Transformer architecture. The only modified component
                is how the sketch information is represented and injected into the model,
                enabling a fair comparison under identical training settings.
            </p>

            <div className="grid gap-8 xl:grid-cols-2">

                {/* ================= Strategy 1 ================= */}

                <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">

                    <div className="mb-5 inline-flex rounded-full bg-blue-500/20 px-4 py-2 text-sm font-medium text-blue-400">
                        Strategy 1
                    </div>

                    <h3 className="text-3xl font-bold">
                        CLIP Image Conditioning
                    </h3>

                    <p className="mt-5 leading-8 text-gray-300">
                        The input sketch is represented using semantic image embeddings
                        extracted from a pretrained CLIP image encoder. The projected
                        embedding is injected into every Diffusion Transformer block
                        through Adaptive Layer Normalization (AdaLN), providing semantic
                        guidance during the denoising process.
                    </p>

                    {/* Diagram */}

                    <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">

                        <img
                            src="/projects/sketch-to-shoe/clip-conditioning.png"
                            alt="CLIP Conditioning"
                            className="w-full"
                        />

                    </div>

                </div>

                {/* ================= Strategy 2 ================= */}

                <div className="rounded-3xl border border-green-500/20 bg-green-500/5 p-8 backdrop-blur">

                    <div className="mb-5 inline-flex rounded-full bg-green-500/20 px-4 py-2 text-sm font-medium text-green-400">
                        Strategy 2
                    </div>

                    <h3 className="text-3xl font-bold">
                        Sketch Latent Conditioning
                    </h3>

                    <p className="mt-5 leading-8 text-gray-300">
                        The input sketch is encoded into the latent
                        space using the pretrained VAE encoder. The resulting sketch
                        latent is concatenated with the noisy image latent before
                        entering the Diffusion Transformer, providing spatial
                        conditioning directly through the model input.
                    </p>

                    {/* Diagram */}

                    <div className="mt-8 overflow-hidden rounded-2xl border border-green-500/20">

                        <img
                            src="/projects/sketch-to-shoe/latent-conditioning.png"
                            alt="Sketch Latent Conditioning"
                            className="w-full"
                        />

                    </div>

                </div>

            </div>

        </section>

        {/* Experimental Analysis */}
        <section className="mx-auto max-w-7xl px-8 pb-24">

            <h2 className="mb-10 text-5xl font-bold">
                Experimental Analysis
            </h2>

            {/* Experimental Setup */}
            <div className="mb-12 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">

                <h3 className="mb-6 text-3xl font-bold">
                Experimental Setup
                </h3>

                <p className="leading-8 text-gray-300">
                To objectively compare the proposed conditioning strategies,
                both models were trained under identical experimental settings.
                The dataset, optimizer, learning rate, diffusion backbone,
                training duration, and all hyperparameters remained unchanged.
                The only modified component was the conditioning mechanism,
                allowing the observed differences to be attributed solely to
                the proposed conditioning strategy.
                </p>

                <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

                <div className="rounded-2xl bg-white/5 p-5">
                    <p className="text-sm text-gray-400">
                    Dataset
                    </p>

                    <p className="mt-2 font-semibold">
                    Edges2Shoes
                    </p>
                </div>

                <div className="rounded-2xl bg-white/5 p-5">
                    <p className="text-sm text-gray-400">
                    Training Steps
                    </p>

                    <p className="mt-2 font-semibold">
                    25,000
                    </p>
                </div>

                <div className="rounded-2xl bg-white/5 p-5">
                    <p className="text-sm text-gray-400">
                    Optimizer
                    </p>

                    <p className="mt-2 font-semibold">
                    AdamW
                    </p>
                </div>

                <div className="rounded-2xl bg-white/5 p-5">
                    <p className="text-sm text-gray-400">
                    Backbone
                    </p>

                    <p className="mt-2 font-semibold">
                    Diffusion Transformer
                    </p>
                </div>

                </div>

            </div>

            {/* Models Comparison */}

            <div className="mt-12 grid gap-8 xl:grid-cols-2">

                {/* ================= [First Strategy] ================= */}

                <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">

                    <h3 className="text-3xl font-bold">
                        CLIP Image Conditioning
                    </h3>

                    {/* Monitoring Image */}

                    <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">

                        <Image
                            src="/projects/sketch-to-shoe/variation1.png"
                            alt="CLIP Conditioning Results"
                            width={1400}
                            height={900}
                            className="w-full"
                        />

                    </div>

                    <p className="mt-3 text-center text-sm text-gray-400">
                        Qualitative results after 25K training steps.
                        Left: Sketch • Middle: Generated • Right: Ground Truth
                    </p>

                    {/* Analysis */}

                    <div className="mt-8">

                        <h4 className="mb-4 text-xl font-semibold">
                            Analysis
                        </h4>

                        <p className="leading-8 text-gray-300">
                            The CLIP-based conditioning successfully learns the semantic
                            concept of footwear and generates recognizable shoes.
                            However, because CLIP provides high-level semantic guidance
                            rather than spatial information, the generated images show
                            limited structural alignment with the input sketches.
                        </p>

                    </div>

                    {/* Strengths & Limitations */}

                    <div className="mt-8 grid gap-5 md:grid-cols-2">

                        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

                            <h5 className="mb-4 font-semibold text-green-400">
                                Strengths
                            </h5>

                            <ul className="space-y-2 text-gray-300">

                                <li>• Learns semantic concepts.</li>

                                <li>• Recognizable shoe generation.</li>

                            </ul>

                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

                            <h5 className="mb-4 font-semibold text-red-400">
                                Limitations
                            </h5>

                            <ul className="space-y-2 text-gray-300">

                                <li>• Weak structure preservation.</li>

                                <li>• Poor sketch alignment.</li>

                            </ul>

                        </div>

                    </div>

                </div>

                {/* ================= Second Strategy ================= */}

                <div className="rounded-3xl border border-green-500/20 bg-green-500/5 p-8 backdrop-blur">

                    <h3 className="text-3xl font-bold">
                        Sketch Latent Conditioning
                    </h3>

                    {/* Monitoring Image */}

                    <div className="mt-8 overflow-hidden rounded-2xl border border-green-500/20">

                        <Image
                            src="/projects/sketch-to-shoe/variation2.png"
                            alt="Sketch Latent Conditioning Results"
                            width={1400}
                            height={900}
                            className="w-full"
                        />

                    </div>

                    <p className="mt-3 text-center text-sm text-gray-400">
                        Qualitative results after 25K training steps.
                        Left: Sketch • Middle: Generated • Right: Ground Truth
                    </p>

                    {/* Analysis */}

                    <div className="mt-8">

                        <h4 className="mb-4 text-xl font-semibold">
                            Analysis
                        </h4>

                        <p className="leading-8 text-gray-300">
                            Replacing semantic conditioning with sketch latent
                            representations provides significantly stronger spatial
                            guidance. The generated shoes preserve the overall geometry
                            of the input sketches more accurately while maintaining
                            realistic visual appearance.
                        </p>

                    </div>

                    {/* Improvements & Limitations */}

                    <div className="mt-8 grid gap-5 md:grid-cols-2">

                        <div className="rounded-2xl border border-green-500/20 bg-green-500/10 p-5">

                            <h5 className="mb-4 font-semibold text-green-400">
                                Improvements
                            </h5>

                            <ul className="space-y-2 text-gray-300">

                                <li>• Better structure preservation.</li>

                                <li>• Improved sketch alignment.</li>

                            </ul>

                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

                            <h5 className="mb-4 font-semibold text-yellow-400">
                                Current Limitations
                            </h5>

                            <ul className="space-y-2 text-gray-300">

                                <li>• Fine textures still developing.</li>

                                <li>• Longer training is beneficial.</li>

                            </ul>

                        </div>

                    </div>

                </div>

            </div>


            {/* Key Findings */}

            <div className="mt-12 rounded-3xl border border-purple-500/20 bg-purple-500/10 p-8">

                <h3 className="mb-8 text-3xl font-bold">
                Key Findings
                </h3>

                <div className="space-y-5 text-gray-300">

                    <p>
                        ✓ Replacing semantic CLIP conditioning with edge latent
                        conditioning significantly improves structural preservation.
                    </p>

                    <p>
                        ✓ The sketch lataent conditioning strategy provides stronger spatial
                        guidance throughout the denoising process.
                    </p>

                    <p>
                        ✓ Both models successfully learn the semantic concept of
                        footwear, while the second model produces noticeably better
                        alignment with the input sketches.
                    </p>

                    <p>
                        ✓ Additional training is expected to further improve texture
                        quality and fine-grained visual details.
                    </p>

                </div>

            </div>

        </section>

        {/* Challenges */}
        <section className="mx-auto max-w-7xl px-8 pb-24">

            <h2 className="mb-10 text-5xl font-bold">
                Challenges
            </h2>

            <div className="grid gap-6 md:grid-cols-2">

                {/* Challenge 1 */}

                <div className="rounded-3xl border border-white/10 bg-white/5 p-6">

                    <h3 className="mb-4 text-xl font-semibold">
                        Adapting DiT for Sketch Conditioning
                    </h3>

                    <p className="leading-8 text-gray-300">
                        The original Diffusion Transformer is designed for class-label
                        conditioning rather than sketch-guided generation. Supporting
                        sketch inputs required redesigning the conditioning mechanism
                        while preserving the original denoising architecture.
                    </p>

                </div>

                {/* Challenge 2 */}

                <div className="rounded-3xl border border-white/10 bg-white/5 p-6">

                    <h3 className="mb-4 text-xl font-semibold">
                        Designing Effective Conditioning
                    </h3>

                    <p className="leading-8 text-gray-300">
                        A key challenge was determining how sketch information should be
                        represented before being injected into the Diffusion Transformer.
                        This led to investigating both semantic conditioning through CLIP
                        embeddings and spatial conditioning through sketch latent
                        representations.
                    </p>

                </div>

                {/* Challenge 3 */}

                <div className="rounded-3xl border border-white/10 bg-white/5 p-6">

                    <h3 className="mb-4 text-xl font-semibold">
                        Preserving Sketch Geometry
                    </h3>

                    <p className="leading-8 text-gray-300">
                        Maintaining the spatial structure of the input sketch throughout
                        the iterative denoising process proved significantly more
                        difficult than generating semantically correct shoe images,
                        making structural preservation the primary evaluation criterion.
                    </p>

                </div>

                {/* Challenge 4 */}

                <div className="rounded-3xl border border-white/10 bg-white/5 p-6">

                    <h3 className="mb-4 text-xl font-semibold">
                        Fair Experimental Evaluation
                    </h3>

                    <p className="leading-8 text-gray-300">
                        To ensure a reliable comparison, both conditioning strategies
                        were trained using identical datasets, hyperparameters, optimizer
                        settings, and training schedules, allowing the conditioning
                        mechanism to be the only experimental variable.
                    </p>

                </div>

            </div>

        </section>

        {/* Future Improvements */}
        <section className="mx-auto max-w-7xl px-8 pb-24">

            <h2 className="mb-10 text-5xl font-bold">
                Future Improvements
            </h2>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">

                <ul className="space-y-5 leading-8 text-gray-300">

                    <li>
                        • Extend training beyond <span className="font-medium text-white">25K steps</span> to improve fine-grained textures, material appearance, and overall image realism.
                    </li>

                    <li>
                        • Investigate additional conditioning mechanisms, such as <span className="font-medium text-white">cross-attention</span> and <span className="font-medium text-white">ControlNet-inspired spatial guidance</span>, to further enhance sketch preservation.
                    </li>

                    <li>
                        • Extend the framework beyond footwear to support additional object categories and more complex sketch-to-image generation tasks.
                    </li>

                    <li>
                        • Deploy the final model as an interactive web application for real-time sketch-to-image generation and user evaluation.
                    </li>

                </ul>

            </div>

        </section>

        </div>

    </main>

  );

}