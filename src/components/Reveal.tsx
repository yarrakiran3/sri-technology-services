import {motion,useInView,useAnimation } from 'framer-motion';
import React,{useEffect,useRef} from 'react';

interface Props{
    children:JSX.Element;
    width:"fit-content"|"100%"
}
export const Reveal=({children,width="fit-content"}:Props)=>{
    return(
        <div>
            <motion.div
            variants={{
                hidden:{opacity:0,y:75},
                visible:{opacity:1,y:0}
            }}
            initial="hidden"
            animate="visible"
            >{children}</motion.div>
        </div>
        
    )

}