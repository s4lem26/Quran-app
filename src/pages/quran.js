import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../components/ThemeContext";
import { Link } from 'react-router-dom';


const Quran = () => {
  useEffect(() => {
    getSurahs();
  }, []);
  const { theme } = useContext(ThemeContext);

  const [surahs, Setsurahs] = useState("");

  const getSurahs = () => {
    axios.get("https://api.alquran.cloud/v1/surah").then((response) => {
      Setsurahs(response.data.data);
    });
  };

  const itemsList = Object.values(surahs).map((surah) => (
    <Link 
      to={`/quran/${surah.number}`}
      className={`text-white font-cairo hover:drop-shadow-md h-28 drop-shadow-lg items-center justify-between flex
       bg-green-700 cursor-pointer md:w-48 w-full m-3 hover:bg-green-600 hover:scale-105 duration-200 rounded-xl`}
      key={surah.number}
          >
      <span className="h-full pr-5 flex text-xl items-center text-center">{surah.number}</span>
      <div className="w-3/4 pl-2 h-full flex flex-col justify-evenly">
      <h1 className="text-xl">{surah.name}</h1>
      <p>عدد الايات : {surah.numberOfAyahs}</p>
      </div>
      
    </Link>
  ));
  return (
    <div
      className={`w-full overflow-y-scroll relative duration-200 text-center h-screen ${
        theme === "dark"
          ? " text-neutral-50 bg-[#383838]"
          : "text-[#383838] bg-[#e9e9e9] "
      }`}
    >
      <h1 className="text-5xl mt-24 my-16 font-Ruqaa break-words">
        اعوذ بالله من الشيطان الرجيم
      </h1>
      <div className={"flex items-center flex-wrap justify-center z-10 px-10"}>
        {itemsList || "جار التحميل"}
      </div>
    </div>
  );
};

export default Quran;
