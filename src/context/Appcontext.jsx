import { createContext, useState } from "react";
import toast from "react-hot-toast";
import { url } from "../assets/baseURL";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(null);
  const [pageSize, setPageSize] = useState(null);
  const navigate = useNavigate();

  const fetchPosts = async (page = 1, tag = null, category = null) => {
    setLoading(true);
    let pageURL = `${url}?page=${page}`;

    if (tag) {
      pageURL = `${pageURL}&tag=${tag}`;
    }
    if (category) {
      pageURL = `${pageURL}&category=${category}`;
    }
    try {
      const response = await axios.get(pageURL);
      const data = await response.data;
      setPosts(data.posts);
      setTotalPages(data.totalPages);
      setPageSize(data.pageSize);
      setPage(data.page);
    } catch (error) {
      toast.error("error");
      //   console.log(error)
      setPage(1);
    }
    setLoading(false);
  };

  const handlePageChange = (page) => {
    setPage(page);
    navigate({
      search: `?page=${page}`,
    });
  };

  const value = {
    loading,
    setLoading,
    page,
    setPage,
    posts,
    setPosts,
    totalPages,
    setTotalPages,
    pageSize,
    setPageSize,
    fetchPosts,
    handlePageChange,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
