import React, { useRef, useEffect } from "react";
import emailjs from "emailjs-com";

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
    <div
      className="xl:w-[900px] xl:bg-red-300 bg-red-500 w-[700px]
     xl:space-y-5 "
    >
      <form ref={form} onSubmit={sendEmail}>
        <div
          id="name"
          className="
        w-full h-20  ml-8 text-2xl mt-0 pt-10 
        sm:w-full sm:h-10 sm:-ml-12 sm:text-3xl sm:-mt-52
        xl:w-full xl:h-15 xl:ml-16 xl:text-4xl xl:-mt-10 "
        >
          <label
            htmlFor="name"
            className="
          block p-1 font-semibold 
          sm:w-full sm:h-10 sm:ml-28 sm:text-3xl sm:mt-12 
          xl:block xl:pt-10 xl:ml-4 xl:font-semibold"
          >
            {" "}
            What's your name?
          </label>
          <input
            type="text"
            name="user_name"
            className="
          w-5/6 ml-2 focus:outline-none bg-red-500 pt-8 pb-8 pl-10 
          sm:w-full sm:h-10 sm:ml-28 sm:text-3xl  sm:mt-4 sm:bg-yellow-300
           xl:w-5/6  xl:ml-5 xl:mt-12 xl:border xl:border-red-900 xl:focus:outline-none"
          />
        </div>
        <div
          id="divider"
          className="border-2 border-black w-full ml-10 
                      mt-5 opacity-70 
                      sm:w-4/4 sm:ml-16 sm:m-10 sm:mt-24 
                      
                      xl:w-5/6 xl:ml-24  xl:m-10 xl:mt-36 xl:opacity-50
                      "
        ></div>
        <div
          id="email"
          className="
        w-full  h-20  ml-8 text-lg mt-4
        sm:w-full sm:h-10 sm:ml-16 sm:text-3xl sm:mt-12 
        xl:w-5/6 xl:h-15 xl:ml-16 xl:mt-5 xl:text-2xl"
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
            ml-4 focus:outline-none pt-8 pb-8 pl-10 
            sm:w-full sm:h-10 sm:ml-2 sm:text-3xl  sm:mt-4
             xl:mt-8  xl:ml-5 xl:focus:outline-none"
          />
        </div>
        <div
          id="divider"
          className="border-2 border-black w-full ml-10 
                      mt-2 opacity-70
                      sm:w-4/4 sm:ml-16 sm:m-10 sm:mt-24 
                      
                      xl:w-5/6 xl:ml-24 xl:m-10 xl:mt-32 xl:opacity-50
                      "
        ></div>

        <div
          id="message"
          className="
        w-full h-28  ml-8 text-lg mt-2 
        sm:w-full sm:h-10 sm:ml-16 sm:text-3xl sm:-mt-5
        xl:w-5/6 xl:h-15 xl:ml-32 xl:-mt-5 xl:text-2xl"
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
          w-5/6 ml-4 h-10 focus:outline-none bg-red-700
          sm:w-full sm:h-10 sm:ml-2 sm:text-3xl  sm:mt-4
           xl:w-5/6  xl:-ml-10 xl:focus:outline-none"
          />
        </div>
        <div
          id="divider"
          className="border-2 border-black w-full  ml-10 
                      -mt-5 opacity-70 xl:opacity-50
                      sm:w-4/4 sm:ml-16 sm:m-10 sm:mt-24
                      
                      xl:w-5/6 xl:ml-28  xl:mt-32
                      "
        ></div>

        <div
          id="sendCircle"
          className="
          w-32 h-32 ml-12 mt-10
          sm:w-36 sm:h-36 sm:-mt-2 sm:ml-16
          xl:w-44 xl:h-44 text-white  xl:mt-8 bg-black rounded-full
         justify-center items-center 
           
        xl:ml-32"
        >
          <input
            type="submit"
            value="send"
            className=" pl-12 p-20 text-2xl -mt-8 -ml-2
                      sm:-mt-4 sm:-ml-2
          "
          />
        </div>
      </form>
    </div>
  );
}

export default Contactform;
