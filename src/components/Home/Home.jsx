import React, {useEffect} from 'react';
import MovieListing from "../MovieListing/MovieListing.jsx";
import {useDispatch} from "react-redux";
import { fetchAsyncMovies, fetchAsyncShows} from "../../features/movies/movieSlice.jsx";

const Home = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAsyncMovies());
        dispatch(fetchAsyncShows());
    }, [dispatch]);
    return (
        <>
            <div className="banner-img"></div>
            <MovieListing/>
        </>
    );
};

export default Home;