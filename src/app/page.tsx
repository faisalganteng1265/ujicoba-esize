import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Image */}
        <Image
          src="/landingpage.png"
          alt="Merchandise background"
          fill
          className="object-cover object-center"
          priority
        />


        {/* Content */}
        <div className="relative z-10 w-full flex flex-col items-center text-center px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-15 max-w-3xl">
            Solusi Terpercaya untuk Merchandise &amp; Promosi
          </h1>
          <p className="text-2xl text-white/80 mb-10 max-w-3xl">
            Custom apparel dan promotional products berkualitas tinggi untuk<br />kebutuhan bisnis Anda
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 rounded-[16px] bg-white text-gray-900 hover:bg-gray-100 transition-colors border-1 border-[#927615]">
              Lihat Produk
            </button>
            <button className="px-8 py-3 rounded-[16px] bg-[#927615] text-white hover:bg-[#6a6a2e] transition-colors border-1 border-[#927615]">
              Pesan Sekarang
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-[#f5f5f3] py-20">
        <div className="w-full flex flex-col md:flex-row items-center gap-16 px-80">
          {/* Left */}
          <div className="flex-1">
            <h2 className="text-5xl font-bold mb-3">
              <span className="text-[#927615]">About</span>{" "}
              <span className="text-[#2c1f00]">Esize</span>
            </h2>
            <hr className="border-t-2 border-[#c0553a] mb-8 w-full" />
            <h3 className="text-3xl font-bold text-[#2c1f00] mb-5 leading-tight">
              Produksi Seragam &amp; Souvenir<br />Skala Besar Tanpa Ribet
            </h3>
            <p className="text-xl text-[#2c1f00] leading-tight mb-8">
              Sejak 2019, Esize melayani produksi konveksi dan souvenir skala<br />
              besar ke seluruh Indonesia hingga luar negeri. Didukung fasilitas<br />
              modern dan tim berpengalaman, kami menghadirkan kualitas<br />
              terjaga, proses efisien, dan pengiriman tepat waktu dengan harga<br />
              bersahabat.
            </p>
            <button className="px-6 py-3 rounded-full bg-[#927615] text-white font-semibold hover:bg-[#7a6210] transition-colors">
              Selengkapnya →
            </button>
          </div>

          {/* Right - 2x2 Image Grid */}
          <div className="grid grid-cols-2 gap-4 w-[420px]">
            <div className="rounded-2xl overflow-hidden border-4 border-[#4a7fc1] bg-gray-200 aspect-square" />
            <div className="rounded-2xl overflow-hidden border-4 border-[#c0553a] bg-gray-200 aspect-square" />
            <div className="rounded-2xl overflow-hidden border-4 border-[#7a7a3a] bg-gray-200 aspect-square" />
            <div className="rounded-2xl overflow-hidden border-4 border-[#4a7fc1] bg-gray-200 aspect-square" />
          </div>
        </div>
      </section>
    </main>
  );
}
