import React from "react";
import Header from "./Header";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import Blogs from "./Blogs";
import Pagination from "./Pagination";

const TagPage = () => {
  const loaction = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div className="flex gap-3 justify-center mt-8 p-2 -mb-4">
        <div className="flex gap-2 w-[50vw]">
          <button className="btn" onClick={()=> navigate(-1)}>Back</button>
          <h className="text-xl font-bold">
            Blogs tagged
            <span className="text-blue-600 underline">{` #${location.pathname
              .split("/")
              .at(-1)
              .replaceAll("-", " ")}`}</span>
          </h>
        </div>
      </div>
      <Blogs />
      <Pagination />
    </div>
  );
};

export default TagPage;
