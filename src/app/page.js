"use client";
import Image from "next/image";
import "./progress-bar.css";
import Navbar from "./components/navbar";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 2]);

  return (
    // Personal portofolio dark theme
    <main>
      {/* navbar dark theme with light font */}
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <Navbar />
      {/* Hero section - personal introduce */}
      <section id="home" className="bg-gray-900 text-white flex min-h-screen items-center">
        <div className="mx-auto px-4">
          <motion.div
            className="container"
            whileHover={{ scale: 1.2 }}
            style={{ scale }}
          >
            <div className="flex flex-col items-center border-2 animate-border-color-change rounded-lg p-10 relative">
              <div className="absolute bottom-0 right-0 z-0">
                <Image src="/person.png" width={200} height={200} alt="Hero" />
              </div>
              <div className="w-full z-10">
                <h1 className="text-4xl md:text-6xl font-bold text-stroke-2 text-stroke-black">Hi, I'm John Doe</h1>
                <p className="text-lg md:text-xl mt-4 bg-[#0000000e]">A passionate full-stack developer from Indonesia</p>
              </div>
            </div>
          </motion.div>
          {/* animation instruction to hover image */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-400">Hover image to see the magic</p>
          </div>
        </div>
      </section>
      {/*Section - My Project */}
      <section id="projects" className="bg-gray-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold">My Projects</h1>
            <p className="text-lg md:text-xl mt-4">Here are some of my projects</p>
          </div>
          <div className="flex justify-between space-x-5 mt-10">
            <div className="bg-gray-800 rounded-lg p-8 border-2 hover:-translate-y-5 transition hover:border-red-700 duration-300">
              <h1 className="text-2xl font-bold">Project 1</h1>
              <p className="text-gray-400 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget eros.</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-8 border-2 hover:-translate-y-5 hover:border-green-700 transition duration-300">
              <h1 className="text-2xl font-bold">Project 2</h1>
              <p className="text-gray-400 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget eros.</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-8 border-2 hover:-translate-y-5 hover:border-blue-700 transition duration-300">
              <h1 className="text-2xl font-bold">Project 3</h1>
              <p className="text-gray-400 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget eros.</p>
            </div>
          </div>
        </div>
      </section>
      {/* contact */}
      <section id="contact" className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex items-center justify-between">
            <div className="w-full md:w-1/2">
              <h1 className="text-4xl md:text-6xl font-bold">Contact Me</h1>
              <p className="text-lg md:text-xl mt-4">I'm available for freelance projects</p>
              <div className="mt-8">
                <a href="#" className="bg-white text-gray-900 px-6 py-3 rounded-md font-medium">Contact Me</a>
              </div>
            </div>
            <div className="hidden md:block w-1/2">
              <Image src="/contact.svg" width={500} height={500} alt="Contact" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
