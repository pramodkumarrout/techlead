import React from 'react';

const Industry = () => {
  return (
        
    <>

       <div className="mt-60 bg-sky-300">

        <div className="pt-52 ml-52 
        xs:ml-2 xs:pt-28
        sm:ml-2 sm:pt-28">
            <h1 className="text-5xl
            xs:text-3xl xs:w-auto
            sm:text-3xl sm:w-auto"> Trusted By Top Industry Leaders</h1>
            <p className="leading-6 mt-10 mb-24 w-400
            xs:w-auto xs:mt-4
            sm:w-auto sm:mt-4 ">Our innovative solutions and exceptional service have 
                earned us the confidence of renowned organizations across various sectors.
            </p>
        </div>

        <div className=" pb-40 flex flex-row gap-24 justify-evenly">

        <div>
            <div>
                <img className="mb-16" src="src/assets/images/image7.jpg" alt=" " />
            </div>  
            <div>
                <img src="src/assets/images/image8.jpg" alt= " " />
            </div>
        </div>

        <div>
            <div>
                <img className="mb-16" src="src/assets/images/image9.jpg" alt=" " />
            </div>
            <div>
                <img src="src/assets/images/image10.jpg" alt=" " />
            </div>
        </div>

        <div>
            <div>
                <img className="mb-16" src="src/assets/images/image11.jpg" alt=" " />
            </div>
            <div>
                <img src="src/assets/images/image12.jpg" alt=" " />
            </div>
        </div>

        <div>
            <div>
                <img className="mb-16" src="src/assets/images/image13.jpg" alt=" " />
            </div>
            <div>
                <img src="src/assets/images/image14.jpg" alt=" " />
            </div>            
        </div>

        </div>


       </div>
    
    </>
  )
}

export default Industry;