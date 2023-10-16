import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
    return (
        <div className="header">
            <Link to="/">
                <div className="logo">Movie App</div>
            </Link>
            <div className="user-image">
                <img src="https://raw.githubusercontent.com/dmalvia/React_Redux_ToolKit_Movie_App/master/src/images/user.png" alt="user" />
            </div>
        </div>
    );
};

export default Header;