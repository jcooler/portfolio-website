import React from 'react'

export default function Footer() {
  return (
    <footer className='mb-10 px-4 text-center text-gray-600'>
      <small className='mb-2 block text-xs'>
        &copy; 2024 Jon Cooler
      </small>
      <p className='text-xs'><span className='font-semibold'>built with love</span> using React & Next.js (App Router / Server Actions), TypeScript, TailwindCSS, Framer-Motion, React Email, Resend. Hosted on Vercel</p>
    </footer>
  )
}
