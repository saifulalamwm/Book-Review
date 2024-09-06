import PropTypes from "prop-types";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { id, image, name, author, category, tag, rating } = book;
  return (
    <div className="bg-gray-100 p-4 rounded-xl">
      <Link to={`/book/${id}`}>
        <div className="h-60 bg-gradient-to-r from-amber-200 to-yellow-400 p-2 flex justify-center items-center rounded-xl mb-3">
          <img className="" src={image} alt="" />
        </div>
      </Link>
      <div className="">
        {tag.map((t, idx) => (
          <span className="mx-2 py-2 px-4 rounded-xl bg-green-300" key={idx}>
            {t}
          </span>
        ))}
      </div>
      <p className="text-3xl font-semibold my-4">{name}</p>
      <p>
        By : <span className="font-semibold">{author}</span>{" "}
      </p>
      <div className="w-full border-t-2 border-dashed border-gray-500 my-4"></div>
      <div className="flex justify-between w-11/12 m-auto">
        <p>{category}</p>
        <span className="flex gap-2 text-xl">
          {rating} <CiStar />
        </span>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    tag: PropTypes.arrayOf(PropTypes.string).isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

export default Book;
