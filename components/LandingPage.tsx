import Image from "next/image";
import React from "react";
import landingPagePic from "@/public/narsh.jpg";
import "@/app/globals.css";
import Projects from "./Projects";
import GLowDesgin from "./GLowDesgin";
import react from "@/public/react.png";
import arrow from "@/public/Vector.png";
import js from "@/public/js.png";
import css from "@/public/css.png"

const LandingPage = () => {
  return (
    <section
      id="home"
      className="mx-auto pt-20 scroll-smooth sm:pt-28 max-w-screen-xl px-2.5  md:px-32"
    >
      <div className="flex flex-col md:flex-row items-center ">
        <div className=" relative">
          <h1 className="font-sans text-center sm:hidden">
            Hello! I Am <span className="text-[#7127BA]">Naresh Bhattarai</span>
          </h1>
          <h1 className="font-sans w-full absolute left-[100%] hidden sm:block">
            Hello! I Am <span className="text-[#7127BA]">Naresh Bhattarai</span>
          </h1>
          <Image className=" absolute  hidden sm:block left-[79%] top-[3%]" src={arrow} alt="arrow" width={70} height={10}/>
          <Image
            className=""
            src={landingPagePic}
            alt="landing pic"
            width={350}
            height={300}
          />
          <div className="g absolute top-0 right-16 inset-0 -z-10"></div>
        </div>
        <div>
          <h1 className="text-5xl sm:text-6xl">
            Judges a book <br /> by its{" "}
            <span className="span text-[#7127BA]">cover</span>...
          </h1>
          <p className="text-[0.8em] mt-2 opacity-[0.8]">
            Because if the cover does not impress you what else can?
          </p>
        </div>
      </div>
      <div>
        <h1 className="text-3xl sm:text-4xl font-bold font-mono mt-16">
          I'm a <span className="text-[#7127BA]">Software Engineer.|</span>
        </h1>
        <p className="font-mono mt-1">
          Currently, I'm a Working as MERN Stack Freelancers,
        </p>
      </div>
      <p className=" text-[0.8em] sm:text-[1em] font-mono mt-10 font-bold">
      A self-taught software engineer with 3+ years of industry experience, 
        <br />focused on building digital products that effectively balance user needs 
         <br />with business goals, leveraging technical expertise to deliver impactful solutions.
      </p>
      <section className="scroll-smooth" id="project">
        <Projects />
      </section>

      <div className="mt-32 flex flex-col justify-center items-center">
        <h1 className="text-center text-xl font-semibold font-mono">
          I'm currently looking to join a{" "}
          <span className=" text-[#7127BA]">cross-functional</span> team <br />{" "}
          that values improving people's lives through accessible design
        </h1>
        <div className="boxes">
          <div className="box">
            <Image src={react} alt="react"/>
          </div>
          <div className="box">
          <Image src={js} alt="react"/>
          </div>
          <div className="box">
          <Image src={css} alt="react"/>
          </div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
        </div>
        <GLowDesgin />
      </div>
    </section>
  );
};

export default LandingPage;
