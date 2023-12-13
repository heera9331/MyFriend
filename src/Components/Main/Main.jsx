// import React from "react";
import Story from "./Story/Story";
import Posts from "./Posts/Posts";
import Footer from "../Footer/Footer";

import "./Main.css";

const Main = () => {
  return (
    <>
      <div className="main">
        <Story />
        <Posts />
        <Footer />
      </div>
    </>
  );
};

export default Main;
