// Header.jsx
import React from "react";
import {Link, useLocation} from "react-router-dom";
import "./Header.scss";
import SearchBar from "../SearchBar/SearchBar.jsx";

const Header = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    // Function to determine if the search bar should be shown
    const shouldShowSearchBar = () => {
        return currentPath === '/';
    };
    return (
        <div className="header">
            <Link to="/">
                <div className="logo">Movie App</div>
            </Link>
            {shouldShowSearchBar() && <SearchBar/>}
            <div className="user-image">
                <img
                    src="https://raw.githubusercontent.com/dmalvia/React_Redux_ToolKit_Movie_App/master/src/images/user.png"
                    alt="user"
                />
            </div>
        </div>
    );
};

export default Header;
