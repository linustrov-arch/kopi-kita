export type BookingInput = {
  nama: string;
  whatsapp: string;
  tanggal: string;
  jam: string;
  orang: string;
  catatan: string;
};

export type BookingErrors = Partial<Record<keyof BookingInput, string>>;

export const BOOKING_KOSONG: BookingInput = {
  nama: "",
  whatsapp: "",
  tanggal: "",
  jam: "",
  orang: "2",
  catatan: "",
};

/** "2026-09-25" untuk hari ini, di zona waktu lokal. */
export function hariIni(now = new Date()): string {
  const lokal = new Date(now.getTime() - now.getTimezoneOffset() * 60_000);
  return lokal.toISOString().slice(0, 10);
}

/**
 * Catatan opsional, sisanya wajib. `batas` di-inject supaya bisa dites tanpa
 * bergantung jam dinding.
 */
export function validateBooking(
  v: BookingInput,
  batas = hariIni(),
): BookingErrors {
  const errors: BookingErrors = {};

  if (!v.nama.trim()) errors.nama = "Nama lengkap wajib diisi.";

  const wa = v.whatsapp.trim();
  if (!wa) errors.whatsapp = "Nomor WhatsApp wajib diisi.";
  else if (!/^\d+$/.test(wa)) errors.whatsapp = "Nomor hanya boleh angka.";
  else if (wa.length < 10) errors.whatsapp = "Nomor minimal 10 digit.";

  if (!v.tanggal) errors.tanggal = "Tanggal wajib diisi.";
  else if (v.tanggal < batas)
    errors.tanggal = "Tanggal tidak boleh sebelum hari ini.";

  if (!v.jam) errors.jam = "Jam wajib dipilih.";

  const orang = Number(v.orang);
  if (!v.orang.trim()) errors.orang = "Jumlah orang wajib diisi.";
  else if (!Number.isInteger(orang) || orang < 1 || orang > 8)
    errors.orang = "Jumlah orang antara 1 sampai 8.";

  return errors;
}
