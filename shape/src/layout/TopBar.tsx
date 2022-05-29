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
} from 'react-icons/md';

interface TopBarProps {}

const TopBar: React.FC<TopBarProps> = () => {
  const [mounted, setMounted] = useState(false);
  const [ notification, setNotification ] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const menuList = [];

  return (
    <nav
      className="md:fixed shadow-lg md:shadow-app_gray/50 w-full h-screen md:h-16 md:opacity-90 flex justify-center items-center
      bg-app_blue dark:bg-app_dark_blue text-app_dark_gray dark:text-app_light_gray"
    >
      <div className="md:container md:xl flex flex-col md:flex-row px-10 items-center">
        <div className="md:basis-1/2 flex flex-row">
          <a href="/">
            <div className="flex flex-col md:flex-row justify-center items-center">
              <img src="" alt="Logo" className="" title="Shape Logo" />
              <h1 className="px-2 text-5xl md:text-3xl" title="Home/App Name">
                SHAPE
              </h1>
            </div>
          </a>
          {/* <div className="hidden px-2">Welcome to Shape!</div> */}
        </div>

        <div className="basis-1/2 flex flex-row-reverse">
        <button
            className="px-2 py-2 bg-transparent text-4xl md:text-2xl font-extrabold"
            onClick={() => setNotification(notification === false ? true : false)}
          >
            {notification === false ? (
              <MdNotificationsNone title="Notification" />
            ) : (
              <MdNotificationsActive title="Notification" />
            )}
          </button>
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
