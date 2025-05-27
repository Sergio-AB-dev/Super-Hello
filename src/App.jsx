import React from "react";
import "./App.css"
import Header from "./components/Header";
import Banner from "./components/Banner";
import Services from "./components/Services"
import Work from "./components/Work"
import Benefits from "./components/Benefits"
import Jobs from "./components/Jobs";
import Pricing from "./components/Pricing";

const App =()=> {
  return (
    <>
    <Header />
    <Banner />
    <Services />
    <Work />
    <Benefits />
    <Jobs />
    <Pricing />
    </>
  )
}

export default App;