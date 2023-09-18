import React, { useState } from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import Tech from '../MainPage/Tech';
import Projects from './Projects'
import Footer from './Footer'

function MainPage({ ...Data }) {
  const [language, setLanguage] = useState("tr");
  const selectedLanguageData = Data[language];

  return (
    <>
      <Header language={language} setLanguage={setLanguage} />
      <MainContent selectedLanguageData={selectedLanguageData} />
      <Tech language={language} />
      <Projects language={language} selectedLanguageData={selectedLanguageData} />
      <Footer />
    </>
  );
}

export default MainPage;
