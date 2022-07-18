import { Link } from "react-router-dom";
import Shelf from "../components/Shelf";
import PropTypes from "prop-types";

const MainPage = ({ books, HandleOption }) => {
  return (
    <div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <div className="list-books-content">
          <div className="list-books-content">
            <div>
              <Shelf
                books={books}
                HandleOption={HandleOption}
                title="Currently Reading"
                compare="currentlyReading"
              />

              <Shelf
                books={books}
                HandleOption={HandleOption}
                title="Want to Read"
                compare="wantToRead"
              />

              <Shelf
                books={books}
                HandleOption={HandleOption}
                title="Read"
                compare="read"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

MainPage.propTypes = {
  books: PropTypes.array.isRequired,
  HandleOption: PropTypes.func.isRequired,
};

export default MainPage;
