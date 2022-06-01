import React from 'react';

const about = () => {
  return (
    <>
      <main className="w-full h-screen flex flex-col justify-center items-center dark:bg-app_black text-app_gray dark:text-app_light_gray">
        <div className=" md:container md:xl md:mt-16 flex flex-col justify-center items-center bg-app_light_blue dark:bg-app_dark_gray h-screen">
          <h1 className="text-4xl font-bold py-6">
            About you you career and this application
          </h1>
        </div>
      </main>
    </>
  );
};

export default about;
