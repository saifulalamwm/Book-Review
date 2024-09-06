import Banner from "./Banner";
import Books from "./Books";

const Home = () => {
  return (
    <div>
      <Banner />
      <p className="my-10 text-5xl font-bold text-center"> Books</p>
      <Books />
    </div>
  );
};

export default Home;
