import Link from "next/link";
import FadeInLeft from "../components/FadeInLeft";
import FadeInUp from "../components/FadeInUp";

const pakaian = [
  { name: "T-Shirt", bg: "#b8d8b0" },
  { name: "Jersey", bg: "#b4cfe8" },
  { name: "Jacket", bg: "#e8b4a0" },
  { name: "Hoodie", bg: "#d4c490" },
  { name: "Sweater", bg: "#e8b8b8" },
  { name: "Kemeja / PDH", bg: "#d4c490" },
];

const merch = [
  { name: "Cap / Bucket", bg: "#e8b8b8" },
  { name: "Tote Bag", bg: "#b4cfe8" },
  { name: "ID Card & Lanyard", bg: "#d4c490" },
  { name: "Payung", bg: "#e8b8b8" },
  { name: "Tumbler", bg: "#b8d8b0" },
  { name: "Mug", bg: "#d4c490" },
  { name: "Ballpoint", bg: "#e8b4a0" },
  { name: "Sticker", bg: "#c8dff0" },
  { name: "Key Chain", bg: "#e8b8b8" },
  { name: "Pin", bg: "#b4cfe8" },
  { name: "Notebook", bg: "#d4c490" },
  { name: "HandFan", bg: "#b8d8b0" },
];

function CategoryIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#4a7fc1"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  );
}

function CategoryGrid({ items }: { items: { name: string; bg: string }[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {items.map((cat) => (
        <FadeInUp key={cat.name}>
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div
              className="aspect-[4/3] flex items-center justify-center"
              style={{ backgroundColor: cat.bg }}
            >
              <CategoryIcon />
            </div>
            <div className="px-4 py-4 border-t border-gray-100">
              <p className="font-normal text-gray-900 mb-1">{cat.name}</p>
              <Link href="#" className="text-[#4a7fc1] text-sm hover:underline">
                Lihat Produk →
              </Link>
            </div>
          </div>
        </FadeInUp>
      ))}
    </div>
  );
}

export default function CategoryPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* Title */}
      <div className="px-16 2xl:px-80 pt-16 pb-8">
        <h1 className="text-4xl font-bold text-center text-[#7C6000] tracking-normal uppercase">
          Kategori Produk
        </h1>
      </div>

      {/* Pakaian Banner - full width */}
      <FadeInLeft>
        <div className="bg-[#d4795e] py-3 text-center mb-12">
          <p className="text-white text-4xl font-bold tracking-widest uppercase">Pakaian</p>
        </div>
      </FadeInLeft>

      <div className="px-16 2xl:px-80 pb-16">
        <CategoryGrid items={pakaian} />
      </div>

      {/* Merch Banner - full width */}
      <FadeInLeft>
        <div className="bg-[#4a7fc1] py-3 text-center mb-12">
          <p className="text-white text-4xl font-bold tracking-widest uppercase">Merch</p>
        </div>
      </FadeInLeft>

      <div className="px-16 2xl:px-80 pb-16">
        <CategoryGrid items={merch} />
      </div>

    </main>
  );
}
