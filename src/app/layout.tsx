import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextAuthProvider } from "@/components/providers/session-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "PrepAI - Intelligent Interview & Coding Preparation Platform",
  description: "AI-powered interview training, DSA practice, and performance analytics to help you ace your technical interviews.",
  keywords: ["interview preparation", "coding practice", "AI training", "technical interviews", "DSA problems"],
  authors: [{ name: "PrepAI Team" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <NextAuthProvider>
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
