import React, { useState } from "react";
import { HiHome } from "react-icons/hi2";
import { HiOutlineSearch } from "react-icons/hi";
import { FaPlus } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import { RiMovie2Line } from "react-icons/ri";
import { PiTelevisionLight } from "react-icons/pi";
import Container from "../Container/Container";
import { VscAccount } from "react-icons/vsc";
import { CiMenuKebab } from "react-icons/ci";
import Disney_logo from "../../assets/Images/Disney_logo.svg";
import HeaderItem from "./HeaderItem";

function Header() {
  const [toggle, settoggle] = useState(false);
  const navItem = [
    {
      name: "HOME",
      icon: HiHome,
      slug: "/", // slug is basically just like a url
      active: true,
    },
    {
      name: "SEARCH",
      icon: HiOutlineSearch,
      slug: "/search",
      active: true,
    },
    {
      name: "WATCHLIST",
      icon: FaPlus,
      slug: "/signup",
      active: true,
    },
    {
      name: "ORIGINALS",
      icon: CiStar,
      slug: "/all-posts",
      active: true,
    },
    {
      name: "MOVIES",
      icon: RiMovie2Line,
      slug: "/add-post",
      active: true,
    },
    {
      name: "SERIES",
      icon: PiTelevisionLight,
      slug: "/add-post",
      active: true,
    },
  ];

  return (
    <div>
      <Container>
        <div className="flex items-center gap-7 cursor-pointer justify-between">
          <div className="flex items-center gap-10">
            <div>
              <img src={Disney_logo} alt="Logo" />
            </div>

            <header className="ml-2">
              <div>
                {/* for larger device */}
                <ul className="hidden md:flex gap-9 items-center mx-2">
                  {navItem.map((item, index) =>
                    item.active ? (
                      <li>
                        <HeaderItem name={item.name} Icon={item.icon} />
                      </li>
                    ) : null
                  )}
                </ul>

                {/* this is for smaller screen */}
                <div>
                  <ul className="flex items-center gap-7 md:hidden ">
                    {navItem.map((item, index) =>
                      item.active && index < 3 ? (
                        <li>
                          <HeaderItem name={""} Icon={item.icon} />
                        </li>
                      ) : null
                    )}

                    <li onClick={() => settoggle(!toggle)}>
                      <HeaderItem name={""} Icon={CiMenuKebab} />
                      {toggle && (
                        <div className="absolute border-[1px] mt-2 bg-[#121212] p-2 border-gray-700">
                          {navItem.map((item, index) =>
                            item.active && index > 2 ? (
                              <li className="mt-1">
                                <HeaderItem name={item.name} Icon={item.icon} />
                              </li>
                            ) : null
                          )}
                        </div>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            </header>
          </div>

          <div>
            <span>
              <VscAccount />
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Header;
