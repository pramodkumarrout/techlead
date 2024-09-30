import React from 'react';

const Offer = () => {
  return (
     <>
             
      <div className="mt-20 ml-48
      xs:ml-2
      sm:ml-2">
        <h1 className="text-4xl font-serif leading-snug"> What We Offer </h1>
        <p className="w-500 mt-6 overflow-auto leading-relaxed
        xs:w-auto
        sm:w-auto">
            We provide an integrated solution that streamlines your business operations 
            with tailored workflows designed for efficiency. 
        </p>
      </div>

      <div className="mt-20 flex flex-row justify-evenly
      xs:flex-col xs:justify-center xs:items-center xs:gap-10
      sm:flex-col sm:justify-center sm:items-center sm:gap-10
      md:flex-row">
        <div>
            <img className="border-black border-2 rounded-lg" src="src/assets/images/image2.jpg" alt=" " />
            <p className="mt-12 mb-6 text-2xl font-bold"> Workflows <br />
                That Work 
            </p>
            <p className="w-226 overflow-auto leading-7"> Effective workflows involve defining clear objectives, mapping out 
                 processes, assigning roles, leveraging technology, and continuously
                 monitoring and improving the workflow.
            </p>
        </div> 

        <div>
            <img className="border-black border-2 rounded-lg" src="src/assets/images/image3.jpg" alt=" " />
            <p className="mt-12 mb-6 text-2xl font-bold"> All-In-One <br />
                Sollution
            </p>
            <p className="w-226 overflow-auto leading-7"> 
                An All-In-One Solution is ideal for businesses and individuals looking 
                to enhance productivity and streamline operations. By consolidating various 
                functions into a single platform, also drives efficiency.
            </p>
        </div>

        <div>
            <img className="border-black border-2 rounded-lg" src="src/assets/images/image4.jpg" alt="" />
            <p className="mt-12 mb-6 text-2xl font-bold"> Comprehensive <br />
              Customer Support
            </p>
            <p className="w-226 overflow-auto leading-7">
            Comprehensive Customer Support is essential for creating positive customer
            experiences and fostering long-term relationships. By providing accessible, 
            personalized, and effective assistance. 
            </p>
        </div>

        <div>
            <img className="border-black border-2 rounded-lg" src="src/assets/images/image5.jpg" alt=" " />
            <p className="mt-12 mb-6 text-2xl font-bold"> Smart <br />
                Automation Tools 
            </p>
            <p className="w-226 overflow-auto leading-7">
            Smart Automation Tools are essential for organizations seeking to enhance
             efficiency, reduce costs, and improve overall performance. By automating
              routine tasks and leveraging.             
            </p>
        </div>

      </div>
     
     </>
  )
}

export default Offer;