import React from "react";
import GithubImg from "../../../assets/Github.svg";
import 'animate.css';

function Projects({ selectedLanguageData, language }) {
  const projects = selectedLanguageData.projeler;

  return (
    <div className="flex flex-col  relative mt-14 px-5 animate__animated animate__fadeIn  ">
      <h3 className="text-5xl font-bold text-white mb-7 ">
        {language === "tr" ? "Projeler" : "Projects"}
      </h3>
      <h3 className="absolute font-bold text-6xl whitespace-nowrap blur-[2px] -top-7 -left-6 opacity-10 ">
        {language === "tr" ? "Projeler" : "Projects"}
      </h3>

      <div className="flex flex-wrap   gap-5  justify-center md:justify-start ">
        {projects.map((project) => (
          <article
            className=" w-full lg:w-[30%] flex flex-col p-4 transition-colors duration-500 ease-out  hover:bg-[#f8f8f222] hover:rounded-lg"
            key={project.id}
          >
            <a target="_blank" rel="noopener noreferrer" href={project.demo}>
              <div className=" h-[224px] rounded-md overflow-hidden">
                <img
                  className="w-full h-full object-fill"
                  src={project.image}
                  alt=""
                />
              </div>
              </a>
              <div className="flex flex-col  gap-2 mt-2">
                <h3 className="font-bold text-2xl tracking-tighter mb-1  lg:truncate  ">
                  {project.projeAdi}
                </h3>
                <h4 className="text-orange-300 text-sm font-medium">
                  {project.kullanilanTeknolojiler}
                </h4>
                <p className="text-zinc-400">{project.projeAciklamasi}</p>
              
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline inline-flex gap-2 text-zinc-400 font-bold  "
                  href={project.kaynakKodLinki}
                >
                  <img src={GithubImg} alt="" />{" "}
                  {language === "tr" ? "Kaynak Kodu" : "Source Code"}
                </a>
              </div>
            
          </article>
        ))}
      </div>
    </div>
  );
}

export default Projects;
