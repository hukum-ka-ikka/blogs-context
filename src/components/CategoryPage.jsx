import React from "react";
import Header from "./Header";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import Blogs from "./Blogs";
import Pagination from "./Pagination";

const CategoryPage = () => {
  const loaction = useLocation();
  const navigate = useNavigate();

  return (
    <div className="">
      <Header />
      <div className="flex gap-3 justify-center mt-8 p-2 -mb-4">
        <div className="flex gap-2 w-[50vw]">
          <button className="btn" onClick={()=> navigate(-1)}>Back</button>
          <h1 className="text-xl font-bold">
            Blogs on{" "}
            <span>{` ${location.pathname
              .split("/")
              .at(-1)
              .replaceAll("-", " ")}`}</span>
          </h1>
        </div>
      </div>
      <Blogs />
      <Pagination />
    </div>
  );
};1

export default CategoryPage;
