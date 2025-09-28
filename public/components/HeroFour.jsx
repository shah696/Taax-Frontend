"use client";
import Image from "next/image";
import React, { useState } from "react";

function HeroFour() {
  const [active, setActive] = useState("Task Manager");

  const links = [
    "Task Manager",
    "Forms",
    "Invoices",
    "Documents",
    "Calling",
    "Dashboard",
  ];
  return (
    <div className="  bg-[#F4F8FF]">
      <h1 className="pt-14 text-center font-inter text-[#00A25D] font-bold text-[18px]  md:text-[22px] leading-[100%] align-middle">
        End to End Client Management
      </h1>
      <p className="text-[24px] md:text-[36px] font-bold text-center pt-3 px-8 text-[#000000]">
        Seamless workflow experience
      </p>

      {/* next  */}
      <div className="w-full max-w-[1006px] mx-auto px-6  md:px-16 lg:px-0">
        {/* Navbar */}
        <div className="relative flex justify-between border-b  gap-16 overflow-x-auto scrollbar-hide border-gray-300 pt-5">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => setActive(link)}
              className={`relative py-3 px-4 cursor-pointer font-semibold text-sm  ${
                active === link ? "text-[#000000]" : "text-[#A4A4A4]"
              }`}
            >
              {link}
              {/* Active green line */}
              {active === link && (
                <span className="absolute left-0 bottom-0 h-[3px]  w-full bg-green-500 rounded-full"></span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* next */}

      <div className="px-4 md:px-16 lg:px-24 py-6 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Box */}
          <div className="rounded-[20px] bg-[#FFFFFF] p-2 md:p-10">
            <h3 className="font-inter font-semibold text-[28px] md:text-[32px] leading-[120%] text-[#000000]">
              Create boards for smarter <br />
              project workflow
            </h3>

            <p className="mt-6 font-inter font-medium text-[18px] md:text-[20px] leading-[140%] text-[#000000]">
              Your team's command <br />
              center for getting things done.
            </p>

            <div className="mt-6 flex flex-col w-full sm:w-[300px] gap-y-3">
              {[
                "Create a Board for any project",
                "Drag and Drop between list",
                "Attach files to any card",
                "Assign tasks to Team Members",
                "Set Priority Levels",
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

            <button className="mt-8 cursor-pointer font-bold w-[200px] h-[50px] sm:h-[55px] bg-[#00A25D] text-white text-sm rounded-full hover:bg-[#00914F] transition">
              View Details
            </button>
          </div>

          {/* Right Box */}
          <div className="rounded-[20px] h-[311px] md:h-[500px]  mt-3">
            <Image
              src="/icons/ss2.png"
              alt="SS2"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>

      <div className="bg-[#F8F8F8] py-16">
        <div className="mx-auto flex flex-col lg:flex-row justify-between items-center gap-10 px-4 lg:px-24">
          {/* Left Side (Icon + Text) */}
          <div className="flex items-center text-center lg:text-left gap-6">
            <Image
              src="/icons/video.png"
              alt="video"
              height={100}
              width={100}
            />
            <div>
              <h2 className="text-[24px] font-semibold text-black">
                Watch how TAAX PRO can help you.
              </h2>
              <button className="hidden lg:block relative top-6 cursor-pointer font-bold w-[180px] h-[40px]  bg-[#00A25D] text-white text-sm rounded-[10px] hover:bg-[#00914F] transition">
                Testimonial Video
              </button>
            </div>
          </div>

          {/* Right Side (Video) */}
          <div className="rounded-[25px] overflow-hidden w-full max-w-[400px] h-[220px] sm:h-[260px] lg:h-[240px] mx-auto lg:mx-0">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* button  */}
      <div className="px-24 cursor-pointer justify-center flex lg:hidden">
        <Image src="/icons/tumbBtn.png" alt="video" height={200} width={200} />
      </div>
    </div>
  );
}

export default HeroFour;
