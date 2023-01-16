import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { ThemeContext } from "../components/ThemeContext";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Surah = () => {
  const { theme } = useContext(ThemeContext);
  const { surah } = useParams();
  const [surahinfo, Setsurahinfo] = useState("");

  useEffect(() => {
    getSurahinfo(surah);
  }, []);

  const getAyahTafsir = (ayah) => {
    axios
      .get(
        `http://api.quran-tafseer.com/tafseer/1/${surahinfo.number}/${ayah.numberInSurah}`
      )
      .then((res) => {
        Swal.fire({
          titleText: ayah.numberInSurah,
          text: res.data.text,
          showConfirmButton: false,
          showCloseButton: true,
          footer: "التفسير الميسر",
        });
      });
  };
  const ShowsurahInfo = () => {
    Swal.fire({
      titleText: surahinfo.name,
      html:
        `<p>عـدد آيـاتـها : ${surahinfo.numberOfAyahs}<p>` +
        `<p>النزول : ${
          surahinfo.revelationType === "Medinan" ? ` مدنية ` : `مكية`
        }<p>` +
        `<p>الاسم بالانجليزية : ${surahinfo.englishName}<p> ` +
        `<p>الترجمة الانجليزية : ${surahinfo.englishNameTranslation}<p> `,
      showConfirmButton: false,
      showCloseButton: true,
      background: "#393E46",
      color: "white",
    });
  };
  const getSurahinfo = (surahindex) => {
    axios
      .get(`https://api.alquran.cloud/v1/surah/${surahindex}`)
      .then((response) => {
        Setsurahinfo(response.data.data);
      });
  };

  const ayahsList = Object.values(surahinfo.ayahs || {}).map((ayah) => (
    <a
      title="أنقر لرؤية تفسير هذه الأية"
      key={ayah.number}
      className="inline hover:text-green-700 duration-150 cursor-pointer"
      onClick={() => {
        getAyahTafsir(ayah);
      }}
    >
      <p className="inline font-quran mx-1">
        {ayah.number !== 1
          ? ayah.numberInSurah === 1
            ? ayah.text.replace("بِسۡمِ ٱللَّهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِیمِ", "")
            : ayah.text
          : ayah.text}
      </p>
      <p className="border-2 rounded-full font-cairo text-sm inline-block mx-1 p-1 px-2">
        {ayah.numberInSurah}
      </p>
    </a>
  ));

  return (
    <div
      className={`w-full duration-300 overflow-y-scroll text-center pt-20 h-screen ${
        theme === "dark"
          ? " text-neutral-50 bg-[#383838]"
          : "text-[#1f1f1f] bg-[#d4d4d4] "
      }`}
    >
      <div
        onClick={ShowsurahInfo}
        title="أنقر للمزيد من التفاصيل"
        className="py-6 text-3xl font-cairo cursor-pointer items-center w-full bg-[#00000066] hover:text-green-800"
      >
        {surahinfo.number} - {surahinfo.name}
      </div>
      <h1
        className={
          surahinfo.number === 9 ? `hidden` : ` pt-6 text-5xl font-Ruqaa`
        }
      >
        بِسۡمِ ٱللَّهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِیمِ
      </h1>
      <div className="md:p-6 p-2 my-8 md:mx-24 rounded-xl md:px-4 leading-loose bg-[#00000049] text-3xl ">
        {ayahsList || "جار التحميل"}
      </div>
    </div>
  );
};

export default Surah;
