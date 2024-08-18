import React from "react";
import { Link } from "react-router-dom";

export default function BlogList(props) {
    return (
        <div>
            <div className="blogSubContainer">
            <Link to={`/blogs/${props.id}`}>
                <h3 className="blogTitle">
                  {props.blogs.title}
                </h3>
                <p className="blogAuthor">By {props.blogs.author}</p>
            </Link>
            </div>
        </div>
    )
}