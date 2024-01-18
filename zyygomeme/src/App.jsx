import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import MemeCard from "./components/memeCard/MemeCard";
const App = () => {
  return (
    <>
      <Header />
      <MemeCard />
      <Footer />
    </>
  );
};

export default App;
