import React, { useState , useContext } from "react";
import { ThemeContext } from "./ThemeContext";



const Darkmode = () => {


  const {theme , setTheme} = useContext(ThemeContext)
  const [emoji, Setemoji] = useState("☀️");
   


  return (
    <button
      onClick={() => {
        if (theme === "dark") {
          setTheme("light");
          Setemoji("☀️");
        } else {
          setTheme("dark"); 
          Setemoji("🌕");
        }
      }}
      className="rounded-full duration-150 p-2 cursor-pointer hover:bg-[#4d4d4da9] "
    >
      {emoji}
    </button>
  );
};

export default Darkmode;
