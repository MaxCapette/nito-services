import type { Metadata } from "next";
import { Fredoka } from "next/font/google"; // Correct import statement for Fredoka
import "./globals.css";

const fredoka = Fredoka({ subsets: ["latin"], weight: "400" }); // Configuration de la police Fredoka One

export const metadata: Metadata = {
  title: "NITO SERVICES",
  description: "Bienvenue sur le site de NITO SERVICES",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fredoka.className}>{children}</body> {/* Utilisation de la police Fredoka One */}
    </html>
  );
}
