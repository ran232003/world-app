import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { BiSolidCity } from "react-icons/bi";
import { FaPeopleGroup } from "react-icons/fa6";
import { Link } from "react-router-dom";
const cardStyle = {
  width: "12rem",
  height: "18rem", // Set a fixed height for all cards
  margin: "10px",
  cursor: "pointer",
};
const imageStyle = {
  width: "100%",
  height: "10rem", // Set a fixed height for all cards
};
const handleNavigation = () => {};
const MyCard = (props) => {
  const { data, population, capital, flag, name, alpha } = props;
  return (
    <div>
      <Card
        as={Link}
        to={`/countryDetail/${alpha}`}
        className="cardBody"
        style={cardStyle}
      >
        <Card.Img style={imageStyle} variant="top" src={flag} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text className="bodyText">
            <div className="info">
              <div className="inInfo">
                <BiSolidCity className="icon" />
                <span className="text">{capital}</span>
              </div>
              <div className="inInfo">
                <FaPeopleGroup className="icon" />
                <span className="text">
                  {population.toLocaleString("en-US")}
                </span>
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MyCard;
