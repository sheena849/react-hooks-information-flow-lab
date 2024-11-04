import React from "react";

function Header({onDarkModeClick}){
  return(
    <div>
      <header>
      <button onClick={onDarkModeClick}>
        Toggle Dark Mode
      </button>
      </header>
    </div>
  )
}
export default Header;