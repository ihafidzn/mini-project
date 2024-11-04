import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../../styles/product-card.css";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: product.id,
        productName: product.productName,
        price: product.price,
        imgUrl: product.imgUrl,
        category: product.category,
      })
    );

    toast.success("Product added successfully");
  };

  return (
    <>
      <Col lg="3" md="4" className="mb-2">
        <Link to={`/shop/${product.id}`}>
          <div className="product__item">
            <div className="product__img">
              <motion.img
                whileHover={{ scale: 0.9 }}
                src={product.imgUrl}
                alt=""
              />
            </div>
            <div className="p-2 product__info">
              <h4 className="product__name text-dark">{product.productName}</h4>
              <span className="text-dark">{product.category}</span>
            </div>
            <div className="product__card-bottom d-flex align-items-center justify-content-between p-2">
              <span className="price">${product.price}</span>
              <motion.span whileTap={{ scale: 1.2 }} onClick={addToCart}>
                <i className="ri-add-line"></i>
              </motion.span>
            </div>
          </div>
        </Link>
      </Col>
    </>
  );
};

export default ProductCard;
