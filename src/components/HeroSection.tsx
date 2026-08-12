






// // responsive
// "use client";

// import React from "react";
// import { useState } from "react";
// import { motion } from "framer-motion";

// const dropDown = {
//   hidden: { opacity: 0, y: -40 },
//   show: { opacity: 1, y: 0 },
// };


// const dropDowntext = {
//   hidden: { opacity: 0, y: -50 },
//   visible: { opacity: 1, y: 0 },
// };

// // Container variant - controls the stagger timing for children
// const container = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.08,
//       delayChildren: 0.1,
//     },
//   },
// };

// // Each word's animation (reuses your dropDown feel - adjust y/opacity as needed)
// const word = {
//   hidden: { opacity: 0, y: 20 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.5, ease: "easeOut" },
//   },
// };


// export default function HeroSection() {
//   const [activeBtn, setActiveBtn] = useState<"trial" | "sales">("trial");

//   return (
//     <motion.section
//       className="relative w-full pt-[250px] sm:pt-[280px] lg:pt-[420px] pb-16 px-6 flex flex-col justify-start"
//       initial="hidden"
//       animate="show"
//       variants={{
//         hidden: {},
//         show: { transition: { staggerChildren: 0.25, delayChildren: 0.1 } },
//       }}
//       >


// {/* old */}
//       {/* 1. "The ancient forest protector comes to life" */}
//       <motion.div
//         variants={dropDown}
//         transition={{ duration: 0.5, ease: "easeOut" }}
//         className="w-full max-w-[400px] sm:max-w-[550px] md:max-w-[600px] lg:max-w-[930px] min-h-[0px] sm:min-h-[0px] lg:ml-16 "
//       >
//         <h1 className="font-poppins font-bold text-3xl sm:text-5xl lg:text-[88px] lg:left-16 leading-[40px] sm:leading-[65px] lg:leading-[80px] tracking-[-1px] sm:tracking-[-2px] lg:tracking-[-4px] text-white drop-shadow-md">
//           The ancient forest
//         </h1>
//       </motion.div>

//       <motion.div
//         variants={dropDown}
//         transition={{ duration: 0.5, ease: "easeOut" }}
//         className="w-full max-w-[400px] sm:max-w-[550px] md:max-w-[600px] lg:max-w-[930px] min-h-[50px] sm:min-h-[80px] lg:ml-16"
//       >
//         <h1 className="font-poppins font-bold text-3xl sm:text-5xl lg:text-[88px] lg:left-16 leading-[40px] sm:leading-[65px] lg:leading-[80px] tracking-[-1px] sm:tracking-[-2px] lg:tracking-[-4px] text-white drop-shadow-md">
//           protector comes to life
//         </h1>
//       </motion.div>

      
//       <motion.div
//         variants={dropDown}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//         className="w-full max-w-[180px] sm:max-w-[345px] lg:max-w-[553px] min-h-[60px] sm:min-h-[80px] left-[140px] sm:ml-[210px] md:ml-[210px] lg:ml-[441px] mt-2 lg:mt-0"
//       >
//         <h1 className="font-poppins font-bold text-3xl sm:text-5xl lg:text-[88px] leading-[1px] sm:leading-[10px] lg:leading-[80px] tracking-[-2px] mx-auto sm:tracking-[-2px] lg:tracking-[-4px] text-white drop-shadow-md">
//           majestic NFT
//         </h1>
//       </motion.div>


//       {/* 3. Paragraph */}
//       <motion.div
//         variants={dropDown}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//         className="w-full max-w-[380px] sm:max-w-[480px] md:max-w-[490px] lg:max-w-[580px] min-h-[100px] lg:min-h-[140px] mt-[-10] sm:mt-3 lg:mt-[80px] lg:ml-16"
//       >
//         <p className="font-poppins font-normal text-sm sm:text-lg lg:text-[22px] leading-relaxed lg:leading-[28px] tracking-[-0.4px] lg:tracking-[-0.6px] text-white/90 drop-shadow">
//           As the sun rises, a solitary figure faces a massive, antlered
//           guardian, and this breathtaking scene is immortalized in an NFT,
//           unveiling the timeless bond between humanity and mystical forces,
//           offering collectors a chance to secure this digital masterpiece.
//         </p>
//       </motion.div>

