import React from "react";
import "@/app/globals.css";
import Image from "next/image";
import bg from "@/public/Gradient.png";
import Card from "./Card";
import eco from "@/public/eco.png";
import yt from "@/public/youtube.png";
import insta from "@/public/instagram.png";
import bot from "@/public/bot.png";

export interface IData {
  title: string;
  img: string | any;
}
const Projects = () => {
  const data: IData[] = [
    {
      title: "Chat With AI.",
      img: bot,
    },
    {
      title: "Modern Ecommerce",
      img: eco,
    },
    {
      title: "Youtube Clone",
      img: yt,
    },
    {
      title: "InstaGram Clone",
      img: insta,
    },
  ];
  return (
    <div className=" relative scroll-smooth  max-h-max mt-32 text-4xl">
      <Image
        className="-z-10 absolute top-[10em] md:top-[-4em] inset-0"
        src={bg}
        alt="bg"
        height={500}
        width={1000}
      />

      <h1>Projects</h1>
      <div className=" mt-10 grid lg:grid-cols-2 place-content-center  items-center gap-6 justify-center">
        {data.map((val, index) => (
          <Card data={val} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
