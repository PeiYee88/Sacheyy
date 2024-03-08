"use client";

import React, {useEffect} from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi"
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';


export default function Intro() {
    const { ref } = useSectionInView("Home", 0.5);
    const {setActiveSection, setTimeOfLastClick} = useActiveSectionContext();

    return (
        <section ref={ref} id="home" className='mt-[-28rem] max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'>
        <div className="flex items-center justify-center">
            <div className="relative">
                <motion.div
                initial= {{ opacity:0, scale:0 }}
                animate= {{ opacity:1, scale:1 }}
                transition={{
                    type: "tween",
                    duration: 0.2
                }}>
                <Image
                src="/my_portrait.jpg"
                alt="My portrait"
                width="192"
                height="192"
                quality={95}
                priority={true}
                className='h-24 w-24 rounded-full object-cover shadow-xl border-[0.35rem] border-white'
            />
                </motion.div>
            
            <motion.span className="absolute bottom-0 right-0 text-4xl"
            initial= {{ opacity: 0, scale: 0}}
            animate={{ opacity: 1, scale: 1}}
            transition={{
                type: "spring",
                stiffness: 125,
                delay: 0.1,
                duration: 0.7
            }}>
                👋 
            </motion.span>
            </div>
        </div>
        <motion.h1 className='mb-10 mt-7 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
        initial={{ opacity:0, y:100}}
        animate={{ opacity:1, y:0}}>
        <span className="font-bold">Hello, I&apos;m Melissa.</span> I&apos;m a dynamic{" "}
            <span className="font-bold">software developer</span> with a rich{" "}
            <span className="font-bold">2 years</span> of experience in bringing ideas to life through innovative technology.  My passion lies in the realms of {" "}
             <span className="italic underline">AI/ML & software development</span>
             <span>.</span>
        </motion.h1>

        <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
        initial={{ opacity:0, y:100}}
        animate={{ opacity:1, y:0}}
        transition={{
            delay: 0.13
        }}>
            <Link href="#contact" className=' group flex items-center gap-2 rounded-full  bg-gray-900 text-white px-7 py-3
            outline-none focus:scale-110 hover:scale-110 active:scale-105 transition'
            onClick={() => {
                setActiveSection("Contact");
                setTimeOfLastClick(Date.now());
            }}>Contact me here
            <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition'/> </Link>
            <a href="/melissa_cheng_pei_yee_cv.pdf" download={true} className='group flex items-center gap-2 borderBlack rounded-full bg-white px-7 py-3 outline-none focus:scale-110 
            hover:scale-110 active:scale-105 transition cursor-pointer'>Download CV <HiDownload className='opacity-60 group-hover:translate-y-1 transition '/></a>
            <a href="https://www.linkedin.com/in/melissa-cheng-7347ba256/" target="_blank" className='flex items-center gap-2 rounded-full bg-white text-gray-700 p-4  borderBlack outline-none focus:scale-110 
            hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer'>
                <BsLinkedin/>
            </a>
            <a href="https://github.com/PeiYee88" target="_blank" className='flex items-center gap-2 text-[1.23rem] rounded-full bg-white text-gray-700 p-4 borderBlack outline-none focus:scale-110 
            hover:scale-[1.15] active:scale-105 hover:text-gray-950 transition cursor-pointer'>
                <FaGithubSquare/>
            </a>
        </motion.div>
        </section>
    );
    }

