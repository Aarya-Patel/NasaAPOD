import React from "react";
import Search from "./component/Search/Search.js";
import Header from "./component/Header/Header.js";
import Hero from "./component/Hero/Hero.js";
import Footer from "./component/Footer/Footer.js";
import "./App.css";

function App() {
  return (
    <div className="main">
      <Header />
      <Hero />
      <Search />
      <Footer />
    </div>
  );
}

export default App;
