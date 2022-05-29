import React from 'react';

import TopBar from './TopBar';

import Footer from './Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <TopBar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
