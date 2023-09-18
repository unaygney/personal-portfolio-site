import React from "react";
import Github from "./Svg/Github";
import Linkedin from "./Svg/Linkedin";
import Mail from "./Svg/Mail";


const Links = [
  {
    id: 1,
    name: "github",
    links: "https://github.com/unaygney",
    target: "_blank",
    icon: Github,
  },
  {
    id: 2,
    name: "linkedin",
    links: "https://www.linkedin.com/in/g%C3%BCney-unay-97ab96235/",
    target: "_blank",
    icon: Linkedin,
  },
  {
    id: 3,
    name: "gmail",
    links: "mailto:example@hotmail.com",
    target: "_self",
    icon: Mail,
  },
];

function Footer() {
  return (
    <footer className="flex justify-between items-center my-8 py-7 px-5 md:px-10">
      <a className="text-2xl md:text-4xl font-bold" href="/">
        &lt;unay /&gt;
      </a>

      <div className="flex gap-5">
        {Links.map((link) => (
          <a key={link.id}  href={link.links}>
            <link.icon  />
          </a>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
