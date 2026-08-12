

"use client";

import { motion } from "framer-motion";

export default function PricingSection() {
  return (
    <section className="relative w-full max-w-[1600px] lg:top-80 mx-auto px-4 sm:px-6 md:px-12 my-10 lg:my-16">
      <div className="relative w-full">
        {/* Gradient border layer */}
        
        <motion.div
            className="absolute -left-1 md:-left-3 xl:-left-3 right-3 md:right-4  xl:right-3  top-4 -bottom-3 rounded-[24px] xl:rounded-[36px] overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          >
            <div
              className="gradient-border-spin absolute "
              style={{
                inset: "-200%",
                backgroundImage:
                  "conic-gradient(from 0deg, #E7DFD4, #E9BFC9, #FF59AE, #FD368A, #F45669, #EC7551, #49AA3F, #1C997C, #B1DFAB, #E7DFD4)",
              }}
            />
          </motion.div>

        {/* Card Content */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0 }}
          className="relative w-full bg-white mr-4 ml-2 md:mr-0 md:ml-0 border-2 border-[#17100E] rounded-[24px] lg:rounded-3xl p-5 sm:p-8 lg:p-10 xl:p-12 box-border"
        >
          <div className="flex flex-col lg:flex-row lg:items-stretch justify-between gap-8 lg:gap-12">
            {/* Left Column: Heading & Paragraph */}
            <div className="flex flex-col justify-between max-w-full lg:max-w-[580px] gap-6">
              <h2 className="font-poppins font-light text-3xl md:text-4xl lg:text-[64px] xl:text-[64px] leading-tight lg:leading-[1.05] tracking-[-1px] lg:tracking-[-2px] text-[#17100E]">
                The most powerful NFT marketplace
              </h2>

              <p className="font-poppins font-normal text-sm sm:text-lg lg:text-22px] leading-relaxed lg:leading-[28px] tracking-[-0.4px] lg:tracking-[-0.6px] text-[#17100E]">
                Aggregator with over 170 marketplaces.
                <br className="hidden lg:block" />
                List on OpenOcean Pro for{" "}
                <a
                  href="https://support.opensea.io/hc/en-us/articles/14068991090067-What-are-OpenSea-s-fees"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  0.5% fees
                </a>
                .
              </p>
            </div>

            {/* Middle Divider Image / Border */}
            <img
              src="/dotted_for_PriceSection/Image.png"
              alt=""
              className="hidden lg:block w-[8px] h-auto ml-20 object-cover self-stretch"
            />

            {/* Right Column: Price & Action */}
            <div className="flex flex-col justify-between items-start lg:items-end lg:pr-1 gap-3  lg:gap-6 min-w-0 lg:min-w-[350px]">

         
             <div className="flex flex-wrap ml-[-4] items-end gap-2 sm:gap-4 mt-0 lg:mt-0 lg:contents min-w-0 w-full">
               <span className="static lg:absolute lg:right-[329px] lg:top-[48px] w-auto lg:w-[44px] h-auto lg:h-[22px] flex items-center lg:justify-end font-inter font-normal text-xl sm:text-2xl  lg:text-[18px] leading-none lg:leading-[22px] text-[#17100E]">
                 From
               </span>

               <span className="static lg:absolute lg:right-[40px] lg:top-[48px] w-auto lg:w-[310px] h-auto lg:h-[172px] flex items-center lg:justify-end font-inter lg:font-light text-xl sm:text-2xl  lg:text-[180px] leading-none  lg:leading-[172px]  lg:tracking-[-16px] text-black lg:text-[#17100E]">
                 $29
               </span>

               <span className="static lg:absolute lg:right-[40px] lg:top-[224px] w-auto lg:w-[88px] h-auto lg:h-[22px] flex items-center lg:justify-end font-inter font-normal text-xl sm:text-2xl  lg:text-[18px] leading-none lg:leading-[22px] text-[#17100E]">
                per month
               </span>
             </div>

       

              <div className="w-full flex justify-center ml-[-4]">
              <button className="w-[150px] sm:w-[176px] lg:absolute lg:right-[40px] lg:bottom-[40px] lg:w-[176px] h-[44px] sm:h-[56px] flex flex-row justify-center items-center gap-[8px] sm:gap-[10px] px-4 py-3 sm:px-5 sm:py-5 mt-6 lg:mt-0 border-2 border-[#17100E] rounded-lg sm:rounded-xl box-border cursor-pointer active:bg-black/10">
               <span className="w-auto lg:w-[128px] h-[13px] sm:h-[16px] flex items-center justify-center font-poppins font-bold text-[13px] sm:text-[16px] leading-[13px] sm:leading-[16px] tracking-[-0.4px] text-[#17100E] whitespace-nowrap">
                 View our pricing
               </span>
             </button>
             </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}




