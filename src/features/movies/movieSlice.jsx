import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import movieApi from "../../common/api/movieApi.jsx";
import {APIKEY} from "../../common/api/movieApiKey.jsx";

export const fetchAsyncMovies = createAsyncThunk("movies/fetchAsyncMovies", async () => {
    const movieText = "batman";
    const response = await movieApi.get(`?apikey=${APIKEY}&s=${movieText}&type=movie`);
    return response.data;
});

export const fetchAsyncShows = createAsyncThunk("shows/fetchAsyncShows", async () => {
    const seriesText = "Friends";
    const response = await movieApi.get(`?apikey=${APIKEY}&s=${seriesText}&type=series`);
    return response.data;
});

export const fetchMovieOrShow = createAsyncThunk("shows/fetchMovieOrShow", async (id) => {
    const response = await movieApi.get(`?apikey=${APIKEY}&i=${id}&Plot=full`);
    return response.data;
});

const initialState = {
    movies: {},
    shows: {},
    selectedMovieOrShow: {}
};

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        removeSelectedMovieOrShow: (state) => {
            state.selectedMovieOrShow = {};
        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log("Pending");
        },
        [fetchAsyncMovies.fulfilled]: (state, {payload}) => {
            console.log("Fetched Successfully!");
            return {...state, movies: payload};
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log("Rejected");
        },
        [fetchAsyncShows.fulfilled]: (state, {payload}) => {
            console.log("Fetched shows Successfully!");
            return {...state, shows: payload};
        },
        [fetchMovieOrShow.fulfilled]: (state, {payload}) => {
            console.log("Fetched movie or show Successfully!");
            return {...state, selectedMovieOrShow: payload};
        }
    }
});

export const {removeSelectedMovieOrShow} = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) => state.movies.selectedMovieOrShow;
export default movieSlice.reducer;
