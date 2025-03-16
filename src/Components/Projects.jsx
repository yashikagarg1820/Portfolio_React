import React from 'react'
import Leetmetric from './Leetmetric'
import Mental_health from './Mental_health'

const Projects = () => {
  return (
    <div id="Projects" className='p-20  flex flex-wrap items-center justify-center'>
    <h1 data-aos='fade-left' className='text-[52px] text-fuchsia-500 mb-20 font-semibold justify-center flex  gap-6'>Projects</h1>
    <div  className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 flex-wrap gap-10 justify-center '>
       <div  data-aos='fade-up'  height={250} width={250} className='m-8 h-120 w-80   rounded-3xl border-2 b_glow'><Leetmetric/></div>
       <div data-aos='fade-down' height={250} width={250} className='m-8 h-120 w-80 rounded-3xl border-2 b_glow '><Mental_health/></div>
       <div data-aos='fade-up' height={250} width={250} className='m-8 h-120 w-80 rounded-3xl border-2  b_glow'><Leetmetric/></div>
      

       <div></div>
    </div>
    </div>
 
  )
}

export default Projects