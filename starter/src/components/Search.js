import PropTypes from "prop-types";

const Search = ({ find, handleFind }) => {
  return (
    <div className="search-books-input-wrapper">
      <input
        type="text"
        placeholder="Search by title, author, or ISBN"
        value={find}
        onChange={handleFind}
      />
    </div>
  );
};

Search.propTypes = {
  find: PropTypes.string.isRequired,
  handleFind: PropTypes.func.isRequired,
};

export default Search;
