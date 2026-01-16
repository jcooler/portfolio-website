import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import quantumvista from "/public/quantumvista.png";
import investmentcalculator from "/public/investmentcalculator.png";
import portfoliowebsite from "/public/portfoliowebsite.png";
import applicantwizard from "/public/applicantwizard.png";
import { IoCodeSlashOutline } from "react-icons/io5";

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

export const experiencesData = [
  {
    title: "Graduated College",
    location: "Atlanta, GA",
    description:
      "I attended college from January of 2017 to August of 2019 and obtained a B.S in Computer Science from American Military University. I graduated Cum Laude, with a 3.52 GPA. I also worked as a Law Enforcement Officer while attending college full-time",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Software Engineer",
    location: "Atlanta, GA",
    description:
      "I have worked on various projects as a freelancer, coached, and mentored developers.",
    icon: React.createElement(IoCodeSlashOutline),
    date: "2020-Current",
  },
  {
    title: "Application Support Engineer",
    location: "Atlanta, GA",
    description:
      "Crafted tailored solutions in privacy and data governance software. Developed custom code addressing client-specific needs, which subsequently evolved into integral product features. Collaborated with the development team on introducing new functionalities, resolving software issues, and enhancing accessibility to ensure global compliance with privacy and accessibility regulations.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Web Developer",
    location: "Atlanta, GA",
    description:
      "Supported a web application with nearly 10,000 users, and over 2.5 million lines of code. Lead several projects focusing on revitalizing existing webpages and introducing new ones to elevate the functionality and capabilities of the app.",
    icon: React.createElement(FaReact),
    date: "2022 - 2024",
  },
  {
    title: "Senior Web Developer",
    location: "Atlanta, GA",
    description:
      "Currently the Senior Web Developer supporting a web application undergoing a modernization effort. Working with system architects to design and implement new features and enhancements. I also lead a team of developers to ensure the successful completion of projects.",
    icon: React.createElement(FaReact),
    date: "2024 - Current",
  },
  {
    title: "Started College",
    location: "Atlanta, GA",
    description:
      "Currently enrolled in a master's program in Cybersecurity at American Military University.",
    icon: React.createElement(LuGraduationCap),
    date: "2024 - Current",
  },
  {
    title: "Obtained Certifications",
    location: "Atlanta, GA",
    description:
      "Successfully obtained Security+, Scrum Master, Product Owner, and Trusted Tester certifications to further my knowledge and skills.",
    icon: React.createElement(LuGraduationCap),
    date: "2025",
  },
] as const;

export const projectsData = [
  {
    title: "applicantwizard",
    description:
      "Applicant Tracking System built with MERN. Login/Signup and search features, with basic CRUD operations. Deployed with Vercel. username/password: test(lowercase)",
    tags: ["React", "Next.js", "Bootstrap", "MongoDB", "Node.js", "Express", "TypeScript" ],
    imageUrl: applicantwizard,
    link: "https://applicantwizard.vercel.app/",
    source: "https://github.com/jcooler/Recruiting-Tool",
  },
  {
    title: "QuantumVista",
    description:
      "Crypto news/price tracking web app that shows latest news & prices for various Cryptos via a public API. Deployed with Netlify and environment variables to hide sensitive data.",
    tags: ["React", "Vite", "Git", "Tailwind"],
    imageUrl: quantumvista,
    link: "https://quantumvista.netlify.app/",
    source: "https://github.com/jcooler/crypto-app",
  },
  {
    title: "Portfolio Website",
    description:
      "Portfolio website built with Next.js, TypeScript, TailwindCSS, and Framer Motion. Deployed with Vercel.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Framer Motion"],
    imageUrl: portfoliowebsite,
    link: "https://jcooler.dev/",
    source: "https://github.com/jcooler/portfolio-website",
  },
] as const;

export const skillsData = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Bootstrap",
  "Git",
  "Tailwind",
  "PostgreSQL",
  "JQuery",
  "Node.js",
  "Express",
  "MongoDB",
  "Bitbucket",
  "Framer Motion",
  "Vite",
  "Jest",
  "Responsive design",
  "Version Control",
  "GitHub",
  "Postman",
  "WCAG / 508 Compliance",
  "Agile",
  "Jenkins",
] as const;
