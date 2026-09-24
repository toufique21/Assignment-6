import React from 'react';
import image from '@/app/assets/banner.png'
import Image from 'next/image';

const page = () => {
  return (
    <div className='bg-[#000000] rounded container mx-auto'>
      <div className='flex justify-between bg-[#15171D] border border-[#222630] rounded-2xl p-12 mx-8 my-10'>
        <div>
          <p className='text-xs text-[#C2F800] font-semibold py-4'>WORKOUT LIBRARY</p>
          <h2 className='text-5xl font-bold py-4'>TRAIN WITH INTENT. LOG <br /> EVERY SET.</h2>
          <p className='text-gray-400'>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br /> into today's plan, and watch the week's work add up.</p>
          <button className='bg-[#C2F800] px-8 py-4 text-black font-bold text-xs my-8 rounded-xl'>BROWSE WORKOUTS</button>
        </div>
        <div>
          <Image src = {image} alt='' width={350} />
        </div>
      </div>
    </div>
  );
};

export default page;