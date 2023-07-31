import React, { useState } from "react";
import HeroImage from "../../assets/heroImage.png";
import { MdKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <>
      <div
        name="home"
        className="h-screen w-full bg-gradient-to-b from-black to-gray-700"
      >
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-5 md:flex-row">
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-4xl sm:text-6xl font-bold text-white">
              Hello!!
            </h2>
            <p className="text-gray-400 py-4 max-w-md">
              I enjoy creating things that live on the internet, whether that be
              websites, applications, or anything in between. My goal is to
              always build products that provide pixel-perfect, performant
              experiences.
            </p>

            <div>
              <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                Projects
                <span className="group-hover:rotate-90 duration-300">
                  <MdKeyboardArrowRight size={23} className="ml-1" />
                </span>
              </button>
            </div>
          </div>

          <div>
            <img
              src={HeroImage}
              alt="PFP of Jose Perez"
              className="rounded-2xl mx-auto w-2/3 md:w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
