import { useContext, useEffect, useState } from "react";
import "./App.css";
import { AppContext } from "./context/Appcontext";
import toast from "react-hot-toast";
import { Route, Routes, useLocation, useSearchParams } from "react-router-dom";
import CategoryPage from "./components/CategoryPage";
import TagPage from "./components/TagPage";
import BlogPage from "./components/BlogPage";
import Home from "./components/Home";

function App() {
  const { fetchPosts } = useContext(AppContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const page = searchParams.get("page") ?? 1;
    const tag = location.pathname.includes("tags")
      ? location.pathname.split("/").at(-1)
      : null;

    const category = location.pathname.includes("categories")
      ? location.pathname.split("/").at(-1)
      : null;

    fetchPosts(Number(page), tag, category);
  }, [location]);

  return (
    <div className="relative min-h-screen bg-slate-100">
      <Routes>
        <Route path="/categories/:category" element={<CategoryPage />} />
        <Route path="/tags/:tag" element={<TagPage />} />
        <Route path="/blogs/:blog" element={<BlogPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
