import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';

import Pic1 from '../assets/pic1.jpg'
import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <div className='mt-20 flex flex-col md:flex-row'>
      <div>
        <p className='uppercase space-between text-xs opacity-60 '>award winning design</p>
        <p className='mt-4 text-5xl leading-[3.5rem] w-96 font-bold'>
            We make your 
            business look
            great
        </p>
        <div className='mt-4'>
        <Link to='/work' className='flex gap-2 text-white bg-blue-500 rounded-full p-2 px-4 w-40'>
            <AiOutlineSearch className='self-center'/>
            <p>Our Work</p>
        </Link>
      </div>
      </div>
      <div className='md:w-auto mt-8 sm:mt-8 md:mt-0 md:ml-24 sm:w-auto drop-shadow-2xl w-96'>
        <img src={Pic1} alt="image" className='rounded-xl' />
      </div>
    </div>
  )
}

export default Hero
