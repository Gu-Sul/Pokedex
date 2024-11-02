import { createSlice } from "@reduxjs/toolkit";
import { fetchMulitplePokemonById } from "./thunk";

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    data: [],
    loading: true,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMulitplePokemonById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMulitplePokemonById.rejected, (state) => {
        state.loading = false;
      })
      .addCase(fetchMulitplePokemonById.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      });
  },
});
