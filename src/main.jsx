import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./component/Root";
import Home from "./component/Home";
import ListedBook from "./component/ListedBook";
import PagesRead from "./component/PagesRead";
import BookDetails from "./component/BookDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/listed",
        element: <ListedBook />,
        loader: () => fetch("https://saifulalamwm.github.io/books/books.json"),
      },
      {
        path: "/reads",
        element: <PagesRead />,
        loader: () => fetch("https://saifulalamwm.github.io/books/books.json"),
      },
      {
        path: "/book/:id",
        element: <BookDetails />,
        loader: () => fetch("https://saifulalamwm.github.io/books/books.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
