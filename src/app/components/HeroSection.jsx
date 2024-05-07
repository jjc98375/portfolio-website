"use client";

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

// import cvFile from "Jae-Hun-Cho_resume.pdf";

const HeroSection = () => {
  return (
    <section className="lg:py-16 lg:px-5">
      <div className="grid gap-y-16 grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left justify-self-start">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I am {" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Joshua Cho",
                5000,
                "a Web Developer",
                5000,
                "a Mobile Developer",
                5000,
              ]}
              wrapper="span"
              speed={20}
              style={{ fontSize: "1em", display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            I am an experienced full stack web developer and mobile developer.
          </p>
          <div>
            <a href="/josh-cho-resume-master.pdf" download="Jae-Hun-Cho.pdf">
              <button
                type="button"
                className="hover:cursor-pointer rounded-full font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 text-sm px-5 py-2.5 text-center"
              >
                Download CV
              </button>
            </a>
          </div>
        </div>
        <div className="col-span-5 place-self-center  sm:pt-16 ">
          <div className="image-container-grey w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/memoji4.png"
              width={350}
              height={350}
              alt="my image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
