import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi";


export default function HybridVTONPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">

      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-8 py-12">

        {/* Back Button */}
        <Link
          href="/#projects"
          className="mb-16 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-gray-300 transition hover:border-purple-500/50 hover:text-white"
        >
          <HiArrowLeft size={18} />
          Back to Portfolio
        </Link>

        {/* Placeholder */}
        <div className="flex flex-1 items-center justify-center">

          <div className="text-center">

            <h1 className="text-6xl font-bold">
              HybridVTON
            </h1>

            <p className="mt-8 text-2xl text-gray-400">
              🚧 Still Working on It
            </p>

            <p className="mt-4 max-w-xl text-lg leading-8 text-gray-500">
              This project is currently under active development.
              The project details page will be available soon.
            </p>

          </div>

        </div>

      </div>

    </main>
  );
}