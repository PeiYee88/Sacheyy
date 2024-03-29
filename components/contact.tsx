"use client";

import { useSectionInView } from '@/lib/hooks';

import React from 'react'
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { sendEmail } from '@/actions/sendEmails';
import { useFormStatus } from 'react-dom';
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';

export default function Contact() {

    const { ref } = useSectionInView("Contact");

  return (
    <motion.section ref={ref} id="contact"
    className='mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center'
    initial= {{opacity:0, }} 
    whileInView={{opacity:1}}
    transition={{duration: 1}}
    viewport={{once:true}}>
        <SectionHeading>Contact me</SectionHeading>

        <p className="text-gray-700 -mt-6">Please contact me directly at <a  
        className="underline" href='mailto:melissacheng15@gmail.com'> melissacheng15@gmail.com
           </a>{" "}</p>
           <form className="mt-10 flex flex-col"
           action= {async (formData) => {
            const { data, error} = await sendEmail(formData);
            if (error) {
                toast.error(error);
                return;
            }
            toast.success("Email sent successfully!");
           }}>
            <input 
            className='h-14 rounded-lg borderBlack px-4'
            type="email"
            name="senderEmail"
            placeholder='Your email'
            required
            maxLength={500}
            />
            <textarea className='h-52 my-3 p-4 rounded-lg borderBlack'
            placeholder='Your message'
            required
            name="message"
            maxLength={5000}
            />
           <SubmitBtn></SubmitBtn>
           </form>
        
    </motion.section>
  )
}
