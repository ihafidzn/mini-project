import React, { useState, useEffect } from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";

import "../styles/shop.css";

import ProductList from "../components/UI/ProductList";
import axios from "axios";

const Shop = () => {
  const [initialProductsData, setInitialProductsData] = useState([]);
  const [productsData, setProductData] = useState([]);
  const [filterValue, setFilterValue] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Ambil data produk dari API
    axios
      .get("https://651d087544e393af2d590a01.mockapi.io/product/product")
      .then((response) => {
        const data = response.data;
        setProductData(data);
        setInitialProductsData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleFilter = (e) => {
    const selectedCategory = e.target.value;
    setFilterValue(selectedCategory);

    // Filter produk berdasarkan kategori yang dipilih
    const filteredProducts =
      selectedCategory === "all"
        ? initialProductsData
        : initialProductsData.filter(
            (item) => item.category === selectedCategory
          );

    setProductData(filteredProducts);
  };

  const handleSearch = () => {
    // Filter produk dari hasil API berdasarkan kata kunci pencarian
    const searchedProducts = initialProductsData.filter(
      (item) =>
        item.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setProductData(searchedProducts);
  };

  return (
    <Helmet title="shop">
      <CommonSection title="Products" />

      <section>
        <Container>
          <Row>
            <Col lg="3" md="6">
              <div className="filter__widget">
                <select
                  name=""
                  id=""
                  onChange={handleFilter}
                  value={filterValue}
                >
                  <option value="all">All</option>
                  <option value="keyboard">Keyboard</option>
                  <option value="switch">Switch</option>
                  <option value="keycaps">Keycaps</option>
                  <option value="wristrest">Wristrest</option>
                </select>
              </div>
            </Col>
            <Col lg="3" md="6" className="text-end">
              <div className="filter__widget">
                <select name="" id="">
                  <option>Sort By</option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </Col>
            <Col lg="6" md="12">
              <div className="search__box">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      handleSearch();
                    }
                  }}
                />
                <span onClick={handleSearch}>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            {productsData.length === 0 ? (
              <h1 className="text-center">No Product are found</h1>
            ) : (
              <ProductList data={productsData} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;
