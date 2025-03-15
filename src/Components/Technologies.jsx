import React, { useEffect } from 'react'
import AOS from 'aos';
import { DiJavascript } from "react-icons/di";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { RiReactjsFill } from "react-icons/ri";

import { RiNextjsLine } from "react-icons/ri";
import { FaNode } from "react-icons/fa";

const Technologies = () => {
  useEffect(()=>{
     AOS.init({
        durartion:1000
     })
  },[])

  
  return (
    <div id="Technologies" className='p-20  flex flex-col items-center justify-center'>
    <h1 data-aos='fade-left' className='text-[52px] font-semibold mb-20 leading-normal  text-fuchsia-500'>Technologies</h1>
   
   <div data-aos='fade-right'className='flex flex-wrap items-center justify-center gap-4 md:grid-cols-2'>
      <a href='' className='flex  items-center justify-center font-semibold hover:translate-2;  rounded-3xl h-20 w-20 border-2 border-fuchsia '>
         <DiJavascript color='#F7DF1E' className="text-[50px]"/>
       </a>
       <a href='' className='flex  items-center justify-center font-semibold  rounded-3xl h-20 w-20 border-2 border-fuchsia '>
         <FaHtml5 color='#E34F26' className="text-[50px]"/>
       </a>
       <a href='' className='flex  items-center justify-center font-semibold  rounded-3xl h-20 w-20 border-2 border-fuchsia '>
         <FaCss3Alt color='#1572b6'  className="text-[50px]"/>
       </a>
       <a href='' className='flex  items-center justify-center font-semibold  rounded-3xl h-20 w-20 border-2 border-fuchsia '>
         <FaNode color='green' className="text-[50px]"/>
       </a>
       <a href='' className='flex  items-center justify-center font-semibold  rounded-3xl h-20 w-20 border-2 border-fuchsia'>
         <RiReactjsFill color='#61DAFB' className="text-[50px]"/>
       </a>
       <a href='' className='flex  items-center justify-center font-semibold rounded-3xl h-20 w-20 border-2 border-fuchsia'>
         <DiMongodb color='#47A248' className="text-[50px] color:"/>
       </a>
       <a href='' className='flex  items-center justify-center font-semibold  rounded-3xl h-20 w-20 border-2 border-fuchsia '>
         <RiNextjsLine color='white' className="text-[50px]"/>
       </a>
       
      </div>
    </div>
  )
}

export default Technologies