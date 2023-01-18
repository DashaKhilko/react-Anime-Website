import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
  currentValue: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setValue(state, action) {
      state.value = action.payload;
    },
    setCurrentValue(state, action) {
      state.currentValue = action.payload;
    },
  },
});

export const { setValue, setCurrentValue } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
