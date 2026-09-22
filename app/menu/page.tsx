"use client";

import { useState } from "react";
import { KartuProduk } from "@/app/components/kartu-produk";
import { KATEGORI, menu, type Kategori } from "@/lib/menu-data";

type Filter = Kategori | "Semua";

const FILTER: Filter[] = ["Semua", ...KATEGORI];

export default function MenuPage() {
  const [aktif, setAktif] = useState<Filter>("Semua");
  const tampil =
    aktif === "Semua" ? menu : menu.filter((p) => p.kategori === aktif);

  return (
    <main className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
      <header className="max-w-lg">
        <p className="text-sm font-medium tracking-[0.2em] text-aksen uppercase">
          Kopi Kita
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-coklat sm:text-5xl">
          Menu
        </h1>
        <p className="mt-4 text-base leading-relaxed text-coklat-muda">
          Diseduh setiap pagi dari biji pilihan, ditemani pastry yang dipanggang
          hari itu juga.
        </p>
      </header>

      <div className="mt-10 flex flex-wrap gap-2.5">
        {FILTER.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setAktif(f)}
            aria-pressed={aktif === f}
            className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
              aktif === f
                ? "bg-coklat text-krem"
                : "border border-garis bg-krem-muda text-coklat-muda hover:border-coklat-muda hover:text-coklat"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-2 gap-5 lg:grid-cols-4 lg:gap-6">
        {tampil.map((p) => (
          <KartuProduk key={p.id} produk={p} />
        ))}
      </div>
    </main>
  );
}
