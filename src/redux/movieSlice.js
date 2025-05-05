import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import client from "../sanityClient";

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  const data =
    await client.fetch(`*[_type == "movies"] | order(releaseDate asc) {
    _id,
    title,
    director,
    description,
    releaseDate,
    isFeatured,
    rating,
    genre,
    poster { asset->, alt },
    gallery[]{asset->}
  }`);
  return data;
});

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default movieSlice.reducer;
