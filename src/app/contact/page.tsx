'use client'
import ContactUsForm from "../../components/contact-form";

export default function Page(){
    return (
<div>
<div>
    <ContactUsForm/>
</div>
        
        <div className="text-center  m-auto mt-12  md:text-4xl md:mt-36">
            <div className=" ">
                <div >

                    <span className="text-orange-600">Or{' '}</span><br></br>
                    Get in touch with us...
                    <br></br>
                    <br></br>
                    

                    Email: <a href="mailto:info@sritechnologyservices.com" className="text-blue-500 hover:underline">info@sritechnologyservices.com</a>
                    <br></br>
                    <br></br>
                    
                    Phone: <a href="tel:+1-732-339-8832" className="text-blue-500 hover:underline">+1-732-339-8832</a>
                    
                    <br></br>
                    <br></br>
                
                    Location : 390 Amwell Rd, Bldg 3, Ste#315, Hillsborough, NJ 08844.
                    <br></br>
                    <br></br>
                </div>
{/* 
                <div className="w-1/2">
                    Request a callback
                </div> */}
            </div>

        
        </div>
</div>
)
}