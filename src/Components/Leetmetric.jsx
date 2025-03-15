import React from 'react'
import leetmetric_img from '../assets/leetmeric_img.jpg';

const Leetmetric = () => {
  function func1(){
        window.open("https://github.com/yashikagarg1820/Leetmetric");
  }
  return (<>
    <div className=' h-15 m-5 '>
        <img src={leetmetric_img} alt='not found ' className=' '/>
        <h2 className='font-semibold text-[25px] text-fuchsia-300 m-2'>LeetMetric</h2>
        <p color='white' className='font-semibold text-white'>  A web based tool to track the number of questions completed,contest rating etc, we can have some inghts about the coding journey of a developer  </p>
        
           <button className='p-2 bg-blue-500 rounded-2xl font-semibold text-white m-7 flex  justify-around items-center' onClick={func1}>Source code</button>
    </div>
    
    </>
  )
}

export default Leetmetric