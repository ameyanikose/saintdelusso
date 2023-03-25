import Header from "@/components/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";

const switzer = localFont({
  src: "../public/Switzer-Variable.ttf",
  variable: "--font-switzer",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${switzer.variable} font-sans h-full`}>
      <Header />
      <Component {...pageProps} />{" "}
    </main>
  );
}
