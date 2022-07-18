import { Link } from "react-router-dom";
import { useState } from "react";
import Book from "../components/Book";
import Search from "../components/Search";
import PropTypes from "prop-types";

const SearchPage = ({ HandleOption, HandleSearch, searchBooks }) => {
  const [find, setFind] = useState("");

  const handleFind = (event) => {
    setFind(event.target.value);
    HandleSearch(event.target.value);
  };

  
  return (
    <div className="app">
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <Search find={find} handleFind={handleFind} />
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {searchBooks.map((book, index) => (
              <li key={index}>
                <Book book={book} HandleOption={HandleOption} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

SearchPage.propTypes = {
  
  HandleOption: PropTypes.func.isRequired,
  HandleSearch: PropTypes.func.isRequired,
  searchBooks: PropTypes.array.isRequired,
};

export default SearchPage;
