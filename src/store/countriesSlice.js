import { createSlice } from "@reduxjs/toolkit";
const CountrySlice = createSlice({
  name: "country",
  initialState: {
    countries: null,
    numOfCountries: 0,
    filterCountries: null,
    region: "All Regions",
    name: "",
  },
  reducers: {
    setCountries(state, action) {
      state.countries = action.payload;
      state.filterCountries = action.payload;
      state.numOfCountries = action.payload.length;
    },
    filter(state, action) {
      console.log(action.payload, state.region);
      if (!action.payload && state.region === "All Regions") {
        state.name = action.payload = "";
        state.filterCountries = state.countries;
        state.numOfCountries = state.countries.length;
      } else if (!action.payload) {
        //only region
        console.log("only region");
        state.name = "";
        const tempCopy = state.countries.filter((country) => {
          return country?.region
            .toLowerCase()
            .includes(state.region.toLowerCase());
        });
        state.filterCountries = tempCopy;
        state.numOfCountries = tempCopy.length;
      } else if (state.region === "All Regions") {
        state.name = action.payload;
        const tempCopy = state.countries.filter((country) => {
          return country?.name
            .toLowerCase()
            .includes(action.payload.toLowerCase());
        });
        state.filterCountries = tempCopy;
        state.numOfCountries = tempCopy.length;
      } else {
        state.name = action.payload;
        const tempCopy = state.countries.filter((country) => {
          return (
            country?.name
              .toLowerCase()
              .includes(action.payload.toLowerCase()) &&
            country?.region.toLowerCase().includes(state.region.toLowerCase())
          );
        });
        state.filterCountries = tempCopy;
        state.numOfCountries = tempCopy.length;
      }
    },
    filterByRegion(state, action) {
      //   if (!state.name && action.payload === "All Regions") {
      //     state.region = action.payload;
      //     state.filterCountries = state.countries;
      //     state.numOfCountries = state.countries.length;
      //   } else if (!state.name && action.payload !== "All Regions") {
      //     state.region = action.payload;
      //     const tempCopy = state.filterCountries.filter((country) => {
      //       return country?.region
      //         .toLowerCase()
      //         .includes(action.payload.toLowerCase());
      //     });
      //     state.filterCountries = tempCopy;
      //     state.numOfCountries = tempCopy.length;
      //   }
      state.region = action.payload;
    },
  },
});

export default CountrySlice;

export const countryAction = CountrySlice.actions;
