import React from 'react'
import {FaGithub,FaLinkedin,FaTwitter} from "react-icons/fa"
const Footer = () => {
  return (
    <div >
        <div className='flex justify-around items-center w-full h-16 mx-auto bg-gradient-to-b from-gray-500 to-black'>
            <p className=' text-white'>Designed and Developed by Supriyo Samanta</p>
            <p className=' text-white'>Designed and Developed by Supriyo Samanta</p>
            {/* <p className=' text-white'>Designed and Developed by Supriyo Samanta</p> */}
            <div className=' max-w-xl flex justify-between items-center'>
            <FaLinkedin size={20} className="text-white" />
            <FaGithub size={20} className="text-white" />
            <FaTwitter size={20} className="text-white"/>
            </div>
        </div>
    </div>
  )
}

export default Footer