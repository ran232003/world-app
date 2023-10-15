import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "./components.css";
import { useDispatch } from "react-redux/es";
import { countryAction } from "../../../store/countriesSlice";
import { regions } from "../../../data";
const Inputs = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const handleSearchChange = (e) => {
    setName(e.target.value);
    dispatch(countryAction.filter(e.target.value));
  };
  const handleRegionChange = (e) => {
    dispatch(countryAction.filterByRegion(e.target.value));
    dispatch(countryAction.filter(name));
  };
  return (
    <div className="inputsMain">
      <div className="inputCountry">
        <InputGroup className="mb-3">
          <Form.Control
            onChange={handleSearchChange}
            placeholder="Search For Country"
            aria-label="Search For Country"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Text className="countryBtn" id="basic-addon2">
            Search
          </InputGroup.Text>
        </InputGroup>
      </div>
      <div className="inputRegion">
        <Form.Select
          onChange={handleRegionChange}
          aria-label="Default select example"
        >
          <option>All Regions</option>
          {regions.map((region) => {
            return (
              <option onChange={handleRegionChange} value={region}>
                {region}
              </option>
            );
          })}
        </Form.Select>
      </div>
    </div>
  );
};

export default Inputs;
