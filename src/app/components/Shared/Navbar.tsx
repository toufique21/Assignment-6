import React from 'react';
import logo from '@/app/assets/logo.png'
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    const links = <>
        <li><Link href="/">Workouts</Link></li>
        <li><a>My Plan</a></li>
    </>
    return (
        <div className="navbar bg-[#000000] shadow-2xs shadow-gray-900 container mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-white">
                        {links}
                    </ul>
                </div>
                <div className='flex justify-center items-center gap-2'>
                    <Image src={logo} width={30} />
                    <h2 className='font-bold font-sans text-2xl text-white'>FITLOG</h2>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-white">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <div className='flex justify-center items-center gap-1'>
                    <a className="btn text-xs">Plan</a>
                    <p>0</p>
                </div>
                <div className='flex justify-center items-center gap-1'>
                    <a className="btn text-xs">Save</a>
                    <p>0</p>
                </div>
            </div>
        </div>
    );
};

export default Navbar;