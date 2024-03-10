import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import quantumvista from "/public/quantumvista.png";
import investmentcalculator from "/public/investmentcalculator.png";
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
    title: "freelancer",
    location: "Atlanta, GA",
    description:
      "I worked on various small projects as a freelancer from 2003 to 2017, including consulting and a few websites for local businesses",
    icon: React.createElement(IoCodeSlashOutline),
    date: "2003-2017",
  },
  {
    title: "Graduated College",
    location: "Atlanta, GA",
    description:
      "I attended college from January of 2017 to August of 2019 and obtained a B.S in Computer Science from American Military University. I took the maximum amount of credits each semester and graduated Cum Laude, with a 3.52 GPA. I also worked full-time as a Law Enforcement Officer while attending college full-time",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
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
    title: "Lead Web Developer",
    location: "Atlanta, GA",
    description:
      "Currently the lead Web Developer supporting a web application with nearly 10,000 users. I lead several projects focusing on revitalizing existing webpages and introducing new ones to elevate the functionality and capabilities of the app.",
    icon: React.createElement(FaReact),
    date: "2022 - ",
  },
] as const;

export const projectsData = [
  {
    title: "QuantumVista",
    description:
      "Crypto news/price tracking web app that shows latest news & prices for various Cryptos via a public API. Deployed with Netlify and serverless functions to hide sensitive data.",
    tags: ["React", "Vite", "Git", "Tailwind"],
    imageUrl: quantumvista,
    link: "https://quantumvista.netlify.app/",
    source: "https://github.com/jcooler/crypto-app",
  },
  {
    title: "Investment Calculator",
    description:
      "Investment calculator that calculates the future value of an investment based on a fixed interest rate. Deployed with GitHub Pages.",
    tags: ["React", "Vite", "Git", "Tailwind", "GitHub"],
    imageUrl: investmentcalculator,
    link: "https://jcooler.github.io/react-investment-calculator/",
    source: "https://github.com/jcooler/react-investment-calculator",
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
  "SASS",
  "JQuery",
  "Redux",
  "Framer Motion",
  "Vite",
  "Jest",
  "Responsive design",
  "Accessibility",
  "Version Control",
  "GitHub",
  "Postman"
] as const;