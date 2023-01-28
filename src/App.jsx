import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/header";
import Rows from "./Components/Rows/rows";
import Display from "./Components/Display/display";

function App() {
  return (
    <div className="border-8 border-black text-center my-48 mx-6 rounded-2xl xxl:mx-96 xl:mx-80 lg:mx-68">
      <Header />
      <Rows value="1" />
      <Rows value="1" />
      <Rows value="1" />
      <Display />
    </div>
  );
}

export default App;
