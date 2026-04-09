import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-[#F8F3E9] px-8 2xl:px-80 py-3 flex items-center justify-between whitespace-nowrap">
      {/* Logo */}
      <Link href="/">
        <div className="bg-white border border-gray-200 rounded-lg px-3 py-1.5 mx-30">
          <Image src="/logoesize.png" alt="Esize" width={120} height={40} className="h-8 w-auto" />
        </div>
      </Link>

      {/* Nav Links */}
      <div className="flex items-center gap-6 2xl:gap-12">
        <Link href="/category" className="text-gray-700 text-sm font-medium hover:text-gray-900 transition-colors">
          Katalog Produk
        </Link>
        <Link href="/about" className="text-gray-700 text-sm font-medium hover:text-gray-900 transition-colors">
          Tentang Kami
        </Link>
        <Link href="/partnership" className="text-gray-700 text-sm font-medium hover:text-gray-900 transition-colors">
          Partnership
        </Link>
        <a href="https://drive.google.com/file/d/1p5fWSs8g53_neR7JYbf8lEuKdUs-4mdg/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-gray-700 text-sm font-medium hover:text-gray-900 transition-colors">
          Booklet
        </a>
      </div>

      {/* CTA Button */}
      <Link href="/editor">
        <button className="bg-[#2b5fd4] hover:bg-[#1e4fc0] text-white font-semibold text-sm rounded-lg px-6 py-2.5 transition-colors mx-30">
          Design Custom
        </button>
      </Link>
    </nav>
  );
}
