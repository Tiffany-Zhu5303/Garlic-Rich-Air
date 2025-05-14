import Link from 'next/link';
import React from 'react';


export default function Navbar() {
  return (
    <div className="flex items-center p-4 justify-between min-w-screen">
      <Link href = {"/"} className='text-xl font-bold uppercase'>GARLIC=RICH AIR</Link>
      <Link href={"/about"}>ABOUT</Link> 
    </div>
  ); 
}
