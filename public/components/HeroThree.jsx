import Image from "next/image";
import React from "react";

function HeroThree() {
  return (
    <div className="pb-12 bg-[#F3F3F3] ">
      <div className=" mx-auto text-center px-4 md:px-14">
        <h1 className="pt-12  font-medium text-[26px] md:text:[36px] ">
          Experience the Power of the
          <span className="font-bold text-[#00A25D]">
            {" "}
            #1 Marketplace Search App
          </span>
          <br />
          <span className="block mt-1">
            Grow your business and expand your industry reach.
          </span>
        </h1>
      </div>
      {/* next part */}

      <div className="w-full max-w-[1270px] mx-auto pt-12 px-4 md:px-11">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 shadow-xl">
          {[
            { img: "/icons/ht1.png", text: "Tax Preparer" },
            { img: "/icons/ht2.png", text: "Realtor" },
            { img: "/icons/ht3.png", text: "Accountant" },
            { img: "/icons/ht4.png", text: "Bookkeeper" },
            { img: "/icons/ht5.png", text: "Attorney" },
            { img: "/icons/ht6.png", text: "Financial Advisor" },
            { img: "/icons/ht7 (2).png", text: "InvestmentBanker" },
            { img: "/icons/ht8 (2).png", text: "Credit Specialists" },
            { img: "/icons/ht9 (2).png", text: "Notary" },
            { img: "/icons/ht10 (2).png", text: "Insurance Agent" },
            { img: "/icons/ht11 (2).png", text: "Consultant" },
            { img: "/icons/ht12.png", text: "Mortgage Broker " },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white w-full h-[100px] rounded-[3px] flex flex-col items-center justify-center p-2 shadow-sm"
            >
              <Image src={item.img} alt={item.text} width={30} height={30} />
              <span className="mt-3 text-[#000000]  text-[16px] font-medium font-sfui text-center">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
      <h1 className="pt-14 text-center font-inter text-[#00A25D] font-bold text-[28px] leading-[100%] align-middle">
        Recent TAAX APP Listings
      </h1>
      <p className=" text-[16px] font-bold text-center pt-6">
        Your membership includes a Live Business profile on TAAX APP
      </p>

      {/* next part */}
      <div className="w-full pt-12 overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-4">
          {[
            {
              img: "/icons/girl.png",
              title: "Analytics",
              desc: "Data-driven insights",
            },
            {
              img: "/icons/girl.png",
              title: "Marketing",
              desc: "Grow your audience",
            },
            {
              img: "/icons/girl.png",
              title: "Finance",
              desc: "Manage your money",
            },
            { img: "/icons/girl.png", title: "HR", desc: "Team management" },
            {
              img: "/icons/girl.png",
              title: "Operations",
              desc: "Streamline workflow",
            },
            {
              img: "/icons/girl.png",
              title: "Sales",
              desc: "Increase revenue",
            },
            { img: "/icons/girl.png", title: "Support", desc: "Customer help" },
            {
              img: "/icons/girl.png",
              title: "Legal",
              desc: "Compliance made easy",
            },
            { img: "/icons/girl.png", title: "IT", desc: "Tech solutions" },
            {
              img: "/icons/girl.png",
              title: "Research",
              desc: "Innovative ideas",
            },
            {
              img: "/icons/girl.png",
              title: "Development",
              desc: "Build products",
            },
            {
              img: "/icons/girl.png",
              title: "Customer",
              desc: "Better relations",
            },
            { img: "/icons/girl.png", title: "Growth", desc: "Expand faster" },
            {
              img: "/icons/girl.png",
              title: "Analytics 2",
              desc: "Track metrics",
            },
            { img: "/icons/girl.png", title: "Strategy", desc: "Plan ahead" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex-none w-[240px]  bg-white border border-gray-200 rounded-[8px] flex flex-col overflow-hidden shadow-md"
            >
              {/* Upper half image */}
              <div className="h-1/2 flex items-center justify-center bg-gray-50">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={1000}
                  height={1000}
                />
              </div>

              {/* Bottom half text */}
              <div className="h-1/2 pl-4 pt-1 flex flex-col justify-center">
                {/* Title */}
                <h1 className="text-[22px] text-[#000000] font-semibold">
                  {item.title}
                </h1>

                {/* Address Line + Horizontal Pipe */}
                <div className="flex items-center gap-2 mt-2 overflow-hidden text-ellipsis whitespace-nowrap">
                  <Image
                    src="/icons/address.png"
                    alt="location"
                    width={28}
                    height={28}
                  />
                  <span className="text-sm text-gray-600">
                    Street 4, Main town, NYC, 444000, NY
                  </span>
                  <span className="mx-2 text-gray-400">|</span>
                  <span className="text-sm text-gray-600">Another info</span>
                </div>

                {/* Location Icon + Text */}
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-[18px] font-bold text-[#000000]">
                    3
                  </span>
                  <Image
                    src="/icons/star (1).png"
                    alt="location"
                    width={100}
                    height={100}
                  />
                </div>

                {/* Reviews */}
                <p className="text-[15px] text-[#062D77] mt-2">12 Reviews</p>
              </div>
            </div>
          ))}
        </div>
     
      </div>
         <div className=" mt-[50px] ">
        <h1 className=" font-inter text-[24px] font-bold text-[#000000] leading-[100%] text-center">
          Certified listings have proven to increase bookings{" "}
          <span className="text-[#00A25D] font-extrabold">10X</span>
        </h1>
        </div>
    </div>
  );
}

export default HeroThree;
