import React from 'react'
import Aos from 'aos';
import { useEffect } from 'react';

const Contact = () => {

    useEffect(()=>{
         Aos.init({
            durartion:1000
         })
      },[])

      function func(){
        
      }

  return (
    <div id="Contact" className='p-2 lg:p-20 flex flex-col items-center '>
        <h1 data-aos='fade-left'className='text-fuchsia-500 font-semibold mb-20 leading-normal uppercase  text-[52px]'>Have a Question?</h1>
       <form className='flex-col flex gap-2 lg:w-1/2' action='https://formspree.io/f/manenone' method='POST'>
        <div className='lg:flex gap-9'>
           <input className='name md: w-full my-5 bg-slate-800 text-[25px] rounded-3xl p-4 border-2 border-fuchsia-800 b_glow glow text-slate-500' type='text' placeholder='Enter Your Name' name='name'/>
           <input className='email md: w-full my-5 bg-slate-800 text-[25px] rounded-3xl p-4 border-2 border-fuchsia-800 b_glow glow text-slate-500' type='email' placeholder='Enter Your E-mail' name='email'/> 
         </div>
           <textarea className='w-full bg-slate-800 my-3 mb-12 text-[25px] rounded-3xl p-4 border-2 border-fuchsia-500 b_glow glow text-slate-500' type='textarea' placeholder='Write Your Message' name='message'/>
           <button type="submit" className='neon-button border-2 border-fuchsia-500 rounded-3xl font-semibold text-[26px] text-white py-4 px-8 uppercase relative overflow-hidden glow' onClick={func}> Submit </button>
       </form>
    </div>
  )
}

export default Contact