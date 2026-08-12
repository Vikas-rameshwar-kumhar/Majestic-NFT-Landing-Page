






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



// {/* Parent wrapper controls the stagger timing across all words */}
// {/* <motion.div
//   variants={{
//     hidden: {},
//     visible: {
//       transition: {
//         staggerChildren: 0.06, // delay between each word
//       },
//     },
//   }}
//   initial="hidden"
//   animate="visible"
// > */}




//   {/* 1. "The ancient forest protector comes to life" */}
//   {/* <motion.div
//     className="w-full max-w-[400px] sm:max-w-[550px] md:max-w-[600px] lg:max-w-[930px] min-h-[90px] sm:min-h-[140px] lg:ml-16"
//   >
//     <h1 className="font-poppins font-bold text-3xl sm:text-5xl lg:text-[88px] lg:left-16 leading-[40px] sm:leading-[65px] lg:leading-[80px] tracking-[-1px] sm:tracking-[-2px] lg:tracking-[-4px] text-white drop-shadow-md flex flex-wrap">
//       {["The", "ancient", "forest", "protector", "comes", "to", "life"].map((word, i) => (
//         <motion.span
//           key={i}
//           variants={dropDowntext}
//           transition={{ duration: 0.3, ease: "easeOut" }}
//           className="inline-block mr-[0.25em] overflow-hidden"
//         >
//           {word}
//         </motion.span>
//       ))}
//     </h1>
//   </motion.div>


//   <motion.div
//     className="w-full max-w-[180px] sm:max-w-[345px] lg:max-w-[553px] min-h-[60px] sm:min-h-[80px] left-[140px] sm:ml-[210px] md:ml-[210px] lg:ml-[441px] mt-2 lg:mt-0"
//   >
//     <h1 className="font-poppins font-bold text-3xl sm:text-5xl lg:text-[88px] leading-[1px] sm:leading-[10px] lg:leading-[80px] tracking-[-2px] mx-auto sm:tracking-[-2px] lg:tracking-[-4px] text-white drop-shadow-md flex flex-wrap">
//       {["majestic", "NFT"].map((word, i) => (
//         <motion.span
//           key={i}
//           variants={dropDowntext}
//           transition={{ duration: 0.6, ease: "easeOut" }}
//           className="inline-block mr-[0.25em] overflow-hidden"
//         >
//           {word}
//         </motion.span>
//       ))}
//     </h1>
//   </motion.div>
// </motion.div> */}
     


//       {/* <motion.div
//         variants={container}
//         initial="hidden"
//         animate="show"
//         className="w-full max-w-[400px] sm:max-w-[550px] md:max-w-[600px] lg:max-w-[970px] min-h-[90px] sm:min-h-[140px] lg:ml-16"
//       >
//         <h1 className="font-poppins font-bold text-3xl sm:text-5xl lg:text-[88px] lg:left-16 leading-[40px] sm:leading-[65px] lg:leading-[80px] tracking-[-1px] sm:tracking-[-2px] lg:tracking-[-4px] text-white drop-shadow-md">
//           {"The ancient forest protector comes to life".split(" ").map((w, i) => (
//             <motion.span
//               key={i}
//               variants={word}
//               className="inline-block mr-[0.25em]"
//             >
//               {w}
//             </motion.span>
//           ))}
//         </h1>
//       </motion.div>

      
//       <motion.div
//         variants={container}
//         initial="hidden"
//         animate="show"
//         className="w-full max-w-[180px] sm:max-w-[345px] lg:max-w-[566px] min-h-[60px] sm:min-h-[80px] left-[140px] sm:ml-[210px] md:ml-[210px] lg:ml-[441px] mt-2 lg:mt-0"
//       >
//         <h1 className="font-poppins font-bold text-3xl sm:text-5xl lg:text-[88px] leading-[1px] sm:leading-[10px] lg:leading-[80px] tracking-[-2px] mx-auto sm:tracking-[-2px] lg:tracking-[-4px] text-white drop-shadow-md">
//           {"majestic NFT".split(" ").map((w, i) => (
//             <motion.span
//               key={i}
//               variants={word}
//               className="inline-block mr-[0.25em]"
//             >
//               {w}
//             </motion.span>
//           ))}
//         </h1>
//       </motion.div> */}


// {/* old */}
//       {/* 1. "The ancient forest protector comes to life" */}
//       <motion.div
//         variants={dropDown}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//         className="w-full max-w-[400px] sm:max-w-[550px] md:max-w-[600px] lg:max-w-[930px] min-h-[0px] sm:min-h-[0px] lg:ml-16 "
//       >
//         <h1 className="font-poppins font-bold text-3xl sm:text-5xl lg:text-[88px] lg:left-16 leading-[40px] sm:leading-[65px] lg:leading-[80px] tracking-[-1px] sm:tracking-[-2px] lg:tracking-[-4px] text-white drop-shadow-md">
//           The ancient forest
//         </h1>
//       </motion.div>

