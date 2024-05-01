"use client";
import React from "react";
import Image from "next/image";
import profilePic from "/public/profilepic.jpg";
import { profile } from "console";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "../lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section
      ref={ref}
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
      id="home">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}>
            <Image
              src={profilePic}
              alt="Jon Cooler profile pic"
              width={200}
              height={200}
              quality={100}
              priority={true}
              className="h-25 w-25 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 text-6xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}>
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-12 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}>
        <span className="font-bold">Hi, I'm Jon.</span> I'm a{" "}
        <span className="font-bold">Front-End Developer</span> with{" "}
        <span className="font-bold">over a decade</span> of experience. I enjoy
        tackling <span className="italic">new challenges</span>. My focus is{" "}
        <span className="font-bold">React (Next.js)</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}>
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover-bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}>
          Let's Chat!{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-2 transition" />{" "}
        </Link>
        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/cv.pdf"
          download>
          {" "}
          Resume{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <div className="flex flex-row justify-center gap-2">
          <a
          aria-label="LinkedIn profile for Jon Cooler"
            href="https://www.linkedin.com/in/joncooler/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-115 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60">
            <BsLinkedin />
          </a>
          <a
          aria-label="GitHub profile for Jon Cooler"
            href="https://github.com/jcooler"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-gray-700 text-[1.15rem] p-4 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-115 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60">
            <FaGithubSquare />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
