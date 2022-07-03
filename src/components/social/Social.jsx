import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaAngellist } from "react-icons/fa";

const Social = () => {
  return (
    <div className="social">
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
        href="https://angel.co/u/meri-gogichashvili"
        target="_blank"
        rel="noreferrer"
      >
        <FaAngellist />
      </a>
    </div>
  );
};

export default HeaderSocials;
