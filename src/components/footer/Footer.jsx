import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        Jay Maniya
      </a>
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Skills</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
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
        <a
          href="https://www.facebook.com/jay.maniya.12"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebook />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; MJ 2022. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
