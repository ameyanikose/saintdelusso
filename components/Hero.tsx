import React from "react";
import { motion } from "framer-motion";
import { Monsieur_La_Doulaise } from "next/font/google";
import dynamic from "next/dynamic";
import Home from "@/pages";

type Props = {};

const monsieur = Monsieur_La_Doulaise({
  subsets: ["latin"],
  weight: "400",
  style: ["normal"],
});

export default function Hero({}: Props) {
  return (
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
      }}
    >
      {" "}
      <div
        className="font-normal text-4xl tracking-tight leading-tighter text-center text-stone-800 dark:text-white
        sm:text-5xl
        md:text-6xl 
        lg:text-7xl lg:leading-tighter lg:max-w-8xl lg:px-40 
        xl:text-8xl xl:leading-tighter lg:max-w-8xl xl:px-40
        2xl:text-9xl 2xl:leading-tighter lg:max-w-8xl 2xl:px-40 "
      >
        {" "}
        <div>
          <p
            className={`${monsieur.className} -mb-2 sm:-mb-2 md:-mb-4 lg:-mb-6  2xl:-mb-8 italic`}
          >
            {" "}
            Saint de Lusso
          </p>
        </div>
      </div>
    </motion.div>
  );
}
