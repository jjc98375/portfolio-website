import React from "react";
import Image from "next/image";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import "../restGlobals.css";

const ProjectCard = ({ imgUrl, title, description, gitUrl }) => {
  return (
    <div className="card">
      <div
        className="group rounded-t-xl h-52 md:h-72 bg-center relative overflow-hidden"
        src={imgUrl}
        alt={title}
        width={300}
        height={200}
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="overlay absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 items-center justify-center">
          {/* <Link
                        href="/"
                        className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white mr-4 group/link"
                    >
                        <EyeIcon className="h-10 w-10 text-[#ADB7BE] group-hover/link:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    </Link> */}
          <Link
            href={gitUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] group-hover/link:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </Link>
        </div>
      </div>

      <div className=" bg-[#f4f3f3] rounded-b-xl py-6 px-4 ">
        <h5 className="text-[#25377f] font-mono text-xl font-semibold">{title}</h5>
        <p className="pt-1 font-light text-[#466a84]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