//       <motion.div
//         variants={dropDown}
//         transition={{ duration: 0.6, ease: "easeOut" }}
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



// {/* 
//  <motion.div
//         variants={dropDown}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//         className="w-full max-w-[400px] sm:max-w-[550px] md:max-w-[600px] lg:max-w-[930px] min-h-[90px] sm:min-h-[140px] lg:ml-16"
//       >
//         <h1 className="font-poppins font-bold text-3xl sm:text-5xl lg:text-[88px] lg:left-16 leading-[40px] sm:leading-[65px] lg:leading-[80px] tracking-[-1px] sm:tracking-[-2px] lg:tracking-[-4px] text-white drop-shadow-md">
//           The ancient forest protector comes to life
//         </h1>
//       </motion.div>

      
//       <motion.div
//         variants={dropDown}
//         transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
//         className="w-full max-w-[180px] sm:max-w-[345px] lg:max-w-[553px] min-h-[60px] sm:min-h-[80px] left-[140px] sm:ml-[210px] md:ml-[210px] lg:ml-[441px] mt-2 lg:mt-0"
//       >
//         <h1 className="font-poppins font-bold text-3xl sm:text-5xl lg:text-[88px] leading-[1px] sm:leading-[10px] lg:leading-[80px] tracking-[-2px] mx-auto sm:tracking-[-2px] lg:tracking-[-4px] text-white drop-shadow-md">
//           majestic NFT
//         </h1>
//       </motion.div> */}






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
//           // className={`w-[156px] h-[56px] rounded-[12px] gap-[10px] pt-[20px] pr-[24px] pb-[20px] pl-[24px] flex items-center justify-center whitespace-nowrap font-poppins font-bold text-[16px] leading-[16px] tracking-[-0.4px] cursor-pointer transition-colors ${
//           //   activeBtn === "trial"
//           //     ? "bg-white text-black hover:bg-gray-100 shadow-lg"
//           //     : "border-[2px] border-white bg-transparent text-white"
//           // }`}

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
//           // className={`w-[158px] h-[56px] rounded-[12px] gap-[10px] pt-[20px] pr-[24px] pb-[20px] pl-[24px] flex items-center justify-center whitespace-nowrap font-poppins font-bold text-[16px] leading-[16px] tracking-[-0.4px] cursor-pointer transition-colors ${
//           //   activeBtn === "sales"
//           //     ? "bg-white text-black hover:bg-gray-100 shadow-lg"
//           //     : "border-[2px] border-white bg-transparent text-white"
//           // }`}

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









// // responsive
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
//         className="w-full max-w-[400px] sm:max-w-[550px] md:max-w-[600px] lg:max-w-[930px] min-h-[90px] sm:min-h-[140px] lg:ml-16"
//       >
//         <h1 className="font-poppins font-bold text-3xl sm:text-5xl lg:text-[88px] lg:left-16 leading-[40px] sm:leading-[65px] lg:leading-[80px] tracking-[-1px] sm:tracking-[-2px] lg:tracking-[-4px] text-white drop-shadow-md">
//           The ancient forest protector comes to life
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














// // dropdown working on click but no sliding on left side 

// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Link from "next/link";

// const links = [
//   { label: "Learn", href: "#" },
//   { label: "Help Center", href: "#" },
//   { label: "Start free trial", href: "#" },
// ];

// const dropsMenu = [
//   "Live Drops",
//   "Upcoming Drops",
//   "Past Drops",
// ];

// const statsMenu = [
//   "Top Collections",
//   "Trending",
//   "Volume Leaders",
// ];

// export default function Navbar() {
//   const [active, setActive] = useState("Start free trial");
//   const [dropdown, setDropdown] = useState<string | null>(null);

//   const handleDropdown = (menu: string) => {
//     setDropdown((current) =>
//       current === menu ? null : menu
//     );
//   };

//   return (
//     <motion.nav
//       initial={{ y: -150, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{
//         stiffness: 120,
//         damping: 14,
//         duration: 0.8,
//       }}
//       className="absolute top-[40px] left-0 right-0 z-20 flex items-center justify-between px-6 md:px-[64px]"
//     >
//       {/* ================= LEFT NAVIGATION ================= */}

//       <div className="relative flex items-center font-poppins bg-[#17100E] w-[411.92px] h-[72px] rounded-[20px] p-[8px] gap-[12px]">

//         {/* Logo */}
//         <Link href="#">
//           <img
//             className="w-14 h-14 rounded-[12px] object-contain"
//             src="/logo/logo.png"
//             alt="Logo"
//           />
//         </Link>

//         {/* ================= DROPS ================= */}

//         <div className="relative">
//           <button
//             onClick={() => handleDropdown("drops")}
//             className="w-[106.46px] h-[56px] rounded-[12px] gap-[10px] flex px-5 py-5 items-center justify-center cursor-pointer hover:text-gray-200 transition-colors"
//           >
//             <span
//               className={`font-['Poppins'] text-[14px] font-bold leading-4 tracking-[-0.4px] ${
//                 dropdown === "drops"
//                   ? "text-white"
//                   : "text-white"
//               }`}
//             >
//               Drops ▾
//             </span>
//           </button>

