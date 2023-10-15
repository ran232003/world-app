import { configureStore } from "@reduxjs/toolkit";
import CountrySlice from "./countriesSlice";

const store = configureStore({
  reducer: { countries: CountrySlice.reducer },
});
export default store;
