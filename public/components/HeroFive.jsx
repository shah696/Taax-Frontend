import Image from "next/image";
import React from "react";

function HeroFive() {
  return (
    <div>
      <div className="h-[1020px] bg-[#F3F6F6] px-4 lg:px-26">
        <div className="flex  flex-col lg:flex-row lg-flex justify-between gap-4">
          <div className="flex flex-col mt-28 justify-center items-center">
            <div>
                <h1 className="text-[#000000] text-[36px] font-bold">
              We are your partner in business
              <br /> growth.
            </h1>

            <p className="text-[#000000] text-[16px] mt-4 ">
              We provide everything your business requires to flourish and
              expand.
              <br /> From a top-notch Marketplace to efficient Appointment
              Management
              <br /> and cutting-edge Tax Software, TAAX App makes it effortless
              for you
              <br /> to elevate your business to new heights!
            </p>
            </div>
          </div>
          <div className="mt-24 items-center justify-center  flex">
            <Image
              src="/icons/businessImg.png"
              alt="Business"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroFive;
