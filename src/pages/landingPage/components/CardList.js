import React, { useState } from "react";
import { useSelector } from "react-redux/es";
import MyCard from "./Card";

const CardList = () => {
  const itemsPerPage = 10;
  const countries = useSelector((state) => {
    return state.countries;
  });
  const [currentPage, setCurrentPage] = useState(1);
  if (countries.countries) {
    const indexOfLastCountry = currentPage * itemsPerPage;
    const indexOfFirstCountry = indexOfLastCountry - itemsPerPage;
    const currentCountries = countries.filterCountries.slice(
      indexOfFirstCountry,
      indexOfLastCountry
    );
    const paginate = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
    console.log(currentCountries);
    return (
      <div>
        <div className="countryList">
          {currentCountries.map((country, index) => {
            return (
              <MyCard
                data={country}
                name={country.name}
                alpha={country.alpha3Code}
                flag={country.flags.png}
                capital={country.capital}
                population={country.population}
              />
            );
          })}
        </div>
        <div className="pagination">
          {Array.from({
            length: Math.ceil(countries.filterCountries.length / itemsPerPage),
          }).map((_, index) => (
            <button key={index} onClick={() => paginate(index + 1)}>
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    );
  }
  return <div></div>;
};

export default CardList;
