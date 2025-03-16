import React from 'react'
import medigimi from '../assets/medigimi.jpg'

const Mental_health = () => {
  function func1(){
    window.open("https://github.com/yashikagarg1820/MindEase");
}
  return (
    <div className=' h-full m-7 '>
        <img src={medigimi} alt='not found'/>
        <h2 className='font-semibold text-[25px] text-fuchsia-300 m-2'>Mindease</h2>
        <p color='white' className='font-semibold text-white'>  Its a AI powered mental health care website , for developer to keep them fit and fine by regularly tracking therir mood swings,getting short remdies within a minute </p>
           <button className='p-3 bg-blue-500 rounded-2xl font-semibold text-white m-8 flex  justify-around items-center' onClick={func1}>Source code</button>
    </div>
  )
}

export default Mental_health