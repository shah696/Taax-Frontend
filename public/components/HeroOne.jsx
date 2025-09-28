// components/HeroOne.tsx
"use client";

import Image from "next/image";
import React from "react";

function HeroOne() {
  return (
    <div
      className="relative bg-cover bg-[#F4F8FF] bg-center min-h-[90vh] flex flex-col items-center justify-start pb-12"
      style={{ backgroundImage: "url('/Images/bg1.png')" }}
    >
      {/* Content Wrapper */}
      <div className="z-10 grid grid-cols-1 md:grid-cols-2 items-center w-full px-4 md:px-8 lg:px-[110px] mt-24 lg:mt-48 gap-10">
        {/* Left Side (Text) */}
        <div className="text-black max-w-xl mx-auto md:mx-0 text-start md:text-left">
          <h1 className="font-bold text-[18px]">
            #1 Marketplace App and Practice Management Platform
          </h1>

          <p className="text-[22px] sm:text-[28px] lg:text-[36px] font-semibold mt-6 leading-snug">
            Powerful two-sided platform for practice{" "}
            <span className="text-[#00A25D] font-semibold">
              management and client
            </span>{" "}
            connections
          </p>

          <p className="text-sm sm:text-base mt-6">
            TAAX Pro is the single solution that streamlines your entire client
            lifecycle, from initial contact to deal completion.
          </p>

          {/* Buttons */}
          <div className="flex sm:flex-row gap-4 sm:gap-6 mt-6 justify-start md:justify-start">
            <button className="w-full sm:w-[200px] h-[50px] sm:h-[55px] bg-[#00A25D] text-white text-sm font-bold rounded-full hover:bg-[#00914F] transition">
              Free Trial
            </button>
            <button className="w-full sm:w-[200px] h-[50px] sm:h-[55px] border border-[#00A25D] rounded-full text-black text-sm font-bold hover:bg-[#00A25D] hover:text-white transition">
              Request Demo
            </button>
          </div>

          {/* Stars */}
          <div className="flex items-center gap-2 mt-6 justify-start md:justify-start">
            <Image
              src="/icons/star (1).png"
              alt="stars"
              height="100"
              width="100"
            />
            <p className="text-[16px] font-semibold">5 Stars</p>
          </div>

          <div className="flex gap-2 mt-5 justify-start md:justify-start">
            <Image src="/icons/star (4).png" alt="" height="30" width="30" />
            <Image src="/icons/star (3).png" alt="" height="30" width="30" />
            <Image src="/icons/star (2).png" alt="" height="30" width="30" />
          </div>
        </div>

        {/* Right Side (Video) */}
        <div className="h-[220px] w-[270px] sm:h-[260px] sm:w-[420px] md:h-[210px] md:w-[320px] lg:h-[240px] lg:w-[420px] rounded-[25px] overflow-hidden mx-auto md:mx-0 justify-self-end mb-[120px]">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* ✅ Now Section */}
      <div className="text-center text-[#000000] text-[20px] sm:text-[22px] font-bold mt-10 z-10 px-4">
        <p>Transform your business: Our numbers speak for themselves</p>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 relative mt-6 px-4">
        {/* Box 1 */}
        <div className="relative flex flex-col items-center justify-center p-4 after:content-[''] after:absolute after:top-0 after:right-0 after:w-px after:h-full after:bg-gray-300 sm:after:block">
          <h1 className="text-[28px] sm:text-[38px] text-[#00A25D] font-bold">
            100%
          </h1>
          <p className="text-[14px] sm:text-[18px] text-[#000000] font-semibold">
            User satisfaction
          </p>
        </div>

        {/* Box 2 */}
        <div className="relative flex flex-col items-center justify-center p-4 after:content-[''] after:absolute after:top-0 after:right-0 after:w-px after:h-full after:bg-gray-300 sm:after:block before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-px before:bg-gray-300 sm:before:hidden">
          <h1 className="text-[28px] sm:text-[38px] text-[#00A25D] font-bold">
            14+
          </h1>
          <p className="text-[14px] sm:text-[18px] text-[#000000] font-semibold">
            Apps Consolidated
          </p>
        </div>

        {/* Box 3 */}
        <div className="relative flex flex-col items-center justify-center p-4 after:content-[''] after:absolute after:top-0 after:right-0 after:w-px after:h-full after:bg-gray-300 sm:after:block">
          <h1 className="text-[28px] sm:text-[38px] text-[#00A25D] font-bold">
            10x
          </h1>
          <p className="text-[14px] sm:text-[18px] text-[#000000] font-semibold">
            More client Booking
          </p>
        </div>

        {/* Box 4 */}
        <div className="flex flex-col items-center justify-center p-4">
          <h1 className="text-[28px] sm:text-[38px] text-[#00A25D] font-bold">
            $21k
          </h1>
          <p className="text-[14px] sm:text-[18px] text-[#000000] font-semibold">
            Saved per office each year
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroOne;
