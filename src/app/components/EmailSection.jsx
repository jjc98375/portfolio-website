"use client";

import React, { useState } from "react";
import GithubIcon from "../../../public/GITHUB.svg";
import LinkedinIcon from "../../../public/LINKEDIN.png";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(endpoint, options);

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-end w-full mt-64 mb-24 "
    >
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Contact Information
      </h2>
      <div className="bg-white p-8 md:p-12 rounded-lg drop-shadow-2xl w-full max-w-5xl mx-auto grid md:grid-cols-2 gap-10 transform transition duration-300 hover:scale-105">        
        <div>
          <h5 className="text-xl font-bold text-gray-800 mb-4">
            Let's Connect!
          </h5>
          <p className="text-gray-600 mb-4">
            I am currently looking for new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I will try
            my best to get back to you!
          </p>
          <div className="flex gap-4">
            <Link href="https://github.com/jjc98375">
              <Image
                height="50"
                width="50"
                src={GithubIcon}
                alt="Github Icon"
              />
            </Link>
            <Link href="https://www.linkedin.com/in/joshua-jaehun-cho-598471160/">
              <Image
                height="50"
                width="50"
                src={LinkedinIcon}
                alt="LinkedIn Icon"
              />
            </Link>
          </div>
        </div>
        <div>
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="text-gray-800 block text-sm mb-2 font-medium"
              >
                Name
              </label>
              <input
                name="name"
                type="text"
                id="name"
                required
                className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 shadow-sm"
                placeholder="Josh Cho"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-gray-800 block mb-2 text-sm font-medium"
              >
                Email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 shadow-sm"
                placeholder="josh@gmail.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-gray-800 block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="10"
                className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 shadow-sm"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-5 rounded-lg w-full shadow-lg"
            >
              Send Message
            </button>
            {emailSubmitted && (
              <p className="text-green-500 text-sm mt-2">
                Email sent successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
