import Link from 'next/link';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const features = [
    {
      title: 'Info Akademik RPL',
      url: '/akademik',
      color: 'red',
    },
    {
      title: 'Info Sekolah',
      url: '/sekolah',
      color: 'green',
    },
    {
      title: 'Info Jurusan RPL',
      url: '/jurusan',
      color: 'blue',
    },
  ];

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollY(window.pageYOffset);
    });

    console.log(scrollY);
  }, [scrollY]);

  return (
    <>
      <nav className={`w-full ${scrollY > 10 ? 'fixed' : 'absolute'}`}>
        <div
          className={`container mx-auto max-w-screen-lg px-4 flex  justify-center items-center ${
            scrollY > 10
              ? 'flex-row justify-between py-4 '
              : 'flex-col justify-center py-8 '
          }`}
        >
          <Link href="/">
            <a>
              <h1
                className={` font-bold ${
                  scrollY > 10 ? 'text-2xl' : 'text-4xl'
                }`}
              >
                Mutuharjo DEV
              </h1>
            </a>
          </Link>
          <ul className={`flex ${scrollY > 10 ? 'mt-0' : 'mt-4'}`}>
            {features.map((item, index) => {
              return (
                <li key={index} className={`${scrollY > 10 ? 'ml-4' : 'mx-4'}`}>
                  <Link href={item.url}>
                    <a>
                      <span
                        className={` font-semibold ${
                          scrollY > 10 ? 'text-lg' : 'text-xl'
                        }`}
                      >
                        {item.title}
                      </span>
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
