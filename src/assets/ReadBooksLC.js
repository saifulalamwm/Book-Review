const getStoredBooks = () => {
  const storedBook = localStorage.getItem("books-read");
  if (storedBook) {
    return JSON.parse(storedBook);
  }
  return [];
};

const saveBooksRead = (id) => {
  //   console.log(id);
  const storedBooks = getStoredBooks();
  const exists = storedBooks.find((bookId) => bookId === id);
  //   console.log(storedBooks);
  if (!exists) {
    storedBooks.push(id);
    localStorage.setItem("books-read", JSON.stringify(storedBooks));
  }
};

export { getStoredBooks, saveBooksRead };
