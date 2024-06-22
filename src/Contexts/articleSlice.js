import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  articleDetails: {},
  loading: true,
  menuOpen: false,
  growSearch: false,
  countryList: false,
  categoryOpen: false,
  articlePerPage: 6,
  loadinIndex: [{}, {}, {}, {}, {}, {}],
};

const articleReducer = createSlice({
  name: "article",
  initialState,
  reducers: {
    setLoading: (state) => void (state.loading = false),
    setGrowSearch: (state) => void (state.growSearch = !state.growSearch),
    setMenuOpen: (state) => void (state.menuOpen = !state.menuOpen),
    setCategoryOpen: (state) => void (state.categoryOpen = !state.categoryOpen),
    setCountryList: (state) => void (state.countryList = !state.countryList),
  },
});

export const {
  setLoading,
  setGrowSearch,
  setMenuOpen,
  setCategoryOpen,
  setCountryList,
  setAllData,
  setCurrentPage,
} = articleReducer.actions;
export default articleReducer.reducer;
