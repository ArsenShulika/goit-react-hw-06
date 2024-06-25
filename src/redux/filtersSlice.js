import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filters',
  initialState: { name: '' },
  reducers: {
    addFilters(state, action) {
      state.name = action.payload;
    },
  },
});

export const { addFilters } = filterSlice.actions;
export default filterSlice.reducer;
export const selectFilter = state => state.filters.name;
