import React from "react";
import placeholder from "@/public/my_potrait.png"; 
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";


export const links = [
    {
      name: "Home",
      hash: "#home",
    },
    {
      name: "About",
      hash: "#about",
    },
    {
      name: "Projects",
      hash: "#projects",
    },
    {
      name: "Skills",
      hash: "#skills",
    },
    {
      name: "Experience",
      hash: "#experience",
    },
    {
      name: "Contact",
      hash: "#contact",
    },
  ] as const;

export const projectsData = [
{
    title: "Project 1",
    description:
    "Placeholder",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: placeholder,
},
{
    title: "Project 2",
    description:
    "Placeholder",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: placeholder,
},
{
    title: "Project 3",
    description:
    "Placeholder",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: placeholder,
},
] as const;

export const skillsData = [
    "test1",
    "test2",
] as const;

export const experiencesData = [
    {
        title: "Graduated bootcamp",
        location: "Miami, FL",
        description:
          "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
        icon: React.createElement(LuGraduationCap),
        date: "2019",
      },
      {
        title: "Front-End Developer",
        location: "Orlando, FL",
        description:
          "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
        icon: React.createElement(CgWorkAlt),
        date: "2019 - 2021",
      },
] as const;

