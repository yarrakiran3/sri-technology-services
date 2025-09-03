'use client';
import Link from "next/link";
import clsx from 'clsx'
import { usePathname } from "next/navigation";


const links = [
    {
        name:"Home",
        href:"/"
    },
    {
        name:"Services",
        href:"/services"
    },
    {
        name:"Careers",
        href:"/careers"
    },
   
    {
        name:"Contact Us",
        href:"/contact"
    },
    {
        name:"About Us",
        href:"/about"
    }
]

export default function NavLinks({isLinkClicked,setIsLinkClicked,setButtonIsClicked}:{isLinkClicked:any,setIsLinkClicked:any,setButtonIsClicked:any}){
    const pathname =usePathname();
    return(
        links.map((link)=>{
            return(
                <Link key={link.name}
                onClick={()=>{setIsLinkClicked(true);setButtonIsClicked(false)}} 
                href={link.href} >

                <li  
                className={
                    clsx(
                        `block py-2 px-3 md:p-1 md:mt-4
                        text-1xl
                        text-black 
                        dark:text-white 
                        md:text-black
                        md:dark:text-white
                        rounded md:border-0
                        hover:text-blue-500 md:hover:text-blue-500
                        dark:hover:text-blue-500 md:dark:hover:text-blue-500 
                        
                        `,
                    {
                        "bg-gray-100 dark:bg-gray-700 md:bg-gray-100 md:dark:bg-gray-700 text-blue-500  dark:text-blue-500  md:text-blue-500  md:dark:text-blue-500" : pathname==link.href
                    }
                )}>
                            
                            
                    {link.name}

                </li>
                </Link>

                
                
               
            )
        })
    )
}