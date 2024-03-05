import React from "react";
import placeholder from "@/public/my_potrait.png"; 

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

