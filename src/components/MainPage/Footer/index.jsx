import React from "react";
import {Links} from './constant'

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
