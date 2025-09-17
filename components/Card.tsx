import React from "react";

import Image from "next/image";
import { IData } from "./Projects";

const Card = ({data}:{data:IData}) => {
  return (
    <div className=" h-52 md:h-56  max-w-max flex   sm:gap-3 px-2 md:px-2 items-center bg-gradient-to-b from-[#1A0B2E] to-[#693B93]   border-t-[#7127BA] border-t-8 rounded-[0.5em]">
      <Image src={data.img} alt="pic" width={150} height={100} />
      <div className="w-full">
        <h1 className=" w-[100%] text-[20px] lg:text-2xl font-sans">
          {data.title}
        </h1>
        <p className=" text-[10px] leading-none sm:text-sm sm:mt-2">
          Take your client onboard seamlessly by our amazing tool of digital
          onboard process.
        </p>
        <button className="text-[0.4em] border-[#693B93] bg-[#2C1250] border-[3px] px-3 h-[2.9em] text-center flex items-center  mt-4 rounded-[12px]">
          SOURCE CODE
        </button>
      </div>
    </div>
  );
};

export default Card;
