"use client";

import { useState, useRef } from "react";
import Image from "next/image";

type SidebarTab = "product" | "upload" | "text" | "layers" | null;
type ProductTab = "details" | "change";
type ViewType = "front" | "back" | "left" | "right";
type Size = "S" | "M" | "L" | "XL" | "2XL" | "3XL" | "4XL" | "5XL";

const sizes: Size[] = ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"];

const colors = [
  "#111111", "#d4c4a8", "#8b6340", "#2b5fd4", "#c41e3a", "#1a472a", "#64748b",
  "#c0392b", "#4d7c0f", "#7f1d1d", "#c8a96e", "#6b8e6b", "#cd853f", "#ffffff",
];

const views: { key: ViewType; label: string; src: string }[] = [
  { key: "front", label: "FRONT", src: "/19.png" },
  { key: "back",  label: "BACK",  src: "/20.png" },
  { key: "left",  label: "LEFT",  src: "/21.png" },
  { key: "right", label: "RIGHT", src: "/22.png" },
];

function IconProduct({ active }: { active: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={active ? "white" : "#6b7280"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.57a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.57a2 2 0 0 0-1.34-2.23z" />
    </svg>
  );
}
function IconUpload({ active }: { active: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={active ? "white" : "#6b7280"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" y1="3" x2="12" y2="15" />
    </svg>
  );
}
function IconText({ active }: { active: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={active ? "white" : "#6b7280"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4 7 4 4 20 4 20 7" />
      <line x1="9" y1="20" x2="15" y2="20" />
      <line x1="12" y1="4" x2="12" y2="20" />
    </svg>
  );
}
function IconLayers({ active }: { active: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={active ? "white" : "#6b7280"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  );
}

const sidebarItems = [
  { key: "product" as SidebarTab, label: "PRODUCT", Icon: IconProduct },
  { key: "upload" as SidebarTab, label: "UPLOAD", Icon: IconUpload },
  { key: "text" as SidebarTab, label: "TEXT", Icon: IconText },
  { key: "layers" as SidebarTab, label: "LAYERS", Icon: IconLayers },
];

export default function EditorPage() {
  const [activeTab, setActiveTab] = useState<SidebarTab>(null);
  const [productTab, setProductTab] = useState<ProductTab>("details");
  const [selectedSize, setSelectedSize] = useState<Size>("M");
  const [selectedColor, setSelectedColor] = useState("#111111");
  const [selectedView, setSelectedView] = useState<ViewType>("front");
  const [zoom, setZoom] = useState(100);
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files ?? []);
    files.forEach((file) => {
      const url = URL.createObjectURL(file);
      setUploadedImages((prev) => [...prev, url]);
    });
    e.target.value = "";
  }

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-[#f5f0e8]">

      {/* Header */}
      <header className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-6 flex-shrink-0 z-50">
        <div>
          <p className="font-bold text-xl tracking-wider text-gray-800" style={{ fontFamily: "Georgia, serif" }}>esize</p>
          <p className="text-[8px] text-gray-400 tracking-widest -mt-0.5">Size the sequence, to your perfect size</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
              <polyline points="17 21 17 13 7 13 7 21" />
              <polyline points="7 3 7 8 15 8" />
            </svg>
            Simpan Templat
          </button>
          <button className="flex items-center gap-2 bg-[#4a7fc1] hover:bg-[#3a6fb1] text-white rounded-lg px-4 py-2 text-sm font-medium transition-colors">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            Tambah Keranjang
          </button>
        </div>
      </header>

      {/* Body */}
      <div className="flex flex-1 overflow-hidden">

        {/* Left icon sidebar */}
        <div className="w-20 bg-white border-r border-gray-200 flex flex-col items-center pt-4 gap-1 flex-shrink-0">
          {sidebarItems.map(({ key, label, Icon }) => {
            const active = activeTab === key;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(activeTab === key ? null : key)}
                className={`flex flex-col items-center justify-center gap-1 w-16 py-3 rounded-xl text-[10px] font-bold tracking-wider transition-colors ${
                  active ? "bg-[#e8734a] text-white" : "text-gray-400 hover:bg-gray-100"
                }`}
              >
                <Icon active={active} />
                {label}
              </button>
            );
          })}
        </div>

        {/* Left detail panel — only shown when a tab is active */}
        {activeTab && <div className="w-72 bg-white border-r border-gray-200 flex-shrink-0 overflow-y-auto">
          {activeTab === "product" && (
            <div className="p-4">
              {/* Product card */}
              <div className="bg-[#fdf6f0] rounded-2xl p-4 mb-4 relative overflow-hidden">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#f5ddd0] rounded-full opacity-60" />
                <div className="absolute top-8 -right-2 w-14 h-14 bg-[#f0d0c0] rounded-full opacity-40" />
                <div className="flex items-start gap-3 relative">
                  <div className="w-9 h-9 rounded-full bg-[#e8734a] flex items-center justify-center flex-shrink-0 shadow-sm">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                      <path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.57a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.57a2 2 0 0 0-1.34-2.23z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="font-bold text-gray-900 text-sm leading-tight">Premium Cotton Shirt</h2>
                    <p className="text-gray-400 text-xs mt-1 leading-relaxed">Handcrafted quality meets modern design. Ring-spun cotton with superior comfort.</p>
                  </div>
                </div>
              </div>

              {/* Details / Change tabs */}
              <div className="flex gap-2 mb-6">
                <button
                  onClick={() => setProductTab("details")}
                  className={`flex-1 py-2 rounded-full text-sm font-semibold transition-colors ${
                    productTab === "details" ? "bg-[#e8734a] text-white" : "border border-gray-200 text-gray-500 hover:bg-gray-50"
                  }`}
                >
                  Details
                </button>
                <button
                  onClick={() => setProductTab("change")}
                  className={`flex-1 py-2 rounded-full text-sm font-semibold transition-colors ${
                    productTab === "change" ? "bg-[#e8734a] text-white" : "border border-gray-200 text-gray-500 hover:bg-gray-50"
                  }`}
                >
                  Change
                </button>
              </div>

              {/* SIZE */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#e8734a" strokeWidth="2">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    </svg>
                    <span className="font-bold text-gray-800 text-sm tracking-wide">SIZE</span>
                  </div>
                  <button className="text-xs text-[#e8734a] font-medium hover:underline">Size Guide →</button>
                </div>
                <div className="grid grid-cols-4 gap-2 max-w-[250px]">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`relative py-2 aspect-square rounded-xl text-sm font-semibold transition-all ${
                        selectedSize === size
                          ? "bg-[#e8734a] text-white shadow-md"
                          : "bg-[#fdf6f0] text-gray-600 hover:bg-[#f5e6d8]"
                      }`}
                    >
                      {selectedSize === size && (
                        <span className="absolute -top-1 -right-1 w-3 h-3 bg-orange-200 rounded-full border-2 border-white" />
                      )}
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* COLOR PALETTE */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#e8734a" strokeWidth="2">
                    <circle cx="13.5" cy="6.5" r=".5" fill="#e8734a" />
                    <circle cx="17.5" cy="10.5" r=".5" fill="#e8734a" />
                    <circle cx="8.5" cy="7.5" r=".5" fill="#e8734a" />
                    <circle cx="6.5" cy="12.5" r=".5" fill="#e8734a" />
                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
                  </svg>
                  <span className="font-bold text-gray-800 text-sm tracking-wide">COLOR PALETTE</span>
                </div>
                <div className="grid grid-cols-7 gap-2">
                  {colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-8 h-8 rounded-full transition-all border-2 ${
                        selectedColor === color
                          ? "border-[#e8734a] scale-110 shadow-md"
                          : "border-transparent hover:scale-105 hover:border-gray-300"
                      } ${color === "#ffffff" ? "border-gray-200" : ""}`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "upload" && (
            <div className="p-4 flex flex-col gap-4">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={handleFileChange}
              />
              {/* Drop zone */}
              <button
                onClick={() => fileInputRef.current?.click()}
                className="w-full border-2 border-dashed border-[#e8734a] rounded-2xl py-8 flex flex-col items-center gap-3 hover:bg-[#fdf6f0] transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-[#fdf6f0] flex items-center justify-center">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e8734a" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="17 8 12 3 7 8" />
                    <line x1="12" y1="3" x2="12" y2="15" />
                  </svg>
                </div>
                <p className="text-sm text-gray-500">Klik untuk upload gambar</p>
                <span className="bg-[#e8734a] text-white rounded-full px-5 py-1.5 text-sm font-semibold">Pilih File</span>
              </button>

              {/* Uploaded images grid */}
              {uploadedImages.length > 0 && (
                <div>
                  <p className="text-xs font-bold text-gray-500 tracking-wider mb-2">GAMBAR KAMU</p>
                  <div className="grid grid-cols-3 gap-2">
                    {uploadedImages.map((url, i) => (
                      <div key={i} className="aspect-square rounded-xl overflow-hidden relative border border-gray-100">
                        <Image src={url} alt={`upload-${i}`} fill className="object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === "text" && (
            <div className="p-4 flex flex-col gap-3">
              <p className="font-bold text-gray-800 text-sm">Tambah Teks</p>
              <button className="w-full border-2 border-dashed border-gray-200 rounded-xl py-4 text-sm text-gray-500 hover:border-[#e8734a] hover:text-[#e8734a] transition-colors">
                + Heading
              </button>
              <button className="w-full border-2 border-dashed border-gray-200 rounded-xl py-4 text-sm text-gray-500 hover:border-[#e8734a] hover:text-[#e8734a] transition-colors">
                + Subheading
              </button>
              <button className="w-full border-2 border-dashed border-gray-200 rounded-xl py-4 text-sm text-gray-500 hover:border-[#e8734a] hover:text-[#e8734a] transition-colors">
                + Body Text
              </button>
            </div>
          )}

          {activeTab === "layers" && (
            <div className="p-4 flex flex-col gap-2">
              <p className="font-bold text-gray-800 text-sm mb-2">Layers</p>
              <div className="flex items-center gap-3 p-3 bg-[#fdf6f0] rounded-xl border border-[#f0d8c8]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#e8734a" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" /></svg>
                <span className="text-sm text-gray-600">Product Base</span>
              </div>
              <p className="text-xs text-gray-400 text-center mt-4">Tambah elemen untuk melihat layers</p>
            </div>
          )}
        </div>}

        {/* Canvas area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Canvas toolbar */}
          <div className="flex items-center justify-center gap-2 py-3 bg-transparent flex-shrink-0">
            <button className="w-11 h-11 bg-[#f0ebe2] rounded-xl flex items-center justify-center hover:bg-[#e8e0d4] transition-colors shadow-sm">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2.5" strokeLinecap="round">
                <path d="M3 7v6h6" /><path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" />
              </svg>
            </button>
            <button className="w-11 h-11 bg-[#f0ebe2] rounded-xl flex items-center justify-center hover:bg-[#e8e0d4] transition-colors shadow-sm">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2.5" strokeLinecap="round">
                <path d="M21 7v6h-6" /><path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3L21 13" />
              </svg>
            </button>
            <button
              onClick={() => setZoom(z => Math.max(25, z - 25))}
              className="w-11 h-11 bg-[#e8e2d8] rounded-xl flex items-center justify-center hover:bg-[#ddd8cc] transition-colors shadow-sm"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2.5" strokeLinecap="round">
                <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><line x1="8" y1="11" x2="14" y2="11" />
              </svg>
            </button>
            <div className="w-20 h-11 bg-white rounded-xl flex items-center justify-center text-sm font-semibold text-gray-700 shadow-sm border border-gray-200 select-none">
              {zoom}%
            </div>
            <button
              onClick={() => setZoom(z => Math.min(200, z + 25))}
              className="w-11 h-11 bg-[#e8e2d8] rounded-xl flex items-center justify-center hover:bg-[#ddd8cc] transition-colors shadow-sm"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2.5" strokeLinecap="round">
                <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                <line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" />
              </svg>
            </button>
            <button className="w-11 h-11 bg-[#e8e2d8] rounded-xl flex items-center justify-center hover:bg-[#ddd8cc] transition-colors shadow-sm">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2.5" strokeLinecap="round">
                <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
              </svg>
            </button>
          </div>

          {/* Canvas */}
          <div className="flex-1 overflow-hidden relative flex items-center justify-center bg-[#e8e4dc]">
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#4a7fc1]" />
            <div
              className="flex items-center justify-center w-full h-full"
              style={{ transform: `scale(${zoom / 100})`, transformOrigin: "center" }}
            >
              <Image
                src={views.find(v => v.key === selectedView)?.src ?? "/19.png"}
                alt="Product preview"
                width={520}
                height={520}
                className="object-contain max-h-full drop-shadow-xl"
              />
            </div>
          </div>

          {/* Bottom hint bar */}
          <div className="flex items-center justify-center py-4 flex-shrink-0">
            <div className="flex items-center gap-3 bg-[#fdf6f0] border border-[#f0ddd0] rounded-full px-5 py-2.5 shadow-sm">
              <div className="flex gap-1">
                <button className="w-7 h-7 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
                <button className="w-7 h-7 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>
              <span className="text-sm text-gray-500">Start by adding images or text to your design</span>
            </div>
          </div>
        </div>

        {/* Right panel - Views */}
        <div className="w-28 bg-white border-l border-gray-200 flex flex-col flex-shrink-0 overflow-y-auto">
          <div className="flex items-center gap-1.5 px-3 py-3 border-b border-gray-100">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            <span className="text-xs font-bold text-gray-500 tracking-wider">VIEWS</span>
          </div>

          <div className="flex flex-col items-center py-4 relative">
            {/* Vertical connector line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-px bg-gray-200 z-0" />

            {views.map(({ key, label, src }) => {
              const active = selectedView === key;
              return (
                <button
                  key={key}
                  onClick={() => setSelectedView(key)}
                  className="relative z-10 flex flex-col items-center w-full px-3 mb-1"
                >
                  {/* Thumbnail card */}
                  <div className={`w-full rounded-2xl overflow-hidden transition-all ${
                    active ? "bg-[#f0e8d8] p-1.5 shadow-md" : "bg-transparent p-0"
                  }`}>
                    <div className="w-full aspect-square rounded-xl overflow-hidden relative" style={{ backgroundColor: "#7a6830" }}>
                      <Image
                        src={src}
                        alt={label}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  {/* Label */}
                  <p className={`text-[10px] font-semibold tracking-wider mt-1.5 mb-3 ${
                    active ? "text-gray-700" : "text-gray-400"
                  }`}>
                    {label}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
