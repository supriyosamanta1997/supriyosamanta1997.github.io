import React from 'react'
import html from "../assets/html.png"
import css from "../assets/css.png"
import javascript from "../assets/javascript.png"
import reactImage from "../assets/react.png"
import github from "../assets/github.png"
import tailwind from "../assets/tailwind.png"
import mongoDb from "../assets/mongoDb.png"
import Node from "../assets/node.png"
import Redux from "../assets/Redux.png"
import Express from "../assets/Express.png"
import Type from "../assets/TypeScript.png"
import Git from "../assets/Git.png"
import PostMan from "../assets/Postman.png"
import ChakraUI from "../assets/Cha.png"
const Tools = () => {
    const tools=[
        {
            id:1,
            src:html,
            title:"HTML",
            style:"shadow-orange-500"
        },
        {
            id:2,
            src:css,
            title:"CSS",
            style:"shadow-blue-500"
        },
        {
            id:3,
            src:javascript,
            title:"JavaScript",
            style:"shadow-yellow-500"
        },
        {
            id:4,
            src:reactImage,
            title:"React",
            style:"shadow-blue-600"
        },
        {
            id:5,
            src:Redux,
            title:"Redux",
            style:"shadow-blue-500"
        },
        {
            id:6,
            src:Type,
            title:"TypeScript",
            style:"shadow-blue-500"
        },
        {
            id:7,
            src:Node,
            title:"NodeJs",
            style:"shadow-orange-400"
        },
        
        {
            id:8,
            src:Express,
            title:"ExpressJs",
            style:"shadow-gray-500"
        },
        {
            id:9,
            src:mongoDb,
            title:"MongoDb",
            style:"shadow-green-400"
        },
       
        {
            id:10,
            src:PostMan,
            title:"PostMan",
            style:"shadow-red-600"
        },
        
        {
            id:11,
            src:Git,
            title:"Git Bash",
            style:"shadow-green-700"
        },
        
        
        {
            id:12,
            src:github,
            title:"GitHub",
            style:"shadow-gray-500"
        },
        
       
        {
            id:13,
            src:ChakraUI,
            title:"ChakraUI",
            style:"shadow-sky-200"
        },
        {
            id:14,
            src:tailwind,
            title:"Tailwind",
            style:"shadow-sky-400"
        },
    ]
  return (
    <div name="tech stack">

    <div 
    className="bg-gradient-to-b from-gray-800 to-black w-full h-full pt-36 "
    >
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
            <div>
                <p className=' text-4xl font-bold inline border-b-4 border-gray-500 p-2'>Tool Stack</p>
                <p className='text-2xl flex justify-center items-center font-bold text-gray-500 mt-28'>These Are The Technologies I've Worked With</p>
            </div>
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 mt-5 sm:px-0">
                {
                    tools.map((tool)=>{
                            return (
                                    <div key={tool.id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${tool.style}`}>
                                    <img src={tool.src} alt="React" className="w-20 mx-auto"/>
                                    <p className='mt-4'>{tool.title}</p>
                                </div>
                            )
                    })
                }
                
            </div>
        </div>
    </div>
    </div>
  )
}

export default Tools