import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBooks } from "../assets/ReadBooksLC";
import ReadList from "./ReadList";
import { getStoredWishlistBooks } from "../assets/Wishlist";
import { IoMdArrowDropdown } from "react-icons/io";

const ListedBook = () => {
  const books = useLoaderData();
  const [booksGarage, setBookGarage] = useState([]);
  const [wishlistGarage, setWishlistGarage] = useState([]);
  const [sortOption, setSortOption] = useState("rating");
  //////////////////////////////////////////////////////////////////////////
  const handleSortOptionChange = (option) => {
    setSortOption(option);
  };

  useEffect(() => {
    const booksIds = getStoredBooks();
    if (books.length > 0) {
      const storedBooksData = books.filter((book) =>
        booksIds.includes(book.id)
      );
      setBookGarage(
        storedBooksData.sort((a, b) => b[sortOption] - a[sortOption])
      );
    }
  }, [books, sortOption]);

  useEffect(() => {
    const booksWishlistIds = getStoredWishlistBooks();
    if (books.length > 0) {
      const storedBooksData = books.filter((book) =>
        booksWishlistIds.includes(book.id)
      );
      setWishlistGarage(
        storedBooksData.sort((a, b) => b[sortOption] - a[sortOption])
      );
    }
  }, [books, sortOption]);
  //////////////////////////////////////////////////////////////////////////

  return (
    <div>
      <div className="text-center h-28 flex justify-center items-center bg-gray-100 rounded-xl my-5">
        <p className="text-4xl font-bold">
          Books loaded: Read-{booksGarage.length} | Wishlist-{" "}
          {wishlistGarage.length}
        </p>
      </div>
      <div className="w-full grid justify-end">
        <details className="dropdown dropdown-end">
          <summary className="m-1 btn bg-green-500 w-32 text-white">
            <p className="flex items-center gap-2">
              Sort
              <IoMdArrowDropdown />{" "}
            </p>
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-gray-300 text-gray-700 rounded-box w-44">
            <li>
              <a onClick={() => handleSortOptionChange("rating")}>Rating</a>
            </li>
            <li>
              <a onClick={() => handleSortOptionChange("page")}>Page</a>
            </li>
            <li>
              <a onClick={() => handleSortOptionChange("publishedYear")}>
                Published Year
              </a>
            </li>
          </ul>
        </details>
      </div>
      {/* /////////////////////////////////////////////// */}
      {/* Tab section */}
      <div className="my-5">
        <div role="tablist" className="tabs tabs-lifted">
          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Books Reads"
            defaultChecked
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-t-base-300  p-6"
          >
            {booksGarage.map((books, idx) => (
              <ReadList key={idx} books={books}></ReadList>
            ))}
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Wishlist"
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-t-base-300 p-6"
          >
            {wishlistGarage.map((books, idx) => (
              <ReadList key={idx} books={books}></ReadList>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedBook;
