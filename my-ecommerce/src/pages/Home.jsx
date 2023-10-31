import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";

import Helmet from "../components/Helmet/Helmet";
import "../styles/home.css";

import { Container, Row, Col } from "reactstrap";
import Background from "../assets/images/header-bg.jpg";
import Background2 from "../assets/images/header-bg2.jpg";
import Background3 from "../assets/images/header-bg3.jpg";

import Services from "../services/Services";
import ProductList from "../components/UI/ProductList";

import Clock from "../components/UI/Clock";

import counterImg from "../assets/images/counter-timer.png";

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [newProducts, setNewProducts] = useState([]);
  const [popularCategoryProducts, setPopularCategoryProducts] = useState([]);

  const year = new Date().getFullYear();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const trendingResponse = await axios.get(
          "https://651d087544e393af2d590a01.mockapi.io/product/product?category=keyboard"
        );
        setTrendingProducts(trendingResponse.data);

        const bestSalesResponse = await axios.get(
          "https://651d087544e393af2d590a01.mockapi.io/product/product?category=switch"
        );
        setBestSalesProducts(bestSalesResponse.data);

        const newProductsResponse = await axios.get(
          "https://651d087544e393af2d590a01.mockapi.io/product/product?category=keycaps"
        );
        setNewProducts(newProductsResponse.data);

        const popularCategoryResponse = await axios.get(
          "https://651d087544e393af2d590a01.mockapi.io/product/product?category=wristrest"
        );
        setPopularCategoryProducts(popularCategoryResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Helmet title={"Home"}>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={Background}
              className="d-block w-100 img-fluid"
              alt="..."
              style={{
                height: "90vh",
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
              }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h1>
                Custom Your <span>Keyboard</span>
              </h1>
              <p>Lets Build Dream Keyboard as you like</p>
              <Link to="/shop" className="cta">
                Custom Now
              </Link>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={Background2}
              className="d-block w-100 img-fluid"
              alt="..."
              style={{ height: "90vh" }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h1>
                Buy Your<span> Keycaps</span>
              </h1>
              <p>Lets Build Dream Keyboard as you like</p>
              <Link to="/shop" className="cta">
                Custom Now
              </Link>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={Background3}
              className="d-block w-100 img-fluid"
              alt="..."
              style={{ height: "90vh" }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h1>
                Buy Your<span> Switch</span>
              </h1>
              <p>Lets Build Dream Keyboard as you like</p>
              <Link to="/shop" className="cta">
                Custom Now
              </Link>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <Services />
      <section className="trending__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title ">Trending Product</h2>
            </Col>
            <ProductList data={trendingProducts} />
          </Row>
        </Container>
      </section>

      <section className="best__sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title mt-3">Best Sales</h2>
            </Col>
            <ProductList data={bestSalesProducts} />
          </Row>
        </Container>
      </section>

      <section className="timer__count">
        <Container>
          <Row>
            <Col lg="6" md="12" className="count__down-col">
              <div className="clock__top-content">
                <h4 className="text-white fs-6 mb-2">Limited Offers</h4>
                <h3 className="text-white fs-5 mb-3">Keyboard 60%</h3>
              </div>
              <Clock />
              <motion.button
                whileTap={{ scale: 1.3 }}
                className="buy__btn store__btn"
              >
                <Link to="/shop/4" className="btn bg-danger">
                  Visit Product
                </Link>
              </motion.button>
            </Col>

            <Col lg="6" md="12" className="text-end counter__img">
              <img src={counterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="new__arrivals">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section__title mt-3">New Product</h2>
            </Col>

            <ProductList data={newProducts} />
          </Row>
        </Container>
      </section>

      <section className="popular__category">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section__title">Popular in Category</h2>
            </Col>

            <ProductList data={popularCategoryProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
