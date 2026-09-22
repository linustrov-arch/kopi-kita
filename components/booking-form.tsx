"use client";

import { useState } from "react";
import {
  BOOKING_KOSONG,
  validateBooking,
  type BookingInput,
} from "@/lib/booking-validation";

const JAM = Array.from(
  { length: 12 },
  (_, i) => `${String(i + 10).padStart(2, "0")}:00`,
);

const inputClass =
  "w-full rounded-2xl border bg-krem-muda px-4 py-3 text-base text-coklat outline-none transition-colors";

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

function PesanError({ id, pesan }: { id: string; pesan?: string }) {
  if (!pesan) return null;
  return (
    <p id={id} role="alert" className="mt-1.5 text-sm text-merah">
      {pesan}
    </p>
  );
}

export function BookingForm() {
  const [nilai, setNilai] = useState<BookingInput>(BOOKING_KOSONG);
  const [disentuh, setDisentuh] = useState<Partial<Record<string, boolean>>>({});
  const [hasil, setHasil] = useState<BookingInput | null>(null);

  const errors = validateBooking(nilai);
  const valid = Object.keys(errors).length === 0;

  const ubah = (field: keyof BookingInput) => (v: string) =>
    setNilai((s) => ({ ...s, [field]: v }));

  const tandai = (field: keyof BookingInput) => () =>
    setDisentuh((s) => ({ ...s, [field]: true }));

  const pesanError = (field: keyof BookingInput) =>
    disentuh[field] ? errors[field] : undefined;

  const kelasInput = (field: keyof BookingInput) =>
    `${inputClass} mt-2 ${
      pesanError(field)
        ? "border-merah focus:border-merah"
        : "border-garis focus:border-aksen"
    }`;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!valid) return;
    // ponytail: mock, data cuma ditahan di state, tidak dikirim ke mana pun
    setHasil(nilai);
  }

  function ulang() {
    setNilai(BOOKING_KOSONG);
    setDisentuh({});
    setHasil(null);
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
          onClick={ulang}
          className="mt-7 rounded-full bg-coklat px-7 py-3.5 text-sm font-semibold text-krem transition-opacity hover:opacity-90"
        >
          Buat Booking Baru
        </button>
      </div>
    );
  }

  const aria = (field: keyof BookingInput) => ({
    "aria-invalid": pesanError(field) ? true : undefined,
    "aria-describedby": pesanError(field) ? `${field}-error` : undefined,
  });

  return (
    <form
      noValidate
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
            type="text"
            autoComplete="name"
            value={nilai.nama}
            onChange={(e) => ubah("nama")(e.target.value)}
            onBlur={tandai("nama")}
            className={kelasInput("nama")}
            {...aria("nama")}
          />
          <PesanError id="nama-error" pesan={pesanError("nama")} />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="whatsapp" className={labelClass}>
            Nomor WhatsApp
          </label>
          <input
            id="whatsapp"
            type="text"
            inputMode="numeric"
            autoComplete="tel"
            placeholder="081234567890"
            value={nilai.whatsapp}
            onChange={(e) => ubah("whatsapp")(e.target.value)}
            onBlur={tandai("whatsapp")}
            className={kelasInput("whatsapp")}
            {...aria("whatsapp")}
          />
          <PesanError id="whatsapp-error" pesan={pesanError("whatsapp")} />
        </div>

        <div>
          <label htmlFor="tanggal" className={labelClass}>
            Tanggal
          </label>
          <input
            id="tanggal"
            type="date"
            value={nilai.tanggal}
            onChange={(e) => ubah("tanggal")(e.target.value)}
            onBlur={tandai("tanggal")}
            className={kelasInput("tanggal")}
            {...aria("tanggal")}
          />
          <PesanError id="tanggal-error" pesan={pesanError("tanggal")} />
        </div>

        <div>
          <label htmlFor="jam" className={labelClass}>
            Jam
          </label>
          <select
            id="jam"
            value={nilai.jam}
            onChange={(e) => ubah("jam")(e.target.value)}
            onBlur={tandai("jam")}
            className={kelasInput("jam")}
            {...aria("jam")}
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
          <PesanError id="jam-error" pesan={pesanError("jam")} />
        </div>

        <div>
          <label htmlFor="orang" className={labelClass}>
            Jumlah orang
          </label>
          <input
            id="orang"
            type="number"
            min={1}
            max={8}
            value={nilai.orang}
            onChange={(e) => ubah("orang")(e.target.value)}
            onBlur={tandai("orang")}
            className={kelasInput("orang")}
            {...aria("orang")}
          />
          <PesanError id="orang-error" pesan={pesanError("orang")} />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="catatan" className={labelClass}>
            Catatan{" "}
            <span className="font-normal text-coklat-muda">(opsional)</span>
          </label>
          <textarea
            id="catatan"
            rows={4}
            value={nilai.catatan}
            onChange={(e) => ubah("catatan")(e.target.value)}
            className={`${inputClass} mt-2 resize-y border-garis focus:border-aksen`}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={!valid}
        className="mt-7 rounded-full bg-coklat px-7 py-3.5 text-sm font-semibold text-krem transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Booking Sekarang
      </button>
    </form>
  );
}
