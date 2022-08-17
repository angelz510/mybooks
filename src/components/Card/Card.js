import React from "react";
import "./Card.css";

const Card = ({ book }) => {
  return (
    <>
      {book.map((item) => {
        let thumbnail =
          item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail;
        if (thumbnail !== undefined) {
          return (
            <div className="books-card" key={item.id}>
              <img src={thumbnail} alt="" />
              <div className="book-details">
                <h3 className="book-title">{item.volumeInfo.title}</h3>
                <p className="book-author">Author: {item.volumeInfo.authors}</p>
                <p>Publish Date: {item.volumeInfo.publishedDate}</p>
              </div>
            </div>
          );
        } else {
          return null;
        }
      })}
    </>
  );
};

export default Card;
