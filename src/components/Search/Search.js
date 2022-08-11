import React from "react";

const Search = () => {
  return (
    <div className="search-container">
      <div className="search-header">
        <h1>In the end, we’ll all become stories.</h1>
      </div>
      <div className="search-input">
        <h2>Search A Book</h2>
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
    </div>
  );
};

export default Search;
