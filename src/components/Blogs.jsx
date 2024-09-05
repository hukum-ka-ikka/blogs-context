import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/Appcontext";
import Card from "./Card";

const Blogs = () => {
  const { loading, posts } = useContext(AppContext);

  return (
    <div>
      {loading ? (
        <div className="h-screen flex justify-center items-center">
          <div className="custom-loader"></div>
        </div>
      ) : (
        <div className="flex flex-col gap-3 items-center mt-8 p-2">
          {posts.length === 0 ? (
              <div className="h-screen">
              <p>No post Found</p>
            </div>  
            
            
          ) : (
            posts.map((post) => <Card key={post.id} post={post} />)
          )}
        </div>
      )}
    </div>
  );
};

export default Blogs;
