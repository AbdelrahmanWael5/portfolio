import Link from "next/link";

import {
    FaGithub,
    FaArrowLeft,
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

                {/* Hero / General Overview */}
                <section className="mx-auto max-w-7xl px-8 pt-12 pb-16">

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

                {/* Publication Privacy Notice */}
                <section className="mx-auto max-w-7xl px-8 pb-20">
                    <div className="rounded-3xl border border-yellow-500/30 bg-yellow-500/10 p-8 backdrop-blur">
                        <h2 className="mb-4 text-2xl font-bold text-yellow-300">
                            Research Details Temporarily Private
                        </h2>
                        <p className="leading-8 text-gray-300">
                            This project is currently being finalized for academic publication. To adhere to standard publishing guidelines and protect the underlying methodology, the comprehensive architectural details, dataset preparation pipelines, and full quantitative benchmarks have been temporarily hidden. All technical specifics and complete findings will be made available upon the paper's successful publication.
                        </p>
                    </div>
                </section>

            </div>
        </main>
    );
}