//       {/* 4. Buttons */}
//       <motion.div
//         variants={dropDown}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//         className="w-full sm:max-w-[326px] flex flex-wrap sm:flex-nowrap justify-center sm:justify-start items-center  gap-3 mt-6 lg:mt-[48px] lg:ml-16"
//         >
//         <motion.button
//           onClick={() => setActiveBtn("trial")}


//           className={`w-[130px] h-[44px] sm:w-[156px] sm:h-[56px] rounded-[10px] sm:rounded-[12px] gap-[8px] sm:gap-[10px] px-[16px] py-[12px] sm:pt-[20px] sm:pr-[24px] sm:pb-[20px] sm:pl-[24px] flex items-center justify-center whitespace-nowrap font-poppins font-bold text-[13px] sm:text-[16px] leading-[13px] sm:leading-[16px] tracking-[-0.4px] cursor-pointer transition-colors ${
//             activeBtn === "trial"
//               ? "bg-white text-black hover:bg-gray-100 shadow-lg"
//               : "border-[2px] border-white bg-transparent text-white"
//           }`}
//         >
//           Start free trial
//         </motion.button>

//         <motion.button
//           onClick={() => setActiveBtn("sales")}


//           className={`w-[130px] h-[44px] sm:w-[158px] sm:h-[56px] rounded-[10px] sm:rounded-[12px] gap-[8px] sm:gap-[10px] px-[16px] py-[12px] sm:pt-[20px] sm:pr-[24px] sm:pb-[20px] sm:pl-[24px] flex items-center justify-center whitespace-nowrap font-poppins font-bold text-[13px] sm:text-[16px] leading-[13px] sm:leading-[16px] tracking-[-0.4px] cursor-pointer transition-colors ${
//             activeBtn === "sales"
//               ? "bg-white text-black hover:bg-gray-100 shadow-lg"
//               : "border-[2px] border-white bg-transparent text-white"
//           }`}
          
//         >
//           Contact sales
//         </motion.button>
//       </motion.div>
//     </motion.section>
//   );
// }


















// // old
// "use client";

// import React from "react";
// import { useState } from "react";
// import { motion } from "framer-motion";

// const dropDown = {
//   hidden: { opacity: 0, y: -40 },
//   show: { opacity: 1, y: 0 },
// };



// export default function HeroSection() {
//   const [activeBtn, setActiveBtn] = useState<"trial" | "sales">("trial");

//   return (
//     <motion.section
//       className="relative w-full pt-[250px] sm:pt-[280px] lg:pt-[420px] pb-16 px-6 flex flex-col justify-start"
//       initial="hidden"
//       animate="show"
//       variants={{
//         hidden: {},
//         show: { transition: { staggerChildren: 0.25, delayChildren: 0.1 } },
//       }}
//       >



//       {/* 1. "The ancient forest protector comes to life" */}
//       <motion.div
//         variants={dropDown}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//         className="w-full max-w-[400px] sm:max-w-[550px] md:max-w-[600px] lg:max-w-[930px] min-h-[80px] sm:min-h-[130px] lg:ml-16"
//       >
//         <h1 className="font-poppins font-bold text-3xl sm:text-5xl lg:text-[88px] lg:left-16 leading-[40px] sm:leading-[65px] lg:leading-[80px] tracking-[-1px] sm:tracking-[-2px] lg:tracking-[-4px] text-white drop-shadow-md">
//           The ancient forest protector comes to life
//         </h1>
//       </motion.div>

      
//       <motion.div
//         variants={dropDown}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//         className="w-full max-w-[180px] sm:max-w-[345px] lg:max-w-[553px] min-h-[70px] sm:min-h-[100px] left-[140px] sm:ml-[210px] md:ml-[210px] lg:ml-[441px] mt-2 sm:mt-0 "
//       >
//         <h1 className="font-poppins font-bold text-3xl sm:text-5xl lg:text-[88px] leading-[40px] sm:leading-[70px] lg:leading-[80px] tracking-[-2px] mx-auto sm:tracking-[-2px] lg:tracking-[-4px] text-white drop-shadow-md">
//           majestic NFT
//         </h1>
//       </motion.div>


