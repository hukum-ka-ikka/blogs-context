import React, { useState, useContext, useEffect } from "react";
import Header from "./Header";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import Blogs from "./Blogs";
import Pagination from "./Pagination";
import axios from "axios";
import Card from "./Card";

const BlogPage = () => {
  const loaction = useLocation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [blog, setBlog] = useState({});
  const [relatedBlogs, setRelatedBlogs] = useState([]);

  const [loading, setLoading] = useState(true);
  const url = "https://codehelp-apis.vercel.app/api/get-blog";
  const blogId = location.pathname.split("/").at(-1);
  const pageURL = `${url}?blogId=${blogId}`;

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const response = await axios.get(pageURL);
      const data = response.data;
      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [location.pathname]);

  return (
    <div className="">
      <Header />
      <div className="flex gap-3 justify-center mt-8 p-2 -mb-4">
        <div className="flex gap-2 w-[50vw]">
          <button className="btn" onClick={() => navigate(-1)}>
            Back
          </button>
        </div>
      </div>
      <div>
        {loading ? (
          <div className="h-screen flex justify-center items-center">
            <div className="custom-loader"></div>
          </div>
        ) : (
          <div className="flex flex-col gap-3 items-center mt-8 p-2">
            {blog !== null && <Card post={blog} />}
          </div>
        )}
      </div>
      <div className="flex flex-col gap-3 items-center mt-8 p-2">
        {relatedBlogs.length === 0 ? (
          <div className="h-screen">
            <h1 className="text-2xl font-bold mb-4">Related Blogs</h1>{" "}
          </div>
        ) : (
          <div className="-mt-4 flex flex-col gap-3">
            <h1 className="text-2xl font-bold mb-4">Related Blogs</h1>
            {relatedBlogs.map((rblog) => (
              <Card key={rblog.id} post={rblog} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
