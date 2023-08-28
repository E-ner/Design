import React from "react";

import avatar1 from "../assets/avatar3.png";
import avatar2 from "../assets/avatar2.jpg";

const Testimonials = () => {
  return (
    <div className="mt-28 flex flex-col md:flex-row mb-1 w-[100%]">
      <div className="self-start md:w-[50%] w-[100%] flex justify-center flex-row items-center h-96 gap-4">
        <div className="text-center flex flex-col">
          <img src={avatar1} alt="image" className="self-center w-20 rounded-full" />
          <h2 className="mt-3 font-bold text-blue-600">Berry Louis</h2>
          <p className="text-sm">
            Award winning UX/UI <br /> designer and educator
          </p>
        </div>
        <div className="text-center flex flex-col">
          <img src={avatar2} alt="image" className="self-center w-20 rounded-full" />
          <h2 className="mt-3 font-bold text-blue-600">Chil Gomez</h2>
          <p className="text-sm">
            Award winning UX/UI <br /> educator
          </p>
        </div>
      </div>
      <div className="bg-blue-500 md:w-[50%] w-[100%]  h-96 flex justify-center items-center">
        <p className="md:p-10 md:px-32 p-2 px-8 text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus corrupti quasi natus tempore eos? Deserunt repellat non libero sed architecto vel sint? Ad unde tempore sit sequi nostrum maxime porro!
        </p>
      </div>
    </div>
  );
};

export default Testimonials;
