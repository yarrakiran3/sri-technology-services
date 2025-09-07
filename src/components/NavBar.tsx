'use client'
import Link from "next/link"
import NavLinks from "./NavLinks"

import Image from "next/image";

import { Bars3Icon } from "@heroicons/react/16/solid";
import { useState } from "react";

export default function NavBar(){
  const [buttonClicked,setButtonIsClicked]=useState(false);
  const [isLinkClicked,seIsLinkClicked]=useState(false);

    return(
        <>
       

<nav className="fixed w-full bg-white  dark:bg-gray-900 z-40">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5">
    <Link href={"/"} className="flex items-center space-x-3 rtl:space-x-reverse">
    <Image
            src={'/sisi_logo.png'}
            width={55}
            height={100}
            className=" h-fit hidden md:block"
            alt="Sri Technology Services logo">

    </Image>
    <Image
            src={'/sisi_logo.png'}
            width={50}
            height={100}
            className=" h-fit block md:hidden"
            alt="Sri Technology Services logo">

    </Image>
        
    <span className="self-center text-2xl mt-2 md:text-4xl font-bold whitespace-nowrap text-blue-600 dark:text-blue-600 ">
        Sri Technology Services
        </span>
    </Link>

    <button onClick={()=>{setButtonIsClicked(!buttonClicked),seIsLinkClicked(false)}} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg block md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <Bars3Icon/>
    </button>
    
    <div className="hidden w-full md:block md:w-auto" >
      <ul className=" flex flex-col p-4 md:p-4    md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:border-gray-700">
      <NavLinks isLinkClicked={isLinkClicked} setIsLinkClicked={seIsLinkClicked} setButtonIsClicked={setButtonIsClicked}/>
      </ul>
    </div>
  </div>

  {buttonClicked&&!isLinkClicked&&
          <div className="text-black bg-white dark:bg-gray-900 font-roboto text-lg ml-8 block md:hidden mr-12">
          <NavLinks isLinkClicked={isLinkClicked} setIsLinkClicked={seIsLinkClicked} setButtonIsClicked={setButtonIsClicked}/>
        </div>
  }
</nav>


        </>
    )
}