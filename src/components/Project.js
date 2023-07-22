import React from 'react'
import projects from './data.js'

const Project = () => {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          {/* <CodeIcon className="mx-auto inline-block w-10 mb-4" /> */}
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
          𝙼𝚈 𝙿𝚁𝙾𝙹𝙴𝙲𝚃𝚂
          </h1>
          <p>
          Step into my world of projects, where passion and creativity converge to make a positive impact. With compelling visuals and 
          engaging narratives, this portfolio showcases my remarkable endeavors. From overcoming challenges to celebrating triumphs, each 
          project reflects my versatility and technical expertise. Real-world impact is at the heart of my work, as I strive to transform 
          businesses, enrich lives, and push the boundaries of innovation. Join me on this inspiring journey, where possibilities are limitless. 
          Welcome to my collection of projects.
          </p> 
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Project