import React from 'react'
import GitHubCalendar from "react-github-calendar";
import Typewriter from "typewriter-effect"
const About = () => {
  return (
    <div name="about" 
         className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white pt-24'
         >
          <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-fit'>
              <div className="pb-8">
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                  About Me
                </p>
              </div>
              <p className='text-3xl font-bold'> 
                <Typewriter
                options={{
                strings: [
                "I'm Supriyo Samanta"
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 100,
                  }}
                  /> 
                </p>
              <br/>
              <p className='text-xl'>Full Stack Web Developer with knowledge of MERN Stack along with a knack of building application utmost efficiency. Strong willing to be an asset for an organization.</p>
          </div>
          <p className=' text-gray-500 text-2xl font-bold flex justify-center items-center mt-5 '>Days I Code</p>
          <div className='max-w-screen-lg p-4 mx-auto flex justify-center items-center mt-3'>
          <GitHubCalendar
          username="supriyosamanta1997"
          color="#c084f5"/>
          </div>
          <div className='max-w-screen-lg p-4 mx-auto md:flex justify-center items-center mt-3'>
          <p>&nbsp;<img align="left" src="https://github-readme-stats.vercel.app/api?username=supriyosamanta1997&show_icons=true&locale=en" alt="supriyosamanta1997" /></p>
          <p align="center"><img align="left" src="https://github-readme-stats.vercel.app/api/top-langs?username=supriyosamanta1997&show_icons=true&locale=en&layout=compact" alt="ninja-mono1696" /></p>
          </div>
      
    </div>
  )
}

export default About