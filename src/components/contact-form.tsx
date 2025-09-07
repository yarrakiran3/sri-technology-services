'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import emailjs from '@emailjs/browser';

export default function ContactUsForm() {
  const [formData, setFormData]=useState({
    name:'',
    number:'',
    email:'',
    requirement:''
  })

  const handleChange=(e:any)=>{
      const {name,value}=e.target;
      setFormData({
        ...formData,
        [name]: value
      });
  }

  const sendEmail = (e:any) => {
    e.preventDefault();

    emailjs
      .send('sri_technology_services', 'template_myd5lnq', formData, {
        publicKey: '3iThAWN01atwQeLtk',
      })
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  return (
    <div className='flex flex-col md:flex md:flex-row  p-2 mt-12 rounded-xl '>
      <div className='flex flex-col justify-items-center items-center text-lg md:text-2xl  md:w-1/2 p-6 md:ml-12 '>
                <div className='text-center '>
                    Want to contact Us? Provide us your details.  Our team members will contact you <br></br>
                </div>
                <div className='justify-center'>
                  <Image
                    src={'/contact_us.jpg'}
                    height={400}
                    width={340}
                     alt='Contact Us Image'
                     className='rounded-xl mt-6'
                    />
                </div>
      </div>
      <div className='flex w-1/2 ml-12 md:mt-12 p-2 text-lg md:text-xl'>
        <form onSubmit={sendEmail}>
                    <div className='m-6 '>
                      <div className='text-orange-600'>
                            <label htmlFor='name'>Name</label>
                      </div>
                        <input id={'name'} name={'name'} onChange={handleChange}
                              className='border-2 border-black rounded-lg h-8 w-64 p-2 mt-2' type='text'/>
                        
                    </div>
                    <div className='m-6 '>
                      <div className='text-orange-600'>
                            <label htmlFor='number'>Number</label>
                      </div>
                      <input id={'number'} name={'number'} onChange={handleChange}
                              className='border-2 border-black rounded-lg h-8 w-64 p-2 mt-2' type='number'/>
                        
                    </div>
                    <div className='m-6 '>
                      <div className='text-orange-600'>
                            <label htmlFor='email'>Email</label>
                      </div>
                      <input id={'email'} name={'email'} onChange={handleChange}
                              className='border-2 border-black rounded-lg h-8 w-64 p-2 mt-2' type='email'/>
                        
                    </div>
                    <div className='m-6 '>
                      <div className='text-orange-600'>
                            <label htmlFor='requirement'>requirement</label>
                      </div>
                      <input id={'requirement'} name={'requirement'} onChange={handleChange}
                              className='border-2 border-black rounded-lg h-8 w-64 p-2 mt-2' type='message'/>
                        
                    </div>
              
              <button type='submit'>Submit</button>
        </form>




      </div> 
  </div>
  )
}

