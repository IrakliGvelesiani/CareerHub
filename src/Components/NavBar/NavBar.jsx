import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navBar flex justify-between items-center p-6 md:p-[3rem]">
      <div className="logoDiv">
        <h1 className="logo text-lg md:text-[25px] text-mainOrange">
          <strong className="strongText text-mainBlack">Career</strong>Hub
        </h1>
      </div>

      <div className="menu md:flex gap-8 hidden">
        <li className="menuList text-[#6f6f6f] hover:text-mainOrange">Jobs</li>
        <li className="menuList text-[#6f6f6f] hover:text-mainOrange">
          Companies
        </li>
        <li className="menuList text-[#6f6f6f] hover:text-mainOrange">About</li>
        <li className="menuList text-[#6f6f6f] hover:text-mainOrange">
          Contact
        </li>
        <li className="menuList text-[#6f6f6f] hover:text-mainOrange">Blog</li>
        <li className="menuList text-[#6f6f6f] hover:text-mainOrange">
          Sign In
        </li>
        <li className="menuList text-[#6f6f6f] hover:text-mainOrange">
          Sign Up
        </li>
      </div>

      <div className="md:hidden">
        <button className="hamburger" onClick={toggleMenu}>
          {isMenuOpen ? (
            <FiX className="text-2xl text-mainOrange" />
          ) : (
            <FiMenu className="text-2xl text-mainOrange" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="mobileMenu bg-white p-4 md:hidden">
          <ul className="flex flex-col gap-4">
            <li className="menuList text-[#6f6f6f] hover:text-mainOrange">
              Jobs
            </li>
            <li className="menuList text-[#6f6f6f] hover:text-mainOrange">
              Companies
            </li>
            <li className="menuList text-[#6f6f6f] hover:text-mainOrange">
              About
            </li>
            <li className="menuList text-[#6f6f6f] hover:text-mainOrange">
              Contact
            </li>
            <li className="menuList text-[#6f6f6f] hover:text-mainOrange">
              Blog
            </li>
            <li className="menuList text-[#6f6f6f] hover:text-mainOrange">
              Sign In
            </li>
            <li className="menuList text-[#6f6f6f] hover:text-mainOrange">
              Sign Up
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default NavBar;
