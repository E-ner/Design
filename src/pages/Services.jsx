import React from "react";
import Navbar from "../components/Navbar";
import product8 from '../assets/product8.jpg';

const Services = () => {
  return (
    <div>
      <Navbar />
      <div className='mt-20 flex flex-col md:flex-row'>
      <div>
        <p className='uppercase space-between text-xs opacity-60 '>award winning design</p>
        <p className='mt-4 text-5xl leading-[3.5rem] w-96 font-bold'>
            Some Company
        </p>
      </div>
    </div>
    <div className="mt-10 bg-8 md:w-[126.5%] md:ml-[-145px] h-60 bg-cover bg-center ml-[-20px] sm:w-[105%] w-[108%]"/>
    <div className="my-20">
        <p className="w-[80%]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat hic possimus laborum. Mollitia laudantium soluta dicta sequi aut ipsum eum necessitatibus quos non id. Commodi doloremque voluptatibus sit at sequi!
        </p>
    </div>
    </div>
  );
};

export default Services;
