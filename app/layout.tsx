import type { Metadata } from "next";

import "./globals.css";
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
  title: "Alireza ghnz",
  description: "A Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />

      <body className="bg-gray-900">
        <NextTopLoader color="#2563eb" showSpinner={true} />
        {children}
      </body>
    </html>
  );
}
