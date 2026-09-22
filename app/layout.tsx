import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const NAV = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/booking", label: "Booking" },
];

export const metadata: Metadata = {
  title: "Kopi Kita",
  description: "Coffee shop dengan menu, booking meja, dan CMS.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="sticky top-0 z-20 border-b border-garis bg-krem/90 backdrop-blur">
          <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
            <Link
              href="/"
              className="text-lg font-semibold tracking-tight text-coklat"
            >
              Kopi Kita
            </Link>
            <div className="flex items-center gap-1 sm:gap-3">
              {NAV.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  className="rounded-full px-3 py-2 text-sm font-medium text-coklat-muda transition-colors hover:bg-aksen-lembut hover:text-coklat sm:px-4"
                >
                  {n.label}
                </Link>
              ))}
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
