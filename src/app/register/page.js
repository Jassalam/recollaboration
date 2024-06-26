"use client";
import Image from "next/image";
import { useState } from "react";

export default function RegisterPage(){
    return( 
        <section className='mt-8'>
            <h1 className='text-center text-primary text-4xl font-semibold mb-4'>
                Register
            </h1>
            <form className='block max-w-xs mx-auto' onSubmit={handleFormSubmit}>
                <input type="email" placeholder="email" value={email}
                onChange={ev => setEmail(ev.target.value)}/>
                <input type="password" placeholder="password" value={password}
                onChange={ev => setPassword(ev.target.value)}/> 
                <button type="submit">Register</button>
                <div className='my-4 text-center text-gray-500'>
                    or Login with provider
                </div>
                <button className='flex gap-4 justify-center'>
                    <Image src={'/google.png'} alt={''} width={24} height={24}/>
                    Login with Google</button>
            </form>
            <div>
                
            </div>
        </section>
        
    );
}