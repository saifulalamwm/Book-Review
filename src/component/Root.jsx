import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Root = () => {
  return (
    <div className="w-11/12 m-auto">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
