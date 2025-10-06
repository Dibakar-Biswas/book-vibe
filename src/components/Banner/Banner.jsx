import React from 'react';
import bookImg from '../../assets/pngwing.png'

const Banner = () => {
    return (
        <div className='flex justify-around items-center p-16 w-full'>
            <div>
                <h1 className=' font-bold text-5xl'>Books to freshen up your bookshelf</h1>
                <button className='btn mt-6 p-7 bg-[#23BE0A] text-white text-2xl font-bold'>View The List</button>
            </div>
            <div>
                <img className='w-[320px]' src={bookImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;