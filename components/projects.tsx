import React from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data';
import Image from 'next/image';
import { useScroll } from 'framer-motion';
import { useRef } from 'react';
import Project from './project'; 

export default function Projects() {
  return (
    <section>
        <SectionHeading>My Projects</SectionHeading>
        <div>
            {projectsData.map((project, index) => (
                <React.Fragment key={index}>
                <Project {...project} />

                </React.Fragment>
                 ))}
        </div>
        </section>
  );
}
