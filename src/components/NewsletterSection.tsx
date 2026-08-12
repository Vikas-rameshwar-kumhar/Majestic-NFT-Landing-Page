














export default function NewsletterSection() {
  return (
    <section
      className="relative lg:absolute flex flex-col items-center gap-8 lg:gap-14 w-full lg:w-[617px] h-auto lg:h-[340px] left-0 lg:left-1/2 lg:-translate-x-1/2 top-0 lg:top-[2146px] px-6 md:px-12 lg:px-0 py-16 lg:py-0"
    >
      {/* 01 - heading + subtext group */}
      <div className="flex flex-col items-center gap-6 lg:gap-10 w-full lg:w-[617px] h-auto lg:h-[228px]">
        <h2 className="w-full lg:w-[617px] h-auto lg:h-[160px] font-poppins font-bold text-3xl sm:text-5xl lg:text-[88px] leading-tight lg:leading-[80px] tracking-[-1px] sm:tracking-[-2px] lg:tracking-[-4px] text-center text-white">
          Subscribe to our news letter
        </h2>
   
        <p className="w-full max-w-[568px] h-auto lg:h-[28px] flex items-center justify-center text-center font-poppins font-normal text-sm sm:text-lg lg:text-[22px] leading-relaxed lg:leading-[28px] tracking-[-0.3px] lg:tracking-[-0.6px] text-white">
          To make your stay special and even more memorable
        </p>

      </div>



        <div className="relative inline-block group">
        <div
          className="absolute top-0.5 -left-1.5 w-full h-full rounded-xl opacity-0 translate-x-1 translate-y-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-1 transition-all duration-300 ease-in"
          style={{
            background:
              "linear-gradient(95.62deg, #E7DFD4 0%, #E9BFC9 14%, #FF59AE 26%, #FD368A 33%, #F45669 44%, #EC7551 51%, #49AA3F 67%, #1C997C 78%, #B1DFAB 96%, #E7DFD4 100%)",
          }}
        />

        <button className="group flex flex-row justify-center items-center gap-[8px] sm:gap-[10px] w-[140px] sm:w-[171px] h-[44px] sm:h-[56px] bg-white rounded-lg sm:rounded-xl px-4 py-3 sm:px-5 sm:py-5 overflow-hidden relative border-2 border-[#17100E] active:bg-[#dad9d9]">
          <span className="w-auto sm:w-[123px] h-[13px] sm:h-[16px] flex items-center justify-center font-poppins font-bold text-[13px] sm:text-[16px] leading-[13px] sm:leading-[16px] tracking-[-0.4px] text-[#17100E] transition-transform duration-300 origin-bottom whitespace-nowrap">
            Subscribe Now!
          </span>
        </button>
      </div>

    </section>
  );
}