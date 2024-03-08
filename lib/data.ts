import React from "react";
import bnbguru from "@/public/bnb_guru.png"; 
import studybuddy from "@/public/study_buddy.png"; 
import codeguardian from "@/public/code_guardian.png"; 
import spongebob from "@/public/spongebob_square_manager.png"; 
import checkup from "@/public/check_up.png"; 
import pennywise from "@/public/pennywise.png"; 
import { CgWorkAlt } from "react-icons/cg";


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
    title: "checkUp",
    description:
    "An advanced database management system tailored for medical institutions to effectively maintain and monitor comprehensive patient information.",
    tags: ["Java 11", "JUnit", "Gradle"],
    imageUrl: checkup,
},
{
    title: "PennyWise",
    description:
    "A desktop application designed to assist users in monitoring daily expenditures in alignment with their budget.",
    tags: ["Django", "MaterializeCSS", "MySQL"],
    imageUrl: pennywise,
},

{
    title: "BnB Guru",
    description:
    "A machine learning project focused on predicting Airbnb prices, enabling landlords to optimize pricing strategies based on factors such as location, ratings, and etc.",
    tags: ["NumPy", "Decision Forest", "Neural Network", "Scikit"],
    imageUrl: bnbguru,
},
{
  title: "Code Guardian",
  description:
  "A static program analyser that enables user to examine code at compile level.",
  tags: ["C++", "Catch2"],
  imageUrl: codeguardian,
},

{
  title: "Study Buddy",
  description:
  "An Android application that allows students to form study dates based on their preference.",
  tags: ["React Native", "Google Firebase", "React Redux"],
  imageUrl: studybuddy,
},
{
  title: "SpongeBob Square-Manager",
  description:
  "A Spongebob SquarePants-themed chatbot that helps users to manage their tasks efficiently.",
  tags: ["Java 11", "JUnit", "Gradle", ],
  imageUrl: spongebob,
},
] as const;

export const skillsData = [
    "Java",
    "Python",
    "Javascript/Typescript",
    "C++",
    "SQL",
    "NumPy/Scikit",
    "React",
    "Django",
    "Next.js",
    "CSS/HTML",
    "Kubernetes",
    "Docker",
    "AWS",
    "Terraform",
    "Hadoop",
] as const;

export const experiencesData = [
      {
        title: "DevOps Engineer Intern (Team AutoCAD)",
        location: "Autodesk (Singapore)",
        description:
          `
          "During my internship, I developed automation scripts in Python to streamline data scraping from Jenkins and conducted 
          thorough data analysis to extract valuable deployment statistics. Additionally, I 
          implemented MongoDB and Elastic Search as the backend infrastructure, integrated
           the project with Grafana for intuitive data visualization. This integration significantly improved overall 
           project workflows. In the middle of my internship, I took on the responsibility of facilitating the 
           onboarding process for teams within the AEC Division and regularly conducted sharing sessions to garner interest on my project from additional teams."
          `,
        icon: React.createElement(CgWorkAlt),
        date: "Jan 2023 - Jun 2023",
      },
] as const;

