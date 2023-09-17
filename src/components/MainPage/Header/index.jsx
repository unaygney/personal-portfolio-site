import React from "react";
import Button from "../../Button";
import Tr from "../../../assets/tr.svg";
import Eng from "../../../assets/eng.svg";
function Header({ language, setLanguage }) {
  const handleChange = () => {
    setLanguage(language === "tr" ? "en" : "tr");
  };

  return (
    <header className="flex justify-between items-center mt-5 py-4 px-5">
      <a className="text-4xl font-bold" href="/">
      &lt;unay /&gt;
      </a>

      <nav>
        <Button onClick={handleChange}>
          <img
            className="w-full h-full bg-white object-cover rounded-full "
            src={language === "tr" ? Eng : Tr}
            alt=""
          />
        </Button>
      </nav>
    </header>
  );
}

export default Header;
