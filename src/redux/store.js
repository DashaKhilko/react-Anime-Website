import { configureStore } from '@reduxjs/toolkit';
import { animeReducer } from './slices/anime';
import { filterReducer } from './slices/filter';
import { searchReducer } from './slices/search';

const store = configureStore({
  reducer: {
    anime: animeReducer,
    filter: filterReducer,
    search: searchReducer,
  },
});

export default store;
