'use client'
import Cards from "../../components/Cards";
import { CompanyFaces } from "../../components/card_data";

export default function Page(){
    return(
<>

<div className="text-center  m-auto  mt-12 md:text-3xl md:mt-36">

    <span className="text-blue-600">SITA IPL</span> was founded with a vision to <span className="text-orange-600">transform the IT landscape </span> through Technology and dedication. 
    Our mission is to provide exceptional services that drive success for our clients. 
    We believe in fostering a culture of 
    <span className="text-blue-600"> excellence, integrity, and continuous improvement.</span>
                                       
            
            
</div>


<div className="text-center  m-auto mt-12   md:text-3xl md:mt-8">
    {/* Meet the faces behind SITA IPL -, 
    <span className="text-pink-400">a diverse team </span>of skilled professionals dedicated 
    to delivering exceptional results for our clients.
    <br></br>

<div className="flex justify-evenly md:justify-evenly md:flex-row mt-6">
<Cards cards={CompanyFaces}></Cards>
</div>

<br></br>  */}
<br></br> 
<br></br> 

Our collective <span  className="text-red-800">expertise</span> spans across various domains, 
ensuring that we can tackle any challenge with confidence and creativity.
<br></br>

<div  className="text-center  m-auto mt-12 text-xl  md:text-3xl md:mt-36">
    Core Values:
    <br></br>
    
    <ol className="text-lg md:text-2xl text-orange-600">
        <li>
        Integrity
        </li>
        <li>
        Technology
        </li>
        <li>
        Customer Satisfaction
        </li>
        <li>
        Continuous Improvement
        </li>
</ol>



</div>

<br></br>
</div>
</>
    )
}