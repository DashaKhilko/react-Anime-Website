import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryId: 0,
  sort: {
    name: 'По рейтингу',
    sortProperty: 'rating',
  },
  isOpenedSort: false,
  isOpenedCategory: false,
  currentLimit: 12,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
    setIsOpenedSort(state, action) {
      state.isOpenedSort = action.payload;
    },
    setIsOpenedCategory(state, action) {
      state.isOpenedCategory = action.payload;
    },
    setCurrentLimit(state, action) {
      state.currentLimit = action.payload;
    },
  },
});

export const {
  setCategoryId,
  setSort,
  setIsOpenedSort,
  setIsOpenedCategory,
  setSearch,
  setCurrentLimit,
} = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
