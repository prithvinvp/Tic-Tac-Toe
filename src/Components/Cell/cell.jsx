import { useState } from "react";
import "./cell.css";

function cell(props) {
  const [value, setValue] = useState(null);
  const handleClick = () => {
    setValue("X");
  };

  return (
    <button
      className="text-2xl md:text-4xl p-3 m-3 md:p-5 md:m-4 font-extrabold border-4 border-black rounded-2xl bg-black text-white font-serif shadow-lg shadow-slate-900 hover:bg-slate-600"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}

export default cell;
