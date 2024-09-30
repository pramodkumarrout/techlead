import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToolbox, faFile, faPaintbrush } from '@fortawesome/free-solid-svg-icons'




const Creative = () => {
  return (
    <>

    <div className="mt-64 flex-row flex justify-around
    xs:flex-col xs:justify-start
    sm:flex-col sm:justify-start
    md:flex-row md:gap-10"> 

        <div>
         <img src="src/assets/images/image6.jpg" width="482px" height="488px" alt=" " />
        </div>
        
        <div className="mt-24">
            <h2 className="text-4xl font-bold font-serif 
            xs:text-left xs:text-3xl
            sm:text-left sm:text-3xl"> Built For Creative <br /> 
                 by Users
            </h2>
            <p className="mt-8 w-500 overflow-auto leading-7 
            xs:text-left xs:w-auto
            sm:text-left sm:w-auto"> 
            Built for Creatives, by Creatives is a platform designed to empower and inspire artists of 
            all kinds. It fosters collaboration within a vibrant community, offering innovative tools
             and curated resources tailored specifically for creative minds. 
            </p>
        <div className="mt-24 flex flex-row gap-12">
            <div className="flex-row flex gap-4">   
            <p className="text-4xl 
            xs:text-3xl
            sm:text-3xl"> <FontAwesomeIcon icon={faToolbox} /> </p>
            <p className="text-sm leading-4 mt-1"> All-In-One <br />
                Toolkit
            </p>         
            </div>
            <div className="flex-row flex gap-4">
            <p className="text-4xl 
            xs:text-3xl
            sm:text-3xl"> <FontAwesomeIcon icon={faFile} /> </p>
            <p className="text-sm leading-4 mt-1"> Integrated <br />
                File Sharing 
            </p>
            </div>
            <div className="flex-row flex gap-4">
            <p className="text-4xl
            xs:text-3xl
            sm:text-3xl"> <FontAwesomeIcon icon={faPaintbrush} /> </p>
            <p className="text-sm leading-4 mt-1"> Tool Design <br />
                Freedom
            </p>
            </div>
        </div>

        </div>

    </div>
    
    </>
  )
}

export default Creative;