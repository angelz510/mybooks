import React, { useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import "./Search.css";

const Search = () => {
  const [search, setSearch] = useState("");
  const [bookData, setBookData] = useState([]);

  const bookSearch = (e) => {
    if (e.key === "Enter") {
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${search}&key=${process.env.REACT_APP_API_KEY}&maxResults=40`
        )
        .then((res) => setBookData(res.data.items))
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <div className="search-component">
        <div className="search-header">
          <h1 className="search-header-title">Welcome to your library.</h1>
        </div>
        <div className="search-input-container">
          <h2 className="search-input-title">Search Books</h2>
          <div className="search-input">
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={bookSearch}
            />
            <button>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="results-container">
        <Card book={bookData} />
      </div>
    </>
  );
};

export default Search;
