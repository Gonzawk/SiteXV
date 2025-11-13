import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Parisienne, Manrope, Bodoni_Moda } from "next/font/google";

// === FUENTES ===
export const display = Parisienne({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

export const body = Manrope({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-body",
});

export const bodoni = Bodoni_Moda({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-bodoni",
});

// === VIEWPORT (para themeColor) ===
export const viewport: Viewport = {
  themeColor: "#0E0E0E",
};

// === METADATA ===
export const metadata: Metadata = {
  title: "Bianca — Mis 15 años",
  description:
    "Invitación a los 15 años de Bianca. Sábado 6 de Diciembre, 22:00 hs. Salón de Eventos Heaven.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Bianca — Mis 15 años",
    description: "Sábado 6 de Diciembre, 22:00 hs. Salón Heaven",
    url: "https://i.ibb.co/gbrdVBLw/og-image.png",
    siteName: "Invitación Bianca 15",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bianca — Mis 15 años",
    description: "Sábado 6 de Diciembre, 22:00 hs. Salón Heaven",
    images: ["/og-image.png"],
  },
};

// === LAYOUT ===
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body
        className={`${display.variable} ${bodoni.variable} ${body.variable} bg-white text-black`}
      >
        {children}
      </body>
    </html>
  );
}
