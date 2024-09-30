import React from 'react';



const Footer = () => {
  return (
    
    <>
    
      <div className="bg-yellow-400">
        
        <div className="flex flex-row">
        <div className="w-10 h-10 pt-4 mr-2 cursor-pointer mt-36 ml-24">
                <img src= "src/assets/images/image16.jpg" alt="Techlead-logo" />
        </div>
        <div className="mt-36">
                <h2 className="text-2xl cursor-pointer font-bold pt-2"> <a > TechLead </a> </h2>
                <p className="text-sm"> Communicate, Collaborate, Create</p>
        </div>
        </div>
        </div>
        
        <div className="flex flex-row justify-evenly bg-yellow-400
        xs:flex-col xs:justify-start xs:items-center
        sm:flex-col sm:justify-start sm:items-center">

        <div>

          <div>

          <div className="flex flex-row gap-20 mt-28
          xs:flex-col
          sm:flex-col">
            <div>
           <h1 className="text-xl font-medium
           xs:text-center
           sm:text-center"> Contact</h1>
           <p className="mt-8
           xs:text-center
           sm:text-center"> Phase2, Electronic City </p>
           <p className="xs:text-center sm:text-center"> Bengaluru, 560100 </p>
           </div>
           <div className="mt-16 -ml-6
           xs:text-center xs:mt-5
           sm:text-center sm:mt-5">
            <p> Sales: </p>
            <p> info@techlead.com </p>
           </div>
           
          </div>

          <div className="flex flex-row gap-20 mt-10
          xs:flex-col xs:text-center
          sm:flex-col sm:text-center">
            <div>
              <p> Any Inquiries: </p>
              <p> 994-449-3238</p>
            </div>
            <div className="ml-8">
              <p> Customer Care: </p>
              <p> info@techleadcustomercare.com </p>
            </div>
          </div>

        </div>

        </div>

        <div className="mt-28">
          <h1 className="font-medium text-xl"> Quick Links </h1>
          <p className="mt-8 hover:underline"> <a href="#terms&conditions"> Terms & Conditions </a></p>
          <p className="mt-2 hover:underline"> <a href="#privacypolicy"> Privacy Policy </a></p>
        </div>

        <div className="mt-28
        xs:text-center 
        sm:text-center">
          <h1 className="text-xl font-medium"> Follow </h1>
          <p className="mt-8 mb-6"> Sign up to get latest news <br />
              on our product 
          </p>
          <form>
            <label> Email * </label> <br />
            <input className="px-20 py-2 mt-2 mb-4 rounded-md bg-yellow-400 border-black border-2" type="text"/> <br />
            <input type="checkbox" />
            <label> Yes, subscribe for latest updates </label> <br />
            <input className="px-10 py-2 mt-10 text-center rounded-md font-bold cursor-pointer bg-black text-white hover:bg-blue-600 hover:text-black" type="submit" value="Subscribe" />
          </form>
        </div>

        <div className="mt-28 text-md font-medium">
          <p> <a href="#linkedin"> Linkedin </a></p>
          <p> <a href="#youtuve"> Youtube </a></p>  
          <p> <a href="#facebook"> Facebook </a></p>
          <p> <a href="#twitter"> Twitter </a></p>
        </div>


      </div>
    
    </>
  )
}

export default Footer;