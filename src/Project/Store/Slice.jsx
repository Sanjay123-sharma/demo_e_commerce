import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// action
export const ApiData = createAsyncThunk("product", async () => {
  let response = await axios.get("https://fakestoreapi.com/products");
  let data = response.data;
  return data;
});

export const Slice = createSlice({
  name: "product",
  initialState: {
    loading: false,
    ProductList: [],
    error: null,
    Cart: [],
    Order: [],
  },
  reducers: {
    addProduct: (state, action) => {
      let list = state.ProductList;
      let product = list.find((item) => item.id === action.payload);
      state.Cart.push({
        id: product.id,
        image: product.image,
        title: product.title,
        count: 1,
        rating: product.rating.rate,
        price: product.price,
      });
    },
    removeProduct: (state, action) => {
      state.Cart = state.Cart.filter((item) => item.id !== action.payload);
    },
    increment: (state, action) => {
      let res = state.Cart.find((item) => item.id === action.payload);
      if (res) {
        res.count = res.count + 1;
      }
    },
    decrement: (state, action) => {
      let res = state.Cart.find((item) => item.id === action.payload);
      if (res) {
        if (res.count <= 1) {
          alert("cannot be -ve or 0");
        } else {
          res.count = res.count - 1;
        }
      }
    },
    removeAllProducts: (state) => {
      state.Cart = [];
    },
    addOrder: (state) => {
      state.Order = [...state.Cart, ...state.Order];
    },
    removeOrder: (state, action) => {
      state.Order = state.Order.filter((item) => item.id !== action.payload);
    },
  },
  extraReducers: (boiler) => {
    boiler
      .addCase(ApiData.pending, (state) => {
        state.loading = true;
      })
      .addCase(ApiData.fulfilled, (state, action) => {
        state.loading = false;
        state.ProductList = action.payload;
      })
      .addCase(ApiData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {
  addProduct,
  removeProduct,
  increment,
  decrement,
  removeAllProducts,
  addOrder,
  removeOrder,
} = Slice.actions;

export default Slice.reducer;
