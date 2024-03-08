"use client";

import React, { useEffect } from 'react'
import SectionHeading from './section-heading';
import { motion } from "framer-motion";
import { useSectionInView } from '@/lib/hooks';

export default function About() {
    const { ref } = useSectionInView("About", 0.6);

  return (
   <motion.section 
   ref={ref}
   className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
   initial={{ opacity:0, y:100}}
   animate={{ opacity:1, y:0}}
   transition={{ delay: 0.175}}
   id="about">
    <SectionHeading>About me</SectionHeading>
    <p className='mb-3'>
         I am a 
        {" "}
        <span className="font-medium">
          Final Year Undergraduate {" "} 
        </span>
        student at the National University of Singapore.{" "} I am actively looking for a {" "}
        <span className="font-medium">full-time position</span> as a software
        developer. I am also open to exploring other opportunities that align with my skills and aspirations. 
    </p>
    <p>
    <span>
    I thrive on the excitement of learning and embracing new technologies through hands-on projects.         </span>
    <span className="italic">When I&apos;m not coding</span>,{" "}you'll discover me either navigating outdoor trails, soaking 
    in the wonders of nature, or engaging in handicraft projects within the comfort of my room. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">German and skateboarding</span>.
    </p>
   </motion.section>
  );
}
