import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/Asset 1.svg";
import { Sorts_Mill_Goudy } from "next/font/google";

const goudy = Sorts_Mill_Goudy({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

type Props = {};

export default function Header({}: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="sticky top-0 w-screen text-white z-30 h-0">
      <motion.div
        initial={{
          y: -10,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
          delay: 0.2,
        }}
        className="container flex items-center justify-between mx-auto max-w-8xl px-10 py-10"
      >
        {/* Logo */}
        <div className="flex flex-row  justify-center items-center">
          <Link href={"/"}>
            <Image
              src={logo}
              alt="Saint de Lusso Logo"
              className=" w-[14rem]"
            ></Image>

            {/* <h1 className="font-normal text-md tracking-tight">
              {" "}
              Saint de Lusso
            </h1> */}
          </Link>
        </div>

        <div className="flex flex-row items-center">
          {/* Hamburger Navigation */}
          <div
            className="lg:hidden md:inline-flex cursor-pointer"
            onClick={toggleMenu}
          >
            {menuOpen ? (
              <XMarkIcon className=" hidden h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </div>

          {/* Links */}
          <div
            className={`${goudy.className} hidden lg:inline-flex flex-row items-center space-x-10 text-sm`}
          >
            <Link href={"/about"}>About </Link>
            <Link href={"/product"}>Product </Link>
            <Link href={"/luxuryandsustainability"}>
              Luxury and Sustainability{" "}
            </Link>
            <Link href={"/contact"}>Contact </Link>
            {/* <Link href={"/resume"}>Resume </Link> */}
          </div>
          {/* Menu Overlay */}
          {menuOpen && (
            <div className="fixed top-0 left-0 h-full w-full z-50">
              <div
                className="bg-black opacity-50 w-full h-full absolute top-0 left-0"
                onTouchStart={toggleMenu}
              ></div>
              <motion.div
                initial={{
                  x: 10,
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.2,
                }}
                className="fixed top-0 right-0 h-full w-5/12 backdrop-blur-md bg-white/60 dark:bg-black/60 z-50 flex flex-col items-center text-lg "
              >
                <div
                  className={`${goudy.className} flex flex-col my-10 items-end space-y-7 h-full text-right`}
                >
                  <div className="md:inline-flex mb-10" onClick={toggleMenu}>
                    {menuOpen ? (
                      <XMarkIcon className="h-6 w-6" />
                    ) : (
                      <Bars3Icon className="h-6 w-6" />
                    )}
                  </div>
                  <Link href={"/about"}>About </Link>
                  <Link href={"/product"}>Product </Link>
                  <Link href={"/luxuryandsustainability"}>
                    Luxury and <br />
                    Sustainability{" "}
                  </Link>
                  <Link href={"/contact"}>Contact </Link>
                  {/* <Link href={"/resume"}>Resume </Link> */}
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </motion.div>
    </header>
  );
}
