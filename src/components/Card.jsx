import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ post }) => {
  return (
    <div className="w-[50vw] flex flex-col gap-2 flex-wrap">
      <div>
        <h1 className="font-bold active:underline"><NavLink to={`/blogs/${post.id}`}>{post.title}</NavLink></h1>
      </div>

      <div>
        <p className="text-sm">
          By <span className="italic">{post.author}</span> on{" "}
          <NavLink
            to={`/categories/${post.category.replaceAll(" ", "-")}?page=1`}
          >
            <span className="font-semibold">{post.category}</span>
          </NavLink>
        </p>
        <p className="text-sm">
          Posted on <span>{post.date}</span>
        </p>
      </div>

      <div>
        <p>{post.content}</p>
      </div>

      <div className="flex gap-2 -mt-1">
        {post.tags.map((tag, index) => (
          <span
            key={index}
            className="text-sm font-bold underline text-blue-600"
          >
            <NavLink to={`/tags/${tag.replaceAll(" ", "-")}?page=1`}>
              {`#${tag}`}
            </NavLink>
          </span> 
        ))}
      </div>
    </div>
  );
};

export default Card;
