import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Article } from "./Components";
import { Header } from "./Components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <h3>Nav Bar</h3>
      <Article />
      <h5>Article</h5>
      <h3>Footer</h3>
    </div>
  );
}

export default App;
