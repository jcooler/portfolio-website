import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeToaster from "../components/ThemeToaster";
import Footer from "../components/Footer";
import ThemeSwitch from "../components/ThemeSwitch";
import ThemeContext from "../components/ThemeContext";
import SplashScreen from "../components/SplashScreen";
import DynamicTitle from "../components/DynamicTitle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jon Cooler | Full Stack Developer",
  description:
    "Jon Cooler is a Full Stack Developer with 10+ years of experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var theme = localStorage.getItem('theme');
                if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}>
        <div className="bg-[#c4b5fd] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#4c1d95]"></div>
        <div className="bg-[#a5b4fc] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#1e3a5f]"></div>
        <ThemeContext>
          <SplashScreen>
            <ActiveSectionContextProvider>
              <Header />
              {children}
              <ThemeToaster />
              <Footer />
              <ThemeSwitch />
              <DynamicTitle />
            </ActiveSectionContextProvider>
          </SplashScreen>
        </ThemeContext>
      </body>
    </html>
  );
}
