import PropTypes from "prop-types";
import Book from "../components/Book";

const Shelf = ({ books , HandleOption, title , compare }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map(
            (book, index) =>
              book.shelf === compare && (
                <li key={index}>
                  <Book book={book} HandleOption={HandleOption} />
                </li>
              )
          )}
        </ol>
      </div>
    </div>
  );
};

Shelf.propTypes = {
  books: PropTypes.array.isRequired,
  HandleOption: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  compare: PropTypes.string.isRequired,
};

export default Shelf;
