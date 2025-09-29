// components/HeroTwo.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";

const navItems = [
  { id: 1, src: "/icons/Frame.png", alt: "icon1", title: "Marketplace" },
  { id: 2, src: "/icons/Group.png", alt: "icon2", title: "Client Portal" },
  { id: 3, src: "/icons/daany.png", alt: "icon3", title: "Appointments" },
  { id: 4, src: "/icons/Group (1).png", alt: "icon4", title: "Video Meetings" },
  { id: 5, src: "/icons/Group (2).png", alt: "icon5", title: "Messaging" },
  { id: 6, src: "/icons/Group 540.png", alt: "icon6", title: "eSignatures" },
];

function HeroTwo() {
  const [active, setActive] = useState(1);
  return (
    <div
      className=" pb-12 relative bg-cover bg-center  flex flex-col items-center justify-start"
      style={{ backgroundImage: "url('/icons/1920 bgg.png')" }}
    >
      <p className="mt-[50px] md:mt-[60px] text-[#FFB800] font-inter font-semibold text-center text-[22px] leading-[100%] tracking-[0%] uppercase align-middle">
        Client Connection Engine
      </p>

      <h1 className="mt-[30px] px-10 text-center font-inter text-[#FFFFFF] font-bold text-[24px] md:text-[38px] leading-[100%] align-middle">
        Witness the Power of the All-in-One Platform
      </h1>

      {/* ✅ White Box Section */}
      <div className="relative w-full px-4 md:px-8  lg:px-[114px] mt-8 md:mt-12">
        {/* Nav Boxes Container */}
        <div className="flex w-full shadow-md border border-gray-200 overflow-x-auto scrollbar-hide ">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`flex-shrink-0 flex-1 flex flex-col items-center justify-center border-r border-gray-200 transition-all duration-300 cursor-pointer
        ${
          active === item.id
            ? "bg-white h-[113px] -mt-[13px] z-10  rounded-t-[15px]"
            : "bg-gray-100 h-[100px] hover:bg-gray-200"
        }
        ${index === navItems.length - 1 ? "border-r-0" : ""}`}
              style={{ minWidth: "140px" }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={active === item.id ? 40 : 30}
                height={active === item.id ? 40 : 30}
              />
              <p
                className={`mt-2 text-sm font-medium ${
                  active === item.id ? "text-black" : "text-gray-500"
                }`}
              >
                {item.title}
              </p>
            </button>
          ))}
        </div>

        {/* Body Box */}
        <div className="bg-white w-full h-auto border border-t-0 border-gray-200 rounded-b-[15px] shadow-md -mt-[1px] p-6">
          {/* ✅ Grid container banaya left-right ke liye */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Side (Text + Checklist) */}
            <div className="w-full max-w-[414px]">
              <h3 className="font-inter font-semibold text-[32px] leading-[120%] text-[#000000]">
                Connect with more clients <br /> via automated marketing
              </h3>

              <p className="mt-6 font-inter font-medium text-[20px] leading-[140%] text-[#000000]">
                Your business profile on the TAAX APP customer search platform.
                Minimize cancellations and build trust.
              </p>

              <div className="mt-6 flex flex-col w-[300px]  gap-y-3">
                {[
                  "National exposure",
                  "Get more appointments",
                  "User-friendly app",
                  "Build more trust",
                  "Increase brand awareness",
                ].map((text, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Image
                      src="/icons/check.png"
                      alt="check icon"
                      width={20}
                      height={20}
                    />
                    <span className="text-gray-800 text-[16px] font-medium">
                      {text}
                    </span>
                  </div>
                ))}
              </div>
              <button className="cursor-pointer mt-8 hidden md:block font-bold w-full sm:w-[200px] h-[50px] sm:h-[55px] bg-[#00A25D] text-white text-sm rounded-full hover:bg-[#00914F] transition">
                View Details
              </button>
            </div>

            {/* Right Side Box */}
            <div className="mt-12 md:mt-8 w-full max-w-[610px] h-[214px] md:h-[350px]   overflow-hidden mx-auto">
              <Image src="/icons/ss.png" alt="SS" width={1000} height={1000} />
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
}

export default HeroTwo;
