import React from "react";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../components/ThemeContext";

const AudioQuran = () => {
  const [reciters, Setreciters] = useState("");
  const { theme } = useContext(ThemeContext);
  const GetReciters = () => {
    axios.get("https://mp3quran.net/api/v3/reciters").then((res) => {
      Setreciters(res.data.reciters);
      
    });
  };
useEffect(()=>{
  GetReciters()
  
},[])

 
  return (
    <div
      className={`w-full duration-200 overflow-y-scroll items-center flex flex-col pt-20 h-screen ${
        theme === "dark"
          ? " text-neutral-50 bg-[#383838]"
          : "text-[#1f1f1f] bg-[#e9e9e9] "
      }`}
    >
      Soon ...
    </div>
  );
};

export default AudioQuran;
