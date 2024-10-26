import React, { useEffect, useRef } from "react";
import Navbar from "./Navbar";
import gsap from "gsap";


import heroSVG from "../Header/background.png"
import heroSVGRight from "../Header/background.png"
import { Parallax } from 'react-parallax';

import { ScrollTrigger } from "gsap/ScrollTrigger";
import "tailwind-scrollbar";
import SlideMenu from "./SlideMenu";

import resume from "./YashDokeResume.pdf"
import ParticlesComponent from "../Animation/ParticleBackground";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const heroHeadingRef = useRef(null);
  const roleHeadingOneRef = useRef(null);
  const roleHeadingTwoRef = useRef(null);
  const roleHeadingOnePartRef = useRef(null);
  const hamburgerRef = useRef(null);
  const navbarRef = useRef(null);
  

  const infoRef = useRef(null);


    // useEffect(() => {
    //   const screenWidth = window.innerWidth;
  
    //   if (screenWidth > 1024) {
    //     // Animation for desktop/laptop screens
    //     const tlDesktop = gsap.timeline();



       
  
        
    //     tlDesktop.fromTo(
    //       heroHeadingRef.current,
    //       {
    //         y: 80,
    //         opacity: 0,
    //         duration: 1,
    //       },
    //       {
    //         y: 10,
    //         opacity: 1,
    //         duration: 1,
    //         repeat: 0,
    //         delay: 6,
    //       }
    //     );
    
    //     tlDesktop.fromTo(
    //       roleHeadingOneRef.current,
    //       {
    //         y: 80,
    //         opacity: 0,
    //         duration: 1,
    //         stagger: 1,
    //       },
    //       {
    //         y: -10,
    //         opacity: 1,
    //         duration: 1,
    //         stagger: 1,
    //       }
    //     );
    
    //     tlDesktop.fromTo(
    //       roleHeadingOnePartRef.current,
    //       {
    //         y: 80,
    //         opacity: 0,
    //         duration: 1,
    //         stagger: 1,
    //       },
    //       {
    //         y: -10,
    //         opacity: 1,
    //         duration: 1,
    //         stagger: 1,
    //       }
    //     );
    
    //     tlDesktop.fromTo(
    //       roleHeadingTwoRef.current,
    //       {
    //         y: 80,
    //         opacity: 0,
    //         duration: 1,
    //         stagger: 1,
    //       },
    //       {
    //         y: -10,
    //         opacity: 1,
    //         duration: 1,
    //         stagger: 1,
    //       }
    //     );
    
    //     tlDesktop.fromTo(
    //       infoRef.current,
    //       {
    //         opacity: 0,
    //         stagger: 1,
    //       },
    //       {
    //         opacity: 1,
    //         stagger: 1,
    //       }
    //     );
        
    //   } else if (screenWidth <= 1024 && screenWidth > 768) {
    //     const tlTablet = gsap.timeline();
  
    //     tlTablet.fromTo(
    //       heroHeadingRef.current,
    //       {
    //         y: 80,
    //         opacity: 0,
    //         duration: 1,
    //       },
    //       {
    //         y: 10,
    //         opacity: 1,
    //         duration: 1,
    //         repeat: 0,
    //         delay: 10,
    //       }
    //     );
    
    //     tlTablet.fromTo(
    //       roleHeadingOneRef.current,
    //       {
    //         y: 80,
    //         opacity: 0,
    //         duration: 1,
    //         stagger: 1,
    //       },
    //       {
    //         y: -10,
    //         opacity: 1,
    //         duration: 1,
    //         stagger: 1,
    //       }
    //     );
    
    //     tlTablet.fromTo(
    //       roleHeadingOnePartRef.current,
    //       {
    //         y: 80,
    //         opacity: 0,
    //         duration: 1,
    //         stagger: 1,
    //       },
    //       {
    //         y: 10,
    //         opacity: 1,
    //         duration: 1,
    //         stagger: 1,
    //       }
    //     );
    
    //     tlTablet.fromTo(
    //       roleHeadingTwoRef.current,
    //       {
    //         y: 80,
    //         opacity: 0,
    //         duration: 1,
    //         stagger: 1,
    //       },
    //       {
    //         y: -10,
    //         opacity: 1,
    //         duration: 1,
    //         stagger: 1,
    //       }
    //     );
    
    //     tlTablet.fromTo(
    //       infoRef.current,
    //       {
    //         opacity: 0,
    //         stagger: 1,
    //       },
    //       {
    //         opacity: 1,
    //         stagger: 1,
    //       }
    //     );
    //   } else {
    //     const tlMobile = gsap.timeline();

  
    //     tlMobile.fromTo(
    //       heroHeadingRef.current,
    //       {
    //         y: 80,
    //         opacity: 0,
    //         duration: 1,
    //       },
    //       {
    //         y: 80,
    //         opacity: 1,
    //         duration: 1,
    //         repeat: 0,
    //         delay: 0,
    //       }
    //     );
    
    //     tlMobile.fromTo(
    //       roleHeadingOneRef.current,
    //       {
    //         y: 80,
    //         opacity: 0,
    //         duration: 1,
    //         stagger: 1,
    //       },
    //       {
    //         y: -10,
    //         opacity: 1,
    //         duration: 1,
    //         stagger: 1,
    //       }
    //     );
    
    //     tlMobile.fromTo(
    //       roleHeadingOnePartRef.current,
    //       {
    //         y: 80,
    //         opacity: 0,
    //         duration: 1,
    //         stagger: 1,
    //       },
    //       {
    //         y: -10,
    //         opacity: 1,
    //         duration: 1,
    //         stagger: 1,
    //       }
    //     );
    
    //     tlMobile.fromTo(
    //       roleHeadingTwoRef.current,
    //       {
    //         y: 80,
    //         opacity: 0,
    //         duration: 1,
    //         stagger: 1,
    //       },
    //       {
    //         y: -10,
    //         opacity: 1,
    //         duration: 1,
    //         stagger: 1,
    //       }
    //     );
    
    //     tlMobile.fromTo(
    //       infoRef.current,
    //       {
    //         y:10,
    //         opacity: 0,
    //         stagger: 1,
    //       },
    //       {
    //         y:-10,
    //         opacity: 1,
    //         stagger: 1,
    //       }
    //     );


    //   tlMobile.fromTo(
    //         hamburgerRef.current,
    //         {
    //           y:10,
    //           opacity: 0,
    //           stagger: 1,
    //         },
    //         {
    //           y:-10,
    //           opacity: 1,
    //           stagger: 1,
    //         }
    //       );
    //   }
    // }, []);

    


  return (
    <>
    

<ParticlesComponent/>
    
<div
  id="hero"
  className="main w-[700px] xl:w-full md:w-full h-[150vh] xl:h-[100vh] z-3 relative"
  style={{
    background: `
      url(${heroSVG}) left bottom / 280% 200% no-repeat`,
    backgroundPosition: 'left bottom', // Consistent positioning
    backgroundAttachment: 'fixed', // Optional: use if you want a parallax effect
  }}
>
      
        
        
        <div id="navbar" ref={navbarRef} >
          <Navbar />
        </div>

       <section className="zoom">

        <div
          id="heroHeading"
          className="herotext 
         md:ml-28 text-[#fff] md:flex
         xl:ml-10 xl:tracking-wide xl:pt-20 "
        >
          <h1
            ref={heroHeadingRef}
            className="hero 
          text-[120px] font-bold  text-center mt-[20px]   selection:bg-[#FFD500] selection:text-[#000]
          md:text-8xl md:font-bold md:font-helvetica md:text-left md:-ml-10
          xl:text-9xl xl:font-bold xl:text-left xl:p-0 xl:ml-72 font-helvetica"
          >
            I'm Yash
          </h1>
          {/* <div id="img" className="w-[200px] h-[100px] bg-blue-300 ml-[250px]">efv</div> */}
        </div>
        <div id="heroRole" className="hero xl:tracking-wide text-[#3b3834]">
          <h1
            className="
          text-[120px] font-bold  text-center font-helvetica pt-[10px] flex flex-col selection:bg-[#6c665e] selection:text-[#3d3a36]
          md:text-8xl md:w-5/6 md:text-center md:flex md:p-0 md:ml-20
          xl:text-9xl xl:ml-52 xl:max-w-3/4   xl:flex xl:flex-col xl:p-0 xl:text-center xl:font-bold "
          >
            <div className="flex  flex-col xl:flex  xl:flex-row xl:gap-10 xl:w-[1200px]"
            style={{ 
              background: 'linear-gradient(hsl(var(--color-white)), hsl(200, 60%, 82%))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
          }}>
              <div ref={roleHeadingOneRef} className="h1 -mt-[30px] xl:mt-3 selection:bg-[#FFD500] selection:text-[#000] ">
                Creative
              </div>
              <div ref={roleHeadingOnePartRef} className="h1 -mt-[60px] xl:mt-4 selection:bg-[#FFD500] selection:text-[#000]">
                Frontend
              </div>
            </div>
            <div
              ref={roleHeadingTwoRef}
              className="h1 -mt-[60px] ml-4 md:ml-5 md:-mt-2 xl:-ml-[200px] text-white selection:bg-[#FFD500] selection:text-[#000]"
            >
              Developer.
            </div>
          </h1>
        </div>
        <div
          id="info"
          className="hero
        text-2md -mt-[30px] w-2/3 text-center ml-[100px] font-medium
        md:mt-5 md:ml-32 
        xl:text-2xl xl:ml-96 xl:-mt-0 xl:font-medium xl:w-2/5 xl:text-center text-[#fff]"
        >
          <h4 ref={infoRef} className=" 
          mt-16 text-[30px]  ml-10 md:mt-10  xl:mt-[50px] selection:bg-[#6c665e]
           selection:text-[#3d3a36]  xl:w-[900px] text-center xl:ml-[-80px]">
            I like to develop responsive, interactive, and animated websites.
            <div id="resume" className="flex  justify-center ml-[120px]">
        <button className="bg-[#5f5c57] p-[9px] rounded-full text-[20px] text-white mt-[10px] -ml-[90px]">
          <a href={resume} download="">get my resume offline</a>
        </button>
       </div>
          </h4>
          
          
        </div>
       
       </section>
        
          </div>

      
    </>
  );
}

export default Hero;
