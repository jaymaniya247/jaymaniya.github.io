import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaInstagram } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/jay-maniya-8a9913206/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/jaymaniya247"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>
      <a
        href="https://instagram.com/ll_._itz_._jay_._ll?igshid=YmMyMTA2M2Y="
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagram />
      </a>
    </div>
  );
};

export default HeaderSocials;
