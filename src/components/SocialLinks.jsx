import React from 'react'
import {FaGithub,FaLinkedin} from "react-icons/fa"
import {HiOutlineMail} from "react-icons/hi"
import {BsFillPersonLinesFill} from "react-icons/bs"
const SocialLinks = () => {

const links=[
    {
    id:1,
    child:(
        <> LinkedIn  <FaLinkedin size={30}/></> 
    ),
    href:"https://www.linkedin.com/in/supriyo-samanta-a88939230/",
    style:"rounded-tr-xl"
},
{
    id:2,
    child:(
        <> GitHub  <FaGithub size={30}/></> 
    ),
    href:"https://github.com/supriyosamanta1997",
    
},
{
    id:3,
    child:(
        <> Email  <HiOutlineMail size={30}/></> 
    ),
    href:"mailto:supriyosamanta1997@gmail.com",
   
},
{
    id:4,
    child:(
        <> Resume  <BsFillPersonLinesFill size={30}/></> 
    ),
    href:"Supriyo_Samanta_resume.pdf",
    style:"rounded-br-xl",
    download:true
}
]

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
        <ul>
            {
                links.map(({id,child,href,style,download})=>(
                    <li key={id} className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-xl duration-300 bg-gray-500${" "}${style}`}>
                <a  
                className="flex justify-between items-center w-full text-white" 
                download={download} 
                target="_blank"
                rel="noreferrer"
                href={href}
                >
                   {child}
                </a>
            </li>
                ))
            }
            
        </ul>
    </div>
  )
}

export default SocialLinks