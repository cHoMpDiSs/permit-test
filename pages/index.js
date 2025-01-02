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
    <div className="mx-auto sm:max-w-4xl md:max-w-4xl">
    <main className="text-center">
      <div className="mt-20">
        <div className="mt-4">
        <p className="text-6xl  xl:text-8xl lg:text-7xl mb-10 text-center mx-auto">
        Ali Permit Test
      </p>
        </div>

      </div>
  
      <Quiz />
    </main>
  </div>
  
  
  );
}
