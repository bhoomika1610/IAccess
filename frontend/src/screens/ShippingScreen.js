import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col, FormGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import { register } from "../actions/userActions";
import { saveShippingAddress } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";

const ShippingScreen = () => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    navigate("/payment");
  };

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 />
      <h1>Shipping</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="address">
          <Form.Label>address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter address"
            value={address}
            required
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="city">
          <Form.Label>city</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter city"
            value={city}
            required
            onChange={(e) => {
              setCity(e.target.value);
            }}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="postal code">
          <Form.Label>postal code</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter postal code"
            value={postalCode}
            required
            onChange={(e) => {
              setPostalCode(e.target.value);
            }}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="country">
          <Form.Label>country</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter country"
            value={country}
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          ></Form.Control>
        </Form.Group>
        <Button type="submit" variant="primary">
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ShippingScreen;
