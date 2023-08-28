import React from "react";
import { AiOutlineSearch } from 'react-icons/ai';

import Navbar from "../components/Navbar";

const Ourwork = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-20 flex flex-col md:flex-row">
        <div>
          <p className="uppercase space-between text-xs opacity-60 ">
            we sot this
          </p>
          <p className="mt-4 text-5xl leading-[3.5rem] w-96 font-bold border-r-4">
            Our work. Done right.
          </p>
        </div>
        <div className="md:w-auto mt-8 sm:mt-8 md:mt-0 md:ml-24 w-[350px] sm:w-auto drop-shadow-2xl flex">
          <p className="self-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
            sapiente delectus reiciendis ab voluptatibus debitis aliquam quam
            perspiciatis enim, hic distinctio praesentium exercitationem neque
            corporis fugit maiores nostrum odit iste?
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-3 mt-40 gap-5 grid-cols-1">
        <div className="flex bg-1 bg-cover bg-center justify-center md:h-52 md:w-[114%] h-96 cursor-pointer">
          <div className=" bg-blue-500 w-[100%] h-[100%] flex justify-center items-center opacity-0 hover:opacity-70">
            <AiOutlineSearch className="text-6xl text-center text-white"/>
          </div>
        </div>
        <div className="flex bg-6 bg-cover bg-center justify-center md:h-52 h-96 ml-12 lg:ml-14 cursor-pointer">
        <div className=" bg-blue-500 w-[100%] h-[100%] flex justify-center items-center opacity-0 hover:opacity-70">
            <AiOutlineSearch className="text-6xl text-center text-white"/>
          </div>
        </div>
        <div className="flex bg-2 bg-cover bg-center justify-center md:h-52 h-96 cursor-pointer">
        <div className=" bg-blue-500 w-[100%] h-[100%] flex justify-center items-center opacity-0 hover:opacity-70">
            <AiOutlineSearch className="text-6xl text-center text-white"/>
          </div>
        </div>
        <div className="flex bg-4 bg-cover bg-center justify-center md:h-52 h-96 cursor-pointer">
        <div className=" bg-blue-500 w-[100%] h-[100%] flex justify-center items-center opacity-0 hover:opacity-70">
            <AiOutlineSearch className="text-6xl text-center text-white"/>
          </div>
        </div>
        <div className="flex bg-5 bg-cover bg-center justify-center md:h-52 h-96 cursor-pointer">
        <div className=" bg-blue-500 w-[100%] h-[100%] flex justify-center items-center opacity-0 hover:opacity-70">
            <AiOutlineSearch className="text-6xl text-center text-white"/>
          </div>
        </div>
        <div className="flex bg-3 bg-cover bg-center justify-center md:h-52 h-96 cursor-pointer">
        <div className=" bg-blue-500 w-[100%] h-[100%] flex justify-center items-center opacity-0 hover:opacity-70">
            <AiOutlineSearch className="text-6xl text-center text-white"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourwork;
