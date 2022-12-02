import React from "react";
import Body from "../Component/Body/Body";
import Footer from "../Component/Footer/Footer";
import Navigation from "../Component/Navigation/Navigation";
import Body2 from "../Component/Body2/Body2";
import Body3 from "../Component/Body3/Body3";


const Home = () => {
  return (
    <div>
        <Navigation />
        <Body2 />
        <Body />
        <Body3 />
        <Footer />
      </div>
  );
};

export default Home;

