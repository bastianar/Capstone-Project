import { useState, useEffect } from "react";
import { navlinks } from "../data/data";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="navbar w-full py-5 bg-white lg:fixed z-10 shadow-lg">
      <div className="container flex justify-between items-center mx-auto">
        <div className="navbar-logo  w-full flex justify-center sm:justify-start">
          <img className="w-30" src="../asset/logo-coklat.png" alt="" />
        </div>
        <ul>
          <li
            className={`menu flex sm:gap-10 gap-4 items-center text-black tracking-widest z-10 md:static fixed left-1/2 -translate-x-1/2 md:-translate-x-0
        md:opacity-100 bg-white shadow-lg md:shadow-none p-4 rounded-br-2xl rounded-bl-2xl md:bg-transparent transition-all md:transition-none ${active ? "top-0 opacity-100" : "-top-10 opacity-0"}`}
          >
            {navlinks.map((navlink) => {
              return (
                <NavLink
                  key={navlink.id}
                  to={navlink.path}
                  className={({ isActive }) =>
                    isActive
                      ? "after:content-[''] after:block  after:h-[2px] after:bg-[#5e3023] after:w-full text-base font-semibold text-[#5e3023]"
                      : "after:content-[''] after:block after:w-0 after:h-[2px] after:bg-[#5e3023] after:transition-all after:duration-300 hover:after:w-full text-base font-semibold hover:text-[#5e3023] transition-all duration-300"
                  }
                >
                  {navlink.title}
                </NavLink>
              );
            })}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
