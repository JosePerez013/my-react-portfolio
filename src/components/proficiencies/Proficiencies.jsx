import React from "react";

import html from "../../assets/html.png";
import css from "../../assets/css.png";
import js from "../../assets/javascript.png";
import graphql from "../../assets/graphql.png";
import react from "../../assets/react.png";
import node from "../../assets/node.png";
import mongo from "../../assets/mongo.png";
import mysql from "../../assets/mysql.png";
import bootstrap from "../../assets/bootstrap.png";
import tailwind from "../../assets/tailwind.png";

const Proficiencies = () => {
  const technologies = [
    {
      id: 1,
      src: html,
      alt: "HTML Logo",
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      alt: "CSS Logo",
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: js,
      alt: "JavaScript Logo",
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: graphql,
      alt: "GraphQL Logo",
      title: "GraphQL",
      style: "shadow-pink-500",
    },
    {
      id: 5,
      src: react,
      alt: "React Logo",
      title: "React",
      style: "shadow-cyan-500",
    },
    {
      id: 6,
      src: node,
      alt: "Node Logo",
      title: "Node",
      style: "shadow-green-500",
    },
    {
      id: 7,
      src: mongo,
      alt: "MongoDB Logo",
      title: "MongoDB",
      style: "shadow-lime-500",
    },
    {
      id: 8,
      src: mysql,
      alt: "MySQL Logo",
      title: "MySQL",
      style: "shadow-blue-500",
    },
    {
      id: 9,
      src: bootstrap,
      alt: "Bootstrap Logo",
      title: "Bootstrap",
      style: "shadow-purple-500",
    },
    {
      id: 10,
      src: tailwind,
      alt: "Tailwind Logo",
      title: "Tailwind",
      style: "shadow-cyan-600",
    },
  ];

  return (
    <div
      name="proficiencies"
      className="w-full h-full bg-gradient-to-b from-gray-800 to-black"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-4 inline">
            Proficiencies
          </p>
          <p className="py-6">These are the technologies I am skilled with.</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {technologies.map(({ id, src, alt, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt={alt} className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Proficiencies;
