import React, { useContext } from "react";
import logoImg from "../assets/image 43.svg";
import { FaRegUser } from "react-icons/fa6";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import articleContext from "../Contexts/ArticleProvider";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setCategoryOpen,
  setMenuOpen,
  setCountryList,
} from "../Contexts/articleSlice.js";
import { IconButton, Tooltip } from "@mui/material";

const Nav = () => {
  const { category, setCategory, country, setCountry } =
    useContext(articleContext);
  const dispatch = useDispatch();
  const menuOpen = useSelector((state) => state.menuOpen);
  const countryList = useSelector((state) => state.countryList);
  const categoryOpen = useSelector((state) => state.categoryOpen);

  const categories = [
    {
      id: 0,
      name: "Business",
    },
    {
      id: 1,
      name: "Entertainment",
    },
    {
      id: 2,
      name: "General",
    },
    {
      id: 3,
      name: "Health",
    },
    {
      id: 4,
      name: "Science",
    },
    {
      id: 5,
      name: "Sports",
    },
    {
      id: 6,
      name: "Technology",
    },
  ];

  const countries = [
    {
      id: 0,
      name: "Australia",
      param: "au",
    },
    {
      id: 1,
      name: "China",
      param: "cn",
    },
    {
      id: 2,
      name: "Japan",
      param: "jp",
    },
    {
      id: 3,
      name: "India",
      param: "in",
    },
    {
      id: 4,
      name: "United States",
      param: "us",
    },
  ];

  const links = [
    {
      id: 0,
      name: "Home",
      path: "/home",
    },
    {
      id: 1,
      name: "Contact Us",
      path: "/contactus",
    },
    {
      id: 2,
      name: "About Us",
      path: "/aboutus",
    },
  ];

  return (
    <nav className="w-full h-[60px] shadow flex justify-between items-center px-5 sm:px-10 relative">
      <div className="w-fit h-full flex items-center justify-between gap-16">
        <Link to={"/home"}>
          <img src={logoImg || ""} width={45} height={45} alt="logo" />
        </Link>
        <div className="w-fit h-full flex gap-10 items-center menu">
          {links?.map((item, index) => (
            <NavLink
              key={index}
              to={item?.path}
              className={(navClass) =>
                navClass.isActive
                  ? "w-fit h-full py-4 text-center text-base font-medium cursor-pointer text-black border-b-2 border-black"
                  : "w-fit h-full py-4 text-center text-base font-medium cursor-pointer text-gray-600 hover:text-black"
              }
            >
              <span>{item?.name}</span>
            </NavLink>
          ))}
          <div
            className={
              categoryOpen
                ? "w-fit h-full relative text-base font-medium flex items-center text-black border-none cursor-pointer"
                : "w-fit h-full relative text-base font-medium flex items-center text-gray-600 hover:text-black cursor-pointer"
            }
            onClick={() => dispatch(setCategoryOpen())}
          >
            {category.toUpperCase()}
            <IoIosArrowDown
              className={
                categoryOpen
                  ? "w-fit h-fit ml-2 rotate-180"
                  : "w-fit h-fit ml-2"
              }
            />
            <ul
              className={
                categoryOpen
                  ? "w-[130px] h-auto z-20 bg-white block border shadow absolute -left-[16px] top-[60px]"
                  : "w-[130px] h-auto z-20 bg-white hidden border shadow absolute -left-[16px] top-[60px]"
              }
            >
              {categories?.map((item, index) => (
                <li
                  className={
                    item?.name.toLowerCase() === category.toLowerCase()
                      ? "w-full h-auto py-2 px-3 text-black font-medium text-base bg-gray-100 cursor-pointer"
                      : "w-full h-auto py-2 px-3 text-slate-800 font-normal text-base hover:bg-gray-100 bg-white cursor-pointer"
                  }
                  key={index}
                  onClick={() => {
                    setCategory(item?.name);
                  }}
                >
                  {item?.name}
                </li>
              ))}
            </ul>
          </div>
          <div
            className={
              countryList
                ? "w-fit h-full relative text-base font-medium flex items-center text-black border-none cursor-pointer"
                : "w-fit h-full relative text-base font-medium flex items-center text-gray-600 hover:text-black cursor-pointer"
            }
            onClick={() => dispatch(setCountryList())}
          >
            {country.name.toUpperCase()}
            <IoIosArrowDown
              className={
                countryList ? "w-fit h-fit ml-2 rotate-180" : "w-fit h-fit ml-2"
              }
            />
            <ul
              className={
                countryList
                  ? "w-[130px] h-auto z-20 bg-white block border shadow absolute -left-[16px] top-[60px]"
                  : "w-[130px] h-auto z-20 bg-white hidden border shadow absolute -left-[16px] top-[60px]"
              }
            >
              {countries?.map((item, index) => (
                <li
                  className={
                    item?.param?.toLowerCase() === country.param?.toLowerCase()
                      ? "w-full h-auto py-2 px-3 text-black font-medium text-base bg-gray-100 cursor-pointer"
                      : "w-full h-auto py-2 px-3 text-slate-800 font-normal text-base hover:bg-gray-100 bg-white cursor-pointer"
                  }
                  key={index}
                  onClick={() => {
                    setCountry({ param: item?.param, name: item?.name });
                  }}
                >
                  {item?.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="w-fit h-full flex items-center gap-5 sm:gap-7">
        <Tooltip title="profile" arrow>
          <IconButton>
            <FaRegUser size={16} color="black" />
          </IconButton>
        </Tooltip>
        <HiOutlineMenuAlt3
          size={20}
          className="cursor-pointer block xl:hidden"
          onClick={() => dispatch(setMenuOpen())}
        />
      </div>
      <div
        className={
          menuOpen
            ? "w-fit h-auto absolute top-[60px] right-5 bg-gray-100 z-20 py-3 px-3 block"
            : "w-fit h-auto absolute top-[60px] right-5 bg-gray-100 z-20 py-3 px-3 hidden"
        }
      >
        <h1 className="w-full h-fit text-xl border border-black pl-3 py-2 text-black cursor-pointer">
          Categories
        </h1>
        <ul className="w-full h-auto pt-1 bg-transparent border-black">
          {categories?.map((item, index) => (
            <li
              className={
                item?.name?.toLowerCase() === category.param?.toLowerCase()
                  ? "w-full h-auto py-2 px-3 text-slate-900 font-medium text-base bg-gray-200 cursor-pointer"
                  : "w-full h-auto py-2 px-3 text-slate-800 font-normal text-base hover:bg-gray-200 bg-transparent cursor-pointer"
              }
              key={index}
              onClick={() => {
                setCategory(item?.name);
                dispatch(setMenuOpen());
              }}
            >
              {item?.name}
            </li>
          ))}
        </ul>
        <div className="w-full h-fit text-xl text-black border border-black py-2 pl-3 mt-2 cursor-pointer">
          Country
        </div>
        <ul className="w-full h-auto pt-1 bg-transparent border-black">
          {countries?.map((item, index) => (
            <li
              className={
                item?.param?.toLowerCase() === country.param?.toLowerCase()
                  ? "w-full h-auto py-2 px-3 text-slate-900 font-medium text-base bg-gray-200 cursor-pointer"
                  : "w-full h-auto py-2 px-3 text-slate-800 font-normal text-base hover:bg-gray-200 bg-transparent cursor-pointer"
              }
              key={index}
              onClick={() => {
                setCountry({ param: item?.param, name: item?.name });
                dispatch(setMenuOpen());
              }}
            >
              {item?.name}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
