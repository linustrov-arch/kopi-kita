"use client";

import { useState } from "react";
import { ProductCard } from "@/components/product-card";
import { CATEGORY_LABEL, products, type Category } from "@/lib/menu-data";

type Tab = Category | "semua";

const TABS: Tab[] = ["semua", "kopi", "non-kopi", "pastry"];

const labelTab = (t: Tab) => (t === "semua" ? "Semua" : CATEGORY_LABEL[t]);

export default function MenuPage() {
  const [aktif, setAktif] = useState<Tab>("semua");
  const tampil =
    aktif === "semua" ? products : products.filter((p) => p.category === aktif);

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-5 py-12 sm:px-8 sm:py-16">
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

      <div
        role="tablist"
        aria-label="Filter kategori"
        className="mt-10 flex flex-wrap gap-1 border-b border-garis"
      >
        {TABS.map((t) => (
          <button
            key={t}
            type="button"
            role="tab"
            aria-selected={aktif === t}
            onClick={() => setAktif(t)}
            className={`-mb-px border-b-2 px-4 py-3 text-sm font-medium transition-colors sm:px-5 ${
              aktif === t
                ? "border-aksen text-coklat"
                : "border-transparent text-coklat-muda hover:text-coklat"
            }`}
          >
            {labelTab(t)}
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-2 gap-5 lg:grid-cols-4 lg:gap-6">
        {tampil.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </main>
  );
}
