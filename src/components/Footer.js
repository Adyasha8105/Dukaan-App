/* eslint-disable jsx-a11y/anchor-is-valid */
import Logo from "../images/logo.svg";
import IndiaLogo from "../images/india.svg";

const Footer = () => {
  return (
    <div className="pt-8 pb-4 px-4 bg-[hsl(260,_11%,_11%)] text-white">
      <div className="w-[min(1024px,_100%)] mx-auto p-4 flex flex-col items-stretch justify-start gap-8">
        <div className="flex flex-row items-start justify-between gap-8 flex-wrap">
          <div className="flex flex-col items-start justify-start gap-2">
            <img src={Logo} alt="Logo" className="w-32" />
          </div>
          <div className="flex flex-row items-start justify-between flex-wrap gap-8 lg:gap-24">
            <div className="flex flex-col items-start justify-start gap-2">
              <a href="#">Contact</a>
              <a href="#">FAQ's</a>
            </div>
            <div className="flex flex-col items-start justify-start gap-2">
              <a href="#">Tutorials</a>
              <a href="#">Blog</a>
            </div>
            <div className="flex flex-col items-start justify-start gap-2">
              <a href="#">Privacy</a>
              <a href="#">Banned Items</a>
            </div>
            <div className="flex flex-col items-start justify-start gap-2">
              <a href="#">About</a>
              <a
                href="#"
                className="flex flex-row items-center justify-start gap-2"
              >
                <span>Jobs</span>
                <span className="rounded-full w-6 h-6 bg-white text-black text-sm leading-none grid place-items-center">
                  3
                </span>
              </a>
            </div>
            <div className="flex flex-col items-start justify-start gap-2">
              <a href="#">Facebook</a>
              <a href="#">Twitter</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/20"></div>
        <div className="text-sm flex flex-row items-center justify-between gap-2 flex-wrap">
          <p>Dukaan 2020, All rights reserved.</p>
          <div className="flex flex-row items-center justify-end gap-2">
            <p>Made in</p>
            <img src={IndiaLogo} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
