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
                    

                    Email: <a href="mailto:admin@sitaipl.com" className="text-blue-500 hover:underline">admin@sitaipl.com</a>
                    <br></br>
                    <br></br>
                    
                    Phone: <a href="tel:+91-798-172-5001" className="text-blue-500 hover:underline">+91-798-172-5001</a>
                    
                    <br></br>
                    <br></br>
                
                    Location : 23-39-26/4 Municipal Corporation Revenue Ward 44, Vijayawada, Andhra Pradesh.
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