import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimesCircle } from "react-icons/fa";
import Gbenga from "/Gbenga.jpg";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
    <div className="  flex flex-1 flex-row justify-between md:justify-around items-center lg:font-medium py-4 w-[100dvw]  p-8 md:px-16  bg-slate-800 text-white">
      <Link to="/" className="lg:h-14 md:basis-[20%] ">
        <img
          src={Gbenga}
          alt=" my picture"
          className=" rounded-full h-14 w-14  md:h-20 md:w-20 lg:h-14 lg:w-14 mx-auto md:mx-0"
        />
      </Link>

      <div className={` hidden md:flex basis-[80%] font-extrabold text-center justify-around w-full `}>
        <Link
          to="/"
          className=" text-lg hover:underline underline-offset-8 hover:text-indigo-400 "
        >
          All Repos
        </Link>
        <Link
          to="/repositoryDetatails"
          className="  text-lg hover:underline underline-offset-8 hover:text-indigo-400"
        >
          Each Repo Details
        </Link>
      </div>

      <section className=" flex flex-col md:hidden ">
        <div className="  text-4xl  cursor-pointer md:hidden text-indigo-400" onClick={() => setToggleMenu(!toggleMenu)}>
          {toggleMenu ? (
            <FaTimesCircle />
          ) : (
            <GiHamburgerMenu  />
          )}
        </div>

       
      </section>
      
      
    </div>
     {/* Navigation links */}
     <div className={`  ${toggleMenu?"z-10" : " "} flex flex-col bg-indigo-900 text-white w-[75%] items-center font-extrabold justify-around  transition-all duration-500 ${toggleMenu ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"}`}>
          <Link
            to="/"
            className=" text-lg hover:underline underline-offset-8 hover:text-indigo-400 "
          >
            All Repos
          </Link>
          <Link
            to="/repositoryDetatails"
            className="  text-lg hover:underline underline-offset-8 hover:text-indigo-400"
          >
            Each Repo Details
          </Link>
        </div>
    </>
  );
};

Navbar.propTypes = {};

export default Navbar;
