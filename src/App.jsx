import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="rounded-xl border-l-purple-800 text-white flex">
      <button>X</button>
      <button>X</button>
      <button>X</button>
      <button>X</button>
      <button>X</button>
      <button>X</button>
      <button>X</button>
      <button>X</button>
      <button>X</button>
      Hello world
    </div>
  );
}

export default App;
