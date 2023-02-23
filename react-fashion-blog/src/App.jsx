import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Header</h1>
      <h3>Nav Bar</h3>
      <h5>Article</h5>
      <h5>Article</h5>
      <h3>Footer</h3>
    </div>
  );
}

export default App;
