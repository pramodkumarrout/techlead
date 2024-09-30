import React from 'react';

const Client = () => {
  return (
       <>

       <div className="mb-40">
         
          <h1 className=" mt-44 ml-64 mb-20 text-4xl font-sans
          xs:ml-2 xs:text-3xl xs:mt-16 xs:mb-14
          sm:ml-2 sm:text-3xl sm:mt-16 sm:mb-14"> What Our Clients Say </h1>

          <div className="flex flex-row justify-evenly
          xs:flex-col xs:justify-center xs:items-center xs:gap-8
          sm:flex-col sm:justify-center sm:items-center sm:gap-8">

            <div className="border-black border-2 rounded-2xl w-281 h-400">
              <p className="border-b-2 rounded-xl bg-yellow-500 border-black font-extrabold text-3xl"> <span className="p-4"> . . . </span> </p>
               <p className="p-12 break-all leading-relaxed"> "The All-In-One Solution has streamlined our
                 operations like never before. I love how it brings all our tools together, 
                 making my team more efficient and productive."
              </p>
              <p className="ml-28  font-bold text-md leading-relaxed"> Tom Hood, <br />
                  Mission Bay 
              </p>
            </div>

            <div className="border-black border-2 rounded-2xl w-281 h-400">
              <p className="border-b-2 rounded-xl bg-yellow-500 border-black font-extrabold text-3xl"> <span className="p-4"> . . . </span> </p>
               <p className="p-12 break-all leading-relaxed"> "Since implementing the effective workflows, our project
                 management has improved significantly. which has led to smoother collaboration and better results."
              </p>
              <p className="ml-28  font-bold text-md leading-relax  ed"> Jackson Bob, <br />
                  Carlifornia Lake
              </p>
            </div>

            <div className="border-black border-2 rounded-2xl w-281 h-400">
              <p className="border-b-2 rounded-xl bg-yellow-500 border-black font-extrabold text-3xl"> <span className="p-4"> . . . </span> </p>
               <p className="p-12 break-all leading-relaxed"> "The comprehensive customer support has been a lifesaver
                 for us. Whenever we have questions or need assistance, the team is always responsive
                  and helpful."
              </p>
              <p className="ml-28  font-bold text-md leading-relaxed"> James McDonie, <br />
                  Los Angeles
              </p>
            </div>

          </div>


       </div>
       
       </>
  )
}

export default Client;