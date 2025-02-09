"use client"
import Link from "next/link";


export const Navigation = () =>{
    return(
        <nav>
            <Link href="/" className= "/"> Home</Link>
            <Link href="about" className="/about">About</Link>
            <Link href="about" className="/contact">Contact</Link>
        </nav>
    );
};