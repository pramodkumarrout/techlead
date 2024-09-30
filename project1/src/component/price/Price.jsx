import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'



const Price = () => {
  return (

    <>

    <div className="flex flex-row justify-around bg-sky-100 pb-40
    xs:flex-col xs:justify-start xs:items-start
    sm:flex-col sm:justify-start sm:items-start">

       <div className="mt-60
       xs:mt-20
       sm:mt-20">
        <h1 className="text-4xl font-sans leading-normal
        xs:text-3xl
        sm:text-3xl"> Checkout Our <br />
             Best Pricing Options 
        </h1>
        <p className="w-400 mt-16 leading-relaxed
        xs:w-auto xs:mt-8
        sm:w-auto sm:mt-8">Explore our best pricing options designed to fit a
           variety of needs and budgets. Whether you're a small business or a larger organization,
            we offer flexible plans that provide exceptional value and comprehensive features. 
        </p>
        <p className="mt-14 inline-block px-4 py-2 bg-black text-white border-black border-2 font-sans font-bold text-center rounded-md hover:bg-yellow-400 hover:font-bold hover:text-black"> <button type="button"> See More </button></p>
       </div>

       
       <div className="mt-36 border-2 border-black bg-black w-510 rounded-lg
       xs:w-auto 
       sm:w-auto">
        <div className="relative">
        <p className="absolute -top-6 left-52 inline-block bg-yellow-400 font-bold border-2 border-black text-center px-4 py-2
        xs:left-36
        sm:left-36 "> Best Value </p>
        </div>
        <div className="text-white">
        <h2 className="mx-8 mt-12 text-3xl font-normal"> Premium </h2>
        <p className="mt-4 ml-8 text-xl font-medium"> US$</p>
        <p className="-mt-2 ml-16 text-5xl font-semibold"> 19.99 </p>
        <p className="ml-8 text-xs mt-2 "> Every Month </p>
        <p className="ml-8 mt-2 text-sm"> Use this area to describe one of your memberships. </p>
        <p className="ml-8 mt-6 text-sm"> Valid for 12 months </p>
        <p className="mt-6 ml-24 inline-block bg-white text-black border-2 border-black px-28 py-4 rounded-xl font-bold hover:bg-sky-500"> <button type="button"> Get Started </button></p>
        </div>

        <div className="bg-sky-300 text-sm font-medium h-60 mt-10">
          <p className="px-8 pt-14"> <FontAwesomeIcon icon={faCircleCheck} /> Enhanced Efficiency </p>
          <p className="px-8 pt-6"> <FontAwesomeIcon icon={faCircleCheck} /> Cost Savings </p>
          <p className="px-8 pt-6"> <FontAwesomeIcon icon={faCircleCheck} /> Scalability </p>
          <p className="px-8 pt-6"> <FontAwesomeIcon icon={faCircleCheck} /> Comprehensive Support </p>
        </div>

       </div>

    </div>
    
    </>
  )
}

export default Price;