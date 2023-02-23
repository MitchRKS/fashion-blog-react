import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Article } from "./Components";
import { Header } from "./Components/Header";
import { Nav } from "./Components";
import { Footer } from "./Components";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Article />
      <Article />
      <Footer />
    </div>
  );
}

export default App;
