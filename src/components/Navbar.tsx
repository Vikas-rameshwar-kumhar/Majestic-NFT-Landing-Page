


"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const leftLinks = [
  { label: "Drops", href: "#" },
  { label: "Stats", href: "#" },
  { label: "Create", href: "#" },
];

const rightLinks = [
  { label: "Learn", href: "#" },
  { label: "Help Center", href: "#" },
  { label: "Start free trial", href: "#" },
];

export default function Navbar() {
  const [active, setActive] = useState("Start free trial");
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -150, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ stiffness: 120, damping: 14, duration: 0.8 }}
      className="absolute left-0 right-0 z-20 flex flex-col items-center px-6 md:px-[64px]"
    >
      {/* ---------- Top bar (logo + hamburger on mobile, full nav on lg) ---------- */}
      <div className="w-full flex items-center justify-between lg:justify-between top-[35px] lg:top-[35px]  lg:px-[64px] relative lg:absolute pt-6 lg:pt-0">

        {/* Left Navigation */}
        <div className="flex items-center font-poppins bg-[#17100E] w-auto lg:w-[411.92px] h-14 lg:h-[72px]  rounded-[16px] lg:rounded-[20px] p-2 gap-2 lg:gap-[12px] cursor-pointer">
          <Link href="#">
            <img
              className="w-10 h-10 lg:w-14 lg:h-14 rounded-xl lg:rounded-[12px] object-contain"
              src="/logo/logo.png"
              alt="Logo"
            />
          </Link>

          {/* Drops/Stats/Create — hidden below lg, shown at lg */}
          <button className="hidden lg:flex w-[106.46px] h-[56px] rounded-[12px] gap-[10px] px-5 py-5 items-center justify-center cursor-pointer hover:text-gray-200 transition-colors">
            <span className="font-['Poppins'] text-[14px] font-bold leading-4 tracking-[-0.4px] text-white">
              Drops ▾
            </span>
          </button>

          <button className="hidden lg:flex w-[101.46px] h-[56px] rounded-[12px] gap-[10px] px-[20px] py-[20px] items-center justify-center whitespace-nowrap text-sm font-semibold text-white cursor-pointer hover:text-gray-200 transition-colors">
            <span className="font-['Poppins'] text-[14px] font-bold leading-4 tracking-[-0.4px] text-white">
              Stats ▾
            </span>
          </button>

          <div className="hidden lg:flex w-[96px] h-[56px] rounded-[12px] gap-[10px] pt-[20px] pr-[24px] pb-[20px] pl-[24px] items-center justify-center cursor-pointer hover:text-gray-200 transition-colors">
            <span className="font-['Poppins'] text-[14px] font-bold leading-4 tracking-[-0.4px] text-white">
              Create
            </span>
          </div>
        </div>

        {/* Right Navigation — full pill nav at lg, hidden below lg */}
        <nav className="hidden lg:flex flex-row items-end gap-3 p-2 w-[430px] h-[72px] lg:relative  bg-[#17100E] rounded-[20px] shadow-[0px_8px_24px_rgba(23,16,14,0.16)]">
          {rightLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setActive(link.label)}
              className="relative flex justify-center items-center gap-[10px] px-6 py-5 h-[56px] rounded-xl"
            >
              {active === link.label && (
                <motion.span
                  layoutId="navActivePill"
                  className="absolute inset-0 bg-white rounded-xl"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span
                className={`relative z-10 font-poppins font-bold text-[16px] leading-[16px] tracking-[-0.4px] whitespace-nowrap ${
                  active === link.label ? "text-[#17100E]" : "text-white"
                }`}
              >
                {link.label}
              </span>
            </a>
          ))}
        </nav>

        {/* Hamburger — mobile/tablet only */}
        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          className="lg:hidden flex flex-col items-center justify-center gap-[5px] w-14 h-14 bg-[#17100E] rounded-xl"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 6 : 0 }}
            className="block w-6 h-[2px] bg-white rounded-full"
          />
          <motion.span
            animate={{ opacity: mobileOpen ? 0 : 1 }}
            className="block w-6 h-[2px] bg-white rounded-full"
          />
          <motion.span
            animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -6 : 0 }}
            className="block w-6 h-[2px] bg-white rounded-full"
          />
        </button>
      </div>

      {/* ---------- Mobile dropdown panel ---------- */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="lg:hidden w-full mt-8  bg-[#17100E] rounded-[16px] p-4 flex flex-col gap-1 overflow-hidden"
          >
            {[...leftLinks, ...rightLinks].map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => {
                  setActive(link.label);
                  setMobileOpen(false);
                }}
                className={`px-4 py-3 rounded-xl font-poppins font-bold text-[15px] tracking-[-0.4px] transition-colors ${
                  active === link.label
                    ? "bg-white text-[#17100E]"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}















// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";

// const links = [
//   { label: "Learn", href: "#" },
//   { label: "Help Center", href: "#" },
//   { label: "Start free trial", href: "#" },
// ];

// export default function Navbar() {
//   const [active, setActive] = useState("Start free trial");

//   return (
//     <motion.div
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

//       <div className="flex items-center font-poppins bg-[#17100E] w-[411.92px] h-[72px] rounded-[20px] p-[8px] gap-[12px]">
//         {/* Logo */}
//         <Link href="#">
//           <img
//             className="w-14 h-14 rounded-[12px] object-contain"
//             src="/logo/logo.png"
//             alt="Logo"
//           />
//         </Link>

//         {/* Drops */}
//         <button className="w-[106.46px] h-[56px] rounded-[12px] gap-[10px] flex px-5 py-5 items-center justify-center cursor-pointer hover:text-gray-200 transition-colors">
//           <span className="font-['Poppins'] text-[14px] font-bold leading-4 tracking-[-0.4px] text-white">
//             Drops ▾
//           </span>
//         </button>

//         {/* Stats */}
//         <button className="w-[101.46px] h-[56px] rounded-[12px] gap-[10px] px-[20px] py-[20px] flex items-center justify-center whitespace-nowrap text-sm font-semibold text-white cursor-pointer hover:text-gray-200 transition-colors">
//           <span className="font-['Poppins'] text-[14px] font-bold leading-4 tracking-[-0.4px] text-white">
//             Stats ▾
//           </span>
//         </button>

//         {/* Create */}
//         <button className="w-[96px] h-[56px] rounded-[12px] gap-[10px] px-[24px] py-[20px] flex items-center justify-center cursor-pointer hover:text-gray-200 transition-colors">
//           <span className="font-['Poppins'] text-[14px] font-bold leading-4 tracking-[-0.4px] text-white">
//             Create
//           </span>
//         </button>
//       </div>

//       {/* ================= RIGHT NAVIGATION ================= */}

//       <div className="absolute flex flex-row items-end gap-3 p-2 w-[430px] h-[72px] right-16 bg-[#17100E] rounded-[20px] shadow-[0px_8px_24px_rgba(23,16,14,0.16)]">
//         {links.map((link) => {
//           const isActive = active === link.label;

//           return (
//             <a
//               key={link.label}
//               href={link.href}
//               onClick={() => setActive(link.label)}
//               className="relative flex justify-center items-center gap-[10px] px-6 py-5 h-[56px] rounded-xl"
//             >
//               {/* Active Background */}
//               {isActive && (
//                 <motion.span
//                   layoutId="navActivePill"
                  
//                   className="absolute inset-0 bg-white rounded-xl"
//                   transition={{
//                     type: "spring",
//                     stiffness: 350,
//                     damping: 30,
//                   }}
//                 />
//               )}

//               {/* Text */}
//               <span
//                 className={`relative z-10 font-poppins font-bold text-[16px] leading-[16px] tracking-[-0.4px] whitespace-nowrap ${
//                   isActive
//                     ? "text-[#f1491a]"
//                     : "text-white"
//                 }`}
//               >
//                 {link.label}
//               </span>
//             </a>
//           );
//         })}
//       </div>
//     </motion.div>
//   );
// }













// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";

// const links = [
//   { label: "Learn", href: "#" },
//   { label: "Help Center", href: "#" },
//   { label: "Start free trial", href: "#" },
// ];

// export default function Navbar() {
//   const [active, setActive] = useState("Start free trial");

//   return (
//     <motion.nav
//       initial={{ y: -150, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{
//         stiffness: 120,
//         damping: 14,
//         duration: 0.8,
//       }}
//       className="absolute left-0 right-0 z-20 flex items-center justify-between px-6 md:px-[64px]"
//     >
//       <nav className="absolute top-[40px] left-0 right-0 z-20 flex items-center justify-between px-6 md:px-[64px]">
//         {/* Left Navigation */}
//         <div className="flex items-center font-poppins bg-[#17100E] w-[411.92px] h-[72px] rounded-[20px] p-[8px] gap-[12px] cursor-pointer">
//           <Link href="#">
//             <img
//               className="w-14 h-14 rounded-[12px] gap-[10px] object-contain"
//               src="/logo/logo.png"
//               alt="Logo"
//             />
//           </Link>

//           <button className="w-[106.46px] h-[56px] rounded-[12px] gap-[10px] flex px-5 py-5 items-center justify-center cursor-pointer hover:text-gray-200 transition-colors">
//             <span className="font-['Poppins'] text-[14px] font-bold leading-4 tracking-[-0.4px] text-white">
//               Drops ▾
//             </span>
//           </button>

//           <button className="w-[101.46px] h-[56px] rounded-[12px] gap-[10px] px-[20px] py-[20px] flex items-center justify-center whitespace-nowrap text-sm font-semibold text-white cursor-pointer hover:text-gray-200 transition-colors">
//             <span className="font-['Poppins'] text-[14px] font-bold leading-4 tracking-[-0.4px] text-white">
//               Stats ▾
//             </span>
//           </button>

//           <div className="w-[96px] h-[56px] rounded-[12px] gap-[10px] pt-[20px] pr-[24px] pb-[20px] pl-[24px] flex items-center justify-center cursor-pointer hover:text-gray-200 transition-colors">
//             <span className="font-['Poppins'] text-[14px] font-bold leading-4 tracking-[-0.4px] text-white">
//               Create
//             </span>
//           </div>
//         </div>

//         <nav className="absolute flex flex-row items-end gap-3 p-2 w-[430px] h-[72px] right-16 bg-[#17100E] rounded-[20px] shadow-[0px_8px_24px_rgba(23,16,14,0.16)]">
//           {links.map((link) => (
//             <a
//               key={link.label}
//               href={link.href}
//               onClick={() => setActive(link.label)}
//               className="relative flex justify-center items-center gap-[10px] px-6 py-5 h-[56px] rounded-xl"
//             >
//               {active === link.label && (
//                 <motion.span
//                   layoutId="navActivePill"
//                   className="absolute inset-0 bg-white rounded-xl"
//                   transition={{ type: "spring", stiffness: 350, damping: 30 }}
//                 />
//               )}
//               <span
//                 className={`relative z-10 font-poppins font-bold text-[16px] leading-[16px] tracking-[-0.4px] whitespace-nowrap ${
//                   active === link.label ? "text-[#17100E]" : "text-white"
//                 }`}
//               >
//                 {link.label}
//               </span>
//             </a>
//           ))}
//         </nav>
//       </nav>
//     </motion.nav>
//   );
// }



























 


