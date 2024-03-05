"use client";

import React, {useEffect} from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi"
import { FaGithubSquare } from "react-icons/fa";
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';


export default function Intro() {
    const {ref, inView} = useInView({
    threshold: 0.5
    });
    const { setActiveSection } = useActiveSectionContext();

    useEffect(() => {
    if (inView) {
    setActiveSection("Projects");
    }
    }, [inView, setActiveSection])
    return (
        <section id="home" className='mt-[-28rem] max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'>
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
                src="/my_potrait.png"
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
        <span className="font-bold">Hello, I'm Melissa.</span> I'm a{" "}
            <span className="font-bold">full-stack developer</span> with{" "}
            <span className="font-bold">3 years</span> of experience. I enjoy
            building <span className="italic">sites & apps</span>. My focus is{" "}
            <span className="underline">React (Next.js)</span>.
        </motion.h1>

        <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
        initial={{ opacity:0, y:100}}
        animate={{ opacity:1, y:0}}
        transition={{
            delay: 0.13
        }}>
            <Link href="contact" className=' group flex items-center gap-2 rounded-full  bg-gray-900 text-white px-7 py-3
            outline-none focus:scale-110 hover:scale-110 active:scale-105 transition'>Contact me here
            <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition'/> </Link>
            <a href="/CV.pdf" download={true} className='group flex items-center gap-2 border border-black/10 rounded-full bg-white px-7 py-3 outline-none focus:scale-110 
            hover:scale-110 active:scale-105 transition cursor-pointer'>Download CV <HiDownload className='opacity-60 group-hover:translate-y-1 transition '/></a>
            <a href="https://linkedin.com" target="_blank" className='flex items-center gap-2 rounded-full bg-white text-gray-700 p-4 border border-black/10 outline-none focus:scale-110 
            hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer'>
                <BsLinkedin/>
            </a>
            <a href="https://github.com" target="_blank" className='flex items-center gap-2 text-[1.23rem] rounded-full bg-white text-gray-700 p-4 border border-black/10 outline-none focus:scale-110 
            hover:scale-[1.15] active:scale-105 hover:text-gray-950 transition cursor-pointer'>
                <FaGithubSquare/>
            </a>
        </motion.div>
        </section>
    );
    }

