import Header from "./components/Header";
import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col ">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-bold mb-4 ">Welcome to SoMeApp</h1>
        <p className="text-lg mb-4 ">Your social media application</p>
      </main>
    </div>
  );
}
