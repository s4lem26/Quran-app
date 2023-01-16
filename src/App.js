import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Quran from "./pages/quran";
import Surah from "./pages/Surah"
import AudioQuran from "./pages/AudioQuran";
import Home from "./pages/Home";
import { ThemeContext } from "./components/ThemeContext";
import { Routes, Route } from "react-router-dom";


const App = () => {
  const [theme, setTheme] = useState("light");

  return (
    <div className="w-full h-screen bg-[#383838] overflow-y-hidden">
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Navbar />
        <Routes>
          <Route path="quran" element={<Quran />}/>           
          <Route path="/quran/:surah" element={<Surah/>}/>
          <Route path="/" element={<Home />} />
          <Route path="/audioquran" element={<AudioQuran/>}/>
        </Routes>
      </ThemeContext.Provider>
    </div>
  );
};

export default App;
