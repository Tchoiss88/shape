import { NextPage } from 'next';
import TopBar from './TopBar';
import Footer from './Footer';

const Layout: NextPage = (props) => {
  return (
    <>
      <TopBar />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
