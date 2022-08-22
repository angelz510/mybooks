import React, { useState } from "react";
import Modal from "../Modal/Modal";
import "./Card.css";

const Card = ({ book }) => {
  const [show, setShow] = useState(false);
  const [bookInfo, setBookInfo] = useState();
  return (
    <>
      {book.map((item) => {
        let thumbnail =
          item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail;
        if (thumbnail !== undefined) {
          return (
            <React.Fragment key={item.id}>
              <div
                className="books-card"
                onClick={() => {
                  setShow(true);
                  setBookInfo(item);
                }}
              >
                <img src={thumbnail} alt="" />
                <div className="book-details">
                  <h3 className="book-title">{item.volumeInfo.title}</h3>
                  <p className="book-author">
                    Author:{" "}
                    {item.volumeInfo.authors &&
                      item.volumeInfo.authors.join(", ")}
                  </p>
                  <p>Published: {item.volumeInfo.publishedDate}</p>
                </div>
              </div>
              <Modal
                show={show}
                item={bookInfo}
                onClose={() => setShow(false)}
              />
            </React.Fragment>
          );
        } else {
          return null;
        }
      })}
    </>
  );
};

export default Card;
