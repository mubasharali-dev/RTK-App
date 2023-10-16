// SearchBar.jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies, fetchAsyncShows } from "../../features/movies/movieSlice.jsx";
import Swal from "sweetalert2";
import './SearchBar.scss';

const SearchBar = () => {
    const [search, setSearch] = useState("");
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        if (search === "") {
            Swal.fire({
                icon: "warning",
                title: "Please enter a movie or show name",
                showConfirmButton: true,
            });
            return;
        }
        dispatch(fetchAsyncMovies(search));
        dispatch(fetchAsyncShows(search));
        setSearch("");
    };

    return (
        <div className="search-bar">
            <form onSubmit={submitHandler}>
                <input
                    type="text"
                    value={search}
                    placeholder="Search Movies or Shows"
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button type="submit"><i className="fa fa-search"></i></button>
            </form>
        </div>
    );
};

export default SearchBar;
