import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import Logo from '../logo/Logo.jsx';



const Nav = () => {
  return (
     <>
       <div className="flex justify-center items-center
       xs:flex-col xs:gap-14 xs:justify-center xs:items-center
       sm:flex-col sm:gap-14 sm:justify-center sm:items-center 
       md:flex-row md:py-8
       lg-flex-row lg:justify-around lg:gap-6 lg:items-center lg:py-8 
       xl-flex-row xl:justify-around xl:gap-96 xl:items-center xl:py-8 
       2xl-flex-row 2xl:justify-around 2xl:gap-96 2xl:items-center 2xl:py-8 ">


        <div className="flex flex-row">
           <Logo />
        </div>

        <div>
            <ul className="flex
             xs:flex-col
             sm:flex-col
             md:flex-row  md:text-xs
             lg:flex-row lg:text-sm
             xl:flex-row 
             2xl:flex-row">

            <li className="px-4 pt-3 hover:text-red-400 xs:pb-6 sm:pb-6 xs:text-lg"> <a href="#Home"> Home </a> </li>
           <li className="px-4 pt-3 hover:text-red-400 xs:pb-6 sm:pb-6 xs:text-lg "> <a href="#Product"> Product </a></li>
           <li className="px-4 pt-3 hover:text-red-400 xs:pb-6 sm:pb-6 xs:text-lg "> <a href="#Pricing plans"> Pricing Plans </a></li>
           <li className="px-4 pt-3 hover:text-red-400 xs:pb-6 sm:pb-6 xs:text-lg"> <a href="#Contact"> Contact </a></li>
            <li className="pl-4 pt-3 pr-0 text-xl xs:pb-6 sm:pb-6 xs:text-lg"> <a href="#User"> <FontAwesomeIcon icon={faCircleUser} /> </a></li>        
           <li className="px-4 pt-3 hover:text-red-400 xs:pb-6 sm:pb-6 xs:text-lg"> <a href="#Log In"> Log In </a></li>
           <li>
            <p className="border-black border-2 rounded-md text-center py-3 px-4 text-black inline-block bg-yellow-300 hover:bg-black hover:text-yellow-300
            xs:pb-6 sm:pb-6 xs:text-lg">
            <a className="font-bold" href="#Get Started"> Get Started </a>
            </p>
           </li>  
           
            </ul>
        </div>

       </div>
     </>
  )
}

export default Nav;
