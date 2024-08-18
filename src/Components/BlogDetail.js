import React from "react";
import useFetch from "./useFetch";
import { useParams, useNavigate } from "react-router-dom";

function BlogDetail() {
    const { id }= useParams();
    const {data} = useFetch("http://localhost:8000/blogs/" + id);
    const Navigate = useNavigate();

    function showBlogDeleted() {
        const alert = document.querySelector("#alert")
        alert.classList.add('show')
        setTimeout(function() {
          alert.classList.remove('show')
          Navigate("/")
        }, 2000)
     }

    function handleDelete() {
        fetch("http://localhost:8000/blogs/" + id, {
            method: "DELETE"
        }).then(showBlogDeleted)
    }


    return (
        <div className="BlogDetail">
        {data &&
        <div>
            <h2>{data.title}</h2>
            <p>Written By {data.author}</p>
            <div>{data.body}</div>
            <button onClick={handleDelete}>Delete</button>
            <div id="alert">
                <p>Blog Deleted</p>
            </div>
        </div>
        }
        </div>
    )
}

export default BlogDetail;