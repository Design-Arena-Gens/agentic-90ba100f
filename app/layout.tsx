import "./globals.css";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair"
});

export const metadata: Metadata = {
  title: "Xin chào | Vietnamese Greeting",
  description:
    "A warm Vietnamese greeting experience designed to welcome everyone with thoughtful phrases and interactive elements."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-gradient-to-br from-primary-900 via-primary-700 to-primary-500 text-white antialiased">
        {children}
      </body>
    </html>
  );
}
