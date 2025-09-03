'use client'
import { Reveal } from "../../components/Reveal"
import Image from "next/image"
import services from '@/public/Services.png'
import Carousel from "../../components/Carousel"

import { OpenBookSlides } from "../../components/slides"

import Cards from "../../components/Cards"

import { Services } from "../../components/card_data"


export default function Page(){
    return(
<div>
        <Reveal width="fit-content">
        <div className="text-center  m-auto mt-12 text-lg md:text-5xl md:mt-16">
            
            <strong>
          <h1 className="font-bold text-blue-600 text-xl md:text-5xl hover:font-normal  ">
          Sri Innovation Services Inc.
              </h1>
              </strong>
               is your trusted partner in technology and staffing solutions. 
              We are dedicated to delivering innovative IT services to help your business thrive.
        </div>
        </Reveal>
       
       <Reveal width="fit-content">
       <div className="text-center  m-auto mt-12 text-xl md:text-5xl md:mt-32">
        <div>
        Take a look at our core <span className="text-green-600	">services</span>

        </div>

         <div className="flex-row m-auto justify-evenly md:justify-evenly md:flex mt-6 text-center">
         <Cards  cards={Services}></Cards>
        </div>   


    

          
           
        </div>
       </Reveal>
       
       
        



                
               
</div>
    )
}