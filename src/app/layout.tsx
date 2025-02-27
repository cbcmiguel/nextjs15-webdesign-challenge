import type { Metadata } from "next";
import { Inter } from "next/font/google";
import * as React from "react";
import { HeroUIProvider } from "@heroui/system";

const inter = Inter({ 
  weight:['400', '500', '600', '700'],
  subsets: ["latin"],
  display: 'fallback' });

import "./globals.css";
import { Navigation } from "./components/navigation";


export const metadata: Metadata = {
  title: "Web Challenge",
  description: "Generated by create next app",
  icons:{
    icon: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body
        className={`antialiased max-w-[1728px] mx-auto md:px-[124px] xs:pt-[64px] md:pt-0 sm:min-w-[430px]`}
      >
        <HeroUIProvider>
          <header>
            <Navigation/>
          </header>
          {children}
        </HeroUIProvider>
    
      </body>
    </html>
  );
}
