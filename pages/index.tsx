import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Saint de Lusso</title>
        <meta name="description" content="Cashmere Products" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" h-screen bg-[center] md:h-[60rem] md:bg-[center_-20rem] lg:h-[80rem] lg:bg-[center_-30rem] xl:h-[80rem] xl:bg-[center_-30rem] 2xl:h-[100rem] 2xl:bg-[center_-50rem] bg-cover bg-[url('/bkg1.jpg')]  flex flex-col">
        <div className=" h-2/6 flex flex-col justify-center"></div>
        <Hero />
      </div>{" "}
      <div className=" h-screen bg-[url('/bkg21.jpg')] bg-center bg-cover sm:bg-[center_-10rem] md:bg-[center_-20rem] lg:bg-[center_-40rem] xl:bg-[center_-60rem] 2xl:bg-[center_-80rem]"></div>{" "}
      <div className=" flex flex-col justify-end h-0">
        <p className=" flex flex-row justify-center z-10 h-auto pb-10 text-xs text-white">
          {" "}
          © Copyright – Saint de Lusso, 2023.
        </p>
      </div>
    </>
  );
}
