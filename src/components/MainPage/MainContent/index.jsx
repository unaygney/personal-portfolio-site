import React from "react";
import 'animate.css';

function MainContent({ selectedLanguageData }) {

  return (
    <main className="my-9 px-5 animate__animated animate__fadeIn ">
      <h1 className=" text-7xl font-bold text-transparent bg-gradient-to-br from-yellow-300 to-red-300 bg-clip-text mb-4">{selectedLanguageData.hakkinda}</h1>
      <p className="text-neutral-300 text-2xl ">{selectedLanguageData.aciklama}</p>
    </main>
  );
}

export default MainContent;