//       {/* 3. Paragraph */}
//       <motion.div
//         variants={dropDown}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//         className="w-full max-w-[380px] sm:max-w-[480px] md:max-w-[490px] lg:max-w-[580px] min-h-[100px] lg:min-h-[140px] mt-[-10] sm:mt-3 lg:mt-[80px] lg:ml-16"
//       >
//         <p className="font-poppins font-normal text-sm sm:text-lg lg:text-[22px] leading-relaxed lg:leading-[28px] tracking-[-0.4px] lg:tracking-[-0.6px] text-white/90 drop-shadow">
//           As the sun rises, a solitary figure faces a massive, antlered
//           guardian, and this breathtaking scene is immortalized in an NFT,
//           unveiling the timeless bond between humanity and mystical forces,
//           offering collectors a chance to secure this digital masterpiece.
//         </p>
//       </motion.div>

//       {/* 4. Buttons */}
//       <motion.div
//         variants={dropDown}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//         className="w-full sm:max-w-[326px] flex flex-wrap sm:flex-nowrap justify-center sm:justify-start items-center  gap-3 mt-6 lg:mt-[48px] lg:ml-16"
//         >
//         <motion.button
//           onClick={() => setActiveBtn("trial")}


//           className={`w-[130px] h-[44px] sm:w-[156px] sm:h-[56px] rounded-[10px] sm:rounded-[12px] gap-[8px] sm:gap-[10px] px-[16px] py-[12px] sm:pt-[20px] sm:pr-[24px] sm:pb-[20px] sm:pl-[24px] flex items-center justify-center whitespace-nowrap font-poppins font-bold text-[13px] sm:text-[16px] leading-[13px] sm:leading-[16px] tracking-[-0.4px] cursor-pointer transition-colors ${
//             activeBtn === "trial"
//               ? "bg-white text-black hover:bg-gray-100 shadow-lg"
//               : "border-[2px] border-white bg-transparent text-white"
//           }`}
//         >
//           Start free trial
//         </motion.button>

//         <motion.button
//           onClick={() => setActiveBtn("sales")}


//           className={`w-[130px] h-[44px] sm:w-[158px] sm:h-[56px] rounded-[10px] sm:rounded-[12px] gap-[8px] sm:gap-[10px] px-[16px] py-[12px] sm:pt-[20px] sm:pr-[24px] sm:pb-[20px] sm:pl-[24px] flex items-center justify-center whitespace-nowrap font-poppins font-bold text-[13px] sm:text-[16px] leading-[13px] sm:leading-[16px] tracking-[-0.4px] cursor-pointer transition-colors ${
//             activeBtn === "sales"
//               ? "bg-white text-black hover:bg-gray-100 shadow-lg"
//               : "border-[2px] border-white bg-transparent text-white"
//           }`}
          
//         >
//           Contact sales
//         </motion.button>
//       </motion.div>
//     </motion.section>
//   );
// }





















// word by word
"use client";

import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

const dropDown = {
  hidden: { opacity: 0, y: -40 },
  show: { opacity: 1, y: 0 },
};

// Wraps each heading's words with its own stagger timing
const wordContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08, // delay between each word
    },
  },
};

