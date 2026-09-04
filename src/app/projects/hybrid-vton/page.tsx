import Image from "next/image";
import Link from "next/link";

import {
    FaGithub,
    FaArrowLeft,
    FaChartLine,
} from "react-icons/fa";

export default function HybridVTONPage() {

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
                        <FaArrowLeft />
                        Back to Portfolio
                    </Link>
                </section>

                {/* Hero */}
                <section className="mx-auto max-w-7xl px-8 pt-12 pb-20">

                    <div className="mb-5 inline-block rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
                        Graduation Project
                    </div>

                    <h1 className="mb-6 text-6xl font-extrabold leading-tight">
                        HybridVTON
                    </h1>

                    <h2 className="mb-8 max-w-5xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-3xl font-bold text-transparent">
                        A Hybrid Geometric and Diffusion Framework for High-Fidelity Virtual Try-On
                    </h2>

                    <p className="max-w-5xl text-lg leading-9 text-gray-300">
                        HybridVTON is an advanced diffusion-based virtual try-on framework that combines explicit geometric guidance with implicit attention-based alignment learning. By transforming explicit alignment into an occlusion-aware binary spatial prior, the framework achieves state-of-the-art garment-body alignment using Stable Diffusion XL while eliminating the appearance distortions typically caused by direct garment warping.
                    </p>

                    {/* Buttons */}
                    <div className="mt-10 flex flex-wrap gap-4">
                        <a
                            href="https://github.com/AbdelrahmanWael5/HybridVTON"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 rounded-xl border border-purple-500 px-6 py-3 transition hover:bg-purple-500/10"
                        >
                            <FaGithub size={20} />
                            View Repository
                        </a>
                    </div>

                    {/* Tech Stack */}
                    <div className="mt-10 flex flex-wrap gap-3">
                        {[
                            "PyTorch",
                            "Stable Diffusion XL",
                            "Diffusers",
                            "Computer Vision",
                            "Virtual Try-On",
                            "Generative AI",
                            "ClothNet",
                            "IP-Adapter"
                        ].map((tech) => (
                            <span
                                key={tech}
                                className="rounded-full bg-white/10 px-4 py-2 text-sm"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                </section>

                {/* Project Overview & Research Contribution */}
                <section className="mx-auto max-w-7xl px-8 pb-20">
                    <h2 className="mb-8 text-5xl font-bold">
                        Project Overview & Research Focus
                    </h2>

                    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                        <p className="leading-9 text-gray-300">
                            Achieving accurate garment-body alignment while preserving fine-grained texture details and human identity remains a critical challenge in virtual try-on systems. Traditional methods rely heavily on explicit garment warping, which frequently introduces geometric distortions and texture blurring. Conversely, pure implicit diffusion approaches can struggle with structural consistency under large pose variations.
                        </p>

                        <p className="mt-6 leading-9 text-gray-300">
                            HybridVTON bridges this gap by unifying explicit spatial priors with multi-modal diffusion conditioning (ClothNet, IP-Adapter, and Text Encoders), complemented by Enhanced Mask-Aware Skip Connections (EMASC) to seamlessly protect the target person’s identity and background details.
                        </p>

                        {/* Overview Cards */}
                        <div className="mt-12 grid gap-6 md:grid-cols-2">
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                                <h3 className="text-lg font-semibold text-purple-300">Core Innovation</h3>
                                <p className="mt-3 text-sm leading-7 text-gray-300">
                                    Conversion of explicit warp outputs into an occlusion-aware binary spatial prior, providing structural guidance without leaking warping-induced artifacts into the diffusion chain.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                                <h3 className="text-lg font-semibold text-purple-300">Unified Category Support</h3>
                                <p className="mt-3 text-sm leading-7 text-gray-300">
                                    Extended beyond standard upper-body tasks by building a unified training pipeline handling both upper- and lower-body clothing classes.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Dataset Preparation */}
                <section className="mx-auto max-w-7xl px-8 pb-24">
                    <h2 className="mb-8 text-5xl font-bold">
                        Unified Dataset Construction & Preprocessing
                    </h2>

                    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                        <p className="max-w-5xl leading-9 text-gray-300">
                            To train a robust, multi-category try-on model, we constructed a unified dataset of <strong className="text-white">14,757 image pairs</strong> combining upper-body samples from <strong className="text-white">VITON-HD</strong> and lower-body samples from <strong className="text-white">DressCode-MR</strong>. A rigorous automated preprocessing pipeline extracted comprehensive human parsing maps (via SCHP), dense pose coordinates (via Detectron2), skeleton structures (via OpenPose), inpainting masks, and automated vision-language garment captions.
                        </p>

                        <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-[#111827]">
                            <Image
                                src="/projects/hybrid-vton/dataset-preparation.png"
                                alt="Dataset Preparation Pipeline"
                                width={1800}
                                height={1000}
                                priority
                                className="h-auto w-full"
                            />
                        </div>
                        <p className="mt-5 text-center text-sm italic text-gray-400">
                            Figure 1. Dataset preprocessing pipeline showing parsing maps, DensePose representations, pose structures, and alignment masks.
                        </p>

                        <div className="mt-12 grid gap-6 md:grid-cols-4">
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                                <p className="text-sm text-gray-400">Source Datasets</p>
                                <p className="mt-2 text-2xl font-bold text-white">2</p>
                                <p className="mt-1 text-sm text-gray-500">VITON-HD + DressCode-MR</p>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                                <p className="text-sm text-gray-400">Total Samples</p>
                                <p className="mt-2 text-2xl font-bold text-white">14,757</p>
                                <p className="mt-1 text-sm text-gray-500">Unified training split</p>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                                <p className="text-sm text-gray-400">Conditioning Inputs</p>
                                <p className="mt-2 text-2xl font-bold text-white">6 Signals</p>
                                <p className="mt-1 text-sm text-gray-500">Mask, Parsing, DensePose, Pose, Prior, Captions</p>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                                <p className="text-sm text-gray-400">Clothing Range</p>
                                <p className="mt-2 text-2xl font-bold text-white">Upper & Lower</p>
                                <p className="mt-1 text-sm text-gray-500">Comprehensive category coverage</p>
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
                            The framework extends the Stable Diffusion XL (SDXL) inpainting architecture. Separate category-specific Geometric Matching Modules (GMM) compute initial alignment, converted cleanly into a binary spatial prior governed by an adaptive, learnable scaling parameter ($\alpha$). Simultaneously, ClothNet injects hierarchical multi-scale garment appearance features into the UNet self-attention blocks, while IP-Adapter and text embeddings handle high-level semantic synthesis.
                        </p>

                        <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-[#111827]">
                            <Image
                                src="/projects/hybrid-vton/architecture.png"
                                alt="HybridVTON Architecture"
                                width={1800}
                                height={950}
                                priority
                                className="h-auto w-full"
                            />
                        </div>
                        <p className="mt-5 text-center text-sm italic text-gray-400">
                            Figure 2. Complete HybridVTON architecture outlining the interaction between explicit geometric priors, ClothNet, IP-Adapter, and the MainUNet backbone.
                        </p>
                    </div>
                </section>

                {/* Core Components */}
                <section className="mx-auto max-w-7xl px-8 pb-24">
                    <h2 className="mb-8 text-5xl font-bold">
                        Core Modules & Technical Components
                    </h2>

                    <div className="grid gap-8 xl:grid-cols-2">
                        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                            <h3 className="text-2xl font-bold text-purple-300">Dual Geometric Matching Modules</h3>
                            <p className="mt-4 leading-8 text-gray-300">
                                Independent upper-body and lower-body warping pipelines optimized to handle specialized deformation characteristics, reducing complexity and outputting precise initial spatial transformations.
                            </p>
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                            <h3 className="text-2xl font-bold text-blue-300">Occlusion-Aware Spatial Prior</h3>
                            <p className="mt-4 leading-8 text-gray-300">
                                Isolates spatial mask data from the warped texture output, protecting the generative pass from visual stretching artifacts while supplying rigorous shape boundaries.
                            </p>
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                            <h3 className="text-2xl font-bold text-green-300">ClothNet & IP-Adapter Integration</h3>
                            <p className="mt-4 leading-8 text-gray-300">
                                ClothNet preserves structural textures, logos, and fold details via deep feature injection, whereas IP-Adapter delivers robust semantic guidance through cross-attention latent layers.
                            </p>
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                            <h3 className="text-2xl font-bold text-yellow-300">Enhanced Mask-Aware Skip Connections (EMASC)</h3>
                            <p className="mt-4 leading-8 text-gray-300">
                                Bypasses VAE bottleneck degradation by routing high-frequency person features straight to the decoder, successfully locking down human identity, facial structures, and background stability.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Experimental Results & Quantitative Comparison */}
                <section className="mx-auto max-w-7xl px-8 pb-24">
                    <h2 className="mb-8 text-5xl font-bold">
                        Experimental Results & Benchmarks
                    </h2>

                    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                        <p className="max-w-5xl leading-9 text-gray-300">
                            Evaluated against leading contemporary frameworks on the official VITON-HD test configuration. HybridVTON achieves the <strong className="text-white">best-in-class LPIPS score (0.077)</strong> and <strong className="text-white">best FID score (6.27)</strong>, proving superior perceptual fidelity and image distribution alignment.
                        </p>

                        <div className="mt-10 overflow-x-auto">
                            <table className="w-full overflow-hidden rounded-2xl border border-white/10">
                                <thead className="bg-white/10">
                                    <tr>
                                        <th className="px-6 py-4 text-left">Model</th>
                                        <th className="px-6 py-4 text-center">SSIM ↑</th>
                                        <th className="px-6 py-4 text-center">LPIPS ↓</th>
                                        <th className="px-6 py-4 text-center">FID ↓</th>
                                        <th className="px-6 py-4 text-center">CLIP-I ↑</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-t border-white/10">
                                        <td className="px-6 py-4">HR-VITON</td>
                                        <td className="text-center">0.883</td>
                                        <td className="text-center">0.115</td>
                                        <td className="text-center">9.70</td>
                                        <td className="text-center">0.832</td>
                                    </tr>
                                    <tr className="border-t border-white/10">
                                        <td className="px-6 py-4">GP-VTON</td>
                                        <td className="text-center">0.898</td>
                                        <td className="text-center">0.105</td>
                                        <td className="text-center">6.43</td>
                                        <td className="text-center">0.874</td>
                                    </tr>
                                    <tr className="border-t border-white/10">
                                        <td className="px-6 py-4">StableVITON</td>
                                        <td className="text-center">0.885</td>
                                        <td className="text-center">0.133</td>
                                        <td className="text-center">6.52</td>
                                        <td className="text-center">0.871</td>
                                    </tr>
                                    <tr className="border-t border-white/10">
                                        <td className="px-6 py-4">DCI-VTON</td>
                                        <td className="text-center">0.856</td>
                                        <td className="text-center">0.166</td>
                                        <td className="text-center">8.73</td>
                                        <td className="text-center">0.840</td>
                                    </tr>
                                    <tr className="border-t border-white/10">
                                        <td className="px-6 py-4">LaDI-VTON</td>
                                        <td className="text-center">0.872</td>
                                        <td className="text-center">0.156</td>
                                        <td className="text-center">8.85</td>
                                        <td className="text-center">0.834</td>
                                    </tr>
                                    <tr className="border-t border-white/10">
                                        <td className="px-6 py-4">IDM-VTON</td>
                                        <td className="text-center">0.870</td>
                                        <td className="text-center">0.102</td>
                                        <td className="text-center">6.29</td>
                                        <td className="text-center">0.883</td>
                                    </tr>
                                    <tr className="border-t border-green-500/30 bg-green-500/10 font-semibold">
                                        <td className="px-6 py-4 text-green-300">HybridVTON (Ours)</td>
                                        <td className="text-center text-green-300">0.865</td>
                                        <td className="text-center text-green-300">0.077</td>
                                        <td className="text-center text-green-300">6.27</td>
                                        <td className="text-center text-green-300">0.882</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Qualitative Figure */}
                        <div className="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-[#111827]">
                            <Image
                                src="/projects/hybrid-vton/qualitative-results.png"
                                alt="HybridVTON Qualitative Results"
                                width={1800}
                                height={900}
                                priority
                                className="h-auto w-full"
                            />
                        </div>
                        <p className="mt-5 text-center text-sm italic text-gray-400">
                            Figure 3. Qualitative comparison displaying high pattern fidelity and structural consistency under complex texture patterns.
                        </p>

                        {/* Training Efficiency Callout */}
                        <div className="mt-10 rounded-3xl border border-green-500/20 bg-green-500/10 p-8">
                            <h3 className="text-2xl font-bold text-green-300 flex items-center gap-2">
                                <FaChartLine /> Superior Training Efficiency
                            </h3>
                            <p className="mt-4 leading-8 text-gray-300">
                                HybridVTON reaches competitive performance benchmarks in just <strong className="text-white">35 training epochs</strong>, whereas comparison models require over <strong className="text-white">100 epochs</strong>. This proves the high convergence speed and representation efficiency enabled by the proposed explicit-implicit conditioning architecture.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Future Work */}
                <section className="mx-auto max-w-7xl px-8 pb-24">
                    <h2 className="mb-8 text-5xl font-bold">
                        Future Work
                    </h2>

                    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                        <ul className="space-y-5 text-lg leading-8 text-gray-300">
                            <li>• Extend framework capabilities to handle complex, multi-layer garment compositions and broader fashion inventories.</li>
                            <li>• Investigate lightweight distillation configurations to optimize inference speeds for real-time commercial deployment.</li>
                            <li>• Transition into video-based virtual try-on models by integrating temporal consistency constraints across frame sequences.</li>
                        </ul>
                    </div>
                </section>

            </div>
        </main>
    );
}