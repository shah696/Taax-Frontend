import Image from "next/image";
import React from "react";

function HeroFive() {
  return (
    <div>
      <div className=" bg-[#F3F6F6] px-4 lg:px-26 pb-12">
        <div className="flex  flex-col lg:flex-row lg-flex justify-between gap-4">
          <div className="flex flex-col mt-16 md:mt-28 justify-center items-center">
            <div>
              <h1 className="text-[#000000] text-[24px] md:text-[36px] font-bold">
                We are your partner in business
                <br /> growth.
              </h1>

              <p className="text-[#000000] text-[16px] mt-4 ">
                We provide everything your business requires to flourish and
                expand.
                <br /> From a top-notch Marketplace to efficient Appointment
                Management
                <br /> and cutting-edge Tax Software, TAAX App makes it
                effortless for you
                <br /> to elevate your business to new heights!
              </p>
            </div>
          </div>
          <div className="mt-16 md:mt-24 items-center justify-center  flex">
            <Image
              src="/icons/businessImg.png"
              alt="Business"
              width={400}
              height={400}
            />
          </div>
        </div>
        {/* next */}
        <div className="flex flex-col-reverse lg:flex-row justify-between gap-12 lg:gap-48">
          <div className="mt-10 md:mt-64 items-center justify-center flex">
            <Image
              src="/icons/mobileDollar.png"
              alt="Business"
              width={400}
              height={400}
            />
          </div>

          {/* Left Side (Text) */}
          <div
            className="flex flex-col mt-10 lg:mt-28 w-full sm:w-[450px] md:w-[600px] 
                  justify-center items-center lg:items-start text-left "
          >
            <div>
              {/* Heading */}
              <h1 className="font-inter font-semibold text-[28px] md:text-[36px] leading-[110%] text-[#000000]">
                Save time and money: Stop overpaying for multiple subscriptions
                and services.
              </h1>

              {/* 3 parts list */}
              <div className="mt-10 flex flex-col gap-6 w-full">
                {/* Item 1 */}
                <div className="flex flex-col">
                  <h2 className="text-lg font-semibold flex items-center gap-2 text-[#000000]">
                    <span className="text-xl font-bold">•</span>
                    Effortless Marketing:
                  </h2>
                  <p className="mt-2 text-gray-500 text-base">
                    Reach new clients with our built-in customer search app. Let
                    them find and book your services with ease.
                  </p>
                </div>

                {/* Item 2 */}
                <div className="flex flex-col">
                  <h2 className="text-lg font-semibold flex items-center gap-2 text-[#000000]">
                    <span className="text-xl font-bold">•</span>
                    Streamlined Workflow:
                  </h2>
                  <p className="mt-2 text-gray-500 text-base">
                    Manage appointments, share documents, and communicate with
                    clients - all from a single, powerful online dashboard.
                  </p>
                </div>

                {/* Item 3 */}
                <div className="flex flex-col">
                  <h2 className="text-lg font-semibold flex items-center gap-2 text-[#000000]">
                    <span className="text-xl font-bold">•</span>
                    Time-Saving Tools:
                  </h2>
                  <p className="mt-2 text-gray-500 text-base">
                    Free yourself from tedious tasks and focus on delivering
                    exceptional service.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side (Image) */}
        </div>
      </div>
    </div>
  );
}

export default HeroFive;