export default function HeroSection() {
  const [activeBtn, setActiveBtn] = useState<"trial" | "sales">("trial");

  const line1Words = ["The", "ancient", "forest", "protector", "comes", "to", "life"];
  const line2Words = ["majestic", "NFT"];

  return (
    <motion.section
      className="relative w-full pt-[250px] sm:pt-[280px] lg:pt-[420px] pb-16 px-6 flex flex-col justify-start"
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.25, delayChildren: 0.1 } },
      }}
      >


      {/* 1. "The ancient forest protector comes to life" */}
      <motion.div
        variants={wordContainer}
        className="w-full max-w-[400px] sm:max-w-[550px] md:max-w-[600px] lg:max-w-[975px] min-h-[80px] sm:min-h-[130px] lg:ml-16"
      >
        <h1 className="font-poppins font-bold text-3xl sm:text-5xl lg:text-[88px] lg:left-16 leading-[40px] sm:leading-[65px] lg:leading-[80px] tracking-[-1px] sm:tracking-[-2px] lg:tracking-[-4px] text-white drop-shadow-md flex flex-wrap">
          {line1Words.map((word, i) => (
            <motion.span
              key={i}
              variants={dropDown}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-block  mr-[0.25em]"
            >
              {word}
            </motion.span>
          ))}
        </h1>
      </motion.div>

     
      <motion.div
        variants={wordContainer}
        className="w-full max-w-[190px] sm:max-w-[345px] lg:max-w-[564px] min-h-[70px] sm:min-h-[100px] left-[140px] sm:ml-[210px] md:ml-[220px] lg:ml-[471px] mt-2 sm:mt-0"
      >
        <h1 className="font-poppins font-bold text-3xl sm:text-5xl lg:text-[88px] leading-[40px] sm:leading-[70px] lg:leading-[80px] tracking-[-2px] mx-auto sm:tracking-[-2px] lg:tracking-[-4px] text-white drop-shadow-md flex flex-wrap">
          {line2Words.map((word, i) => (
            <motion.span
              key={i}
              variants={dropDown}
              transition={{ duration: 1.05, ease: "easeOut" }}
              className="inline-block  mr-[0.25em]"
            >
              {word}
            </motion.span>
          ))}
        </h1>
      </motion.div>

      {/* 3. Paragraph */}
      <motion.div
        variants={dropDown}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-[380px] sm:max-w-[480px] md:max-w-[490px] lg:max-w-[580px] min-h-[100px] lg:min-h-[140px] mt-[-10] sm:mt-3 lg:mt-[80px] lg:ml-16"
      >
        <p className="font-poppins font-normal text-sm sm:text-lg lg:text-[22px] leading-relaxed lg:leading-[28px] tracking-[-0.4px] lg:tracking-[-0.6px] text-white/90 drop-shadow">
          As the sun rises, a solitary figure faces a massive, antlered
          guardian, and this breathtaking scene is immortalized in an NFT,
          unveiling the timeless bond between humanity and mystical forces,
          offering collectors a chance to secure this digital masterpiece.
        </p>
      </motion.div>

      {/* 4. Buttons */}
      <motion.div
        variants={dropDown}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full sm:max-w-[326px] flex flex-wrap sm:flex-nowrap justify-center sm:justify-start items-center  gap-3 mt-6 lg:mt-[48px] lg:ml-16"
        >
        <motion.button
          onClick={() => setActiveBtn("trial")}
          className={`w-[130px] h-[44px] sm:w-[156px] sm:h-[56px] rounded-[10px] sm:rounded-[12px] gap-[8px] sm:gap-[10px] px-[16px] py-[12px] sm:pt-[20px] sm:pr-[24px] sm:pb-[20px] sm:pl-[24px] flex items-center justify-center whitespace-nowrap font-poppins font-bold text-[13px] sm:text-[16px] leading-[13px] sm:leading-[16px] tracking-[-0.4px] cursor-pointer transition-colors ${
            activeBtn === "trial"
              ? "bg-white text-black hover:bg-gray-100 shadow-lg"
              : "border-[2px] border-white bg-transparent text-white"
          }`}
        >
          Start free trial
        </motion.button>

        <motion.button
          onClick={() => setActiveBtn("sales")}
          className={`w-[130px] h-[44px] sm:w-[158px] sm:h-[56px] rounded-[10px] sm:rounded-[12px] gap-[8px] sm:gap-[10px] px-[16px] py-[12px] sm:pt-[20px] sm:pr-[24px] sm:pb-[20px] sm:pl-[24px] flex items-center justify-center whitespace-nowrap font-poppins font-bold text-[13px] sm:text-[16px] leading-[13px] sm:leading-[16px] tracking-[-0.4px] cursor-pointer transition-colors ${
            activeBtn === "sales"
              ? "bg-white text-black hover:bg-gray-100 shadow-lg"
              : "border-[2px] border-white bg-transparent text-white"
          }`}
        >
          Contact sales
        </motion.button>
      </motion.div>
    </motion.section>
  );
}























































