import { Link, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveBooksRead } from "../assets/ReadBooksLC";
import { saveBooksWishlist } from "../assets/Wishlist";

const BookDetails = () => {
  const books = useLoaderData();
  const { id } = useParams();

  //   console.log(typeof id, books);
  const book = books.find((book) => book.id === Number(id));
  const {
    image,
    name,
    author,
    category,
    review,
    tag,
    number_of_pages,
    publisher,
    year_of_publishing,
  } = book;

  const handleReadBooks = () => {
    saveBooksRead(Number(id));
    toast("Added to the Read list");
  };

  const handleWishList = () => {
    const isBookInReadList = saveBooksRead(Number(id));

    if (isBookInReadList) {
      toast(
        "This book is already in your Read list and cannot be added to the Wishlist."
      );
    } else {
      saveBooksWishlist(Number(id));
      toast("Added to the wishlist");
    }
  };

  return (
    <div className="">
      <div className=""></div>
      <div className="flex flex-wrap gap-3 my-10 ">
        <div className="bg-gray-100 py-10 grow rounded-xl">
          <img src={image} alt="" className="h-96 p-5 m-auto" />
        </div>
        <div className=" grow px-10">
          <p className="text-3xl font-bold">{name}</p>
          <p className="font-semibold">By : {author}</p>
          <div className="w-full border-t-2 border-dashed border-gray-200 my-4"></div>
          <p>{category}</p>
          <div className="w-full border-t-2 border-dashed border-gray-200 my-4"></div>
          <p>{review}</p>
          <div className="mt-5">
            {tag.map((t, idx) => (
              <span className="mx-2 py-2 px-4 rounded-xl bg-gray-100" key={idx}>
                {t}
              </span>
            ))}
            <div className="w-full border-t-2 border-dashed border-gray-200 my-4"></div>

            <div className="">
              <div className="overflow-x-auto">
                <table className="table">
                  <tbody>
                    {/* row 1 */}
                    <tr>
                      <td>Number of Pages</td>
                      <td>{number_of_pages}</td>
                    </tr>
                    {/* row 2 */}
                    <tr>
                      <td>Publisher</td>
                      <td>{publisher}</td>
                    </tr>
                    {/* row 3 */}
                    <tr>
                      <td>Years of publishing</td>
                      <td>{year_of_publishing}</td>
                    </tr>
                    {/* row 3 */}
                    <tr>
                      <td>Rating</td>
                      <td>rating</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="flex gap-5">
            <Link>
              <button
                onClick={handleReadBooks}
                className="px-8 py-3 rounded-xl border border-gray-600  hover:bg-yellow-400 hover:text-white hover:border-none ease-in-out duration-300"
              >
                {" "}
                Read
              </button>
            </Link>
            <Link>
              <button
                onClick={handleWishList}
                className="px-8 py-3 rounded-xl border border-gray-600  hover:bg-blue-400 hover:text-white hover:border-none ease-in-out duration-300"
              >
                Wishlist
              </button>
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default BookDetails;
