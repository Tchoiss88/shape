import React from 'react';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

import SideBar from '../components/SideBar';

import { CgProfile } from 'react-icons/cg';
import {
  MdBrightness5,
  MdBrightness7,
  MdNotificationsNone,
  MdNotificationsActive,
  MdOutlineClose,
} from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GoInfo } from 'react-icons/go';

interface TopBarProps {}

const TopBar: React.FC<TopBarProps> = () => {
  const [mounted, setMounted] = useState(false);
  const [notification, setNotification] = useState(false);
  const [toggleSideBar, setToggleSideBar] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const menuList = [];

  return (
    <nav
      className="md:fixed shadow-lg md:shadow-app_gray/50 w-full h-screen md:h-16 
      md:opacity-90 flex justify-center items-center
      bg-app_blue dark:bg-app_dark_blue text-app_dark_gray dark:text-app_light_gray"
    >
      <div className="md:container md:xl flex flex-col md:flex-row px-10 items-center">
        <div className="md:basis-1/2 flex flex-row">
          <a href="/">
            <div className="flex flex-col md:flex-row justify-center items-center">
              <img src="" alt="Logo" className="" title="Shape Logo" />
              <h1
                className="px-2 text-5xl md:text-3xl font-bold"
                title="Home/App Name"
              >
                SHAPE
              </h1>
            </div>
          </a>
          <div className="div">
            <button
              className="fixed text-app_dark_gray dark:text-app_light_gray bg-transparent text-4xl"
              onClick={() =>
                setToggleSideBar(toggleSideBar === false ? true : false)
              }
            >
              {toggleSideBar === true ? (
                <MdOutlineClose title="Close SideBar" />
              ) : (
                <GiHamburgerMenu title="Open SideBar" />
              )}
            </button>
          </div>

          {/* <div className="hidden px-2">Welcome to Shape!</div> */}
        </div>

        <div className="basis-1/2 flex flex-col md:flex-row justify-center md:justify-end items-center ">
          <button
            className="px-2 py-2 bg-transparent text-4xl md:text-2xl"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          >
            {theme === 'light' ? (
              <MdBrightness5 title="Light Mode" />
            ) : (
              <MdBrightness7 title="Dark Mode" />
            )}
          </button>
          <a
            href="#"
            className="flex flex-row font-extrabold justify-center  items-center"
          >
            {/* This is not a button remember to change it to a div  */}
            <button
              className="px-2 py-2 bg-transparent text-4xl md:text-2xl "
              onClick={() =>
                setNotification(notification === false ? true : false)
              }
            >
              {notification === false ? (
                <MdNotificationsNone title="Notification" />
              ) : (
                <MdNotificationsActive title="Notification" />
              )}
            </button>
            <span className="text-2xl md:text-base">Notification</span>
          </a>

          <div className="px-2">
            <a
              href="/about"
              className="flex flex-row font-extrabold justify-center  items-center"
            >
              <span className="text-4xl md:text-2xl px-2  ">
                <GoInfo />
              </span>
              <span className="text-2xl md:text-base">About</span>
            </a>
          </div>
        </div>

        <div className="hidden md:block pl-2">
          <a href="#" title="Avatar">
            <CgProfile className="text-4xl" />
          </a>
        </div>
      </div>
    </nav>
  );
};
export default TopBar;
