import Image from 'next/image';
import React from 'react';
import logo from '@/app/assets/logo.png'

const Footer = () => {
    return (
        <div className='container bg-[#000000] mx-auto flex justify-between px-5 py-7 shadow-2xs shadow-gray-800'>
            <div className='flex gap-1'>
                <Image src = {logo} width={20}/>
                <p className='font-bold font-sans text-sm'>FITLOG</p>
            </div>
            <p className='text-xs text-gray-500'>
                © 2026 FitLog — Workout Library. Train hard, log honest.
            </p>
        </div>
    );
};

export default Footer;