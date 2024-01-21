"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "Resume Wizard",
    description: "Professional AI based resume builder ",
    image: "/images/projects/resumewizard.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/TheCaffeinatedCoders/Resume-Wizard",
  },
  {
    id: 2,
    title: "Who's Next?",
    description: "Community based online assassin game for android and ios",
    image: "/images/projects/assassin.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Assassinators-who-s-next/Who-s-Next?tab=readme-ov-file",
    },
    {
        id: 3,
        title: "ucsc tips",
        description: " a platform that shares campus tips from ucsc students",
        image: "/",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/sharont1121/UCSC_Tips?tab=readme-ov-file",
    }
];
const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="flex flex-row justify-center items-center gap-2 text-white my-6">
        <ProjectTag
          name="All"
          onClick={handleTagChange}
          isSelected={tag === "All"}
        />
        <ProjectTag
          name="Web"
          onClick={handleTagChange}
          isSelected={tag === "Web"}
        />
        <ProjectTag
          name="Mobile"
          onClick={handleTagChange}
          isSelected={tag == "Mobile"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
