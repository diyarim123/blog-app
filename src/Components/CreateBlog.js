import React, { useState } from "react";
import { useNavigate } from "react-router-dom"

function NewBlog() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Diyari");
  const Navigate = useNavigate();


function showBlogAdded() {
   const alert = document.querySelector("#alert")
   alert.classList.add('show')
   setTimeout(function() {
     alert.classList.remove('show')
     Navigate("/")
   }, 2000)
}



  function handleSubmit(e) {
    e.preventDefault();

    const blog = {title, body, author}

    fetch("http://localhost:8000/blogs", {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(blog)
    })
    .then(showBlogAdded)
    .catch(err => {console.log("Failed to Post The Blog", err)})
    setTitle("")
    setBody("")
  }


  return (
    <div className="create">
      <h2>Add New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input 
        type="text"
        required 
        value={title}
        onChange={(e) => {setTitle(e.target.value)}}
        />
        <label>Blog Body:</label>
        <textarea
        required
        value={body}
        onChange={(e) => {setBody(e.target.value)}}
         >
         </textarea>
        <label>Blog Author:</label>
        <select
        value={author}
        onChange={(e) => {setAuthor(e.target.value)}}
        >
          <option value="Diyari">Diyari</option>
          <option value="Elyas">Elyas</option>
        </select>
        <button>Add Blog</button>
        <div id="alert">
            <p>Blog Added!</p>
        </div>
      </form>
    </div>
  );
}

export default NewBlog;
