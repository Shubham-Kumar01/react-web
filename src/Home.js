import React from "react";
import Navbar from "./navbar.js";
import Header from "./Header.js";
import HowItWorks from "./HowItWorks.js";
import AboutUs from "./AboutUs.js";
import Services from "./Services.js";
import Contact from "./Contact.js";
import Footer from "./Footer.js";
const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <HowItWorks />
      <AboutUs />
      <Services />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
