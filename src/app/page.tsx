'use client'
import Image from "next/image";
import Link from "next/link";

import clients from "../../public/clients.jpg"


import { Reveal } from "../components/Reveal";

export default function Home() {
  return (
    <div
    
    >
        <br></br>
        <Reveal width="fit-content">
        <div className="text-center text-xl  m-auto mt-4  md:text-4xl md:mt-2">
        <strong>
          <h1 className="font-normal ">
          Innovating Tomorrow and today with  
          </h1>
        </strong>
        <strong>
          <h1 className="font-bold text-blue-600 text-2xl md:text-5xl hover:font-normal  ">
          Sri Technology Services Inc
              <span className="text-amber-600	">.</span>
              
                </h1></strong>


        </div>


        </Reveal>

        <Reveal width="fit-content">
          <div>
          <Image
            src={'/it_services.png'}
            height={150}
            width={400}
            alt="software services image"
            className="m-auto p-auto md:mt-4 mt-8 rounded-lg hidden md:block"
            >
          </Image>

          <Image
            src={'/it_services.png'}
            height={150}
            width={400}
            alt="software services image"
            className="m-auto p-auto md:mt-6 mt-8 rounded-lg block md:hidden"
            >
          </Image>
          </div>
        </Reveal>

        

        <Reveal width="fit-content">
        <div className=" mt-6 flex justify-evenly">
            
              
                <strong className="flex justify-around text-lg w-5/6 md:w-full md:text-2xl m-auto">
                <h1 className="font-normal ">
                Providing cutting-edge IT solutions, exceptional app development, and top-tier staffing services.
                
                
                </h1></strong> 
              
        </div>
        </Reveal>
        <br></br>

        
        
      
        <Reveal width="fit-content" >

        <div className="flex justify-around m-auto  p-8 flex mt-12 md:mt-32 ">
                <h1 className=" font-bold text-2xl md:text-7xl">Explore our range of 

                <span className="text-blue-600	"><Link href={'/services'} className="hover:underline"> Services</Link>  </span> 
                </h1>
                <Link href={"/services"}>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16">
                    <path fillRule="evenodd" d="M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z" clipRule="evenodd" />
                </svg>

                  </Link> 
                

        </div>
        </Reveal>
      
                <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
                



<Reveal width="fit-content">
    <div className="md:flex md:justify-around mt-12 w-11/12  md:text-5xl md:m-auto md:mt-32 ">
        <div className="  ml-8 mt-4 md:w-1/2  w-5/6 ">
            
          
            Ready to take your business to the next level? 
            Explore
            
            our 
            <Link href={"/solutions"} className="no-underline hover:underline ml-1 mr-1 text-blue-600	"> services  </Link>
              
            or 
            
            <Link href={"/contact"} className="no-underline hover:underline ml-1 mr-1 text-blue-600	"> get in touch </Link> 
            with us
             to discuss your project requirements.
            </div>
  
      <Image
      src={'/collaboration.png'}
      height={150}
      width={450}
      alt="Collaboration image"
      className="m-auto md:mt-auto mt-8 rounded-lg hidden md:block"
      >
      </Image>
      <Image
      src={'/collaboration.png'}
      height={150}
      width={250}
      alt="Collaboration image"
      className="m-auto p-auto md:mt-auto mt-8 rounded-lg block md:hidden"
      >
      </Image>
      
    </div>
</Reveal>

            
    </div>
  );
}
