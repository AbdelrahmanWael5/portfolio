import Image from "next/image";
import Link from "next/link";

import {
    FaGithub,
    FaArrowLeft,
    FaFileAlt,
} from "react-icons/fa";

import {
    HiOutlineExternalLink,
} from "react-icons/hi";

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
                      A Hybrid Diffusion Framework for High-Fidelity Virtual Try-On
                      using Explicit Spatial Priors and Implicit Garment Alignment
                  </h2>

                  <p className="max-w-5xl text-lg leading-9 text-gray-300">
                      HybridVTON is a diffusion-based virtual try-on framework
                      that combines explicit geometric alignment with implicit
                      attention-based garment guidance to preserve garment
                      details, human identity, and realistic fitting under
                      challenging occlusions. The proposed framework leverages
                      Stable Diffusion XL together with multiple conditioning
                      signals to achieve more faithful garment transfer while
                      minimizing the appearance distortions introduced by
                      explicit garment warping.
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
                      ].map((tech) => (

                          <span
                              key={tech}
                              className="rounded-full bg-white/10 px-4 py-2"
                          >
                              {tech}
                          </span>

                      ))}

                  </div>

              </section>

              {/* Project Overview */}
              <section className="mx-auto max-w-7xl px-8 pb-20">

                  <h2 className="mb-8 text-5xl font-bold">
                      Project Overview
                  </h2>

                  <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">

                      <p className="leading-9 text-gray-300">
                          HybridVTON is a diffusion-based virtual try-on framework that
                          investigates how explicit geometric alignment and implicit
                          attention-based guidance can be combined to improve garment-body
                          alignment while preserving garment appearance and human identity.
                          Instead of relying exclusively on either explicit garment warping
                          or implicit diffusion conditioning, the framework integrates both
                          paradigms into a unified architecture.
                      </p>

                      <p className="mt-6 leading-9 text-gray-300">
                          The proposed framework introduces an occlusion-aware spatial prior
                          derived from explicit garment alignment while simultaneously
                          leveraging multi-modal conditioning through IP-Adapter, ClothNet,
                          and Text-Encoder. This hybrid design provides stronger spatial guidance
                          without directly propagating the appearance distortions introduced
                          during garment warping.
                      </p>

                      {/* Overview Cards */}

                      <div className="mt-12 grid gap-6 md:grid-cols-2">

                          {/* Goal */}

                          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

                              <h3 className="text-lg font-semibold">
                                  Research Goal
                              </h3>

                              <p className="mt-3 text-sm leading-7 text-gray-300">
                                  Design a hybrid virtual try-on framework that combines the
                                  strengths of explicit and implicit alignment to generate
                                  realistic try-on results while preserving garment fidelity
                                  and human identity.
                              </p>

                          </div>

                          {/* Contribution */}

                          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

                              <h3 className="text-lg font-semibold">
                                  Main Contribution
                              </h3>

                              <p className="mt-3 text-sm leading-7 text-gray-300">
                                  Introduce an occlusion-aware spatial prior together with
                                  multi-modal conditioning signals to guide Stable Diffusion
                                  XL without directly relying on warped garment appearance.
                              </p>

                          </div>

                          {/* Hybrid Design */}

                          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

                              <h3 className="text-lg font-semibold">
                                  Hybrid Design
                              </h3>

                              <div className="mt-5 flex items-center justify-center gap-5">

                                  <div className="rounded-xl bg-white/5 px-5 py-4 text-center">
                                      Explicit
                                      <br />
                                      Alignment
                                  </div>

                                  <span className="font-semibold text-purple-400">
                                      +
                                  </span>

                                  <div className="rounded-xl bg-white/5 px-5 py-4 text-center">
                                      Implicit
                                      <br />
                                      Diffusion
                                  </div>

                              </div>

                          </div>

                          {/* Research Question */}

                          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

                              <h3 className="text-lg font-semibold">
                                  Research Question
                              </h3>

                              <p className="mt-3 text-sm leading-7 text-gray-300">
                                  Can explicit spatial guidance be incorporated into a
                                  diffusion-based virtual try-on framework without
                                  propagating the visual artifacts introduced by garment
                                  warping?
                              </p>

                          </div>

                      </div>

                  </div>

              </section>

              {/* Motivation */}
              <section className="mx-auto max-w-7xl px-8 pb-20">

                  <h2 className="mb-8 text-5xl font-bold">
                      Motivation
                  </h2>

                  <div className="grid gap-6 md:grid-cols-2">

                      {/* Challenge 1 */}

                      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">

                          <h3 className="mb-4 text-xl font-semibold">
                              Garment Alignment
                          </h3>

                          <p className="leading-8 text-gray-300">
                              Existing virtual try-on methods often struggle to accurately
                              align garments with the target person's pose, especially under
                              large pose variations and self-occlusions.
                          </p>

                      </div>

                      {/* Challenge 2 */}

                      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">

                          <h3 className="mb-4 text-xl font-semibold">
                              Garment Fidelity
                          </h3>

                          <p className="leading-8 text-gray-300">
                              Explicit garment warping improves spatial alignment but
                              frequently introduces texture distortions and visual artifacts
                              that reduce the realism of the generated try-on image.
                          </p>

                      </div>

                      {/* Challenge 3 */}

                      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">

                          <h3 className="mb-4 text-xl font-semibold">
                              Identity Preservation
                          </h3>

                          <p className="leading-8 text-gray-300">
                              Preserving facial appearance, body shape, and background
                              details while realistically fitting a new garment remains a
                              challenging objective for diffusion-based virtual try-on.
                          </p>

                      </div>

                      {/* Solution */}

                      <div className="rounded-3xl border border-purple-500/20 bg-purple-500/10 p-6 backdrop-blur">

                          <h3 className="mb-4 text-xl font-semibold text-purple-300">
                              HybridVTON
                          </h3>

                          <p className="leading-8 text-gray-300">
                              HybridVTON addresses these challenges by combining explicit
                              geometric alignment with implicit diffusion guidance, enabling
                              stronger spatial consistency while avoiding the appearance
                              distortions caused by directly warping garments and integrating the Enhanced Mask-Aware Skip Connection Module (EMASC) to preserve the human identity from the original human image.
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

                      <p className="max-w-5xl leading-9 text-gray-300">
                          HybridVTON was trained on a unified dataset constructed by combining
                          VITON-HD and DressCode-MR. Since the two datasets provide different
                          garment categories and annotation formats, an extensive preprocessing
                          pipeline was developed to generate consistent training inputs for the
                          proposed architecture. This process included human parsing,
                          DensePose extraction, pose estimation, inpainting
                          mask generation, masked person image construction, and cloth
                          captioning. Then using both datasets into a single training
                          benchmark to give the model the ability to handle multiple clothing categories.
                      </p>

                      {/* Dataset Preparation Pipeline */}

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
                          Figure 1. Dataset preparation pipeline illustrating the generation
                          of the masked person image, human parsing maps, DensePose
                          representations, pose maps, and garment captions used as
                          conditioning signals for HybridVTON.
                      </p>

                      {/* Data Processing Summary */}

                      <div className="mt-12">

                          <h3 className="mb-6 text-3xl font-bold">
                              Data Processing Summary
                          </h3>

                          <div className="grid gap-6 md:grid-cols-2">

                              {/* Human Representation */}

                              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

                                  <h4 className="text-lg font-semibold">
                                      Human Representation
                                  </h4>

                                  <p className="mt-3 text-sm leading-7 text-gray-300">
                                      SCHP, Detectron2, and OpenPose were used to generate
                                      human parsing maps, DensePose representations, and pose
                                      maps, providing semantic, geometric, and structural
                                      guidance for the diffusion model.
                                  </p>

                              </div>

                              {/* Agnostic Person */}

                              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

                                  <h4 className="text-lg font-semibold">
                                      Agnostic Person Generation
                                  </h4>

                                  <p className="mt-3 text-sm leading-7 text-gray-300">
                                      Garment-specific inpainting masks were generated from
                                      the parsing maps and applied to the original person
                                      image to remove the target clothing while preserving
                                      the remaining body regions, producing the masked person
                                      image used during diffusion.
                                  </p>

                              </div>

                              {/* Cloth Captioning */}

                              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

                                  <h4 className="text-lg font-semibold">
                                      Cloth Image Captioning
                                  </h4>

                                  <p className="mt-3 text-sm leading-7 text-gray-300">
                                      Every garment image was automatically captioned using a
                                      vision-language model. The generated captions were
                                      refined and normalized into a unified attribute-based
                                      format suitable for Stable Diffusion XL text
                                      conditioning.
                                  </p>

                              </div>

                          </div>

                      </div>

                      {/* Unified Dataset */}

                      <div className="mt-12">

                          <h3 className="mb-6 text-3xl font-bold">
                              Unified Dataset
                          </h3>

                          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

                              {/* Source */}

                              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

                                  <p className="text-sm text-gray-400">
                                      Source Datasets
                                  </p>

                                  <p className="mt-2 text-2xl font-bold">
                                      2
                                  </p>

                                  <p className="mt-1 text-sm text-gray-500">
                                      VITON-HD + DressCode-MR
                                  </p>

                              </div>

                              {/* Samples */}

                              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

                                  <p className="text-sm text-gray-400">
                                      Training Samples
                                  </p>

                                  <p className="mt-2 text-2xl font-bold">
                                      14,729
                                  </p>

                                  <p className="mt-1 text-sm text-gray-500">
                                      Unified training dataset
                                  </p>

                              </div>

                              {/* Generated Inputs */}

                              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

                                  <p className="text-sm text-gray-400">
                                      Generated Inputs
                                  </p>

                                  <p className="mt-2 text-2xl font-bold">
                                      6
                                  </p>

                                  <p className="mt-1 text-sm text-gray-500">
                                      Masked Person • Parsing • DensePose • Pose • Masks • Captions
                                  </p>

                              </div>

                              {/* Garments */}

                              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

                                  <p className="text-sm text-gray-400">
                                      Clothing Types
                                  </p>

                                  <p className="mt-2 text-2xl font-bold">
                                      Upper + Lower
                                  </p>

                                  <p className="mt-1 text-sm text-gray-500">
                                      Single unified SDXL pipeline
                                  </p>

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
                          HybridVTON extends the Stable Diffusion XL virtual try-on pipeline by
                          combining explicit geometric alignment with implicit diffusion-based
                          garment guidance. Instead of directly relying on warped garment
                          appearance, the framework extracts an occlusion-aware spatial prior
                          from the explicit alignment stage while simultaneously incorporating
                          multiple conditioning signals to guide the diffusion process. This
                          hybrid design enables stronger structural guidance while preserving
                          garment details and human identity.
                      </p>

                      {/* Architecture */}

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
                          Figure 2. Overall HybridVTON architecture illustrating the interaction
                          between explicit garment alignment, the occlusion-aware spatial prior,
                          multi-modal conditioning modules, and the Stable Diffusion XL backbone.
                      </p>

                      {/* Architecture Summary */}

                      <div className="mt-12 grid gap-6 md:grid-cols-3">

                          {/* Explicit Alignment */}

                          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

                              <h3 className="text-lg font-semibold">
                                  Explicit Alignment
                              </h3>

                              <p className="mt-3 text-sm leading-7 text-gray-300">
                                  Dual geometric matching modules estimate garment-specific
                                  transformations that provide accurate spatial guidance
                                  before diffusion begins.
                              </p>

                          </div>

                          {/* Hybrid Conditioning */}

                          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

                              <h3 className="text-lg font-semibold">
                                  Hybrid Conditioning
                              </h3>

                              <p className="mt-3 text-sm leading-7 text-gray-300">
                                  IP-Adapter, ClothNet, and the occlusion-aware spatial prior
                                  provide complementary semantic, appearance, and structural
                                  information throughout the denoising process.
                              </p>

                          </div>

                          {/* Identity Preservation */}

                          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

                              <h3 className="text-lg font-semibold">
                                  Identity Preservation
                              </h3>

                              <p className="mt-3 text-sm leading-7 text-gray-300">
                                  EMASC skip connections preserve facial appearance,
                                  body characteristics, and background details while
                                  generating realistic virtual try-on images.
                              </p>

                          </div>

                      </div>

                  </div>

              </section>

              {/* Core Components */}
              <section className="mx-auto max-w-7xl px-8 pb-24">

                  <h2 className="mb-8 text-5xl font-bold">
                      Core Components
                  </h2>

                  <p className="mb-12 max-w-5xl text-lg leading-8 text-gray-400">
                      HybridVTON combines several specialized modules that work together to
                      improve garment alignment, preserve human identity, and maintain
                      garment appearance throughout the diffusion process.
                  </p>

                  <div className="grid gap-8 xl:grid-cols-2">

                      {/* ================= Component 1 ================= */}

                      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">

                          <div className="flex items-center gap-4">

                              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/10 text-2xl">
                                  📐
                              </div>

                              <div>

                                  <h3 className="text-2xl font-bold">
                                      Dual Geometric Matching Modules
                                  </h3>

                                  <p className="text-sm text-purple-300">
                                      Explicit Alignment
                                  </p>

                              </div>

                          </div>

                          <p className="mt-6 leading-8 text-gray-300">
                              Separate geometric matching modules estimate garment-specific
                              transformations for upper-body and lower-body garments,
                              producing accurate spatial alignment before diffusion begins.
                          </p>

                          <div className="mt-6 rounded-xl bg-purple-500/10 px-4 py-3 text-sm text-purple-200">
                              Produces garment-specific geometric transformations.
                          </div>

                      </div>

                      {/* ================= Component 2 ================= */}

                      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">

                          <div className="flex items-center gap-4">

                              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-2xl">
                                  🛡️
                              </div>

                              <div>

                                  <h3 className="text-2xl font-bold">
                                      Occlusion-aware Spatial Prior
                                  </h3>

                                  <p className="text-sm text-blue-300">
                                      Proposed Contribution
                                  </p>

                              </div>

                          </div>

                          <p className="mt-6 leading-8 text-gray-300">
                              Instead of directly using warped garment appearance, HybridVTON
                              converts geometric alignment into a binary spatial prior that
                              guides diffusion while avoiding warping artifacts.
                          </p>

                          <div className="mt-6 rounded-xl bg-blue-500/10 px-4 py-3 text-sm text-blue-200">
                              Eliminates appearance distortions from explicit warping.
                          </div>

                      </div>

                      {/* ================= Component 3 ================= */}

                      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">

                          <div className="flex items-center gap-4">

                              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500/10 text-2xl">
                                  👕
                              </div>

                              <div>

                                  <h3 className="text-2xl font-bold">
                                      ClothNet
                                  </h3>

                                  <p className="text-sm text-green-300">
                                      Appearance Guidance
                                  </p>

                              </div>

                          </div>

                          <p className="mt-6 leading-8 text-gray-300">
                              Multi-scale garment features extracted from the reference
                              clothing image preserve textures, logos, folds, and other
                              fine-grained garment characteristics.
                          </p>

                          <div className="mt-6 rounded-xl bg-green-500/10 px-4 py-3 text-sm text-green-200">
                              Preserves fine garment details.
                          </div>

                      </div>

                      {/* ================= Component 4 ================= */}

                      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">

                          <div className="flex items-center gap-4">

                              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-500/10 text-2xl">
                                  🖼️
                              </div>

                              <div>

                                  <h3 className="text-2xl font-bold">
                                      IP-Adapter
                                  </h3>

                                  <p className="text-sm text-pink-300">
                                      Semantic Guidance
                                  </p>

                              </div>

                          </div>

                          <p className="mt-6 leading-8 text-gray-300">
                              Image embeddings extracted from the garment provide high-level
                              semantic guidance through the diffusion cross-attention layers.
                          </p>

                          <div className="mt-6 rounded-xl bg-pink-500/10 px-4 py-3 text-sm text-pink-200">
                              Provides semantic garment understanding.
                          </div>

                      </div>

                      {/* ================= Component 5 ================= */}

                      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">

                          <div className="flex items-center gap-4">

                              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-500/10 text-2xl">
                                  🔄
                              </div>

                              <div>

                                  <h3 className="text-2xl font-bold">
                                      EMASC
                                  </h3>

                                  <p className="text-sm text-yellow-300">
                                      Identity Preservation
                                  </p>

                              </div>

                          </div>

                          <p className="mt-6 leading-8 text-gray-300">
                              Enhanced Mask-Aware Skip Connections preserve facial appearance,
                              body characteristics, and background information during image
                              synthesis.
                          </p>

                          <div className="mt-6 rounded-xl bg-yellow-500/10 px-4 py-3 text-sm text-yellow-200">
                              Preserves human identity.
                          </div>

                      </div>

                      {/* ================= Component 6 ================= */}

                      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">

                          <div className="flex items-center gap-4">

                              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-2xl">
                                  🧠
                              </div>

                              <div>

                                  <h3 className="text-2xl font-bold">
                                      Stable Diffusion XL
                                  </h3>

                                  <p className="text-sm text-cyan-300">
                                      Diffusion Backbone
                                  </p>

                              </div>

                          </div>

                          <p className="mt-6 leading-8 text-gray-300">
                              The diffusion backbone integrates all conditioning signals to
                              iteratively synthesize realistic virtual try-on images while
                              maintaining spatial consistency and garment fidelity.
                          </p>

                          <div className="mt-6 rounded-xl bg-cyan-500/10 px-4 py-3 text-sm text-cyan-200">
                              Final image synthesis.
                          </div>

                      </div>

                  </div>

              </section>

              {/* Experimental Results */}
              <section className="mx-auto max-w-7xl px-8 pb-24">

                  <h2 className="mb-8 text-5xl font-bold">
                      Experimental Results
                  </h2>

                  <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">

                      <p className="max-w-5xl leading-9 text-gray-300">
                          HybridVTON was evaluated qualitatively against current state-of-the-art virtual try-on systems. The qualitative results demonstrate the framework's
                          ability to preserve garment details, maintain realistic fitting,
                          and generate visually consistent try-on images.
                      </p>

                      {/* Results Figure */}

                      <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-[#111827]">

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
                          Figure 3. Qualitative comparison of HybridVTON against other frameworks.
                      </p>

                      {/* Highlights */}

                      <div className="mt-12 grid gap-6 md:grid-cols-3">

                          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

                              <h3 className="text-lg font-semibold">
                                  Garment Fidelity
                              </h3>

                              <p className="mt-3 text-sm leading-7 text-gray-300">
                                  Fine garment details such as logos, textures, folds,
                                  and colors are preserved throughout the generation
                                  process.
                              </p>

                          </div>

                          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

                              <h3 className="text-lg font-semibold">
                                  Spatial Consistency
                              </h3>

                              <p className="mt-3 text-sm leading-7 text-gray-300">
                                  The generated garments follow the target person's pose
                                  while maintaining realistic body alignment and fitting.
                              </p>

                          </div>

                          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

                              <h3 className="text-lg font-semibold">
                                  Identity Preservation
                              </h3>

                              <p className="mt-3 text-sm leading-7 text-gray-300">
                                  Facial appearance, body shape, and background regions
                                  remain consistent after garment transfer.
                              </p>

                          </div>

                      </div>

                  </div>

              </section>

              {/* Quantitative Comparison */}
              <section className="mx-auto max-w-7xl px-8 pb-24">

                  <h2 className="mb-8 text-5xl font-bold">
                      Quantitative Comparison
                  </h2>

                  <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">

                      <p className="max-w-5xl leading-9 text-gray-300">
                          HybridVTON was quantitatively evaluated against recent
                          state-of-the-art virtual try-on methods using widely adopted
                          evaluation metrics. Higher SSIM and CLIP-I indicate better
                          structural and semantic consistency, while lower LPIPS and FID
                          correspond to improved perceptual quality and image realism.
                      </p>

                      <div className="mt-10 overflow-x-auto">

                          <table className="w-full overflow-hidden rounded-2xl border border-white/10">

                              <thead className="bg-white/10">

                                  <tr>

                                      <th className="px-6 py-4 text-left">
                                          Model
                                      </th>

                                      <th className="px-6 py-4 text-center">
                                          SSIM ↑
                                      </th>

                                      <th className="px-6 py-4 text-center">
                                          LPIPS ↓
                                      </th>

                                      <th className="px-6 py-4 text-center">
                                          FID ↓
                                      </th>

                                      <th className="px-6 py-4 text-center">
                                          CLIP-I ↑
                                      </th>

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

                                      <td className="px-6 py-4 text-green-300">
                                          HybridVTON
                                      </td>

                                      <td className="text-center text-green-300">
                                          0.865
                                      </td>

                                      <td className="text-center text-green-300">
                                          0.077
                                      </td>

                                      <td className="text-center text-green-300">
                                          6.27
                                      </td>

                                      <td className="text-center text-green-300">
                                          0.974
                                      </td>

                                  </tr>

                              </tbody>

                          </table>

                      </div>

                      <div className="mt-10 rounded-3xl border border-green-500/20 bg-green-500/10 p-8">

                        <h3 className="text-2xl font-bold text-green-300">
                            Training Efficiency
                        </h3>

                        <p className="mt-4 leading-8 text-gray-300">
                            HybridVTON achieves competitive performance after only
                            <span className="font-semibold text-white"> 35 training epochs</span>,
                            whereas the compared state-of-the-art methods were trained for
                            <span className="font-semibold text-white"> over 100 epochs</span>.
                            This demonstrates that the proposed hybrid conditioning framework
                            learns more efficiently while requiring substantially fewer training
                            iterations.
                        </p>

                      </div>

                  </div>

              </section>

              {/* Key Contributions */}
              <section className="mx-auto max-w-7xl px-8 pb-24">

                  <h2 className="mb-8 text-5xl font-bold">
                      Key Contributions
                  </h2>

                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">

                          <h3 className="text-xl font-semibold">
                              Hybrid Alignment
                          </h3>

                          <p className="mt-4 leading-8 text-gray-300">
                              Combined explicit garment alignment with implicit diffusion
                              guidance into a unified virtual try-on framework.
                          </p>

                      </div>

                      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">

                          <h3 className="text-xl font-semibold">
                              Occlusion-aware Spatial Prior
                          </h3>

                          <p className="mt-4 leading-8 text-gray-300">
                              Proposed a binary spatial prior that provides geometric
                              guidance without propagating appearance artifacts from
                              warped garments.
                          </p>

                      </div>

                      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">

                          <h3 className="text-xl font-semibold">
                              Unified Dataset
                          </h3>

                          <p className="mt-4 leading-8 text-gray-300">
                              Constructed a unified dataset combining
                              VITON-HD and DressCode-MR to enable the model to deal with both upper and lower-body
                              clothing samples.
                          </p>

                      </div>

                      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">

                          <h3 className="text-xl font-semibold">
                              Multi-modal Conditioning
                          </h3>

                          <p className="mt-4 leading-8 text-gray-300">
                              Integrated IP-Adapter, ClothNet, spatial
                              conditioning to provide complementary guidance signals.
                          </p>

                      </div>

                      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">

                          <h3 className="text-xl font-semibold">
                              Identity Preservation
                          </h3>

                          <p className="mt-4 leading-8 text-gray-300">
                              Preserved facial appearance, body characteristics,
                              and background information throughout the try-on
                              generation process by integrating the EMASC module.
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

                          <li>
                              • Extend the framework to support more diverse garment categories
                              and challenging multi-layer clothing combinations.
                          </li>

                          <li>
                              • Investigate lightweight architectures for faster inference
                              while maintaining high-quality virtual try-on results.
                          </li>

                          <li>
                              • Explore video virtual try-on by incorporating temporal
                              consistency across consecutive frames.
                          </li>

                      </ul>

                  </div>

              </section>
              
            </div>

        </main>

    );

}