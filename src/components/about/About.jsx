import React, { useState }from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className=" text-4xl font-bold inline border-b-4 border-gray-500">
            About Me!
          </p>
        </div>
        <p className="text-xl mt-20">
          Hey there! I'm Jose Perez, a passionate coding enthusiast and aspiring
          web developer. I'm thrilled to showcase my growing portfolio and share
          my journey in the world of coding. I'm excited to take on new
          challenges, expand my skills, and contribute to the ever-evolving
          field of web development.
        </p>

        <br />

        <p className="text-xl">
        Not only do I enjoy coding, but I also enjoy playing video games, Paintballing, and going to the gym in my free time. I also enjoy spending time with my family and friends.
        </p>
      </div>
    </div>
  );
};

export default About;
