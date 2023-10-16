import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import movieApi from "../../common/api/movieApi.jsx";
import {APIKEY} from "../../common/api/movieApiKey.jsx";

export const fetchAsyncMovies = createAsyncThunk("movies/fetchAsyncMovies", async (search) => {
    const response = await movieApi.get(`?apikey=${APIKEY}&s=${search}&type=movie`);
    return response.data;
});

export const fetchAsyncShows = createAsyncThunk("shows/fetchAsyncShows", async (search) => {
    const response = await movieApi.get(`?apikey=${APIKEY}&s=${search}&type=series`);
    return response.data;
});

export const fetchMovieOrShow = createAsyncThunk("shows/fetchMovieOrShow", async (id) => {
    const response = await movieApi.get(`?apikey=${APIKEY}&i=${id}&Plot=full`);
    return response.data;
});

const initialState = {
    movies: {},
    shows: {},
    selectedMovieOrShow: {},
    loading: false, // Add a loading state

};

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        removeSelectedMovieOrShow: (state) => {
            state.selectedMovieOrShow = {};
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAsyncMovies.pending, (state) => {
                state.loading = true; // Set loading to true on pending
            })
            .addCase(fetchAsyncMovies.fulfilled, (state, { payload }) => {
                state.loading = false; // Set loading to false on fulfilled
                state.movies = payload;
            })
            .addCase(fetchAsyncMovies.rejected, (state) => {
                state.loading = false; // Set loading to false on rejected
            })
        builder
            .addCase(fetchAsyncShows.pending, (state) => {
                state.loading = true; // Set loading to true on pending
            })
            .addCase(fetchAsyncShows.fulfilled, (state, { payload }) => {
                state.loading = false; // Set loading to false on fulfilled
                state.shows = payload;
            })
            .addCase(fetchAsyncShows.rejected, (state) => {
                state.loading = false; // Set loading to false on rejected
            })
        builder
            .addCase(fetchMovieOrShow.pending, (state) => {
                state.loading = true; // Set loading to true on pending
            })
            .addCase(fetchMovieOrShow.fulfilled, (state, { payload }) => {
                state.loading = false; // Set loading to false on fulfilled
                state.selectedMovieOrShow = payload;
            })
            .addCase(fetchMovieOrShow.rejected, (state) => {
                state.loading = false; // Set loading to false on rejected
            })
    },
    // extraReducers: {
    //     [fetchAsyncMovies.pending]: () => {
    //         console.log("Pending");
    //     },
    //     [fetchAsyncMovies.fulfilled]: (state, {payload}) => {
    //         console.log("Fetched Successfully!");
    //         return {...state, movies: payload};
    //     },
    //     [fetchAsyncMovies.rejected]: () => {
    //         console.log("Rejected");
    //     },
    //     [fetchAsyncShows.fulfilled]: (state, {payload}) => {
    //         console.log("Fetched shows Successfully!");
    //         return {...state, shows: payload};
    //     },
    //     [fetchMovieOrShow.fulfilled]: (state, {payload}) => {
    //         console.log("Fetched movie or show Successfully!");
    //         return {...state, selectedMovieOrShow: payload};
    //     }
    // }
});

export const {removeSelectedMovieOrShow} = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) => state.movies.selectedMovieOrShow;
export default movieSlice.reducer;
