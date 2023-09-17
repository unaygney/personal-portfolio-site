import React, { useState } from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import Tech from '../MainPage/Tech'

function MainPage({ ...Data }) {
  const [language, setLanguage] = useState("tr");
  const selectedLanguageData = Data[language];

  return (
    <>
      <Header language={language} setLanguage={setLanguage} />
      <MainContent selectedLanguageData={selectedLanguageData} />

      <Tech />
    </>
  );
}

export default MainPage;
