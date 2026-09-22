export type Category = "kopi" | "non-kopi" | "pastry";

export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: Category;
  image: string;
  available: boolean;
};

export const CATEGORY_LABEL: Record<Category, string> = {
  kopi: "Kopi",
  "non-kopi": "Non-Kopi",
  pastry: "Pastry",
};

export const products: Product[] = [
  {
    id: 1,
    name: "Kopi Susu Kita",
    description:
      "Racikan andalan kami: espresso, susu segar, dan manis yang pas bikin nagih.",
    price: 22000,
    category: "kopi",
    image: "/images/menu/kopi-susu-kita.svg",
    available: true,
  },
  {
    id: 2,
    name: "Americano",
    description:
      "Hitam bersih dengan aroma yang langsung membangunkan pagimu.",
    price: 20000,
    category: "kopi",
    image: "/images/menu/americano.svg",
    available: true,
  },
  {
    id: 3,
    name: "Es Kopi Gula Aren",
    description:
      "Manis legit gula aren yang lumer pelan di antara es dan kopi pekat.",
    price: 25000,
    category: "kopi",
    image: "/images/menu/es-kopi-gula-aren.svg",
    available: true,
  },
  {
    id: 4,
    name: "Matcha Latte",
    description:
      "Matcha Jepang yang creamy dengan sisa rasa manis yang lembut di lidah.",
    price: 30000,
    category: "non-kopi",
    image: "/images/menu/matcha-latte.svg",
    available: true,
  },
  {
    id: 5,
    name: "Coklat Panas",
    description: "Coklat pekat yang meleleh hangat sampai ke dada.",
    price: 26000,
    category: "non-kopi",
    image: "/images/menu/coklat-panas.svg",
    available: true,
  },
  {
    id: 6,
    name: "Croissant",
    description: "Berlapis mentega, renyah di luar, lembut begitu digigit.",
    price: 28000,
    category: "pastry",
    image: "/images/menu/croissant.svg",
    available: true,
  },
  {
    id: 7,
    name: "Roti Bakar Keju",
    description: "Keju leleh di atas roti panggang yang masih mengepul.",
    price: 18000,
    category: "pastry",
    image: "/images/menu/roti-bakar-keju.svg",
    available: true,
  },
  {
    id: 8,
    name: "Banana Bread",
    description:
      "Pisang matang dan kayu manis yang memenuhi ruangan saat baru keluar oven.",
    price: 15000,
    category: "pastry",
    image: "/images/menu/banana-bread.svg",
    available: false,
  },
];

const rupiah = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  maximumFractionDigits: 0,
});

export const formatHarga = (price: number) => rupiah.format(price);

const ID_FAVORIT = [1, 3, 6];

export const favorit = products.filter((p) => ID_FAVORIT.includes(p.id));
