import { useEffect, useState } from "react";
import Book from "./Book";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [length, setLength] = useState(6);

  const handleLoadMore = () => {
    setLength(length + 6);
  };

  useEffect(() => {
    fetch("https://saifulalamwm.github.io/books/books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="mb-10">
      <p>Total loaded books : {length}</p>
      <br />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        {books.slice(0, length).map((book) => (
          <Book key={book.id} book={book}></Book>
        ))}
      </div>
      <div
        className={length === books.length ? "hidden" : ""}
        onClick={handleLoadMore}
      >
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-9 flex justify-center items-center text-white rounded-xl my-5">
          <button>Load More</button>
        </div>
      </div>
    </div>
  );
};

export default Books;
