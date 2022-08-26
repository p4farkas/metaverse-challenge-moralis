import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Login from "../components/Login";
import Header from "../components/Header";
import Messages from "../components/Messages";

import { useMoralis } from "react-moralis";

const Home: NextPage = () => {
  const { authenticate, isAuthenticated, user, logout } = useMoralis();

  if (!isAuthenticated) return <Login />;

  return (
    <div className="h-screen overflow-y-scroll bg-gradient-to-bl from-slate-300 overflow-hidden">
      <Head>
        <title>Metaverse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-screen-2xl mx-auto">
        <Header />
        <Messages/>
      </div>

      <footer className="flex h-11 w-full items-center justify-center border-t sticky top-[100vh]">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  );
};

export default Home;
