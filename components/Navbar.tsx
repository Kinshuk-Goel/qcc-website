"use client"
import { use, useState, useEffect } from 'react';
import { close, logo, menu } from "@/public/assets";
import { navLinks } from "@/constants";
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  
  // State to track whether the animation should be applied
  const [animateNavbar, setAnimateNavbar] = useState(false);

  // useEffect to trigger the animation on component mount
  useEffect(() => {
    setAnimateNavbar(true);
  }, []);
  
  return (
    <nav className=" flex py-6 justify-between items-center navbar fixed top-6 left-8 right-8 mx-auto rounded-3xl bg-gradient-to-r from-gray-500 via-cyan-600 to-dimWhite backdrop-blur-lg drop-shadow-2xl z-50 px-12">
    <Image src={logo} alt="QCC" width={86} height={32} />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-black shadow-lg ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}>
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <Image src={toggle ? close : menu}
          alt="menu"
          className="object-contain"
          width={28}
          height={28}
          onClick={() => setToggle((prev) => !prev)} />
        <div className={`${toggle ? 'flex' : 'hidden'}
            p-6 bg-black-gradient absolute top-20 ring-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'}`}>
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar