import Image from "next/image"
import collab from '@/public/collab.jpg'

import Cards from "../../components/Cards"

import { CurrentOpenings } from "../../components/card_data"
import { Reveal } from "../../components/Reveal"

export default function Page(){
    return(
        <div>
        <div className="text-center  m-auto w-full   md:text-4xl md:mt-6">
            <div className="flex flex-col md:flex md:flex-row">
                <div className="mt-16 md:w-1/2">
                        Join our dynamic team and be a part of a company that values innovation, teamwork, and professional growth. We offer competitive benefits and a supportive work environment. 
                        
                </div>
                         
                        

                <div className=" md:w-1/2">
                        <Image
                        src={'/careers_.png'}
                        height={100}
                        width={200}
                        alt="Collaboration Creativity"
                        className="m-auto w-3/4 rounded-lg"
                        >
                        </Image>

                </div>
            </div>
                        
                </div>


                <div className="text-center text-orange-600  m-auto w-5/6 mt-12 text-xl md:text-5xl md:mt-32">
                        Current Openings
                               
                </div>
                
               
                <div className="flex justify-evenly md:justify-evenly md:flex mt-6 text-center">
                <Cards cards={CurrentOpenings}></Cards>

                </div>
                

                {/* <div className="text-center  m-auto w-5/6 mt-12  md:text-5xl md:mt-36 font-bold">
                Benefits
                <br></br>
                <div className="md:flex text-sm md:text-2xl mt-4 md:mt-16 font-normal" >
                        <div className="md:w-1/2">
                                <ol>
                                        <li>Competitive Salaries</li>
                                        <li>Professional Development Opportunities</li>
                                </ol>
                        </div>

                        <div className="md:w-1/2 ">
                                <ol>
                                        <li>Positive Work Environment</li>
                                        <li>Employee Wellness Programs</li>
                                </ol>
                        
                        
                        </div>

                </div>
               
        </div> */}

                <div className="text-center  m-auto  mt-12  md:text-4xl md:mt-24">
                        <span className="text-red-500">Ready to join our team? </span>
                
                <br></br>
                Submit your resume and portfolio to 
                <a href="mailto:hr@sriinnovasationsservices.com" className="hover:underline text-blue-500"> hr@sriinnovasationsservices.com 
                </a>
                <br></br>
                and let your journey with 
                <br></br>
                <span className="text-teal-500">Sri Innovation Services Inc.</span> begin.
                </div>
        </div>
        )
}