import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="w-full">
        <Image
          src="/Hero Sect.png"
          alt="About Esize"
          width={1440}
          height={600}
          className="w-full h-auto"
          priority
        />
      </section>

      {/* About Section */}
      <section className="bg-[#f0f0ee] py-16 px-16 2xl:px-80">
        {/* Icons */}
        <div className="flex justify-center gap-1 mb-4">
          <Image src="/Rectangle 17.png" alt="" width={100} height={100} className="h-28 w-auto" />
          <Image src="/Rectangle 19.png" alt="" width={100} height={100} className="h-28 w-auto" />
        </div>

        {/* Top divider */}
        <div className="w-full h-px bg-[#c0392b] mb-10" />

        {/* Text */}
        <p className="text-center text-[#7C6000] font-semibold text-xl md:text-2xl leading-snug max-w-4xl mx-auto">
          Esize adalah sebuah perusahaan yang bergerak di bidang<br />
          penyediaan barang dan jasa konveksi serta suvenir. Didirikan pada<br />
          tahun 2019 kini esize telah bertransformasi menjadi sebuah<br />
          perusahaan yang memiliki kemampuan untuk memproduksi dan<br />
          menyediakan kebutuhan pelanggan dengan kapasitas besar ke<br />
          seluruh Indonesia dan luar
        </p>

        {/* Bottom divider */}
        <div className="w-full h-px bg-[#c0392b] mt-10 mb-8" />
      </section>

      {/* Feature Section */}
      <section className="px-0 2xl:px-64 bg-[#f0f0ee]">
        {/* Top row: image left, text right */}
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 relative min-h-[420px]">
            <Image
              src="/about1.png"
              alt="Fasilitas Produksi"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1 bg-[#f5e8e0] flex items-center justify-center px-12 py-16">
            <p className="text-[#7C6000] font-semibold text-[28px] leading-snug text-center">
              Didukung <span className="bg-[#F8F3E9] px-1">fasilitas produksi modern</span> dan<br />
              <span className="bg-[#F8F3E9] px-1">tim berpengalaman lebih dari 10 tahun,</span><br />
              kami siap memenuhi kebutuhan konveksi<br />
              dan suvenir seperti <span className="bg-[#F8F3E9] px-1">seragam,</span><span className="bg-[#F8F3E9] px-1">kaos event,</span><br />
              <span className="bg-[#F8F3E9] px-1">jaket,</span><span className="bg-[#F8F3E9] px-1">ID card,</span><span className="bg-[#F8F3E9] px-1">tote bag,</span><span className="bg-[#F8F3E9] px-1">dan lainnya</span>.
            </p>
          </div>
        </div>

        {/* Bottom row: text left, image right */}
        <div className="flex flex-col-reverse md:flex-row ">
          <div className="flex-1 bg-[#dce8f5] flex items-center justify-center px-12 py-16">
            <p className="text-[#7C6000] font-semibold text-[28px] leading-snug text-center">
              Kami berkomitmen menghadirkan produk<br />
              berstandar tinggi dengan <span className="bg-[#F8F3E9] px-1">layanan terbaik,</span><br />
              <span className="bg-[#F8F3E9] px-1">proses efisien,</span><span className="bg-[#F8F3E9] px-1">pengiriman tepat waktu,</span><br />
              dan <span className="bg-[#F8F3E9] px-1">harga yang tetap bersahabat.</span>
            </p>
          </div>
          <div className="flex-1 relative min-h-[420px]">
            <Image
              src="/about2.png"
              alt="Komitmen Kualitas"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Lokasi Section */}
      <section className="bg-[#f0f0ee] py-16 px-16 2xl:px-80">
        {/* Title */}
        <h2 className="text-center text-[#7C6000] font-semibold text-5xl mb-18">Lokasi Kami</h2>

        <div className="flex flex-col md:flex-row gap-15">
          {/* Surakarta */}
          <div className="flex-1 border-[6px] border-[#4273B2] rounded-tl-3xl rounded-br-3xl bg-[#fdf6f0] flex flex-row p-4 gap-5">
            <div className="relative w-60 h-60 flex-shrink-0 overflow-hidden self-center">
              <Image src="/lokasi1.png" alt="Surakarta" fill className="object-cover" />
            </div>
            <div className="flex flex-col justify-center px-7 py-7 gap-4">
              <h3 className="text-[#4273B2] font-bold text-3xl text-center">Surakarta</h3>
              <div className="flex items-start gap-3">
                <svg className="flex-shrink-0 mt-1" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4273B2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                <p className="text-gray-500 text-sm leading-relaxed">Ruko Victoria, Jalan Tentara Pelajar No. 3, Gilingan, Kec. Banjarsari, Kota Surakarta, Jawa Tengah 57134</p>
              </div>
              <div className="flex items-center gap-3">
                <svg className="flex-shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4273B2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" /><polyline points="16 2 16 6" /><polyline points="8 2 8 6" /><line x1="3" y1="10" x2="21" y2="10" /><polyline points="9 16 11 18 15 14" /></svg>
                <p className="text-gray-500 text-sm">10.00 – 19.00 WIB</p>
              </div>
              <button className="bg-[#C8A96E] hover:bg-[#b8973a] text-white font-semibold rounded-full py-3 px-6 transition-colors">
                Lihat Lokasi
              </button>
            </div>
          </div>

          {/* Bandung */}
          <div className="flex-1 border-[6px] border-[#e8734a] rounded-tr-3xl rounded-bl-3xl bg-[#fdf6f0] flex flex-row p-4 gap-5">
            <div className="relative w-60 h-60 flex-shrink-0 overflow-hidden self-center">
              <Image src="/lokasi2.png" alt="Bandung" fill className="object-cover" />
            </div>
            <div className="flex flex-col justify-center px-7 py-7 gap-4">
              <h3 className="text-[#e8734a] font-bold text-3xl text-center">Bandung</h3>
              <div className="flex items-start gap-3">
                <svg className="flex-shrink-0 mt-1" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e8734a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                <p className="text-gray-500 text-sm leading-relaxed">Jl. Sukasirna No.30, RT.03/RW.12, Padasuka, Kec. Cibeunying Kidul, Kota Bandung, Jawa Barat 40122</p>
              </div>
              <div className="flex items-center gap-3">
                <svg className="flex-shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e8734a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" /><polyline points="16 2 16 6" /><polyline points="8 2 8 6" /><line x1="3" y1="10" x2="21" y2="10" /><polyline points="9 16 11 18 15 14" /></svg>
                <p className="text-gray-500 text-sm">10.00 – 19.00 WIB</p>
              </div>
              <button className="bg-[#C8A96E] hover:bg-[#b8973a] text-white font-semibold rounded-full py-3 px-6 transition-colors">
                Lihat Lokasi
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
