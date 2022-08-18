import "./Modal.css";

const Modal = ({ show, item, onClose }) => {
  if (!show) {
    return null;
  }
  let thumbnail =
    item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail;
  return (
    <>
      <div className="modal">
        <div className="modal-inner">
          <button className="modal-close" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
          <div className="modal-details">
            <img src={thumbnail} alt="" />
            <div className="details-info">
              <h1 className="modal-book-title">{item.volumeInfo.title}</h1>
              <h3 className="modal-book-author">
                {item.volumeInfo.authors.join(", ")}
              </h3>
              <h4 className="modal-book-publisher">
                {item.volumeInfo.publisher}
                <span>{item.volumeInfo.publishedDate}</span>
              </h4>
              <br />
              <a href={item.volumeInfo.previewLink}>
                <button className="modal-button">More</button>
              </a>
            </div>
          </div>
          <h4 className="modal-book-description">
            {item.volumeInfo.description}
          </h4>
        </div>
      </div>
    </>
  );
};

export default Modal;
