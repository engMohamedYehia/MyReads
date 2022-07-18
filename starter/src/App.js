import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SearchPage from "./pages/SearchPage";
import * as BooksAPI from "./BooksAPI";

function App() {
  const [books, setBooks] = useState([]);
  const [searchBooks, setSearchBooks] = useState([]);

  const fetchingBooks = async () => {
    await BooksAPI.getAll().then((result) => {
      setBooks(result);
    });
  };

  useEffect(() => {
    fetchingBooks();
  }, []);

  // const HandleOption = async (book, shelf) => {
  //   await BooksAPI.update(book, shelf);
  //   const updateBooks = books.filter((bk) => bk.id !== book.id).concat([book]);
  //   setBooks(updateBooks);
  //   fetchingBooks();
  // };

  const HandleOption = async (book, shelf) => {
    book.shelf = shelf;
    setBooks((books) => {
      return books.filter((BookType) => BookType.id !== book.id).concat([book]);
    });

    await BooksAPI.update(book, shelf);
  };

  const HandleSearch = async (query) => {
    if (query.trim()) {
      const searchedBooks = await BooksAPI.search(query);

      if (searchedBooks.hasOwnProperty("error")) {
        setSearchBooks([]);
        return;
      }

      const booksFound = searchedBooks.map((searchedBook) => {
        const bookOnShelf = books.find((b) => b.id === searchedBook.id);
        searchedBook.shelf = bookOnShelf ? bookOnShelf.shelf : "none";
        return searchedBook;
      });

      setSearchBooks(booksFound);
    } else {
      setSearchBooks([]);
    }
  };

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={<MainPage books={books} HandleOption={HandleOption} />}
      />
      <Route
        exact
        path="/search"
        element={
          <SearchPage
            HandleOption={HandleOption}
            HandleSearch={HandleSearch}
            searchBooks={searchBooks}
          />
        }
      />
    </Routes>
  );
}

export default App;
