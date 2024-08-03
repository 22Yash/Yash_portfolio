import React, { useRef, useEffect } from "react";
import emailjs from "emailjs-com";
import Links from "./Links";

import heroSVG from "./nnnoise.svg";
import { Link } from "react-router-dom";
import BackToTopButton from "../Header/BackToTopButton";
import gsap from "gsap";

function Contactform() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qvyaxa3",
        "template_bovjcmd",
        form.current,
        "L0dMxQ0f9HRuIqNte"
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };

  const circleRef = useRef(null);

  useEffect(() => {
    const circle = circleRef.current;

    const enterMouse = (e) => {
      const { clientX, clientY } = e;

      const dx =
        clientX - circle.getBoundingClientRect().left - circle.clientWidth / 2;
      const dy =
        clientY - circle.getBoundingClientRect().top - circle.clientHeight / 2;

      gsap.to(circle, {
        x: dx / 1.5, // Adjust the division factor for the strength of the effect
        y: dy / 1.5,
        ease: "power4.out",
        duration: 0.3,
        backgroundColor: "#28434d",
      });
    };

    const leaveMouse = () => {
      gsap.to(circle, {
        x: 0,
        y: 0,
        ease: "power1.out",
        duration: 0.3,
        backgroundColor: "#3A606E",
        color: "white",
      });
    };

    if (circle) {
      circle.addEventListener("mousemove", enterMouse);
      circle.addEventListener("mouseleave", leaveMouse);
    }

    return () => {
      if (circle) {
        circle.removeEventListener("mousemove", enterMouse);
        circle.removeEventListener("mouseleave", leaveMouse);
      }
    };
  }, []);



  return (
    <div id="Contact"
     className=" w-[700px] min-h-screen  md:w-full xl:w-full h-[120vh] md:min-h-screen p-[40px] "
     style={{ backgroundImage: `url(${heroSVG})`, backgroundSize: "cover" }}
    >
      
      
      <div
        id="contactHeading"
        
       
      >
        <h1 className=" text-[60px] ml-[30px] flex justify-center font-helvetica underline   mt-0 pt-10 
        underline-offset-[18px] md:underline-offset-[12px]
         xl:underline-offset-[30px]  xl:text-[85px]
         xl:flex xl:justify-center font-semibold xl:ml-20 xl:pt-5 xl:mt-0 "
        >
          Let's work together.{" "}
        </h1>
      </div>
      <div id="conactform" className=" h-[700px] p-[40px] rounded-[50px]   md:w-[1200px] md:ml-[170px] md:mt-[60px] md:h-[480px]
       xl:p-[20px] flex justify-around flex-col gap-[10px] bg-[#1a1a14] "
       style={{ backgroundImage: `url(${heroSVG})`, backgroundSize: "cover" }}>
        <div id="rowOne" className="flex flex-col justify-center md:flex-row xl:-mt-[200px]  h-[400px] xl:h-[250px]">
        <div
              id="name"
              className="
        w-full h-20  ml-8  mt-0 -pt-[80px]  text-[35px]
        md:w-5/6 md:h-10 md:-ml-12 md:text-3xl md:pt-0 md:
        xl:w-full xl:h-15 xl:ml-0 xl:text-4xl xl:mt-[26px] xl:pt-0 "
            >
              <label
                htmlFor="name"
                className="
          block p-1 font-semibold 
          md:w-5/6 md:h-10 md:ml-28 md:text-3xl md:mt-0
          xl:block xl:pt-10 xl:ml-4 xl:font-semibold"
              >
                {" "}
                What's your name?
              </label>
              <input
                type="text"
                name="user_name"
                className="
          w-[400px] ml-2 focus:outline-none bg-[#e6e6e1] border-2 rounded-l-full rounded-r-full border-[#989893] pt-10 mt-5 pb-8 pl-10 h-1/4
          md:w-[400px] md:h-10 md:ml-28 md:text-3xl  md:mt-4 
           xl:w-[520px]  xl:ml-0 xl:mt-12  xl:focus:outline-none xl:bg-[#d6d6d0]"
                style={{
                  backgroundImage: `url(${heroSVG})`,
                  backgroundSize: "cover",
                }}
              />
            </div>

            <div
              id="email"
              className="
        w-full  h-20  ml-8 text-[35px] mt-36
        md:w-5/6 md:h-10 md:ml-16 md:text-3xl md:mt-44 
        xl:w-5/6 xl:h-15 xl:ml-16 xl:mt-[80px] xl:text-3xl"
            >
              <label
                htmlFor="email"
                className="
          block p-1 font-semibold -mt-[40px]
          md:w-full md:h-10 md:ml-2 md:text-3xl md:-mt-8 
          xl:block xl:p-4 xl:ml-0 xl:font-semibold"
              >
                What's your email?
              </label>
              <input
                type="email"
                name="user_name"
                className="w-[400px]
            ml-2 focus:outline-none mt-0 pt-8  border-2 rounded-l-full rounded-r-full bg-[#e6e6e1] border-[#989893] pb-8 pl-10  h-10 xl:h-[20px]
            md:w-5/6 md:h-10 md:ml-2 md:text-3xl  md:mt-4 xl:w-[520px]
             xl:mt-8  xl:ml-2 xl:focus:outline-none xl:bg-[#d6d6d0]"
                style={{
                  backgroundImage: `url(${heroSVG})`,
                  backgroundSize: "cover",
                }}
              />
            </div>
        </div>
        <div id="rowTwo" className="mt-[10px] xl:-mt-[400px]  ">
        <div
              id="message"
              className="
        w-full h-28  ml-8 text-[35px] -mt-[120px]
        md:w-5/6 md:h-10 md:ml-16 md:text-3xl md:mt-0
        xl:w-5/6 xl:h-15 xl:ml-[80px] xl:-mt-[0px] xl:text-3xl"
            >
              <label
                htmlFor="message"
                className="
          block p-1 font-semibold
          md:p-2
          xl:block xl:p-4 xl:-ml-16 xl:font-semibold"
              >
                Your message
              </label>
              <textarea
                name="message"
                className="
          w-[400px] ml-4 h-20 mt-3 focus:outline-none border-2  rounded-[40px] bg-[#e6e6e1] border-[#989893]
          md:w-5/6 md:h-20 md:ml-2 md:text-3xl  md:mt-4
           xl:w-full  xl:-ml-16 xl:focus:outline-none xl:h-[120px] xl:bg-[#d6d6d0]"
                style={{
                  backgroundImage: `url(${heroSVG})`,
                  backgroundSize: "cover",
                }}
              />
            </div>

        </div>
        
        




        

      </div>
      
    </div>
  );
}

export default Contactform;
