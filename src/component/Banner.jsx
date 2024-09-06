import { Link } from "react-router-dom";
import banner from "../assets/banner.png";

const Banner = () => {
  return (
    <div className="bg-base-200 rounded-2xl">
      <div className="hero py-28 h-full w-11/12 m-auto ">
        <div className="hero-content flex-col lg:flex-row-reverse justify-between gap-4">
          <img src={banner} className="max-w-sm rounded-lg scale-125" />
          <div>
            <h1 className="text-7xl font-bold">
              Books to freshen up your bookshelf
            </h1>

            <Link to={"/listed"}>
              <button className="w-52 p-4 text-xl rounded-xl font-semibold bg-green-400  text-white mt-8">
                View The List
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
