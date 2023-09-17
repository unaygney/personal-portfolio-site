import React from "react";
import { Icons } from "./constants";

function Tech({ language }) {
  return (
    <div className="relative mt-12">
      <h3 className="text-5xl font-bold text-white  ">
        {language === "tr"
          ? "Kullandığım Teknolojiler {...}"
          : "Technologies I Use {...}"}
      </h3>
      <h3 className="absolute font-bold text-6xl  blur-[2px] -top-7 -left-6 opacity-10 ">
        {language === "tr"
          ? "Kullandığım Teknolojiler {...}"
          : "Technologies I Use {...}"}
      </h3>
      <div className="flex gap-5 mt-8">
        {Icons?.map((icon, idx) => (
          <div className="w-10 h-10 " key={idx}>
            <a href={icon.link} target="_blank" rel="noopener noreferrer">
              <img className="w-full h-full" src={icon.icon} alt={icon.alt} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tech;
