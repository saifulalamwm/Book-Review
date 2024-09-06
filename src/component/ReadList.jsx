import PropTypes from "prop-types";
import { MdOutlinePublishedWithChanges } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { FaCopy } from "react-icons/fa";
import { Link } from "react-router-dom";

const ReadList = ({ books }) => {
  const {
    id,
    image,
    name,
    author,
    category,
    rating,
    tag,
    number_of_pages,
    publisher,
    year_of_publishing,
  } = books;

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-4 mt-4 border rounded-box p-4">
        <div className="p-4 lg:w-60 md:w-48 w-full flex justify-center items-center bg-slate-100 rounded-xl">
          <img className="" src={image} alt="" />
        </div>
        <div className=" grow text-sm">
          <p className="text-2xl font-bold">{name}</p>
          <p className="font-semibold">By :{author} </p>
          <div className=" flex gap-2 my-3 items-center flex-wrap">
            {tag.map((t, idx) => (
              <span
                className="p-2 rounded-2xl bg-gray-100 text-green-300 font-bold"
                key={idx}
              >
                #{t}
              </span>
            ))}
            <div className="flex items-center gap-2">
              <span>
                <MdOutlinePublishedWithChanges />
              </span>
              <span>Year of publishing :{year_of_publishing}</span>
            </div>
          </div>
          <div className="flex items-center gap-3 text-gray-400 font-semibold">
            <div className="flex items-center gap-2">
              <FaUserFriends />
              <p className="">Publisher : {publisher} </p>
            </div>
            <div className="flex gap-2 items-center">
              <FaCopy />
              <p>Page {number_of_pages}</p>
            </div>
          </div>
          <div className="w-full border-t-2 border-dashed border-gray-200 my-4"></div>
          <div className="flex gap-5 flex-wrap lg:flex-row flex-col text-center font-semibold">
            <p className="py-2 px-4 bg-blue-300 rounded-xl text-blue-800  ">
              Category : {category}
            </p>
            <p className="py-2 px-4 bg-yellow-200  text-center rounded-xl text-yellow-600 ">
              Rating : {rating}
            </p>
            <Link to={`/book/${id}`}>
              <button className="py-2 px-4 bg-green-500 rounded-xl w-full text-white">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

ReadList.propTypes = {
  books: PropTypes.shape({
    id: PropTypes.number,
    rating: PropTypes.number,
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    author: PropTypes.string,
    category: PropTypes.string,
    review: PropTypes.string,
    tag: PropTypes.arrayOf(PropTypes.string),
    number_of_pages: PropTypes.number,
    publisher: PropTypes.string,
    year_of_publishing: PropTypes.number,
  }),
};

export default ReadList;
