export type Kategori = "Kopi" | "Non-Kopi" | "Pastry";

export type Produk = {
  id: string;
  nama: string;
  deskripsi: string;
  harga: number;
  kategori: Kategori;
  // ponytail: emoji jadi placeholder foto, ganti dengan <Image> saat foto asli siap
  emoji: string;
};

export const KATEGORI: Kategori[] = ["Kopi", "Non-Kopi", "Pastry"];

export const menu: Produk[] = [
  {
    id: "espresso",
    nama: "Espresso",
    deskripsi: "Sari kopi pekat dalam satu tegukan singkat.",
    harga: 22000,
    kategori: "Kopi",
    emoji: "☕",
  },
  {
    id: "kopi-susu-gula-aren",
    nama: "Kopi Susu Gula Aren",
    deskripsi: "Espresso, susu segar, dan manis legit gula aren.",
    harga: 28000,
    kategori: "Kopi",
    emoji: "🥤",
  },
  {
    id: "caffe-latte",
    nama: "Caffè Latte",
    deskripsi: "Espresso lembut dengan susu steam dan busa tipis.",
    harga: 32000,
    kategori: "Kopi",
    emoji: "🍶",
  },
  {
    id: "cold-brew",
    nama: "Cold Brew",
    deskripsi: "Diseduh dingin dua belas jam, ringan dan rendah asam.",
    harga: 35000,
    kategori: "Kopi",
    emoji: "🧊",
  },
  {
    id: "cokelat-panas",
    nama: "Cokelat Panas",
    deskripsi: "Cokelat pekat yang diaduk dengan susu hangat.",
    harga: 30000,
    kategori: "Non-Kopi",
    emoji: "🍫",
  },
  {
    id: "teh-tarik",
    nama: "Teh Tarik",
    deskripsi: "Teh hitam pekat yang ditarik hingga berbusa.",
    harga: 25000,
    kategori: "Non-Kopi",
    emoji: "🫖",
  },
  {
    id: "croissant-mentega",
    nama: "Croissant Mentega",
    deskripsi: "Berlapis renyah dengan aroma mentega yang tebal.",
    harga: 27000,
    kategori: "Pastry",
    emoji: "🥐",
  },
  {
    id: "pain-au-chocolat",
    nama: "Pain au Chocolat",
    deskripsi: "Pastry berlapis dengan batang cokelat hitam di dalamnya.",
    harga: 30000,
    kategori: "Pastry",
    emoji: "🥧",
  },
];

const rupiah = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  maximumFractionDigits: 0,
});

export const formatHarga = (harga: number) => rupiah.format(harga);

const ID_FAVORIT = ["kopi-susu-gula-aren", "cold-brew", "croissant-mentega"];

export const favorit = menu.filter((p) => ID_FAVORIT.includes(p.id));
