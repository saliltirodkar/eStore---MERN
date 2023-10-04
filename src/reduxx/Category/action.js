import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCategories = createAsyncThunk("getCategories", () => {
  const categories = fetch(
    "http://localhost:5001/productCategories/getCategories"
  ).then((res) => res.json());
  return categories;
});
