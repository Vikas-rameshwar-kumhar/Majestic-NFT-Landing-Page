


// responsive 
export default function Footer() {
  return (
    <footer className="relative lg:absolute w-full lg:top-[2714px] px-6 pb-8">

      {/* Top divider line */}
      <div className="relative w-full border-t border-white/20 mb-10 2xl:absolute 2xl:left-1/2 2xl:-translate-x-1/2 2xl:top-[1px] 2xl:w-[1728px] 2xl:mb-0" />

      {/* ================= FOOTER GRID ================= */}

      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0 2xl:block">

        {/* 01 - Company */}
        <div className="w-full 2xl:absolute 2xl:left-[64px] 2xl:top-[101px] 2xl:w-[107px] 2xl:h-[271px]">
          <h4 className="h-[28px] flex items-center font-poppins text-white text-sm sm:text-lg lg:text-[22px] leading-[28px] tracking-[-0.6px]">
            Company
          </h4>

          <ul className="mt-4 2xl:mt-[47px] w-full 2xl:w-[93px] 2xl:h-[196px] flex flex-col gap-3 2xl:gap-0 2xl:justify-between font-poppins text-white/50 text-sm sm:text-lg lg:text-[22px] leading-[28px] tracking-[-0.6px]">
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        {/* 02 - Terms & Policies */}
        <div className="w-full 2xl:absolute 2xl:left-[487px] 2xl:top-[101px] 2xl:w-[205px] 2xl:h-[271px]">
          <h4 className="h-[28px] flex items-center font-poppins text-white text-sm sm:text-lg lg:text-[22px] leading-[28px] tracking-[-0.6px]">
            Terms &amp; Policies
          </h4>

          <ul className="mt-4 2xl:mt-[47px] w-full 2xl:w-[205px] 2xl:h-[196px] flex flex-col gap-3 2xl:gap-0 2xl:justify-between font-poppins text-white/50 text-sm sm:text-lg lg:text-[22px] leading-[28px] tracking-[-0.6px]">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms &amp; Conditions</a></li>
            <li><a href="#">Explore</a></li>
            <li><a href="#">Accessibility</a></li>
          </ul>
        </div>

        {/* 03 - Follow Us */}
        <div className="w-full 2xl:absolute 2xl:left-[1008px] 2xl:top-[101px] 2xl:w-[110px] 2xl:h-[271px]">
          <h4 className="h-[28px] flex items-center font-poppins text-white text-sm sm:text-lg lg:text-[22px] leading-[28px] tracking-[-0.6px]">
            Follow Us
          </h4>

          <ul className="mt-4 2xl:mt-[47px] w-full 2xl:w-[110px] 2xl:h-[196px] flex flex-col gap-3 2xl:gap-0 2xl:justify-between font-poppins text-white/50 text-sm sm:text-lg lg:text-[22px] leading-[28px] tracking-[-0.6px]">
            <li><a href="#">Instagram</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Youtube</a></li>
            <li><a href="#">Dsgnua</a></li>
          </ul>
        </div>

        {/* 04 - Contact */}
        <div className="w-full 2xl:absolute 2xl:left-[1434px] 2xl:top-[101px] 2xl:w-[213px] 2xl:h-[242px]">
          <h4 className="h-[28px] flex items-center font-poppins text-white text-sm sm:text-lg lg:text-[22px] leading-[28px] tracking-[-0.6px]">
            Terms &amp; Policies
          </h4>

          <ul className="mt-4 2xl:mt-[46px] w-full 2xl:w-[219px] 2xl:h-[168px] flex flex-col gap-3 2xl:gap-0 2xl:justify-between font-poppins text-white/50 text-sm sm:text-lg lg:text-[22px] leading-[28px] tracking-[-0.6px]">
            <li>
              <a href="#">1498w Fluton ste, STE 2D Chicago, IL 63867.</a>
            </li>

            <li>
              <a href="#">(123) 456789000</a>
            </li>

            <li>
              <a href="#">info@andrew.com</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <p className="relative w-full h-[28px] flex items-center justify-center font-poppins text-white text-sm sm:text-lg lg:text-[22px] leading-[28px] tracking-[-0.6px] mt-10 2xl:absolute 2xl:left-1/2 2xl:-translate-x-1/2 2xl:top-[472px] 2xl:w-[347px] 2xl:mt-0 2xl:text-[22px]">
        {/* ©2026 Andrew. All rights reserved */}
        ©{new Date().getFullYear()} Andrew. All rights reserved
      </p>

    </footer>
  );
}


