import React from "react";
import skills from "./skilldata.js";

const Skills = () => {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          {/* <ChipIcon className="w-10 inline-block mb-4" /> */}
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-black mb-4">
          𝚂𝙺𝙸𝙻𝙻𝚂 𝙰𝙽𝙳 𝚃𝙴𝙲𝙷𝙽𝙾𝙻𝙾𝙶𝙸𝙴𝚂
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            I possess a diverse set of skills that make me a valuable asset. From technical expertise in programming and data analysis 
            to creativity in design and problem-solving, I bring versatility to any project. With effective communication and a strong 
            team spirit, I thrive in collaborative environments. My adaptability and continuous drive for learning enable me to stay at 
            the forefront of emerging trends and technologies, ensuring success in various endeavors.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                {/* <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" /> */}
                <span className="title-font font-medium text-white">
                  {skill.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills