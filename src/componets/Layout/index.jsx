import Nav from '../Nav';
import Footer from '../Footer';

const Layout = ({ children }) => {
  return (
    <div className="w-full flex flex-col items-center">
      <header className="w-full flex flex-col items-center bg-rose-500 sm:justify-center">
        <Nav />
      </header>
      <main className="w-full min-h-[758px] flex flex-col items-center">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
