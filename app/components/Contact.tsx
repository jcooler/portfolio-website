"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "../lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitButton from "./SubmitButton";
import toast from "react-hot-toast";
import ContactForm from "./lib/types";


export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)]">
      <SectionHeading>Contact</SectionHeading>
      <p className="text-gray-700 text-center -mt-5 dark:text-white/80">
        Please email me directly{" "}
        <a
          className="underline"
          href="mailto:jonathan.r.cooler@gmail.com">
          here
        </a>{" "}
        or use the form below.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const {data, error} = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          } else {
            toast.success("Message sent!");
          }
        }}
        
        >
        <input
          name="senderEmail"
          type="email"
          required
          maxLength={50}
          placeholder="Email"
          className="h-14 rounded-lg borderBlack px-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
        />
        <textarea
          name="message"
          required
          maxLength={5000}
          placeholder="Message"
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
        />
       <SubmitButton />
      </form>
    </motion.section>
  );
}
