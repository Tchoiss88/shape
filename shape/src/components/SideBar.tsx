import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineClose } from 'react-icons/md';

const sideBarDiv = (
  <div className=" md:fixed  bg-app_blue dark:bg-app_dark_blue text-app_dark_gray dark:text-app_light_gray  md:w-60 h-screen mt-16 md:px-2 md:py-4">
    Trainer
  </div>
);

const SideBar = () => {
  const [toggleSideBar, setToggleSideBar] = useState(false);

  return (
    <>
      <button
        className="md:fixed text-app_dark_gray dark:text-app_light_gray bg-transparent text-6xl"
        onClick={() => setToggleSideBar(toggleSideBar === false ? true : false)}
      >
        {toggleSideBar === true ? (
          <MdOutlineClose title="Close SideBar" />
        ) : (
          <GiHamburgerMenu title="Open SideBar" />
        )}
      </button>
      {toggleSideBar === true ? sideBarDiv : null}
    </>
  );
};

export default SideBar;
