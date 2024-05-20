import Link from 'next/link';
import { useState, useEffect } from 'react';

const Navbar = () => {
   const [isScrolled, setIsScrolled] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY > 50) {
            setIsScrolled(true);
         } else {
            setIsScrolled(false);
         }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   return (
      <nav className={`fixed top-0 left-0 w-full z-50 shadow-lg transition-colors duration-300`}>
         <div className="w-fit mx-auto px-20 mt-3 py-4 sm:px-6 lg:px-8 hover:bg-[#4d454540] rounded-full transition-colors duration-500">
            <div className="flex items-center justify-center">
               <div className="hidden md:block">
                  <div className="flex items-baseline space-x-4">
                     <Link href="#home" className={`px-3 rounded-md text-sm font-medium text-gray-400 hover:text-white`}># Home</Link>
                     <Link href="#projects" className={`px-3 rounded-md text-sm font-medium text-gray-400 hover:text-white`}># Projects</Link>
                     <Link href="#contact" className={`px-3 rounded-md text-sm font-medium text-gray-400 hover:text-white`}># Contact</Link>
                  </div>
               </div>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
