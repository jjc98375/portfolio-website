import React from "react";

const ExperienceCard = ({ timeline, company, position, description }) => {
  return (
    <div class="relative flex justify-between">
      <div class="hidden w-60 py-3 md:block ">
        <h2 class="text-base font-medium text-gray-700 dark:text-gray-400">
          {timeline}
        </h2>
      </div>
      <div class="absolute w-60 inline-block -top-12 md:hidden ">
        <h2 class="text-base font-medium text-gray-700 dark:text-gray-400">
          {timeline}
        </h2>
      </div>
      
      <div class="flex flex-col items-center w-10 mr-4 md:w-24">
        <div>
          <div class="flex items-center justify-center w-10 h-10 border border-blue-500 rounded-full dark:border-blue-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="w-4 h-4 text-blue-500 dark:text-blue-400 bi bi-building"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"
              ></path>
              <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z"></path>
            </svg>
          </div>
        </div>
        <div class="w-px h-full bg-blue-300"></div>
      </div>

      <div class="relative flex-1 mb-16 bg-white rounded shadow md:mb-8 dark:bg-gray-900">
        <div class="absolute inline-block w-4 overflow-hidden -translate-y-1/2 top-7 -left-4">
          <div class="h-10 origin-top-right transform -rotate-45 bg-white dark:bg-gray-900 drop-shadow-lg"></div>
        </div>
        <div class="relative z-20 p-6">
          <p class="text-xl font-bold text-gray-600 dark:text-gray-400">
            {company}
          </p>
          <p class="mb-2 text-base italic text-gray-600 dark:text-gray-400 ">
            {position}
          </p>
          <ul>
            {description.map((item, index) => (
              <li key={index} class="list-disc ml-4 mb-2 text-base text-gray-600 dark:text-gray-400">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
