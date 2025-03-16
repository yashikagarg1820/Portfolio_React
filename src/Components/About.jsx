import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import  { FaTwitter }from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import AOS from 'aos';
import { useEffect } from 'react';
import { FaArrowRight } from "react-icons/fa6";
import about from '../assets/about_img.jpg'

const About = () => {
   
   useEffect(()=>{
        AOS.init({
           durartion:1000
        })
     },[])

     function func(){
           window.open("https://drive.google.com/file/d/1z0QJGkZtxrSRgQH8SAkxqRIoYiduO66k/view?usp=sharing")
     }

  return (  
    <div id="About" className='p-10  flex flex-col items-center justify-center'>
          <h1 data-aos='fade-right' className='text-[52px] font-semibold mb-20 leading-normal  text-fuchsia-500'>About me</h1>
          
                <div className='lg:px-26 px-10 lg:py-0 py-25 text-center gap-5 lg-text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-12'>
            <img data-aos='fade-down' src={about} width={290} height={290} className=' flex justify-start  m-10 img_glow' alt=''/>
          {/* <div className='h-full lg:py-25 flex flex-wrap items-center justify-center text-white'> */}
          
                  <p data-aos='fade-right' className='flex mt-10 allign-left text-white text-xl'>
                  With a strong interest in Full Stack Development, I am continuously expanding my skills in software development, competitive programming, and problem-solving.
<br></br>
I am on a journey to become a Full Stack Developer to contribute to impactful projects while continuously learning new technologies.
<br></br>
I believe in writing clean, efficient, and scalable code while focusing on user experience and real-world problem-solving.
I love talking about space and technologies.<br/>
<br/>
 Feel free to check out my projects and get in touch!
                   </p> 
                   </div>
                
                   
                  <div className='flex mt-0 lg:ml-125 ml-20'>
                     <div className='flex items-center justify-start'>
                      <div className=' flex space-x-1'>
                        <button className='neon-button shadow-xl hover:shadow-fuchsia-800/50 text-white border-2 hover:border-fuchsia-800 rounded-lg py-4 px-8 mr-15 uppercase relative overflow-hidden' onClick={func}>Resume </button>
                      </div>
                     </div>
                 </div>
                {/* </div>  */}
           </div>
    
  
  )
}

export default About