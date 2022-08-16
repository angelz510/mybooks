import React from "react";

const Search = () => {
  return (
    <div className="search-container">
      <div className="search-header">
        <h1 className="search-header-title">Welcome to your library.</h1>
      </div>
      <div className="search-input-container">
        <h2 className="search-input-title">Search Books</h2>
        <div className="search-input">
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </div>
      </div>
    </div>
  );
};

export default Search;
