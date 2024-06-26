import React from "react";
import ExperienceCard from "./ExperienceCard";

const ExperienceSection = () => {
  const experiences = [
    {
      timeline: "September 2023 - Present",
      company: "Scale AI",
      position: "AI Prompt Engineer",
      description: [
        "Crafted and executed tailored prompts to deepen the comprehension of Large Language Models (LLMs) in executing programming tasks, capitalizing on their inherent strengths and contextual understanding.",
        "Enhanced the productivity of code output from LLMs through meticulous enhancements and adjustments.",
        "Conducted comprehensive reviews of numerous code snippets and human feedback, set to be utilized by LLMs for future code generation. This ensured the quality and relevance of the training data.",
      ],
    },


    {
      timeline: "June 2022 - December 2022",
      company: "IBM",
      position: "Software Developer Co-op",
      description: [
        "Developed and deployed an alert system that actively performs health checks on 150+ IBM DB2 instances.",
        "Revamped the UI for latency and throughput charts from the replication page in IBM Data Management Console, leading to a 25% increase in user engagement and optimizing data replication visualization for 100K monthly users.",
        "Identified and resolved 50+ networking challenges from unexpected Backend API payloads, enhancing system stability by 20%.",
        "Implemented automated test scripts in JSON and established a CI/CD pipeline with Jenkins, achieving a 40% reduction in testing time",
      ],
    },

    {
      timeline: "March 2022 - June 2022",
      company: "Tech4Good",
      position: "Research Assistant",
      description: [
        "Led the design and development of Tech4Good Lab's website landing page, employing TypeScript and SASS to craft distinct page segments.",
        "Revamped the personal info card for Tech4Good Lab’s officers, optimizing avatar settings and integrating social media links, resulting in a 20% surge in profile views.",
        "Crafted 5 modular UI components for the website's landing page using AngularJS.",
        "Earned distinction as the standout developer in Spring 2022, consistently delivering tasks ahead of time and providing technical support to team members.",
      ],
    },
    // Add your experiences here
  ];

  return (
    <section id="experience" className="items-center pt-24 py-16 font-poppins">
      <div className="justify-center max-w-full px-4 py-4 mx-auto lg:py-8 md:px-6">
        <div className="max-w-xl mx-auto">
          <div className="text-center ">
            <div className="relative flex flex-col items-center">
              <h1 className="text-5xl font-bold leading-tight text-white">
                {" "}
                Company <span className="text-blue-500"> Timeline</span>{" "}
              </h1>
              <div className="flex w-24 mt-1 mb-10 overflow-hidden rounded">
                <div className="flex-1 h-2 bg-blue-200"></div>
                <div className="flex-1 h-2 bg-blue-400"></div>
                <div className="flex-1 h-2 bg-blue-600"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full mx-auto mt-10">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              index={index}
              timeline={experience.timeline}
              company={experience.company}
              position={experience.position}
              description={experience.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