//           {/* Drops Dropdown */}
//           <AnimatePresence>
//             {dropdown === "drops" && (
//               <motion.div
//                 initial={{
//                   opacity: 0,
//                   y: -10,
//                   scale: 0.95,
//                 }}
//                 animate={{
//                   opacity: 1,
//                   y: 0,
//                   scale: 1,
//                 }}
//                 exit={{
//                   opacity: 0,
//                   y: -10,
//                   scale: 0.95,
//                 }}
//                 transition={{
//                   duration: 0.2,
//                 }}
//                 className="absolute top-[64px] left-0 w-[190px] rounded-[16px] bg-[#17100E] p-2 shadow-[0px_8px_24px_rgba(23,16,14,0.25)]"
//               >
//                 {dropsMenu.map((item) => (
//                   <button
//                     key={item}
//                     onClick={() => {
//                       setActive(item);
//                       setDropdown(null);
//                     }}
//                     className="w-full h-[44px] px-4 rounded-[10px] flex items-center text-left font-['Poppins'] text-[13px] font-semibold text-white hover:bg-white/10 transition-colors"
//                   >
//                     {item}
//                   </button>
//                 ))}
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>

//         {/* ================= STATS ================= */}

//         <div className="relative">
//           <button
//             onClick={() => handleDropdown("stats")}
//             className="w-[101.46px] h-[56px] rounded-[12px] gap-[10px] px-[20px] py-[20px] flex items-center justify-center whitespace-nowrap text-sm font-semibold text-white cursor-pointer hover:text-gray-200 transition-colors"
//           >
//             <span className="font-['Poppins'] text-[14px] font-bold leading-4 tracking-[-0.4px]">
//               Stats ▾
//             </span>
//           </button>

//           {/* Stats Dropdown */}
//           <AnimatePresence>
//             {dropdown === "stats" && (
//               <motion.div
//                 initial={{
//                   opacity: 0,
//                   y: -10,
//                   scale: 0.95,
//                 }}
//                 animate={{
//                   opacity: 1,
//                   y: 0,
//                   scale: 1,
//                 }}
//                 exit={{
//                   opacity: 0,
//                   y: -10,
//                   scale: 0.95,
//                 }}
//                 transition={{
//                   duration: 0.2,
//                 }}
//                 className="absolute top-[64px] left-0 w-[190px] rounded-[16px] bg-[#17100E] p-2 shadow-[0px_8px_24px_rgba(23,16,14,0.25)]"
//               >
//                 {statsMenu.map((item) => (
//                   <button
//                     key={item}
//                     onClick={() => {
//                       setActive(item);
//                       setDropdown(null);
//                     }}
//                     className="w-full h-[44px] px-4 rounded-[10px] flex items-center text-left font-['Poppins'] text-[13px] font-semibold text-white hover:bg-white/10 transition-colors"
//                   >
//                     {item}
//                   </button>
//                 ))}
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>

//         {/* ================= CREATE ================= */}

//         <button
//           onClick={() => {
//             setActive("Create");
//             setDropdown(null);
//           }}
//           className="w-[96px] h-[56px] rounded-[12px] gap-[10px] px-[24px] py-[20px] flex items-center justify-center cursor-pointer hover:text-gray-200 transition-colors"
//         >
//           <span className="font-['Poppins'] text-[14px] font-bold leading-4 tracking-[-0.4px] text-white">
//             Create
//           </span>
//         </button>
//       </div>

//       {/* ================= RIGHT NAVIGATION ================= */}

//       <nav className="absolute flex flex-row items-end gap-3 p-2 w-[430px] h-[72px] right-16 bg-[#17100E] rounded-[20px] shadow-[0px_8px_24px_rgba(23,16,14,0.16)]">

//         {links.map((link) => (
//           <a
//             key={link.label}
//             href={link.href}
//             onClick={() => {
//               setActive(link.label);
//               setDropdown(null);
//             }}
//             className="relative flex justify-center items-center gap-[10px] px-6 py-5 h-[56px] rounded-xl"
//           >
//             {active === link.label && (
//               <motion.span
//                 layoutId="navActivePill"
//                 className="absolute inset-0 bg-white rounded-xl"
//                 transition={{
//                   type: "spring",
//                   stiffness: 350,
//                   damping: 30,
//                 }}
//               />
//             )}

//             <span
//               className={`relative z-10 font-poppins font-bold text-[16px] leading-[16px] tracking-[-0.4px] whitespace-nowrap ${
//                 active === link.label
//                   ? "text-[#17100E]"
//                   : "text-white"
//               }`}
//             >
//               {link.label}
//             </span>
//           </a>
//         ))}
//       </nav>
//     </motion.nav>
//   );
// }
