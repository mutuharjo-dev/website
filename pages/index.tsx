import type { NextPage } from "next";
import { useEffect, useState } from "react";
import CTACard from "../components/CTACard";

const Home: NextPage = () => {
  const color = ["red", "green", "blue"];
  const features = [
    {
      title: "Info Akademik RPL",
      desc: "Mauris blandit aliquet",
      url: "/akademik",
      icon: "icon_red.svg",
      bg: "akademik.svg",
    },
    {
      title: "Info Sekolah",
      desc: "Nulla quis lorem ut",
      url: "/sekolah",
      icon: "icon_green.svg",
      bg: "sekolah.svg",
    },
    {
      title: "Info Jurusan RPL",
      desc: "Donec rutrum congue",
      url: "/jurusan",
      icon: "icon_blue.svg",
      bg: "jurusan.svg",
    },
  ];

  const [screenHeight, setScreenHeight] = useState(0);

  useEffect(() => {
    window.addEventListener("resize", () => {
      const { innerHeight } = window;

      setScreenHeight(innerHeight);
    });
  }, [screenHeight]);

  useEffect(() => {
    const { innerHeight } = window;

    setScreenHeight(innerHeight);
  }, []);

  return (
    <main>
      <div
        className={`container mx-auto max-w-screen-lg px-4 py-24 flex flex-col justify-center items-center h-full ${
          screenHeight > 768 ? "lg:h-screen lg:py-0 " : "lg:py-24"
        }`}
      >
        <h2 className="text-4xl font-bold">Selamat Datang,</h2>
        <h1 className="text-5xl font-bold">Mutuharjo Dev</h1>
        <p className="my-6 mx-auto w-full text-center text-lg md:w-3/4">
          Sed porttitor lectus nibh. Pellentesque in ipsum id orci porta
          dapibus. Curabitur aliquet quam id dui posuere blandit. Mauris blandit
          aliquet elit, eget tincidunt nibh pulvinar a.
        </p>
        <div className="flex flex-row flex-wrap justify-center mt-6 w-full">
          {features.map((item, index) => {
            return <CTACard key={index} feature={item} color={color[index]} />;
          })}
        </div>
      </div>
    </main>
  );
};

export default Home;
