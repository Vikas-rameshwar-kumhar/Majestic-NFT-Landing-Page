


"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PricingSection from "@/components/PricingSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import { motion, LayoutGroup } from "framer-motion";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-black text-white selection:bg-white/20">

      {/* ---------- DESKTOP/LARGE: scaled fixed canvas (unchanged) ---------- */}
     
      <main className="hidden lg:flex w-full max-w-[1916px] relative px-0 3xl:px-[94px] py-0 md:py-0 flex flex-col items-center">

       
        <div className="w-full max-w-[1728px] h-[3254px] relative rounded-none md:rounded-[36px] overflow-hidden bg-black shadow-2xl border border-white/5">

          {/* Background Image Layer */}
          <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
            <motion.div
              className="absolute inset-0 w-full h-full"
              animate={{
                scale: [1, 1.02, 1],   // zooms in and out
                x: [0, 0, 0],   // drifts left (toward bottom-left)
                y: [0, 0, 0],    // drifts down (toward bottom-left)
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image src="/bg/bg.png" alt="Forest Background" fill priority className="object-cover object-center w-full h-full" />


            </motion.div>

          </div>

        
          <div className="relative z-10 flex flex-col w-full">
  
            <LayoutGroup id="navbar-desktop">
              <Navbar />
            </LayoutGroup>

            <HeroSection />

            <PricingSection />

         
            <NewsletterSection />

          
            <Footer />
          </div>

        </div>

      </main>




      {/* ---------- MOBILE/TABLET: real, unscaled, reflowing layout ---------- */}
      <main className="flex lg:hidden flex-col w-full relative">



        <motion.div className="absolute inset-y-0 w-full h-full overflow-hidden">
  <motion.div
    className="absolute inset-0  h-full"
    animate={{
      scale: [1, 1.02, 1],   
      x: [0, 0, 0],
      y: [0, 0, 0],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <Image
      src="/bg/bg2.png"
      alt="Forest Background"
      fill
      priority
      className=" object-center object-cover scale-x-[-1]"
    />
  </motion.div>
</motion.div>
        <div className="relative z-10 flex flex-col w-full">
          <Navbar />
          <HeroSection />
          <PricingSection />
          {/* <NewsletterSection /> */}
          {/* <Footer /> */}
        </div>
      </main>

    </div>
  );
}