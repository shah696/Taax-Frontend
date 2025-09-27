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
      className="mt-12 pb-12 relative bg-cover bg-center  flex flex-col items-center justify-start"
      style={{ backgroundImage: "url('/icons/1920 bgg.png')" }}
    >
      <p className="mt-[70px] text-[#FFB800] font-inter font-semibold text-[22px] leading-[100%] tracking-[0%] uppercase align-middle">
        Client Connection Engine
      </p>

      <h1 className="mt-[30px] px-10 text-center font-inter text-[#FFFFFF] font-bold text-[38px] leading-[100%] align-middle">
        Witness the Power of the All-in-One Platform
      </h1>

      {/* ✅ White Box Section */}
      <div className="relative w-full px-4 md:px-8 lg:px-[114px] mt-12">
        {/* Nav Boxes Container */}
        <div className="flex w-full shadow-md border  border-gray-200">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`flex-1 flex flex-col items-center justify-center border-r border-gray-200  transition-all duration-300
        ${
          active === item.id
            ? "bg-white h-[113px] -mt-[13px] z-10 rounded-t-[15px]"
            : "bg-gray-100 h-[100px] hover:bg-gray-200"
        }
        ${item.id === navItems.length ? "border-r-0" : ""}`}
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

              <div className="mt-6 flex flex-col w-[300px] gap-y-3">
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
              <button className="mt-8 hidden md:block font-bold w-full sm:w-[200px] h-[50px] sm:h-[55px] bg-[#00A25D] text-white text-sm rounded-full hover:bg-[#00914F] transition">
                View Details
              </button>
            </div>

            {/* Right Side Box */}
            <div className="w-full max-w-[610px] h-[375px] bg-white border border-gray-300 rounded-[20px] shadow-md overflow-hidden mx-auto">
              {/* Top Half with Background Image */}
              <div
                className="relative h-1/2 w-full bg-cover bg-center"
                style={{ backgroundImage: "url('/icons/cover2.png')" }}
              >
                {/* Overlay Text */}
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 text-center">
                  <h2 className="text-white text-[20px] font-bold">
                    Search Financial Service Professionals
                  </h2>
                </div>
              </div>

              {/* Bottom Half with Inputs + Button */}
              <div className="flex flex-col items-center justify-center gap-4 h-1/2 px-6">
               
              </div>
            </div>
          </div>

          {/* Button below grid */}
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default HeroTwo;
