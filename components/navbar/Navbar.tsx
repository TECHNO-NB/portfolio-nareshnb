import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='text-white scroll-smooth border-b-2 w-[100vw] h-[4em] fixed top-0  z-50 bg-[#1A0B2E]'>
      <div className=' mx-auto max-w-screen-xl flex justify-between items-center h-full px-2.5 md:px-32'>
        <div className="logo text-4xl font-bold cursor-pointer">
            NB<span className='text-[#9a35ff]'>.</span>
        </div>
        <ul className='flex gap-6 text-[1.1em] cursor-pointer'>
        <li><Link href='#home'>Home</Link></li>
            <li><Link href='#project'>Project</Link></li>
            <li>Resume</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar