import { BookingForm } from "@/components/booking-form";

export const metadata = {
  title: "Booking Meja — Kopi Kita",
  description: "Pesan meja di Kopi Kita untuk tanggal dan jam pilihanmu.",
};

export default function BookingPage() {
  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-5 py-12 sm:px-8 sm:py-16">
      <header className="max-w-lg">
        <p className="text-sm font-medium tracking-[0.2em] text-aksen uppercase">
          Kopi Kita
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-coklat sm:text-5xl">
          Booking Meja
        </h1>
        <p className="mt-4 text-base leading-relaxed text-coklat-muda">
          Isi datanya sebentar, mejanya kami siapkan sebelum kamu sampai.
        </p>
      </header>

      <div className="mt-10">
        <BookingForm />
      </div>
    </main>
  );
}
