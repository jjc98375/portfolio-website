"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faVuejs,
  faPython,
  faJava,
  faNode,
  faGithub,
  faDocker,
  faLinux,
} from "@fortawesome/free-brands-svg-icons";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="flex flex-wrap justify-center gap-4 p-5">
        <li>
          <FontAwesomeIcon icon={faHtml5} size="2x" title="HTML5" />
        </li>
        <li>
          <FontAwesomeIcon icon={faCss3} size="2x" title="CSS3" />
        </li>
        <li>
          <FontAwesomeIcon icon={faJs} size="2x" title="JavaScript" />
        </li>
        <li>
          <FontAwesomeIcon icon={faReact} size="2x" title="React" />
        </li>
        <li>
          <FontAwesomeIcon icon={faVuejs} size="2x" title="Vue.js" />
        </li>
        <li>
          <FontAwesomeIcon icon={faPython} size="2x" title="Python" />
        </li>
        <li>
          <FontAwesomeIcon icon={faJava} size="2x" title="Java" />
        </li>
        <li>
          <FontAwesomeIcon icon={faNode} size="2x" title="Node.js" />
        </li>
        <li>
          <FontAwesomeIcon icon={faGithub} size="2x" title="GitHub" />
        </li>
        <li>
          <FontAwesomeIcon icon={faDocker} size="2x" title="Docker" />
        </li>
        <li>
          <FontAwesomeIcon icon={faLinux} size="2x" title="Linux" />
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Bacholor of Science in Computer Science at University of California, Santa Cruz</li>
      </ul>
    ),
  },
  {
    title: "Awards",
    id: "Awards",
    content: (
      <ul className="list-disc pl-2">
        <li>UCSC Regent Scholarship 2021-2023</li>
        <li>
          <a href="https://www.linkedin.com/posts/joshua-jaehun-cho-598471160_ai-hackathon2023-ucsc-activity-7083310064442224641-VipE?utm_source=share&utm_medium=member_desktop">
            Cruz Hack 2023 - 2nd place, Justice Hacks
          </a>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-white pt-24">
      <div className="gap-8 items-center py-8 px-4 xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-16">
        <Image src="/images/aboutmepageImage.jpg" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-white text-base md:text-lg">
          Hello, I am Joshua Cho, and I am an aspiring software developer eager to contribute to a better society.
Throughout my college years, I participated in several projects, learning the latest Agile technologies and honing my proficiency in Python, JavaScript, Next.js, Redux, Node.js, Express, Firebase, Vercel, Svelte, Flutter, and Java. Outside of academics, I have completed internships at diverse institutions such as IBM, SE Technology, and the Tech4Good Research Lab. These experiences have enabled me to adapt to professional work environments and grow as a software engineer.

Currently, I see the potential of generative AI and am working as an AI prompt engineer at Scale AI. My role involves enhancing cognitive understanding of behaviors in Large Language Models by developing better prompts and analyzing the responses of each model.

Please feel free to explore my experiences and projects, and do not hesitate to reach out if you have any questions!
          </p>

          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Awards")}
              active={tab === "Awards"}
            >
              Awards
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
