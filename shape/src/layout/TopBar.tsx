import React from 'react';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { CgProfile } from 'react-icons/cg';
import { MdBrightness5, MdBrightness7 } from 'react-icons/md';

const TopBar = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const menuList = [];

  return (
    <nav
      className="md:fixed shadow-lg md:shadow-app_gray-/50 dark:md:shadow-app_black w-full h-screen md:h-16 md:opacity-90 flex justify-center items-center
      bg-app_blue dark:bg-app_dark_blue"
    >
      <div className="md:container md:xl flex flex-col md:flex-row px-10 items-center">
        <div className="md:basis-1/2 flex flex-row">
          <a href="#">
            <div className="flex flex-col md:flex-row justify-center items-center">
              <img
                src="../../public/assets/logo_dark.png"
                alt="Logo"
                className=""
              />
              <h1 className="px-2 text-5xl md:text-3xl font-['Ceviche One'] text-app_dark_gray dark:text-app_light_gray">
                SHAPE
              </h1>
            </div>
          </a>
          {/* <div className="hidden px-2">Welcome to Shape!</div> */}
        </div>

        <div className="basis-1/2 flex flex-row-reverse">
          {/* <a ref="#">
            <MdBrightness5/>
          </a> */}
          <button
            className="px-2 py-2 bg-transparent"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          >
            {theme === 'light' ? (
              <MdBrightness5 className="text-4xl md:text-2xl text-app_dark_gray dark:text-app_light_gray" />
            ) : (
              <MdBrightness7 className="text-4xl md:text-2xl text-app_dark_gray dark:text-app_light_gray" />
            )}
          </button>
        </div>
        <div className="hidden md:block pl-2">
          <a href="#" title="avatar">
            <CgProfile className="text-4xl text-app_dark_gray dark:text-app_light_gray" />
          </a>
        </div>
      </div>
    </nav>
  );
};
export default TopBar;
