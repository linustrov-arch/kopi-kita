import { formatHarga, type Product } from "@/lib/menu-data";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="relative flex flex-col overflow-hidden rounded-3xl border border-garis bg-krem-muda">
      <div className="relative aspect-[4/3] bg-aksen-lembut">
        {/* ponytail: <img> + SVG placeholder, ganti ke next/image saat foto asli masuk */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.name}
          className={`h-full w-full object-cover ${
            product.available ? "" : "opacity-40 grayscale"
          }`}
        />
        {!product.available && (
          <span className="absolute top-3 left-3 rounded-full bg-coklat px-3 py-1 text-xs font-semibold text-krem">
            Habis
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="text-base font-semibold text-coklat sm:text-lg">
          {product.name}
        </h3>
        <p className="mt-1.5 flex-1 text-sm leading-relaxed text-coklat-muda">
          {product.description}
        </p>
        <p className="mt-4 text-sm font-semibold text-coklat sm:text-base">
          {formatHarga(product.price)}
        </p>
      </div>
    </article>
  );
}
