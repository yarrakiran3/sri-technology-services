
import { ArrowLeftCircleIcon } from "@heroicons/react/16/solid";
import { ArrowRightCircleIcon  } from "@heroicons/react/16/solid";
import { useState } from "react";
import Image from "next/image";

export default function Carousel({ slides }:{slides:any}){
    const [index,setIndex] =useState(0);

function handleLeftClick(){
 if(index==0){
    setIndex(slides.length-1)
} 
else {
    setIndex(index-1);

}

}

function handleRightClick(){
    if(index==(slides.length-1)){
        setIndex(0)
    } 
   
    else {
        setIndex(index+1);

    }
}


    return (
        <div className="grid">

        
        <div className="col-start-1 row-start-1">
        <Image 
        width={1685}
        height={745}
        alt="Example image"
        src={slides[index]} key={index}/>
        </div>

        <div className=" flex  col-start-1 row-start-1 mt-44">
                <button className="w-12 h-12 ml-0 mr-auto " onClick={handleLeftClick}>
                <ArrowLeftCircleIcon ></ArrowLeftCircleIcon>

                </button>
            
                <button className="w-12 h-12 " onClick={handleRightClick}>
                <ArrowRightCircleIcon></ArrowRightCircleIcon>

                </button>

                    

        </div>

        </div>
  
    )
}

