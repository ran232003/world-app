import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import NotFound from "./pages/NotFound/NotFound";
import NavigationBar from "./global/NavigationBar";
import { useEffect } from "react";
import { apiCall } from "./api/apiCall";
import { nameAndFlags } from "./api/urls";
import { useDispatch } from "react-redux/es";
import { countryAction } from "./store/countriesSlice";
import CountryDetail from "./pages/landingPage/components/CountryDetail";

function App() {
  const dispatch = useDispatch();
  const getData = async () => {
    const response = await apiCall(nameAndFlags, "GET", null);
    if (!response) {
      //error
      return;
    }
    dispatch(countryAction.setCountries(response));
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/countryDetail/:alpha" element={<CountryDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
