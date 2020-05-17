import React from "react";
import "../../Styles/layout.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-md fixed-top">
        <a href="../" className="text-center">
          Pokedex
        </a>

        {/* <form className="form-inline my-2 my-lg-0 justify-content-center col-12 col-sm-12 col-md-10 ">
          <input
            className="form-control ml-5 mr-sm-2 col-8 col-sm-8 col-md-8"
            type="text"
            placeholder="Busca un Pokémon"
            aria-label="Search"
            id="search"
          />

          <svg
            className="bi bi-search border-secondary"
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
              clipRule="evenodd"
            />
          </svg>
        </form> */}
      </nav>
    </div>
  );
}

export default Navbar;
