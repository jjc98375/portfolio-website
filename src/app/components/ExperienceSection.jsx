import React from "react";
import ExperienceCard from "./ExperienceCard";

const ExperienceSection = () => {
    const experiences = [
    
        {
            timeline: "June 2021 - September 2021",
            company: "SE Technology",
            position: "Software Developer Intern",
            description: [

                "Played a key role in developing a new community page for SE Lab V2.0, a design tool catered to system engineers, significantly enhancing the platform’s functionality.",
                "Managed to minimize a development time up to 50% by effectively integrating Toast-UI Editor for community post implementation, while utilizing React and Redux for seamless page design.",
                "Boosted user login performance by 20% through efficient backend integration using Node.js and MongoDB Atlas, improving overall user experience.",

            ],
        },
        { 
            timeline: "January 2022 - June 2022",
            company: "Tech4Good",
            position: "Front End Developer",
            description: [
                "Led the design and development of Tech4Good Lab's website landing page, employing TypeScript and SASS to craft distinct page segments.",
                "Revamped the personal info card for Tech4Good Lab’s officers, optimizing avatar settings and integrating social media links, resulting in a 20% surge in profile views.",
                "Crafted 5 modular UI components for the website's landing page using AngularJS.",
                "Earned distinction as the standout developer in Spring 2022, consistently delivering tasks ahead of time and providing technical support to team members.",
                  
            ]
            
        },
      {
          timeline: "June 2022 - December 2022",
          company: "IBM",
          position: "Software Developer Intern",
          description: [
              "Developed and deployed an alert system that actively performs health checks on 150+ IBM DB2 instances.",
              "Revamped the UI for latency and throughput charts from the replication page in IBM Data Management Console, leading to a 25% increase in user engagement and optimizing data replication visualization for 100K monthly users.",
              "Identified and resolved 50+ networking challenges from unexpected Backend API payloads, enhancing system stability by 20%.",
              "Implemented automated test scripts in JSON and established a CI/CD pipeline with Jenkins, achieving a 40% reduction in testing time",
          ],
      },

    // Add your experiences here
  ];

  return (
    <section id="experience" class="items-center pt-24 py-16 font-poppins dark:bg-gray-800">
      <div class="justify-center max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
        <div class="max-w-xl mx-auto">
          <div class="text-center ">
            <div class="relative flex flex-col items-center">

              <h1 class="text-5xl font-bold leading-tight text-white">
                {" "}
                Company <span class="text-blue-500"> Timeline</span>{" "}
              </h1>
              <div class="flex w-24 mt-1 mb-10 overflow-hidden rounded">
                <div class="flex-1 h-2 bg-blue-200"></div>
                <div class="flex-1 h-2 bg-blue-400"></div>
                <div class="flex-1 h-2 bg-blue-600"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full mx-auto lg:max-w-3xl mt-10">
                  
                {experiences.map((experience, index) => (
                    <ExperienceCard
                        key={index}
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
