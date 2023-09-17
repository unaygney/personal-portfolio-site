import React from "react";
//Svg
import HtmlIcon from "../../../assets/html-icon.svg";
import CssIcon from "../../../assets/css-icon.svg";
import JavasIcon from "../../../assets/javascript-icon.svg";
import SassIcon from "../../../assets/sass-icon.svg";
import TailwindIcon from "../../../assets/tailwind-icon.svg";
import ReactIcon from "../../../assets/react-icon.svg";

const Icons = [
  {
    icon: HtmlIcon,
    alt: "HTML Icon Tooltip",
    link:"https://www.w3schools.com/html/"
  },
  {
    icon: CssIcon,
    alt: "CSS Icon Tooltip",
    link:"https://www.w3schools.com/css/"
  },
  {
    icon: JavasIcon,
    alt: "JavaScript Icon Tooltip",
    link:"https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  },
  {
    icon: SassIcon,
    alt: "Sass Icon Tooltip",
    link:"https://sass-lang.com/"
  },
  {
    icon: TailwindIcon,
    alt: "Tailwind CSS Icon Tooltip",
    link:"https://tailwindcss.com/"
  },
  {
    icon: ReactIcon,
    alt: "React Icon Tooltip",
    link:"https://react.dev/"
  },
];
console.log(Icons);
function Tech() {
  return (
    <div className="relative mt-12">
      <h3 className="text-5xl font-bold text-white  ">
        Kullandıgım Teknolojiler {"{...}"}{" "}
      </h3>
      <h3 className="absolute font-bold text-6xl whitespace-nowrap blur-[2px] -top-7 -left-6 opacity-10 ">
        Kullandıgım Teknolojiler {"{...}"}{" "}
      </h3>
      <div className="flex gap-5 mt-8">
        {Icons.map((icon, idx) => (
          <div className="w-10 h-10 " key={idx}>
            <a  href={icon.link} target="_blank" rel="noopener noreferrer">
              <img className="w-full h-full" src={icon.icon} alt={icon.alt} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tech;
