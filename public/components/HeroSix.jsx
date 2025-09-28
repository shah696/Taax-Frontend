import Image from "next/image";
import React from "react";

function HeroSix() {
  return (
    <div>
      <div className="h-[736px] text-[#F4F8FF] px-4 lg:px-26 pb-12">
        <div className="mt-5">
          <p className="text-[24px] md:text-[36px] text-[#000000] font-bold text-center pt-3 px-8">
            Seamless data exchange between the{" "}
            <span className="text-[#00A25D]">PRO</span> and{" "}
            <span className="text-[#00A25D]">CUSTOMER</span> apps
          </p>
        </div>
        <div className="flex mt-7 lg:flex-row gap-6 overflow-x-auto scrollbar-hide">
          {/* First Card */}
          <div
            className="min-w-[440] rounded-[20px] overflow-hidden  lg:min-w-[49%] bg-cover bg-center relative"
            style={{ backgroundImage: "url('/icons/1920 bgg.png')" }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Content */}
            <div className="relative flex flex-col mt-1 items-center text-white px-6 py-10">
              <h1 className="mt-5 text-3xl md:text-[32px] font-bold text-center">
                Client mobile app
              </h1>
              <p className="mt-4 max-w-2xl text-center text-[#FFFFFF] text-[16px]">
                The Customer App automatically exposes your business nationally.
                <br />
                Customers can search, book, communicate and send documents
                <br />
                via the app.
              </p>
              <div className="flex mt-6 justify-center items-center gap-4">
                <Image
                  src="/icons/single-star.png"
                  alt="star"
                  width={25}
                  height={25}
                />
                <h1 className="text-[18px] text-[#FFFFFF] font-semibold">
                  5 Stars
                </h1>
                <p className="text-[18px] text-[#FFFFFF]">
                  in App Store and Google Play
                </p>
              </div>
            </div>
          </div>

          {/* Second Card */}
          <div
            className="min-w-[440px] rounded-[20px] overflow-hidden lg:min-w-[49%] bg-cover bg-center relative"
            style={{ backgroundImage: "url('/icons/1920 bgg.png')" }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Content */}
            <div className="relative flex flex-col mt-5 items-center text-white px-6 py-10">
              <h1 className="mt-5 text-3xl md:text-[32px] font-bold text-center">
                Client mobile app
              </h1>
              <p className="mt-4 max-w-2xl text-center text-[#FFFFFF] text-[16px]">
                The Customer App automatically exposes your business nationally.
                <br />
                Customers can search, book, communicate and send documents
                <br />
                via the app.
              </p>
              <div className="flex mt-6 justify-center items-center gap-4">
                <Image
                  src="/icons/single-star.png"
                  alt="star"
                  width={25}
                  height={25}
                />
                <h1 className="text-[18px] text-[#FFFFFF] font-semibold">
                  5 Stars
                </h1>
                <p className="text-[18px] text-[#FFFFFF]">
                  in App Store and Google Play
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSix;
