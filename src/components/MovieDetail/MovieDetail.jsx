import React, {useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {
    fetchMovieOrShow,
    getSelectedMovieOrShow,
    removeSelectedMovieOrShow
} from "../../features/movies/movieSlice.jsx";
import "./MovieDetail.scss";

const MovieDetail = () => {
    const {imdbID} = useParams();
    const dispatch = useDispatch();
    const data = useSelector(getSelectedMovieOrShow);
    console.log("movie data", data);
    useEffect(() => {
        dispatch(fetchMovieOrShow(imdbID))
        return () => {
            dispatch(removeSelectedMovieOrShow());
        }
    }, [dispatch, imdbID]);

    return (<>
            <div className="movie-section">
                {Object.keys(data).length === 0 ? (<div><i className="fa fa-spinner fa-spin"></i></div>) : (<>
                        <div className="section-left">
                            <Link to={"/"}><i className="fa fa-arrow-left"></i> Back</Link>
                            <div className="movie-title">{data.Title}</div>
                            <div className="movie-rating">
              <span>
                IMDB Rating <i className="fa fa-star"></i> : {data.imdbRating}
              </span>
                                <span>
                IMDB Votes <i className="fa fa-thumbs-up"></i> :{" "}
                                    {data.imdbVotes}
              </span>
                                <span>
                Runtime <i className="fa fa-film"></i> : {data.Runtime}
              </span>
                                <span>
                Year <i className="fa fa-calendar"></i> : {data.Year}
              </span>
                            </div>
                            <div className="movie-plot">{data.Plot}</div>
                            <div className="movie-info">
                                <div>
                                    <span>Director</span>
                                    <span>{data.Director}</span>
                                </div>
                                <div>
                                    <span>Stars</span>
                                    <span>{data.Actors}</span>
                                </div>
                                <div>
                                    <span>Generes</span>
                                    <span>{data.Genre}</span>
                                </div>
                                <div>
                                    <span>Languages</span>
                                    <span>{data.Language}</span>
                                </div>
                                <div>
                                    <span>Awards</span>
                                    <span>{data.Awards}</span>
                                </div>
                            </div>
                        </div>
                        <div className="section-right">
                            <img src={data.Poster} alt={data.Title}/>
                        </div>
                    </>)}
            </div>
        </>);
};

export default MovieDetail;