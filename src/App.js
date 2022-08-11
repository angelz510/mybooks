import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Search from "./components/Search/Search";

function App() {
  useEffect(() => {
    const bookSearch = async () => {
      const results = await axios(
        `https://www.googleapis.com/books/v1/volumes?q=react&key=${process.env.REACT_APP_API_KEY}`
      );
      console.log(results.data);
    };
    bookSearch();
  }, []);
  return (
    <>
      <Search />
    </>
  );
}

export default App;
