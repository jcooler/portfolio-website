"use client";
import React from "react";
import {motion} from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "../lib/hooks";


export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      My web journey began all the way back in{" "}
        <span className="font-medium">2003</span>,
         when I was 11-years old and learned about the social networking website, MySpace. Technically, I got started with Xanga!{" "}
         I remember implementing layouts and designs from all over the internet, and slowly deleting or changing lines of code and refreshing the page to see what would happen.
          This is how I first learned about{" "}
        <span className="font-medium">front-end development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. I mainly use
        {" "}
        <span className="font-medium">
          React and Next.js {" "}
        </span>
        but, I am also familiar with things like JQuery and TypeScript. I am always looking to
        learn about new technologies and make it a point to learn something new everyday!
      </p>

      <p>
        <span className="italic">When I'm not developing</span>, I enjoy
        going to the gym, reading, and traveling. Did I mention I also enjoy{" "}
        <span className="font-medium">learning new things?😁</span> I am currently
        learning about{" "}
        <span className="font-medium">Node.js and MongoDB</span>. I'm also
        training to run my first Marathon!
      </p>
    </motion.section>
  );
}