import React from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

function Home() {

  const {data} = useFetch("http://localhost:8000/blogs")


  return (
      <div className="content">
        {data &&
          data.map((blog, index) => {
            return (
              <BlogList
                blogs={blog}
                key={blog.id}
                id={blog.id}
              />
            );
          })}
      </div>
  );
}

export default Home;