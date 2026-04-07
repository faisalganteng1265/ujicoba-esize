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
        <div className="w-full h-px bg-[#c0392b] mt-10" />
      </section>
    </main>
  );
}
