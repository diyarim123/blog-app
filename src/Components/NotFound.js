import React from "react";
import { Link } from "react-router-dom";


function NotFound() {
    return (
        <div className="notFound">
            <h1>404</h1>
            <p>That page you're looking for doesn't exist</p>
            <Link to="/"><button>Back to Home page</button></Link>
        </div>
    )
}

export default NotFound;