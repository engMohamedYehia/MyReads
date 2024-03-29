import PropTypes from "prop-types";

const Book = ({ book, HandleOption }) => {
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${book.imageLinks ? book.imageLinks.smallThumbnail : ''})`,
          }}
        ></div>
        <div className="book-shelf-changer">
          <select
            value={book.shelf}
            onChange={(event) => HandleOption(book, event.target.value)}
          >
            <option value="none" disabled>
              Move to...
            </option>
            
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option >None</option>
            
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors}</div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  HandleOption: PropTypes.func.isRequired,
};

export default Book;
