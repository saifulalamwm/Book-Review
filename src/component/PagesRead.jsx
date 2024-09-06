import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBooks } from "../assets/ReadBooksLC";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

const PagesRead = () => {
  const books = useLoaderData();

  const [readBooks, setReadBooks] = useState([]);
  // const { number_of_pages, name } = readBooks;

  useEffect(() => {
    const booksIds = getStoredBooks();
    if (books.length > 0) {
      const storedBooksData = books.filter((book) =>
        booksIds.includes(book.id)
      );
      setReadBooks(storedBooksData);
    }
  }, [books]);

  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const sortedReadBooks = readBooks.sort(
    (a, b) => b.number_of_pages - a.number_of_pages
  );

  return (
    <div className="w-full h-96 flex justify-center m-auto">
      <ResponsiveContainer width="100%" height="80%">
        <BarChart data={sortedReadBooks} tick={{ width: 50 }}>
          <XAxis
            dataKey="name"
            tick={{ width: 200, fontSize: 14, overflow: "scroll", height: 100 }}
          />
          <YAxis />
          <Bar
            dataKey="number_of_pages"
            fill={colors}
            label={{ position: "top" }}
          >
            {sortedReadBooks.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PagesRead;
