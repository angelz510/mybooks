import React from "react";
import "./Card.css";

const Card = ({ book }) => {
  console.log("book ==> ", book);
  return (
    <>
      {book.map((item) => {
        let thumbnail =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail;
        if (thumbnail !== undefined) {
          return (
            <div className="books-card" key={item.id}>
              <img src={thumbnail} alt="" />
              <div className="book-details">
                <h3 className="book-title">{item.volumeInfo.title}</h3>
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
