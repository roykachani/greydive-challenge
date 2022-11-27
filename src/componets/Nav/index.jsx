import logo from '../../assets/simulacr.png';

const Nav = () => {
  return (
    <>
      <nav className="max-w-screen-lg w-full py-14 bg-rose-500 lg:w-[920px] md:w-[720px] sm:w-[350px]">
        <div className="">
          <a href="/" aria-label="home">
            <img className="w-56 h-12" src={logo} alt="logo simulacr" />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Nav;
