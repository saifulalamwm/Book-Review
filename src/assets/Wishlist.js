const getStoredWishlistBooks = () => {
  const storedBook = localStorage.getItem("books-wishlist");
  if (storedBook) {
    return JSON.parse(storedBook);
  }
  return [];
};

const saveBooksWishlist = (id) => {
  //   console.log(id);
  const storedBooks = getStoredWishlistBooks();
  const exists = storedBooks.find((bookId) => bookId === id);
  //   console.log(storedBooks);
  if (!exists) {
    storedBooks.push(id);
    localStorage.setItem("books-wishlist", JSON.stringify(storedBooks));
  } else {
    alert("Book already added to wishlist");
  }
};

export { getStoredWishlistBooks, saveBooksWishlist };
