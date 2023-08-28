import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex jusitfy-center items-center flex-wrap flex-2 gap-10'>
      <Link to='/' className='text-xl font-bold text-blue-500 cursor-pointer'>
        DesignCourse
      </Link>
      <nav className='mr-auto'>
        <ul className='list-none flex justify-center gap-8 items-center text-gray-800'>
            <NavLink to='/' className='text-md font-medium cursor-pointer'>Home</NavLink>
            <NavLink to='/work'className='text-md font-medium cursor-pointer'>Our Work</NavLink>
            <NavLink to='/service' className='text-md font-medium cursor-pointer'>Services</NavLink>
        </ul>
      </nav>
      <div className='drop-shadow-lg h-10'>
        <button className='w-[100%] h-[100%] font-bold text-sm rounded-full px-8 bg-blue-500 text-white'>
            Get a Quote
        </button>
      </div>
    </div>
  )
}

export default Navbar
