import Head from "next/head";
import Image from "next/image";
import Hero from "@/components/Hero";
import girlwithgoat from "../public/bkg1.jpg";
import goats from "../public/bkg21.jpg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Saint de Lusso</title>
        <meta name="description" content="Cashmere Products" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="h-[80vh] sm:h-screen flex flex-col justify-center">
        <Hero />
        <div>
          <Image
            src={girlwithgoat}
            alt="Girl with a goat."
            fill
            className="object-center object-cover pointer-events-none"
          ></Image>{" "}
        </div>
      </div>

      <div className="h-screen flex flex-col ">
        {" "}
        <div>
          <Image
            src={goats}
            alt="Girl with a goat."
            className=" h-screen object-bottom xl:object-[center_-130vh] object-cover pointer-events-none"
          ></Image>
        </div>
        <div className=" flex flex-col justify-end h-0">
          <p className=" flex flex-row justify-center z-10 h-auto pb-10 text-xs text-white">
            {" "}
            © Copyright – Saint de Lusso, 2023.
          </p>
        </div>
      </div>
    </>
  );
}
