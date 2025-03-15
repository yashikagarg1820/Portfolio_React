import React from 'react'
import Nav from './Components/Nav'
import Banner from './Components/Banner'
import About from './Components/About'
import Technologies from './Components/Technologies'
import Projects from './Components/Projects'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
import { BallTriangle } from 'react-loader-spinner'
import { useState } from "react";
import { useEffect } from "react";

const App = () => {


  const [loading,setLoading] = useState(false);
   useEffect(()=>{
      setLoading(true)
      setTimeout(()=>{
        setLoading(false)
      },2000)
   },[])


  return (

  <div class="relative h-screen">
 
  <div className="absolute inset-0">
    <div className=" fixed absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
 
  {
    loading ? 
    <div className=' h-[100vh] flex justify-center items-center'><BallTriangle 
          height={100}
          width={100}
          radius={5}
          color="#4fa94d"
          ariaLabel="ball-triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          />
          </div>
       :
    <div>
       <Nav/>
       <Banner/>
       <About/>
       <Technologies/>
       <Projects/>
       <Contact/>
       <Footer/>
    </div>
}
</div>
</div>

  )
}

export default App
