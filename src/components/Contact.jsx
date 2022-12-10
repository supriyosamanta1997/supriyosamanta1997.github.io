import React from 'react'

const Contact = () => {
  return (
    <div  name="contact">

    <div
    className='w-full h-full bg-gradient-to-b from-black to-gray-800 text-white pt-40'
    >
        <div className='flex flex-col p-4 justify-center max-w-screen-lg 
        mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500 '>Contact</p>
                <p className='text-2xl flex justify-center items-center font-bold text-gray-500 mt-28'>Submit The Form Below To Get In Touch With Me</p>
            </div>
            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/408bcea8-d462-4453-a608-4b9983a5c0bb"
                method="POST"
                className='flex flex-col w-full md:w-1/2'
                >
                    <input type="text" name='name' placeholder='Enter Your Name'
                    className=" my-4 p-2 bg-transparent border-2 rounded-md
                    text-white focus:outline-none"
                    />
                    <input type="text" name='email' placeholder='Enter Your Email'
                    className=" my-4 p-2 bg-transparent border-2 rounded-md
                    text-white focus:outline-none"
                    />
                    <textarea name='message'
                    placeholder='Enter Your Message' 
                    rows="10"
                    className="p-2 bg-transparent border-2 rounded-md
                    text-white focus:outline-none"
                    ></textarea>
                    <button className='text-white bg-gradient-to-b
                    from-cyan-500 to-blue-500 px-6 py-3 my-8
                    mx-auto flex justify-center items-center rounded-md 
                    hover:scale-110 duration-300' >Let's Talk</button>
                </form>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Contact