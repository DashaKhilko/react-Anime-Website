import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAnime = createAsyncThunk(
  '/anime/fetchAnime',
  async ({ category, sortBy, order, currentLimit }) => {
    const { data } = await axios.get(
      `https://63718797025414c637f9426e.mockapi.io/anime?${category}&page=1&limit=${currentLimit}&sortBy=${sortBy}&order=${order}`,
    );
    return data;
  },
);

const initialState = {
  items: [],
  fullItem: {},
  isFiltering: false,
  status: 'loading',
};

const animeSlice = createSlice({
  name: 'anime',
  initialState,
  reducers: {
    setFullItem(state, action) {
      state.fullItem = action.payload;
    },
    setIsFiltering(state, action) {
      state.isFiltering = action.payload;
    },
  },
  extraReducers: {
    [fetchAnime.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchAnime.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = 'success';
    },
    [fetchAnime.rejected]: (state) => {
      state.items = [];
      state.status = 'error';
    },
  },
});

export const { setFullItem, setIsFiltering } = animeSlice.actions;
export const animeReducer = animeSlice.reducer;
