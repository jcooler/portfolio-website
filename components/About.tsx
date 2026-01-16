"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "../lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      id="about">
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        My coding journey began all the way back in{" "}
        <span className="font-medium">2003</span>, when I was 11-years old and
        learned about the social networking website, MySpace. Technically, I got
        started with Xanga! I remember implementing layouts and designs from all
        over the internet, and slowly deleting or changing lines of code and
        refreshing the page to see what would happen. This is how I first
        learned about <span className="font-medium">web development</span>
        . <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="font-medium">love</span> the
        feeling of finally figuring out a solution to a problem. I am
        always looking to learn about new technologies and make it a point to
        learn something new everyday!
      </p>

      <p>
        <span className="italic">When I'm not developing</span>, I enjoy going
        to the gym, reading, and traveling.
      </p>
    </motion.section>
  );
}
