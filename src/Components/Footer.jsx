import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import  { FaTwitter }from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
   <footer className=' bg-slate-800 text-white p-10 md:p-12 flex justify-around items-center'>
              <div className='mb-4 md:mb=0 '>
                <h2 className='lg:text-[52px] text-[20px] font-semibold  py-3  '>Feel free to reach out </h2>
                </div>
            <ul className=''>
                <li className=' flex  text-[20px] md:p-5'> <BiLogoGmail /> coolyashikagarg@gmail.com </li>
             
                <li className=' flex text-[20px] md:p-5'><FaPhoneAlt/> 987654321 </li>
            </ul>
            
      
   
   </footer>
  )
}

export default Footer