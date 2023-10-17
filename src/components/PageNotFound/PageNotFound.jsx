import React from "react";
import "./PageNotFound.scss";

const PageNotFound = () => {
    return (
        <div className="page-not-found">
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <a href="/"><button>Go Back</button></a>
        </div>
    );
};

export default PageNotFound;
