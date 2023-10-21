import Navbar from "@/components/Navbar";
import "./globals.css"
import type { Metadata } from "next";
import {Inter} from "next/font/google"
import Footer from "@/components/Footer";
import {cn} from "@/lib/utils";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quiz API",
  description: "A quiz API for Django",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
      <body className={inter.className}>
          <Navbar />
          {children}
          <Footer />
      </body>
      </html>
  );
}
