"use client"
import Image from "next/image";
export default function Button() {
    return (
      <button className="flex flex-row items-center gap-2 bg-[#3758F9] border border-[#3758F9] text-[var(--text-white)] text-base font-medium leading-6 px-[15px] py-3  rounded-lg">
         <Image src="/rocket_icon.svg" alt="Logo" width={16} height={16} priority/>
        Check our solutions
      </button>
    );
  }
  