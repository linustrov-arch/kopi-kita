import { formatHarga, type Produk } from "@/lib/menu-data";

export function KartuProduk({ produk }: { produk: Produk }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-3xl border border-garis bg-krem-muda">
      <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-aksen-lembut to-[#dcc0a0] text-4xl sm:text-5xl">
        <span role="img" aria-label={produk.nama}>
          {produk.emoji}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="text-base font-semibold text-coklat sm:text-lg">
          {produk.nama}
        </h3>
        <p className="mt-1.5 flex-1 text-sm leading-relaxed text-coklat-muda">
          {produk.deskripsi}
        </p>
        <p className="mt-4 text-sm font-semibold text-coklat sm:text-base">
          {formatHarga(produk.harga)}
        </p>
      </div>
    </article>
  );
}
