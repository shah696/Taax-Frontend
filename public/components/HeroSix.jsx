import Image from "next/image";
import React from "react";

function HeroSix() {
  return (
    <div>
      <div className=" bg-[#F4F8FF] px-4 lg:px-26  pb-12">
        <div className="pt-5">
          <p className="text-[24px] md:text-[36px] text-[#000000] font-bold text-center pt-3 px-8">
            Seamless data exchange between the{" "}
            <span className="text-[#00A25D]">PRO</span> and{" "}
            <span className="text-[#00A25D]">CUSTOMER</span> apps
          </p>
        </div>
        <div className="flex mt-7 lg:flex-row gap-2 md:gap-6 overflow-x-auto scrollbar-hide ">
          {/* First Card */}
          <div
            className="min-w-[95%] rounded-[20px] h-full lg:h-[440px] overflow-hidden  lg:min-w-[48%] bg-cover bg-center relative"
            style={{ backgroundImage: "url('/icons/1920 bgg.png')" }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Content */}
            <div className="relative flex flex-col mt-1 items-center text-white px-6 py-10">
              <h1 className="mt-4 text-3xl md:text-[32px] font-bold text-center">
                Client mobile app
              </h1>
              <p className="mt-4 max-w-2xl text-center text-[#FFFFFF] text-[16px]">
                The Customer App automatically exposes your business nationally.
                <br />
                Customers can search, book, communicate and send documents
                <br />
                via the app.
              </p>
              <div className="flex mt-6 justify-center items-center gap-3">
                <Image
                  src="/icons/single-star.png"
                  alt="star"
                  width={25}
                  height={25}
                />
                <h1 className="text-[14px] md:text-[18px] text-[#FFFFFF] font-semibold">
                  5 Stars
                </h1>
                <p className="text-[14px] md:text-[18px] text-[#FFFFFF]">
                  in App Store and Google Play
                </p>
              </div>
              {/* imgs */}
              <div className="mt-6 flex flex-col lg:flex-row items-center justify-center gap-6">
                {/* 2nd + 3rd div group */}
                <div className="flex flex-row lg:flex-row gap-6 order-1 lg:order-2">
                  {/* Scanner Image */}
                  <div className="mt-4">
                    <Image
                      src="/icons/scanner.png"
                      alt="Scanner"
                      width={100}
                      height={100}
                      className="w-[120px] sm:w-[220px] h-auto object-contain rounded-lg"
                    />
                  </div>

                  {/* Store Buttons */}
                  <div className="flex flex-col gap-3 mt-4">
                    {/* App Store Button */}
                    <button className="h-[36px] cursor-pointer flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow hover:bg-gray-100 transition">
                      <Image
                        src="/icons/apple.png"
                        alt="Apple"
                        width={20}
                        height={20}
                        // className="w-5 h-5 object-contain"
                      />
                      <span className="text-black text-[12px]">Apple</span>
                    </button>

                    {/* Play Store Button */}
                    <button className="h-[36px] w-[142px] cursor-pointer flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow hover:bg-gray-100 transition">
                      <Image
                        src="/icons/play.png"
                        alt="Play Store"
                        width={20}
                        height={20}
                        // className="w-5 h-5 object-contain"
                      />
                      <span className="text-black text-[12px] ">
                        Google Play
                      </span>
                    </button>
                  </div>
                </div>

                {/* 1st div (Mobile App Image) */}
                <div className="order-2 lg:order-1">
                  <Image
                    src="/icons/double-mobile.png"
                    alt="Mobile App"
                    width={600}
                    height={200}
                    className="w-[250px] sm:w-[350px] lg:w-[400px] h-auto object-contain rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>

           <div
            className="min-w-[95%] h-full lg:h-[440px] rounded-[20px] overflow-hidden  lg:min-w-[48%] bg-cover bg-center relative"
            style={{ backgroundImage: "url('/icons/1920 bgg.png')" }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Content */}
            <div className="relative flex flex-col mt-1 items-center text-white px-6 py-10">
              <h1 className="mt-4 text-3xl md:text-[32px] font-bold text-center">
                Client mobile app
              </h1>
              <p className="mt-4 max-w-2xl text-center text-[#FFFFFF] text-[16px]">
                The Customer App automatically exposes your business nationally.
                <br />
                Customers can search, book, communicate and send documents
                <br />
                via the app.
              </p>
              <div className="flex mt-6 justify-center items-center gap-3">
                <Image
                  src="/icons/single-star.png"
                  alt="star"
                  width={25}
                  height={25}
                />
                <h1 className="text-[14px] md:text-[18px] text-[#FFFFFF] font-semibold">
                  5 Stars
                </h1>
                <p className="text-[14px] md:text-[18px] text-[#FFFFFF]">
                  in App Store and Google Play
                </p>
              </div>
              {/* imgs */}
              <div className="mt-6 flex flex-col lg:flex-row items-center justify-center gap-6">
                {/* 2nd + 3rd div group */}
                <div className="flex flex-row lg:flex-row gap-6 order-1 lg:order-2">
                  {/* Scanner Image */}
                  <div className="mt-4">
                    <Image
                      src="/icons/scanner.png"
                      alt="Scanner"
                      width={100}
                      height={100}
                      className="w-[120px] sm:w-[220px] h-auto object-contain rounded-lg"
                    />
                  </div>

                  {/* Store Buttons */}
                  <div className="flex flex-col gap-3 mt-4">
                    {/* App Store Button */}
                    <button className="h-[36px] cursor-pointer flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow hover:bg-gray-100 transition">
                      <Image
                        src="/icons/apple.png"
                        alt="Apple"
                        width={20}
                        height={20}
                        // className="w-5 h-5 object-contain"
                      />
                      <span className="text-black text-[12px]">Apple</span>
                    </button>

                    {/* Play Store Button */}
                    <button className="h-[36px] cursor-pointer w-[142px] flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow hover:bg-gray-100 transition">
                      <Image
                        src="/icons/play.png"
                        alt="Play Store"
                        width={20}
                        height={20}
                        // className="w-5 h-5 object-contain"
                      />
                      <span className="text-black text-[12px] ">
                        Google Play
                      </span>
                    </button>
                  </div>
                </div>

                {/* 1st div (Mobile App Image) */}
                <div className="order-2 lg:order-1">
                  <Image
                    src="/icons/double-mobile.png"
                    alt="Mobile App"
                    width={600}
                    height={200}
                    className="w-[250px] sm:w-[350px] lg:w-[400px] h-auto object-contain rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSix;
