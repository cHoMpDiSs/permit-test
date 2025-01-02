import Image from "next/image";
import { Typography } from "@mui/material";
import { Geist, Geist_Mono } from "next/font/google";
import Quiz from "@/components/quiz";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
           <Typography variant="h9" className="text-6xl mb-2">Ali Permit Test</Typography>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
    <Quiz/>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      
      
      </footer>
    </div>
  );
}
