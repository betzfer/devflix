import { useState } from "react";
import logo from "../assets/devflix.png";
import searchIcon from "../assets/search.svg";

import "./App.css";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const apikey = "e4d577fa";
  const apiUrl = `https://omdbapi.com/?apikey=${apikey}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => console.log(data));

  useEffect(() => {
    searchMovies(godzilla);
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${apiUrl}&s=${title}`);
    const data = await response.json();

    console.log(data);
  };

  const handleKeyPress = (e) => {
    e === "Enter" && searchMovies(searchTerm);
  };

  return (
    <div id="app">
      <div className="logo">
        <img src={logo} alt="logo devflix" />
      </div>
      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Pesquisar por filmes"
        />
        <img
          src={searchIcon}
          alt="Icone de pesquisa"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
    </div>
  );
};

export default App;