// // responsive
// "use client";

// import React from "react";
// import { useState } from "react";
// import { motion } from "framer-motion";

// const dropDown = {
//   hidden: { opacity: 0, y: -40 },
//   show: { opacity: 1, y: 0 },
// };

// // Wraps each heading's words with its own stagger timing
// const wordContainer = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.08, // delay between each word
//     },
//   },
// };

// export default function HeroSection() {
//   const [activeBtn, setActiveBtn] = useState<"trial" | "sales">("trial");

//   const line1Words = ["The", "ancient", "forest", "protector", "comes", "to", "life"];
//   const line2Words = ["majestic", "NFT"];

//   // Compute when heading 1's word animation fully finishes,
//   // so heading 2 can start right after instead of overlapping it.
//   const outerDelayChildren = 0.1; // matches section's delayChildren
//   const line1Stagger = 0.08;
//   const line1WordDuration = 0.6;
//   const line1TotalTime =
//     outerDelayChildren + (line1Words.length - 1) * line1Stagger + line1WordDuration;
//   const gapBetweenHeadings = 0.15;
//   // const line2StartDelay = line1TotalTime + gapBetweenHeadings;
//   const line2StartDelay = 1.2;

//   return (
//     <motion.section
//       className="relative w-full pt-[250px] sm:pt-[280px] lg:pt-[420px] pb-16 px-6 flex flex-col justify-start"
//       initial="hidden"
//       animate="show"
//       variants={{
//         hidden: {},
//         show: { transition: { staggerChildren: 0.25, delayChildren: 0.1 } },
//       }}
//       >


//       {/* 1. "The ancient forest protector comes to life" */}
//       <motion.div
//         variants={wordContainer}
//         className="w-full max-w-[400px] sm:max-w-[550px] md:max-w-[600px] lg:max-w-[975px] min-h-[80px] sm:min-h-[130px] lg:ml-16"
//       >
//         <h1 className="font-poppins font-bold text-3xl sm:text-5xl lg:text-[88px] lg:left-16 leading-[40px] sm:leading-[65px] lg:leading-[80px] tracking-[-1px] sm:tracking-[-2px] lg:tracking-[-4px] text-white drop-shadow-md flex flex-wrap">
//           {line1Words.map((word, i) => (
//             <motion.span
//               key={i}
//               variants={dropDown}
//               transition={{ duration: 0.6, ease: "easeOut" }}
//               className="inline-block  mr-[0.25em]"
//             >
//               {word}
//             </motion.span>
//           ))}
//         </h1>
//       </motion.div>

//       {/* 2. "majestic NFT" — now explicitly delayed until heading 1 finishes */}
//       <motion.div
//         initial="hidden"
//         animate="show"
//         variants={wordContainer}
//         transition={{ delayChildren: line2StartDelay, staggerChildren: 0.08 }}
//         className="w-full max-w-[190px] sm:max-w-[345px] lg:max-w-[564px] min-h-[70px] sm:min-h-[100px] left-[140px] sm:ml-[210px] md:ml-[220px] lg:ml-[471px] mt-2 sm:mt-0"
//       >
//         <h1 className="font-poppins font-bold text-3xl sm:text-5xl lg:text-[88px] leading-[40px] sm:leading-[70px] lg:leading-[80px] tracking-[-2px] mx-auto sm:tracking-[-2px] lg:tracking-[-4px] text-white drop-shadow-md flex flex-wrap">
//           {line2Words.map((word, i) => (
//             <motion.span
//               key={i}
//               variants={dropDown}
//               transition={{ duration: 0.6, ease: "easeOut" }}
//               className="inline-block  mr-[0.25em]"
//             >
//               {word}
//             </motion.span>
//           ))}
//         </h1>
//       </motion.div>

//       {/* 3. Paragraph */}
//       <motion.div
//         variants={dropDown}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//         className="w-full max-w-[380px] sm:max-w-[480px] md:max-w-[490px] lg:max-w-[580px] min-h-[100px] lg:min-h-[140px] mt-[-10] sm:mt-3 lg:mt-[80px] lg:ml-16"
//       >
//         <p className="font-poppins font-normal text-sm sm:text-lg lg:text-[22px] leading-relaxed lg:leading-[28px] tracking-[-0.4px] lg:tracking-[-0.6px] text-white/90 drop-shadow">
//           As the sun rises, a solitary figure faces a massive, antlered
//           guardian, and this breathtaking scene is immortalized in an NFT,
//           unveiling the timeless bond between humanity and mystical forces,
//           offering collectors a chance to secure this digital masterpiece.
//         </p>
//       </motion.div>

//       {/* 4. Buttons */}
//       <motion.div
//         variants={dropDown}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//         className="w-full sm:max-w-[326px] flex flex-wrap sm:flex-nowrap justify-center sm:justify-start items-center  gap-3 mt-6 lg:mt-[48px] lg:ml-16"
//         >
//         <motion.button
//           onClick={() => setActiveBtn("trial")}
//           className={`w-[130px] h-[44px] sm:w-[156px] sm:h-[56px] rounded-[10px] sm:rounded-[12px] gap-[8px] sm:gap-[10px] px-[16px] py-[12px] sm:pt-[20px] sm:pr-[24px] sm:pb-[20px] sm:pl-[24px] flex items-center justify-center whitespace-nowrap font-poppins font-bold text-[13px] sm:text-[16px] leading-[13px] sm:leading-[16px] tracking-[-0.4px] cursor-pointer transition-colors ${
//             activeBtn === "trial"
//               ? "bg-white text-black hover:bg-gray-100 shadow-lg"
//               : "border-[2px] border-white bg-transparent text-white"
//           }`}
//         >
//           Start free trial
//         </motion.button>

//         <motion.button
//           onClick={() => setActiveBtn("sales")}
//           className={`w-[130px] h-[44px] sm:w-[158px] sm:h-[56px] rounded-[10px] sm:rounded-[12px] gap-[8px] sm:gap-[10px] px-[16px] py-[12px] sm:pt-[20px] sm:pr-[24px] sm:pb-[20px] sm:pl-[24px] flex items-center justify-center whitespace-nowrap font-poppins font-bold text-[13px] sm:text-[16px] leading-[13px] sm:leading-[16px] tracking-[-0.4px] cursor-pointer transition-colors ${
//             activeBtn === "sales"
//               ? "bg-white text-black hover:bg-gray-100 shadow-lg"
//               : "border-[2px] border-white bg-transparent text-white"
//           }`}
//         >
//           Contact sales
//         </motion.button>
//       </motion.div>
//     </motion.section>
//   );
// }