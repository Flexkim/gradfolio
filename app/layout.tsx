import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gradfolio — Publish your academic work",
  description: "A permanent, verifiable home for graduate projects.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
