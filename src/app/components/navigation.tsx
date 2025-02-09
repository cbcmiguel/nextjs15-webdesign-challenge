"use client"
import Link from "next/link";
import Image from "next/image";


export const Navigation = () =>{
    return(
        <div className="flex flex-row justify-between my-[12px]">
            <Image src="/aique_logo.svg" alt="Logo" className="p-4" width={64} height={64} priority/>
             <nav className="flex gap-[12px] items-center">
                <Link href="/" className= "bg-[#2D68F8] text-white px-6 py-2 rounded-lg"> Home</Link>
                <Link href="about" className="px-6 py-2 rounded-lg">About</Link>
                <Link href="about" className="px-6 py-2 rounded-lg">Contact</Link>
            </nav>
        </div>
    );
};