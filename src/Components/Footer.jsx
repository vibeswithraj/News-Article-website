import React from "react";
import logo from "../assets/image 53.svg";
import { Link } from "react-router-dom";
import icon2 from "../assets/Group 257.svg";
import { FaTwitter } from "react-icons/fa";
import { FaRedditAlien } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { useSelector } from "react-redux";

const Footer = () => {
  const theme = useSelector((state) => state.theme);
  return (
    <footer className={`w-full h-auto lg:h-[250px] ${theme ? 'bg-[#272727]' : 'bg-slate-800'} flex flex-wrap py-16 gap-16 items-center sm:items-stretch justify-evenly lg:justify-between px-2 sm:px-10`}>
      <div className="w-fit h-auto flex flex-col gap-5 md:gap-10 lg:gap-0 justify-between">
        <Link to={"/home"}>
          <img src={logo || ""} alt="logo" />
        </Link>
        <span className="text-gray-400">copyright © 2020 | NBC NEWS</span>
      </div>
      <ul className="w-fit h-fit flex gap-3 flex-col">
        <li className="text-white text-base" title="privacy policy">
          <Link to={"#"}>Privacy Policy</Link>
        </li>
        <li className="text-white text-base" title="">
          <Link to={"#"}>Do not sell my personal info</Link>
        </li>
        <li className="text-white text-base" title="terms of service">
          <Link to={"#"}>Terms of Service</Link>
        </li>
        <li className="text-white text-base" title="nbcnews.com">
          <Link to={"#"}>nbcnews.com Site Map</Link>
        </li>
      </ul>
      <div className="w-fit h-auto flex flex-col gap-10 lg:gap-0 justify-between">
        <ul className="w-fit h-auto flex gap-9">
          <li className="text-white" title="about">
            <Link to={"#"}>About</Link>
          </li>
          <li className="text-white" title="contact">
            <Link to={"#"}>Contact</Link>
          </li>
          <li className="text-white" title="careers">
            <Link to={"#"}>Careers</Link>
          </li>
          <li className="text-white" title="coupons">
            <Link to={"#"}>Coupons</Link>
          </li>
        </ul>
        <ul className="w-full h-auto flex justify-between lg:justify-end gap-10">
          <li>
            <Link to={"#"}>
              <img src={icon2 || ""} width={20} height={20} alt="icon" />
            </Link>
          </li>
          <li>
            <Link to={"#"}>
              <FaRedditAlien color="white" size={24} title="reddit" />
            </Link>
          </li>
          <li>
            <Link to={"#"}>
              <FaTwitter color="white" size={24} title="twitter" />
            </Link>
          </li>
          <li>
            <Link to={"#"}>
              <FaFacebook color="white" size={24} title="facebook" />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
