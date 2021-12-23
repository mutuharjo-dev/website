// import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import CTACard from '../components/CTACard';

const Home = () => {
  const features = [
    {
      title: 'Info Akademik RPL',
      url: '/akademik',
      color: '#F59E0B',
    },
    {
      title: 'Info Sekolah',
      url: '/sekolah',
      color: '#EC4899',
    },
    {
      title: 'Info Jurusan RPL',
      url: '/jurusan',
      color: '#3B82F6',
    },
  ];

  const [screenX, setScreenX] = useState(0);

  useEffect(() => {
    window.addEventListener('resize', () => {
      const { innerHeight } = window;

      setScreenX(innerHeight);
    });
  }, [screenX]);

  useEffect(() => {
    const { innerHeight } = window;

    setScreenX(innerHeight);
  }, []);

  return (
    <>
      <main>
        <div
          className={`container mx-auto max-w-screen-lg px-4 py-24 flex flex-col justify-center items-center h-full z-50 ${
            screenX > 768 ? 'lg:h-screen lg:py-0 ' : 'lg:py-24'
          }`}
        >
          <h1 className="text-5xl font-bold text-center md:text-6xl">
            Mutuharjo DEV
          </h1>
          <h2 className="mt-4 text-2xl font-bold text-center md:text-4xl">
            RPL SMK Muhammadiyah 1 Sukoharjo
          </h2>
          <p className="mt-2 w-full text-center md:w-3/4 md:text-lg">
            Sed porttitor lectus nibh. Pellentesque in ipsum id orci porta
            dapibu aliquet
          </p>
          <div className="flex flex-row flex-wrap justify-center mt-12 w-full">
            {features.map((item, index) => {
              return <CTACard key={index} feature={item} />;
            })}
          </div>
        </div>
        {/* <div
          className="h-24 w-36 opacity-50 bg-purple-400 absolute -top-16 -left-4 z-10 md:h-64 md:w-96 md:opacity-40"
          style={{ filter: 'blur(6rem)' }}
        ></div>
        <div
          className="h-24 w-36 opacity-50 bg-pink-400 absolute bottom-0 right-0 md:h-64 md:w-96 md:opacity-40"
          style={{ filter: 'blur(6rem)' }}
        ></div> */}
        {/* <div className="w-full h-12 bg-green-600 bottom-0 absolute"></div> */}
      </main>
    </>
  );
};

export default Home;
