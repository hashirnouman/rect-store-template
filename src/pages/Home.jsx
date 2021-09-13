import React from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Card from "../components/Card";
import Flex from "../components/Flex";
import Footer from "../components/Footer";

import "./css/Home.module.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <br />
      <Flex>
        <Card />
        <Card />
        <Card />
        <Card />
      </Flex>
      <Footer />
    </div>
  );
};

export default Home;
