"use client"
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import Link from "next/link";

export default function Header() {
    return (
        <header className="flex items-center justify-between">
            <Link className="text-primary font-semibold text-2xl" href={'/'}>
                Re Collaboration
            </Link>
            <nav className="flex items-center gap-8 text-gray-500 font-semibold">
                <Link href={'/'}>Home</Link>
                <Link href={''}>Agency</Link>
                <Link href={''}>Developer</Link>
                <Link href={''}>About us</Link>
                <Link href={''}>Contact Us</Link>
            </nav>
            <nav className='flex items-center gap-4 text-gray-500 font-semibold'>
             <LoginLink><button>Login</button></LoginLink>   
            <RegisterLink><Link href={'/register'} className="bg-primary rounded-full text-white px-8 py-2">
                    Register
                </Link></RegisterLink> 
            </nav>
        </header>
    );
}
