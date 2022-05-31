import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import { listProducts } from "../actions/productActions";
import Message from "../components/Message";
import Loader from "../components/Loader";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listProducts());
    // const fetchProducts = async () => {
    //   const { data } = await axios.get("/api/products");
    //   setProducts(data);
    // };
    // fetchProducts();
  }, [dispatch]);

  return (
    <>
      <div>
        <h1>Latest Products</h1>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Row>
            {products.map((product) => {
              return (
                <Col key={product._id} sm={12} lg={4} md={6} xl={3}>
                  <Product product={product} />
                  {/* <h3>{product.name}</h3> */}
                </Col>
              );
            })}
          </Row>
        )}
      </div>
    </>
  );
};

export default HomeScreen;
