import React from "react";

import { AiFillInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer p-5 md:p-10 mb-4 bg-secondaryOrange rounded-[10px] gap-[8] grid grid-cols-1 md:grid-cols-5 m-auto items-center justify-center">
      <div className="md:col-span-2">
        <div className="logoDiv">
          <h1 className="logo text-[25px] text-white pb-[1.5rem]">
            <strong className="text-mainBlack">Career</strong>Hub
          </h1>
        </div>
        <p className="text-white pb-p[13px] opacity-70 leading-7">
          We always make our seekers and companies find the best jobs and
          employers find the best candidates.
        </p>
      </div>
      <div className="md:col-span-1">
        <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">
          Company
        </span>
        <div className="grid gap-3">
          <li className="text-white opacity-[.7] hover:opacity-[1]">
            About Us
          </li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">
            Features
          </li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">News</li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">FAQ</li>
        </div>
      </div>
      <div className="md:col-span-1">
        <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">
          Company
        </span>
        <div className="grid gap-3">
          <li className="text-white opacity-[.7] hover:opacity-[1]">
            About Us
          </li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">
            Features
          </li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">
            Feedback
          </li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">
            Contact Us
          </li>
        </div>
      </div>
      <div className="md:col-span-1">
        <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">
          Support
        </span>
        <div className="grid gap-3">
          <li className="text-white opacity-[.7] hover:opacity-[1]">Events</li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">Promo</li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">
            Req Demo
          </li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">Careers</li>
        </div>
      </div>
      <div className="md:col-span-1">
        <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">
          Contact Info
        </span>
        <div>
          <small className="text-[14px] text-white">example@.com</small>
          <div className="icons flex gap-4 py-[1rem]">
            <AiFillInstagram className="bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-mainBlack" />
            <AiFillFacebook className="bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-mainBlack" />
            <AiOutlineTwitter className="bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-mainBlack" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
