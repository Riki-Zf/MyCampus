import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Program from "./components/Programs/Program";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Our PROGRAM" title="What We Offer" />
        <Program />
        <About />
        <Title subTitle="GALLERY" title="Campus Photos" />
        <Campus />
        <Title subTitle="TESTIMONIAL" title="What Students Says" />
      </div>
    </div>
  );
};

export default App;
