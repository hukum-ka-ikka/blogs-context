import React from "react";
import Header from "./Header";
import Blogs from "./Blogs";
import Pagination from "./Pagination";

const Home = () => {
  return (
    <div className="relative min-h-screen bg-slate-100">
      <Header />
      <Blogs />
      <Pagination />
    </div>
  );
};

export default Home;
