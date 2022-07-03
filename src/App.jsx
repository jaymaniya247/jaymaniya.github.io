import React from "react";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import HeaderSocials from "./components/header/HeaderSocials";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Topbar from "./components/topbar/Topbar";

const App = () => {
  return (
    <>
      <HeaderSocials />
      <Header />
      <Topbar />
      <Intro />
      <Experience />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
