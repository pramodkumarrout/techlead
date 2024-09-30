import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faMoneyBill, faBinoculars} from '@fortawesome/free-solid-svg-icons';




const Hero = () => {
  return (
    <>
       <div className="flex flex-row justify-around items-center mt-30
       xs:flex-column xs:justify-start xs:items-start xs:mt-20
       sm:flex-column sm:justify-start sm:items-start sm:mt-20">
         
         <div>
            <h1 className="text-5xl"> Communicate.</h1>
            <h1 className="text-5xl"> Collaborate. Create.</h1>
            <p className="text-xl mt-10"> TechLead offers a strong and efficient </p>
            <p className="text-xl"> project management solution.</p>
            <p className="mt-10 inline-block py-2 px-4 border-black border-2 rounded-md font-bold text-center bg-black text-white hover:bg-yellow-500 hover:text-black"> <a href="#Get Started"> Get Started </a> </p>

            <div className="flex flex-row pt-24 gap-14
            xs:gap-8">
                <div className="flex flex-row justify-around items-center gap-4">
                <p className="text-3xl"> <FontAwesomeIcon icon={faLock} /> </p>
                <p className="text-sm"> Speed & <br /> Security </p>
                </div>

                <div className="flex flex-row justify-around items-center gap-4">
                <p className="text-3xl"><FontAwesomeIcon icon={faMoneyBill} /> </p>
                <p className="text-sm"> Flexibility & <br /> Scalability </p>
                </div>

                <div className="flex flex-row justify-around items-center gap-4">
                <p className="text-3xl"><FontAwesomeIcon icon={faBinoculars} /> </p>
                <p className="text-sm"> Better <br /> Collaboration </p>
                </div>
            </div>
            
         </div>


         <div>
            <img className="mt-36 block mx-auto xs:hidden sm:hidden" src="src/assets/images/image1.jpg" alt="" width="563px" height="482px" />
         </div>


       </div> 

       

       <div className="flex flex-row justify-evenly items-center gap-80 mt-36 p-48 bg-yellow-400 
       
      xs:flex-col xs:justify-evenly xs:items-center
      sm:flex-col sm:justify-evenly sm:items-center
      md:flex-row md:justify-evenly md:itemss-center
      ">
         
         <div>
            <h1 className="text-5xl font-serif"> Correct Software <br /> Can Lead to, <br /> Amazing Results</h1>
         </div>

         <div>
            <p className="w-500 overflow-auto mx-auto leading-relaxed 
            xs:w-auto xs:overflow-auto xs:mx-auto
            sm:w-auto sm:overflow-auto sm:mx-auto
            md:w-auto
            lg:w-500
            xl:w-500
            2xl:w-500 ">Investing in the correct software not only enhances operational
             efficiency but also drives innovation and success resulting in 
             remarkable outcomes for organizations. By leveraging the right tools,
             teams can achieve their goals more effectively and adapt to an ever-changing landscape.
            </p>
         </div>
         

       </div>
    
    </>
  )
}

export default Hero;