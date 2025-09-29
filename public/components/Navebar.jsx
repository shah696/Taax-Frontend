// components/Navbar.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200 flex items-center justify-between px-4  lg:px-[110px] py-4 md:px-6 sm:px-4">
        {/* LEFT (Logo + Links) */}
        <div className="flex items-center gap-10">
          <Image
            src="/icons/logo.png"
            alt="logo"
            width={120}
            height={32}
            className="h-8 w-auto"
          />

          <nav className="hidden md:flex items-center gap-6">
            {/* Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-800 hover:underline">
                Features
                <Image
                  src="/icons/arrow.png"
                  alt="arrow"
                  width={12}
                  height={12}
                />
              </button>
              <div className="absolute left-0 top-full mt-2 hidden group-hover:block bg-white border border-gray-200 rounded-md shadow-lg">
                <Link
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Feature 1
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Feature 2
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Feature 3
                </Link>
              </div>
            </div>
            <Link href="#" className="text-[#000000] hover:underline">
              Pricing
            </Link>
          </nav>
        </div>

        {/* RIGHT BUTTONS */}
        <div className="hidden md:flex items-center gap-3">
          <button className="cursor-pointer w-[138px] h-[36px] border border-[#00A25D] rounded-[50px] text-black text-sm font-medium hover:bg-[#00A25D] hover:text-white transition">
            Talk to Sales
          </button>
          <button className="cursor-pointer w-[110px] h-[36px] bg-[#00A25D] text-white text-sm font-medium rounded-[50px] hover:bg-[#00914F] transition">
            Free Trial
          </button>

          <button className="hover:underline cursor-pointer flex justify-center items-center gap-2">
            <Image
              src="/icons/profile.png"
              alt="profile"
              width={15}
              height={15}
            />
            <p className="text-black">Login</p>
          </button>
        </div>

        {/* MOBILE MENU ICON */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden bg-transparent border-none"
        >
          <Image src="/icons/menu.png" alt="menu" width={26} height={19} />
        </button>
      </header>

      {/* OVERLAY */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      {/* MOBILE SLIDER MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-6 gap-4">
          <button
            className="self-end text-xl"
            onClick={() => setIsMenuOpen(false)}
          >
            ✕
          </button>

          <div className="relative group">
            <button className="flex items-center gap-1 text-gray-800 hover:underline">
              Features
              <Image
                src="/icons/arrow.png"
                alt="arrow"
                width={12}
                height={12}
              />
            </button>
            <div className="absolute left-0 top-full mt-2 hidden group-hover:block bg-white border border-gray-200 rounded-md shadow-lg">
              <Link
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Feature 1
              </Link>
              <Link
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Feature 2
              </Link>
              <Link
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Feature 3
              </Link>
            </div>
          </div>
          <Link href="#" className="text-gray-800 hover:underline">
            Pricing
          </Link>

          <button className="cursor-pointer w-[138px] h-[36px] border border-[#00A25D] rounded-[50px] text-black text-sm font-medium hover:bg-[#00A25D] hover:text-white transition">
            Talk to Sales
          </button>
          <button className="cursor-pointer w-[110px] h-[36px] bg-[#00A25D] text-white text-sm font-medium rounded-[50px] hover:bg-[#00914F] transition">
            Free Trial
          </button>

          <button className="hover:underline cursor-pointer flex justify-start items-center gap-2">
            <Image
              src="/icons/profile.png"
              alt="profile"
              width={15}
              height={15}
            />
            <p className="text-black ">Login</p>
          </button>
        </div>
      </div>
    </>
  );
}
