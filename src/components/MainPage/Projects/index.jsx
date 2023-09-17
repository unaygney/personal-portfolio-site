import React from "react";

function Projects({ selectedLanguageData, language }) {
  const projects = selectedLanguageData.projeler;
  console.log(projects);
  return (
    <div className="flex flex-col relative mt-14 ">
      <h3 className="text-5xl font-bold text-white mb-7">
        {language === "tr" ? "Projeler" : "Projects"}
      </h3>
      <h3 className="absolute font-bold text-6xl whitespace-nowrap blur-[2px] -top-7 -left-6 opacity-10 ">
        {language === "tr" ? "Projeler" : "Projects"}
      </h3>

      <div className="flex flex-wrap gap-5 justify-center md:justify-start ">
        {projects.map((project) => (
          <article className="w-[300px] h-[400px] h border-2 border-solid border-red-600" key={project.id}>
            {project.projeAdi}
          </article>
        ))}
      </div>
    </div>
  );
}

export default Projects;
