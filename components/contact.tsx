"use client";

import { useSectionInView } from '@/lib/hooks';

import React from 'react'
import SectionHeading from './section-heading';
import { FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { sendEmail } from '@/actions/sendEmails';
import { send } from 'process';

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
            await sendEmail(formData);
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
            <button type="submit"
            className= " group gap-2 flex items-center justify-center h-[3rem] w-[8rem] bg-gray-900 rounded-full outline-none transition-all text-white">Submit 
            <FaPaperPlane className='text-xs opacity-70 transition-all
            group-hover:translate-x-1
            group-hover:-translate-y-1
            focus:scale-110 hover:scale-110 active:scale-105 transition
            hover:bg-gray-950'/> {" "}</button>
           </form>
        
    </motion.section>
  )
}
