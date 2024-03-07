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
    title: "PennyWise",
    description:
    "A desktop application designed to assist users in managing their finances by facilitating budget management and providing monitoring of daily expenditures",
    tags: ["Django", "MaterializeCSS", "MySQL"],
    imageUrl: placeholder,
},
{
    title: "checkUp",
    description:
    "An advanced database management system tailored for medical institutions to effectively maintain and monitor comprehensive patient information.",
    tags: ["Java 11", "JUnit", "Gradle"],
    imageUrl: placeholder,
},
{
    title: "BnB Guru",
    description:
    "A machine learning project focused on predicting Airbnb prices, enabling landlords to optimize pricing strategies based on factors such as location, ratings, and other relevant features",
    tags: ["NumPy", "Decision Forest", "Neural Network", "Scikit"],
    imageUrl: placeholder,
},
{
  title: "SpongeBob Square-Manager",
  description:
  "A chatbot that helps users to manage their tasks efficiently",
  tags: ["Java 11", "JUnit", "Gradle", ],
  imageUrl: placeholder,
},
{
  title: "Code Guardian",
  description:
  "A static program analyser that enables user to examine code at compile level",
  tags: ["C++", "Catch2"],
  imageUrl: placeholder,
},
{
  title: "Study Buddy",
  description:
  "An Android application that allows students to form study dates based on their preference.",
  tags: ["React Native", "Google Firebase", "React Redux"],
  imageUrl: placeholder,
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
          implemented MongoDB and Elastic Search as the backend infrastructure, integrating
           the project with Grafana for intuitive data visualization. This integration significantly improved overall 
           project workflows. In the middle of my internship, I took on the responsibility of facilitating the 
           onboarding process for teams within the AEC Division and regularly conducted sharing sessions to generate interest from additional teams."
          `,
        icon: React.createElement(CgWorkAlt),
        date: "Jan 2023 - Jun 2023",
      },
] as const;

