import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Second from "./components/second/Second";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="containerM p-[80px]">
      {/* <Header /> */}
      <Hero />
      <Second />
    </div>
  );
}

export default App;
