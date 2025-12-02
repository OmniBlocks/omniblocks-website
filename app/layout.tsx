import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OmniBlocks",
  description: "The Ultimate MultiLanguage IDE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        {/* Header */}
        <header className="w-full bg-black text-white px-6 py-4">
          <h1 className="text-xl font-bold">OmniBlocks</h1>
        </header>

        {/* Main content */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <footer className="w-full bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 px-6 py-4 text-center text-sm">
          &copy; {new Date().getFullYear()} OmniBlocks. OmniBlocks is free software, you can distribute and modify it under the AGPLv3.
        </footer>
      </body>
    </html>
  );
}
