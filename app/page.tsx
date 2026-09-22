import Link from "next/link";
import { KartuProduk } from "@/app/components/kartu-produk";
import { favorit } from "@/lib/menu-data";

const ALAMAT = ["Jl. Melati No. 12", "Kebayoran Baru, Jakarta Selatan 12160"];

const JAM_BUKA = [
  { hari: "Senin – Jumat", jam: "07.00 – 22.00" },
  { hari: "Sabtu – Minggu", jam: "08.00 – 23.00" },
];

const SOSIAL = [
  { nama: "Instagram", href: "#" },
  { nama: "TikTok", href: "#" },
  { nama: "WhatsApp", href: "#" },
];

export default function Home() {
  return (
    <>
      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto grid w-full max-w-6xl items-center gap-10 px-5 py-14 sm:px-8 sm:py-20 md:grid-cols-2 md:gap-14">
          <div>
            <p className="text-sm font-medium tracking-[0.2em] text-aksen uppercase">
              Sejak 2019
            </p>
            <h1 className="mt-4 text-4xl leading-[1.1] font-semibold tracking-tight text-coklat sm:text-5xl lg:text-6xl">
              Kopi Kita
            </h1>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-coklat-muda">
              Tempat hangat untuk secangkir kopi yang jujur, pastry yang baru
              keluar oven, dan obrolan yang tidak buru-buru.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/menu"
                className="rounded-full bg-coklat px-7 py-3.5 text-sm font-semibold text-krem transition-opacity hover:opacity-90"
              >
                Lihat Menu
              </Link>
              <Link
                href="/booking"
                className="rounded-full border border-coklat px-7 py-3.5 text-sm font-semibold text-coklat transition-colors hover:bg-aksen-lembut"
              >
                Booking Meja
              </Link>
            </div>
          </div>
          {/* ponytail: placeholder suasana, ganti dengan <Image> saat foto siap */}
          <div className="flex aspect-[4/3] items-center justify-center rounded-[2rem] border border-garis bg-gradient-to-br from-aksen-lembut to-[#d8b894] text-6xl sm:text-7xl">
            <span role="img" aria-label="Suasana kedai Kopi Kita">
              ☕
            </span>
          </div>
        </section>

        {/* Menu Favorit */}
        <section className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-coklat sm:text-4xl">
                Menu Favorit
              </h2>
              <p className="mt-3 max-w-md text-base leading-relaxed text-coklat-muda">
                Tiga yang paling sering dipesan tamu kami.
              </p>
            </div>
            <Link
              href="/menu"
              className="text-sm font-semibold text-aksen underline-offset-4 hover:underline"
            >
              Lihat semua menu →
            </Link>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-3 sm:gap-6">
            {favorit.map((p) => (
              <KartuProduk key={p.id} produk={p} />
            ))}
          </div>
        </section>

        {/* Info: jam buka, alamat, peta */}
        <section className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-14 sm:px-8 sm:py-16 md:grid-cols-2 md:gap-12">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-coklat sm:text-4xl">
              Mampir ke Kedai
            </h2>

            <h3 className="mt-8 text-sm font-semibold tracking-[0.15em] text-aksen uppercase">
              Jam Buka
            </h3>
            <dl className="mt-3 space-y-2">
              {JAM_BUKA.map((j) => (
                <div
                  key={j.hari}
                  className="flex justify-between gap-4 border-b border-garis pb-2 text-base"
                >
                  <dt className="text-coklat-muda">{j.hari}</dt>
                  <dd className="font-medium text-coklat">{j.jam}</dd>
                </div>
              ))}
            </dl>

            <h3 className="mt-8 text-sm font-semibold tracking-[0.15em] text-aksen uppercase">
              Alamat
            </h3>
            <address className="mt-3 text-base leading-relaxed text-coklat-muda not-italic">
              {ALAMAT.map((baris) => (
                <span key={baris} className="block">
                  {baris}
                </span>
              ))}
            </address>
          </div>
          {/* ponytail: kotak peta statis, ganti dengan embed Maps kalau perlu interaktif */}
          <div className="flex min-h-64 items-center justify-center rounded-[2rem] border border-garis bg-gradient-to-br from-aksen-lembut to-[#e3cdb0] p-6 text-center">
            <div>
              <p className="text-4xl" role="img" aria-label="Peta lokasi">
                🗺️
              </p>
              <p className="mt-3 text-sm font-medium text-coklat">
                Peta lokasi akan tampil di sini
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-garis bg-krem-muda">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-12 sm:grid-cols-3 sm:px-8">
          <div>
            <p className="text-lg font-semibold tracking-tight text-coklat">
              Kopi Kita
            </p>
            <address className="mt-3 text-sm leading-relaxed text-coklat-muda not-italic">
              {ALAMAT.map((baris) => (
                <span key={baris} className="block">
                  {baris}
                </span>
              ))}
            </address>
          </div>
          <div>
            <p className="text-sm font-semibold text-coklat">Jam Buka</p>
            <ul className="mt-3 space-y-1.5 text-sm text-coklat-muda">
              {JAM_BUKA.map((j) => (
                <li key={j.hari}>
                  {j.hari}: {j.jam}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-coklat">Ikuti Kami</p>
            <ul className="mt-3 space-y-1.5 text-sm">
              {SOSIAL.map((s) => (
                <li key={s.nama}>
                  <a
                    href={s.href}
                    className="text-coklat-muda underline-offset-4 transition-colors hover:text-aksen hover:underline"
                  >
                    {s.nama}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-garis">
          <p className="mx-auto w-full max-w-6xl px-5 py-5 text-xs text-coklat-muda sm:px-8">
            © {new Date().getFullYear()} Kopi Kita. Semua hak dilindungi.
          </p>
        </div>
      </footer>
    </>
  );
}
