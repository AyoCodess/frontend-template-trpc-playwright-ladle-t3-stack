import { type NextPage } from "next";
import Head from "next/head";

import { api } from "@/utils/api";
import { Button } from "@/ui/buttons";

import { AlertDialogDemo } from "@/ui/alert_dialog";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Frontend Template</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-white">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-black sm:text-[5rem]">
            Frontend Template
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8"></div>
          <p className="text-2xl text-black">
            {hello.data ? hello.data.greeting : "Loading tRPC query..."}
          </p>
          <Button variant="destructive">Testing</Button>
          <AlertDialogDemo />
        </div>
      </main>
    </>
  );
};

export default Home;
