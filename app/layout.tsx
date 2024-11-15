import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Faq Frontend Mentor Challenge",
  description: "FAQ Accordion Challenge using Next.js, React, and Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative font-sans antialiased bg-light-pink min-h-screen">
        {/* Background image container */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          {/* Mobile background pattern */}
          <Image
            src="/background-pattern-mobile.svg"
            width={375}
            height={232}
            alt="Mobile background image"
            className="block md:hidden w-full"
          />

          {/* Desktop background pattern */}
          <Image
            src="/background-pattern-desktop.svg"
            width={1440}
            height={320}
            alt="Desktop background image"
            className="hidden md:block w-full"
          />
        </div>

        {/* Content area with z-index to overlay on background */}
        <main className="relative z-10 flex justify-center items-center">
          {children}
        </main>

        <SpeedInsights />
      </body>
    </html>
  );
}
