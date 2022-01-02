/* eslint-disable jsx-a11y/anchor-is-valid */
import Logo from "../images/logo.svg";

const Header = () => {
  return (
    <div className="p-4 pb-32 bg-primary">
      <div className="w-[min(1024px,_100%)] mx-auto p-4 flex flex-row items-center justify-between gap-4 flex-wrap">
        <div>
          <img src={Logo} alt="Logo" className="w-28" />
        </div>
        <nav className="flex flex-row items-center justify-end gap-8">
          <a href="#" className="text-white">
            Sign In
          </a>
          <a href="#" className="rounded px-4 py-2 bg-white text-primary">
            Dukaan for PC
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
