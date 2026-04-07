import Image from "next/image";
import Footer from "../components/Footer";


export default function PartnershipPage() {
  return (
    <main className="min-h-screen bg-[#e8e8e6]">
      <section className="px-16 2xl:px-80 py-20">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="bg-[#7C6000] px-20 py-3 mb-4">
            <h1 className="text-white font-bold text-6xl">Building Trust</h1>
          </div>
          <h2 className="text-[#7C6000] font-bold text-6xl mb-5">Across The Globe</h2>
          <p className="text-[#7C6000] text-xl max-w-xl leading-snug">
            Berkolaborasi dengan berbagai partner terpercaya untuk<br />
            menghadirkan kualitas dan pengalaman terbaik
          </p>
        </div>

        {/* Map */}
        <div className="px-16">
          <Image
            src="/peta dunia 1.png"
            alt="Peta Dunia"
            width={1200}
            height={650}
            className="w-full h-auto"
          />
        </div>

      </section>
      <Footer />
    </main>
  );
}
