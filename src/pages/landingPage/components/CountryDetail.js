import React, { useEffect, useState } from "react";
import { apiCall } from "../../../api/apiCall";
import { countryDetails } from "../../../api/urls";
import { useParams } from "react-router-dom";
import "./components.css";
import { BiSolidCity } from "react-icons/bi";

const CountryDetail = () => {
  const { alpha } = useParams();
  const [countryDetailsObj, setCountryDetails] = useState();

  const getDetails = async () => {
    let url = countryDetails + alpha;
    const data = await apiCall(url, "GET", null);
    setCountryDetails(data);
  };
  useEffect(() => {
    getDetails();
  }, []);
  if (countryDetailsObj) {
    return (
      <div className="detailsMain">
        <div className="details">
          <div className="headline">COUNTRY DETAILS</div>
          <hr />
          <div className="dataDetails">
            <div className="flag">
              <img
                src={countryDetailsObj.flags.png}
                className="imgCountryDetails"
                alt="missing flag"
              />
            </div>
            <div className="countryData">
              <div className="countryName">
                {countryDetailsObj.name !== countryDetailsObj.nativeName ? (
                  <div>
                    <span>{countryDetailsObj.name}&nbsp;</span> |
                    <span>&nbsp;{countryDetailsObj.nativeName}</span>
                  </div>
                ) : (
                  <span>{countryDetailsObj.name}&nbsp;</span>
                )}
              </div>
              <div className="detailIcon">
                <BiSolidCity className="iconDetails" />
                &nbsp;
                <span className="text">{countryDetailsObj?.capital}</span>
              </div>
              <div className="restOfData">
                <div className="odd">
                  <span>Region</span>
                  <span>{countryDetailsObj.region}</span>
                </div>
                <div className="even">
                  {" "}
                  <span>Area</span>
                  <span>{countryDetailsObj.area}</span>
                </div>
                <div className="odd">
                  <span>Population</span>
                  <span>
                    {countryDetailsObj.population.toLocaleString("en-US")}
                  </span>
                </div>
                <div className="even">
                  {" "}
                  <span>Time Zone</span>
                  {countryDetailsObj?.timezones?.map((time, index) => {
                    if (index < 3) {
                      return <span>{time}</span>;
                    }
                  })}
                </div>
                <div className="odd">
                  <span>Languages</span>
                  {countryDetailsObj?.languages?.map((lang) => {
                    return <span>{lang.name}</span>;
                  })}
                </div>
                <div className="even">
                  {" "}
                  <span>Currencies</span>
                  {countryDetailsObj?.currencies?.map((cur) => {
                    return <span>{cur.name}</span>;
                  })}
                </div>
                <div className="odd">
                  <span>Borders</span>
                  {countryDetailsObj?.borders?.map((border) => {
                    return <span>{border}</span>;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default CountryDetail;
