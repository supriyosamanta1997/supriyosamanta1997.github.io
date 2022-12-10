import React from 'react'
import Myntra from "../assets/portfolio/mintra.png"
import Millap from "../assets/portfolio/millap.png"
import Loseit from "../assets/portfolio/loseit.png"
import Engagebay from "../assets/portfolio/engagebay.png"
const Project = () => {
    const projects=[
        {
            id:1,
            src:Loseit,
            name:"Loseit Clone",
            github:"https://github.com/supriyosamanta1997/Loseit",
            deploy:"https://isnt-supriyosamanta1997-gmail-com-awesome-216a0.netlify.app/"
        },
        {
            id:2,
            src:Millap,
            name:"Millap Clone",
            github:"https://github.com/supriyosamanta1997/Millap_clone",
            deploy:"https://candid-ganache-399b55.netlify.app/"
        },
        {
            id:3,
            src:Myntra,
            name:"Myntra Clone",
            github:"https://github.com/Priyanshu-Tyagi/Myntra_Clone",
            deploy:"https://scintillating-jelly-fdc7ef.netlify.app/"
        },
        {
            id:4,
            src:Engagebay,
            name:"EngageBay Clone",
            github:"https://github.com/Sakil9051/brawny-base-7995/tree/main/engagebay-clone-328",
            deploy:"https://brawny-base-7995-6r5h.vercel.app/"
        },
        // {
        //     id:5,
        //     src:arrayDestructure1,
        //     name:"Loseit Clone",
        // },
    ]
  return (
    <div name="projects" 
    className='bg-gradient-to-b from-black to-gray-800 w-full h-full text-white md:h-screen lg:h-auto pt-36'
    >
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className=' pb-8 '>
                <p className=' text-4xl  font-bold inline border-b-4 border-gray-500'>Projects</p>
                <p className='text-2xl flex justify-center items-center font-bold text-gray-500 mt-28 '>Check Out Some of My Work Right Here</p>
            </div>

            <div className=' mt-4 grid sm:grid-cols-2 md:grid-cols-3 gap-8'>

                {
                    projects.map((project)=>{
                        return (
                            <div key={project.id} className='shadow-md shadow-gray-600 rounded-lg '>
                            <img src={project.src} alt=""
                            className='rounded-md duration-200 hover:scale-105'
                            />
                            <div>
                                <p className='text-xl text-gray-400 flex justify-center items-center box-border 
                                font-bold pt-6'>{project.name}</p>
                                {/* <p className='text-xl text-gray-500'>{project.description}</p> */}
                            </div>
                            <div className='flex items-center justify-center m-5'>
                            <button className='w-1/2 px-5 py-2 m-6 duration-200 hover:scale-105 rounded-md 
                            bg-gradient-to-r from-cyan-500
                             to-blue-500 cursor-pointer'><a href={project.deploy} target="_blank" rel="noreferrer">Demo</a></button>
                            <button className='w-1/2 px-5 py-2 m-6 duration-200 hover:scale-105 rounded-md bg-gradient-to-r from-cyan-500
                             to-blue-500 cursor-pointer'><a href={project.github} target="_blank" rel="noreferrer">Code</a></button>
                            </div>
                            </div>
                        )
                    })
                }
                
            </div>
        </div>
    </div>
  )
}

export default Project