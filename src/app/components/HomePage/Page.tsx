import React from 'react';
import AllWorkoutsPage from '../All-Workouts/page';
import Image from 'next/image';
import image from '@/app/assets/banner.png'

const BooksPage = () => {
    return (
        <div className='container mx-auto p-12 mb-1 shadow-2xs shadow-gray-800'>
            <div className='flex justify-between bg-[#15171D] border border-[#222630] rounded-2xl p-12'>
                <div>
                    <p className='text-xs text-[#C2F800] font-semibold py-4'>WORKOUT LIBRARY</p>
                    <h2 className='text-5xl font-bold py-4 text-white'>TRAIN WITH INTENT. LOG <br /> EVERY SET.</h2>
                    <p className='text-gray-400'>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br /> into today's plan, and watch the week's work add up.</p>
                    <button className='bg-[#C2F800] px-8 py-4 text-black font-bold text-xs my-8 rounded-xl'>BROWSE WORKOUTS</button>
                </div>
                <div>
                    <Image src={image} alt='' width={350} />
                </div>
            </div>
            <h2 className='text-3xl font-bold mt-15 text-white'>The Library</h2>
            <p className='text-gray-400 text-sm'>Twelves lifts covering every major mascle group.</p>

            <div>

                <AllWorkoutsPage />

            </div>
            

        </div>

    );
};

export default BooksPage;