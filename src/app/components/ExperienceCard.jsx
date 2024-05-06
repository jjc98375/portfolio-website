import React from "react";
// import '../experienceCard.css';

const ExperienceCard = ({
  index,
  timeline,
  company,
  position,
  description,
}) => {
  const containerId = index % 2 === 0 ? "timeline-container-right" : "timeline-container-left";
  const pointerId = index % 2 === 0 ? "timeline-pointer-right" : "timeline-pointer-left";
  const imageL = [
    "/images/tech4goodLogo.png",
    "/images/IBMlogo.png",
    "/images/scaleAIlogo.jpeg",
  ];

  return (
    <div className="antialiased  text-gray-800">
      <div class="relative container mx-auto px-6 flex flex-col space-y-8">
        <div class="absolute z-0 w-2 h-full bg-white shadow-md inset-0 left-17 md:mx-auto md:right-0 md:left-0"></div>
        <div class="relative z-10">
          <img
            src={imageL[index]}
            alt="IBM logo"
            class="timeline-img "
          />
          <div className={containerId}>
            <div class={pointerId} aria-hidden="true"></div>
            <div class="bg-white p-6 rounded-md shadow-md">
              <span class="font-bold text-blue-600 text-sm tracking-wide">{timeline}</span>
              <h1 class="text-2xl font-bold pt-2">{company}</h1>
              <h4 class="italic text-lg">{position}</h4>
              
              <ul>
                {description.map((sentence, index) => (
                  <li key={index} className="list-disc pt-1 ml-4 text-sm">{sentence}</li>
                ))}
              </ul>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
