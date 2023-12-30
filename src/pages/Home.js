import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { ThemeContext } from "../components/ThemeContext";
const Home = () => {
  const [randomayah, Setrandomayah] = useState("");
  const [randomsurah, Setrandomsurah] = useState("");

  const { theme } = useContext(ThemeContext);

  const getSurahdata = () => {
    axios
      .get(
        `https://api.alquran.cloud/v1/surah/${Math.floor(Math.random() * 114)}`
      )
      .then((response) => {
        Setrandomsurah(response.data.data);
      });
  };
  const getRdAyah = () => {
    
    if (randomsurah !== "") {
      Setrandomayah(
        randomsurah.ayahs[Math.floor(Math.random() * randomsurah.numberOfAyahs)]
      );
    }
  };
  useEffect(() => {
    getSurahdata();
  }, []);
  useEffect(() => {
    getRdAyah();
  }, [randomsurah]);

  return (
    <div
      className={`w-full duration-200 overflow-y-scroll items-center flex flex-col pt-20 h-screen ${
        theme === "dark"
          ? " text-neutral-50 bg-[#383838]"
          : "text-[#1f1f1f] bg-[#e9e9e9] "
      }`}
    >
      <h1 className="font-Ruqaa text-center mt-10 text-6xl">
        مرحبا بك في موقع اذكاري
      </h1>
      <div className="rounded-md mt-16 w-5/6 p-6">
        <h1
         className="font-cairo text-2xl relative px-2 w-fit bottom-10"
        >
          القران الكريم :
        </h1>
        <div>
          <p className="w-full mr-4 font-cairo my-2 
            before:relative flex items-center before:w-4 before:h-4 before:bg-green-600 before:translate-x-3 
          	before:rounded 
            select-none">
            {randomsurah.name || "جار التحميل"} - {randomayah.numberInSurah}
          </p>
        </div>
        <div
          title="أنقر لاظهار اية جديدة" 
          onClick={getSurahdata}
          className="rounded-md text-center cursor-pointer p-6 hover:drop-shadow-md bg-[#00000025]"
        >
          <p className="text-3xl font-quran">
            {randomayah.text || "جار التحميل"} 
            ({randomayah.numberInSurah})
          </p>
        </div>
      </div>
      {/*<div className="w-full relative islat h-96"></div>
      <footer className="w-full relative h-auto items-center justify-between px-16 py-8 bg-[#00000025] flex">
        <div>
          <p className="text-xl">الصفحات الرئيسية</p>
          <ul className="flex flex-col text-center">
            <a href="/quran" className="cursor-pointer my-2">قراءة القران</a>
            <a href="/" className="cursor-pointer my-2">الرئيسية</a>
            <a href="/audioquran" className="cursor-pointer my-2">الاستماع الى القران</a>
          </ul>
        </div>
        <p className="w-48 text-center">لا يوجد حقوق على أي مادة مستخدمة في الموقع، يمكنك 
        إعادة استخدامها كما تشاء بدون الرجوع إلينا.
        </p>
        <a className="text-xl cursor-pointer">المصدر</a>
      </footer>*/}
    </div>
  );
};

export default Home;
