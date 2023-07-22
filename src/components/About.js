import React from 'react'
// import resume from '....../public/Jayshree_Resume.pdf'
const About = () => {
  return (
    <>
      <section id="about">
      <div className="container mx-auto flex px-10 py-10 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
            {/* Hi, I'm Jayshree. */}
            𝑯𝒊, 𝑰'𝒎 𝑱𝒂𝒚𝒔𝒉𝒓𝒆𝒆.
            <br className="hidden lg:inline-block" />
            𝑰 𝒍𝒐𝒗𝒆 𝒕𝒐 𝒃𝒖𝒊𝒍𝒅 𝒂𝒎𝒂𝒛𝒊𝒏𝒈 𝒘𝒆𝒃𝒔𝒊𝒕𝒆𝒔.
          </h1>
          <p className="mb-8 leading-relaxed">
          Hello there!
          I'm Jayshree Upadhyay, a budding web developer with a passion for creating interactive and user-friendly websites. 
          I've been on this exciting journey of learning web development for some time now, and it has been an incredible 
          experience so far.I have a strong foundation in SQL and Python. The world of web development has always fascinated 
          me, and I find joy in bringing ideas to life on the internet. From crafting visually appealing front-end interfaces 
          to implementing dynamic functionalities on the back end, every aspect of this field captivates my curiosity and 
          drives me to continuously learn and improve my skills. I believe that constant learning is the key to staying 
          ahead in this rapidly evolving industry, and that's why I'm always seeking out new technologies and frameworks to 
          add to my toolkit. My goal is to become a versatile developer capable of tackling any challenge that comes my way. 
          Whether it's building an e-commerce platform or designing engaging user interfaces, I'm eager to explore and 
          contribute to the ever-changing landscape of web development.In my free time, I love reading novels and watching 
          kdramas and movies. I'm also an avid reader, enjoying tech blogs and tutorials that keep me inspired and informed.
          As I continue on this journey, I look forward to collaborating with fellow developers, working on exciting projects, 
          and ultimately making a positive impact through my work in the web development realm. The possibilities are limitless,
          and I can't wait to see where this exciting path takes me!
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-black bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Projects
            </a>
            <a href="https://drive.google.com/file/d/16V__bR8whP_M_1ivH-2FvFhW6W4Uw6bo/view?usp=sharing" 
            className="ml-4 inline-flex text-black bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 hover:text-white rounded text-lg"
            download="Jayshree's Resume" target='_blank'>
            <button type="button" class="btn btn-success btn-lg btn-block">View Resume</button>
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
    </>
  )
}

export default About