"use client"
import Link from "next/link";
import Image from "next/image";


export const Navigation = () =>{
    return(
        <div className="flex flex-row justify-between my-[12px] xs:m-[12px] md:mx-0">
            <Image src="/aique_logo.svg" alt="Logo" className="md:p-4 xs:p-[5px] xs:w-[42px] md:w-[64px] h-auto" width={64} height={64} priority/>
             <nav className="flex flex-row gap-[12px] xs:ms-[53px] md:m-0 items-center">
                <Link href="/" className= "bg-[var(--brand)] text-[var(--text-white)] text-sm px-6 py-2 rounded-lg"> Home</Link>
                <Link href="about" className="text-[var(--text-black)] text-sm px-6 py-2 rounded-lg">About</Link>
                <Link href="about" className="text-[var(--text-black)] text-sm px-6 py-2 rounded-lg">Contact</Link>
            </nav>
        </div>
    );
};