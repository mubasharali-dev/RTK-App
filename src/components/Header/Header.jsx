// Header.jsx
import React from "react";
import {Link, useLocation} from "react-router-dom";
import "./Header.scss";
import SearchBar from "../SearchBar/SearchBar.jsx";
import {useAuth0} from "@auth0/auth0-react";

const Header = () => {
    const {loginWithRedirect, logout, isAuthenticated, user} = useAuth0();
    const location = useLocation();
    const currentPath = location.pathname;

    const shouldShowSearchBar = () => {
        return currentPath === '/';
    };
    return (
        <div className="header">
            <Link to="/">
                <div className="logo">Movie App</div>
            </Link>
            {shouldShowSearchBar() && <SearchBar/>}
            <div className="right-navbar">
                <div className="user-profile">
                    {
                        isAuthenticated && (
                            <div className="user-name">
                                <span className="user-nickname">Welcome, {user.nickname || user.given_name}!</span>
                            </div>
                        )
                    }
                </div>
                {
                    isAuthenticated ? (
                        <div>
                            <button onClick={() => logout({logoutParams: {returnTo: window.location.origin}})}>
                                Log Out
                            </button>
                        </div>
                    ) : (
                        <div>
                            <button onClick={() => loginWithRedirect()}>Log In</button>
                        </div>
                    )

                }
            </div>
        </div>
    );
};

export default Header;
