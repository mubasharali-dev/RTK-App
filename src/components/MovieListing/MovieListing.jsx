import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {getAllMovies, getAllShows} from "../../features/movies/movieSlice.jsx";
import MovieCard from "../MovieCard/MovieCard.jsx";
import "./MovieListing.css";

const MovieListing = () => {
    const [loading, setLoading] = useState(true); // Add loading state
    const movies = useSelector(getAllMovies);
    const shows = useSelector(getAllShows);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timeout);
    }, []);

    let renderMovies, renderShows = "";

    renderMovies = movies.Response === "True" ? movies.Search.map((movie, index) => {
        return <MovieCard key={index} data={movie}/>

    }) : <div className="movies-error">{movies.Error}</div>

    renderShows = shows.Response === "True" ? shows.Search.map((show, index) => {
        return <MovieCard key={index} data={show}/>

    }) : <div className="shows-error">{shows.Error}</div>

    return (
        <>
            <div className="loading-container">
                {loading ? (
                    <div className="loading-text"><i className="fa fa-spinner fa-spin"></i></div>
                ) : (
                <div className="movie-wrapper">
                    <div className="movie-list">
                        <h1 className="movie-heading">Movies</h1>
                        <div className="movie-container">{renderMovies}</div>
                    </div>

                    <div className="show-list">
                        <h1 className="show-heading">Shows</h1>
                        <div className="movie-container">{renderShows}</div>
                    </div>
                </div>
            )}
            </div>
        </>
    );
};

export default MovieListing;