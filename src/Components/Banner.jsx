import React from 'react'
import {AiFillGithub} from 'react-icons/ai'
import { FaGithub } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import  { FaTwitter }from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react';
import profile from '../assets/profilepic.jpg'
 

const Banner = () => {
 
    AOS.init({
       easing:'ease-out-quart',
       delay:0,
     duration:750
    })

  return (
    <div data-aos="fade-up" className='lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg-text-start flex lg:flex-row flex-col-reverse justrify-between lg:gap-28 items-center'>
        <div className='h-full ml-3 lg:py-40 flex flex-col justify-center lg:items-center text-white'>
            <h1 className='text-[52px]  mb-5 leading-normal text-fuchsia-200'>
            Hii,  I am Yashika Garg
            </h1><span className='text-fuchsia-400 text-[30px]'>Full Stack Developer</span>
            <p className='flex allign-left'>"I am a passionate Web Developer and problem solver, eager to build scalable and user-friendly applications. Currently pursuing my Bachelor's in Engineering, I am on a journey to become a Full Stack Developer at a top MNC."</p>
           <div className='flex mt-8 gap-4'>
              <div className='flex items-center justify-center'>
               <div className='flex space-x-2'>
                 <a href='https://github.com/yashikagar' className='text-fuchsia-600 hover:text-fuchsia-500  rounded-full glow p-2 md: flex justify-center'>
                    <FaGithub className="text-[28px]"/>
                 </a>
                 <a href='' className='text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2'>
                    <FaSquareInstagram className="text-[28px]"/>
                 </a>
                 <a href='' className='text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2 '>
                    <FaTwitter className="text-[28px]"/>
                 </a>
                 <a href='https://www.linkedin.com/in/yashika-garg-ba917b283/' className='text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2 '>
                    <FaLinkedinIn className="text-[28px]"/>
                 </a>
               </div>

              </div>
           </div>
        </div>
               <img src={profile} width={290} height={290} className=' rounded w-100 h-100 flex justify-center p-1  img_glow' alt=''></img>
    </div>
  )
}

export default Banner;