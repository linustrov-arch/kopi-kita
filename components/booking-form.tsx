"use client";

import { useState } from "react";

type Ringkasan = {
  nama: string;
  whatsapp: string;
  tanggal: string;
  jam: string;
  orang: string;
  catatan: string;
};

const JAM = Array.from(
  { length: 12 },
  (_, i) => `${String(i + 10).padStart(2, "0")}:00`,
);

const inputClass =
  "w-full rounded-2xl border border-garis bg-krem-muda px-4 py-3 text-base text-coklat outline-none transition-colors focus:border-aksen";

const labelClass = "block text-sm font-medium text-coklat";

// "2026-09-25" -> "Kamis, 25 September 2026". Suffix "T00:00" biar diparse
// sebagai waktu lokal, bukan UTC (tanpa itu tanggalnya bisa mundur sehari).
const formatTanggal = (tanggal: string) =>
  new Date(`${tanggal}T00:00`).toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export function BookingForm() {
  const [hasil, setHasil] = useState<Ringkasan | null>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // ponytail: mock, data cuma ditahan di state, tidak dikirim ke mana pun
    const data = new FormData(e.currentTarget);
    setHasil(Object.fromEntries(data) as Ringkasan);
  }

  if (hasil) {
    const baris = [
      { label: "Nama", nilai: hasil.nama },
      { label: "WhatsApp", nilai: hasil.whatsapp },
      { label: "Tanggal", nilai: formatTanggal(hasil.tanggal) },
      { label: "Jam", nilai: hasil.jam },
      { label: "Jumlah orang", nilai: `${hasil.orang} orang` },
      { label: "Catatan", nilai: hasil.catatan.trim() || "—" },
    ];

    return (
      <div className="rounded-3xl border border-garis bg-krem-muda p-6 sm:p-8">
        <p className="text-4xl" role="img" aria-label="Berhasil">
          🎉
        </p>
        <h2 className="mt-4 text-2xl font-semibold tracking-tight text-coklat">
          Booking kamu kami terima!
        </h2>
        <p className="mt-2 text-base leading-relaxed text-coklat-muda">
          Sampai jumpa di kedai. Kami tunggu, ya.
        </p>

        <dl className="mt-6 space-y-3">
          {baris.map((b) => (
            <div
              key={b.label}
              className="flex flex-wrap justify-between gap-x-4 gap-y-1 border-b border-garis pb-3 text-base"
            >
              <dt className="text-coklat-muda">{b.label}</dt>
              <dd className="font-medium text-coklat">{b.nilai}</dd>
            </div>
          ))}
        </dl>

        <button
          type="button"
          onClick={() => setHasil(null)}
          className="mt-7 rounded-full bg-coklat px-7 py-3.5 text-sm font-semibold text-krem transition-opacity hover:opacity-90"
        >
          Buat Booking Baru
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-garis bg-krem-muda p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="nama" className={labelClass}>
            Nama lengkap
          </label>
          <input
            id="nama"
            name="nama"
            type="text"
            required
            autoComplete="name"
            className={`${inputClass} mt-2`}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="whatsapp" className={labelClass}>
            Nomor WhatsApp
          </label>
          <input
            id="whatsapp"
            name="whatsapp"
            type="text"
            inputMode="tel"
            required
            autoComplete="tel"
            className={`${inputClass} mt-2`}
          />
        </div>

        <div>
          <label htmlFor="tanggal" className={labelClass}>
            Tanggal
          </label>
          <input
            id="tanggal"
            name="tanggal"
            type="date"
            required
            className={`${inputClass} mt-2`}
          />
        </div>

        <div>
          <label htmlFor="jam" className={labelClass}>
            Jam
          </label>
          <select
            id="jam"
            name="jam"
            required
            defaultValue=""
            className={`${inputClass} mt-2`}
          >
            <option value="" disabled>
              Pilih jam
            </option>
            {JAM.map((j) => (
              <option key={j} value={j}>
                {j}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="orang" className={labelClass}>
            Jumlah orang
          </label>
          <input
            id="orang"
            name="orang"
            type="number"
            min={1}
            max={8}
            defaultValue={2}
            required
            className={`${inputClass} mt-2`}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="catatan" className={labelClass}>
            Catatan{" "}
            <span className="font-normal text-coklat-muda">(opsional)</span>
          </label>
          <textarea
            id="catatan"
            name="catatan"
            rows={4}
            className={`${inputClass} mt-2 resize-y`}
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-7 rounded-full bg-coklat px-7 py-3.5 text-sm font-semibold text-krem transition-opacity hover:opacity-90"
      >
        Booking Sekarang
      </button>
    </form>
  );
}
