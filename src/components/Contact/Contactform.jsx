import React, { useRef, useEffect } from "react";
import emailjs from "emailjs-com";
import Links from "./Links"
import Connectfooter from "./Connectfooter";
import GetInTouch from "./GetInTouch";
import heroSVG from "./nnnoise.svg"

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

  return (
    <div id="Contact" className=" ">

      <div id="contactHeading" className="bg-[#d6d6d0]  w-[575px] xl:w-full " style={{ backgroundImage: `url(${heroSVG})`, backgroundSize: "cover" }}>
        <h1 className="xl:text-[85px] text-[70px] ml-20 font-helvetica  xl:flex xl:justify-center font-semibold xl:ml-20 xl:pt-5 xl:mt-0 mt-64 pt-10 ">Let's work together. </h1>
        
      </div>
      <div id="conactform" className="xl:grid xl:grid-cols-2 xl:gap-4 ">
      <div
        className="xl:w-[900px] bg-[#d6d6d0] w-[575px] sm:w-[900px] pt-28 text-[#3a3733] h-[200vh]
      font-helvetica xl:col-span-1
     xl:space-y-5  xl:h-[150vh]"
     style={{ backgroundImage: `url(${heroSVG})`, backgroundSize: "cover" }}
      >
        <form ref={form} onSubmit={sendEmail}>
          <div
            id="name"
            className="
        w-full h-20  ml-8 text-5xl mt-0 pt-20  
        sm:w-5/6 sm:h-10 sm:-ml-12 sm:text-3xl sm:pt-0 sm:-mt-20
        xl:w-full xl:h-15 xl:ml-16 xl:text-4xl xl:-mt-20 xl:pt-0 "
          >
            <label
              htmlFor="name"
              className="
          block p-1 font-semibold
          sm:w-5/6 sm:h-10 sm:ml-28 sm:text-3xl sm:mt-12 
          xl:block xl:pt-10 xl:ml-4 xl:font-semibold"
            >
              {" "}
              What's your name?
            </label>
            <input
              type="text"
              name="user_name"
              className="
          w-5/6 ml-2 focus:outline-none bg-[#e6e6e1] border-2 rounded-l-full rounded-r-full border-[#989893] pt-10 mt-5 pb-8 pl-10  h-3/4
          sm:w-5/6 sm:h-10 sm:ml-28 sm:text-3xl  sm:mt-4 
           xl:w-[620px]  xl:ml-0 xl:mt-12  xl:focus:outline-none xl:bg-[#d6d6d0]"
           style={{ backgroundImage: `url(${heroSVG})`, backgroundSize: "cover" }}
            />
          </div>

          <div
            id="email"
            className="
        w-full  h-20  ml-8 text-5xl mt-52
        sm:w-5/6 sm:h-10 sm:ml-16 sm:text-3xl sm:mt-44 
        xl:w-5/6 xl:h-15 xl:ml-16 xl:mt-48 xl:text-3xl"
          >
            <label
              htmlFor="email"
              className="
          block p-1 font-semibold 
          sm:w-full sm:h-10 sm:ml-2 sm:text-3xl sm:-mt-8 
          xl:block xl:p-4 xl:ml-0 xl:font-semibold"
            >
              What's your email?
            </label>
            <input
              type="email"
              name="user_name"
              className="
            ml-4 focus:outline-none mt-5 pt-8  border-2 rounded-l-full rounded-r-full bg-[#e6e6e1] border-[#989893] pb-8 pl-10  w-5/6 h-20
            sm:w-5/6 sm:h-10 sm:ml-2 sm:text-3xl  sm:mt-4
             xl:mt-8  xl:ml-2 xl:focus:outline-none xl:bg-[#d6d6d0]"
             style={{ backgroundImage: `url(${heroSVG})`, backgroundSize: "cover" }}
            />
          </div>

          <div
            id="message"
            className="
        w-full h-28  ml-8 text-5xl mt-32 
        sm:w-5/6 sm:h-10 sm:ml-16 sm:text-3xl sm:mt-32
        xl:w-5/6 xl:h-15 xl:ml-32 xl:mt-32 xl:text-3xl"
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
          w-5/6 ml-4 h-20 mt-6 focus:outline-none border-2 rounded-l-full rounded-r-full bg-[#e6e6e1] border-[#989893]
          sm:w-5/6 sm:h-20 sm:ml-2 sm:text-3xl  sm:mt-4
           xl:w-5/6  xl:-ml-16 xl:focus:outline-none xl:h-20 xl:bg-[#d6d6d0]"
           style={{ backgroundImage: `url(${heroSVG})`, backgroundSize: "cover" }}
            />
          </div>

          <div
            id="sendCircle"
            className="
          w-1/4 h-2/4 ml-12 mt-20
          sm:w-40 sm:h-40 sm:mt-32 sm:ml-16 
          xl:w-44 xl:h-44 text-white   bg-black rounded-full
         justify-center items-center xl:mt-44
           
        xl:ml-32"
          >
            <input
              type="submit"
              value="send"
              className=" pl-12 p-20 text-5xl mt-0 -ml-2
                      sm:-mt-7 sm:ml- sm:text-3xl
          "
            />
            
            
          </div>
        </form>
      </div>
      <div id="second" className=" bg-[#d6d6d0]  xl:w-[620px]  xl:col-span-1 xl:ml-32"
      style={{ backgroundImage: `url(${heroSVG})`, backgroundSize: "cover" }}>
         <div id="info" className=" 
         pt-5 ml-10 p-5
         xl:ml-20 xl:pt-48 font-helvetica ">
          <h3 className="  text-[45px] xl:text-[45px] xl:-mt-20 font-semibold font-helvetica  border-b-2 border-black text-black w-[320px]">Contact details</h3>
          <h3 className="xl:text-[22px] pt-5 text-[35px] xl:w-[350px] xl:h-[50px] xl:mt-5 xl:-ml-10  flex xl:justify-center xl:items-center">yashadoke@gmail.com</h3>
          <h3 className="xl:text-[22px] text-[35px] mt-0 xl:w-[350px] xl:h-[50px] flex xl:-ml-16 xl:justify-center xl:items-center">+91 93247871464</h3>
         </div>
         
         <div id="link" className="
         mt-20 text-3xl  h-28  xl:text-2xl
         xl:w-1/4 xl:ml-20 xl:-mt-48" >
         <Links columnDirection={true}/>
         </div>
          
          
      </div>
      </div>
      
    </div>
  );
}

export default Contactform;
