import React from "react";
import "../styles/cart.css";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Container, Row, Col } from "reactstrap";

import { motion } from "framer-motion";
import { cartActions } from "../redux/slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const dispatch = useDispatch();

  const increaseQuantity = (item) => {
    dispatch(cartActions.addItem(item));
  };

  const decreaseQuantity = (item) => {
    dispatch(cartActions.deleteItem(item.id));
  };

  const deleteProduct = (item) => {
    dispatch(cartActions.deleteItem(item.id));
  };

  return (
    <Helmet title="cart">
      <CommonSection title="Shopping Cart" />
      <section>
        <Container>
          <Row>
            <Col lg="9">
              {cartItems.length === 0 ? (
                <h2 className="fs-4 text-center">No item added to the cart</h2>
              ) : (
                <table className="table bordered">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, index) => (
                      <Tr
                        item={item}
                        key={index}
                        increaseQuantity={increaseQuantity}
                        decreaseQuantity={decreaseQuantity}
                        deleteProduct={deleteProduct}
                      />
                    ))}
                  </tbody>
                </table>
              )}
            </Col>
            <Col lg="3">
              <div>
                <h6 className="d-flex align-items-center justify-content-between">
                  Subtotal
                  <span className="fs-4 fw-bold">${totalAmount}</span>
                </h6>
              </div>
              <p>taxes and shipping will calculate in checkout</p>
              <div>
                <button className="buy__btn w-100">
                  <Link to="/checkout">Checkout</Link>
                </button>
                <button className="buy__btn w-100 mt-3">
                  <Link to="/shop">Continue Shopping</Link>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const Tr = ({ item, increaseQuantity, decreaseQuantity, deleteProduct }) => {
  return (
    <tr>
      <td>
        <img src={item.imgUrl} alt="" />
      </td>
      <td>{item.productName}</td>
      <td>${item.price}</td>
      <td className="justify-content-evenly ps-4">
        <button
          className="border-0 item"
          onClick={() => decreaseQuantity(item)}
        >
          -
        </button>
        {item.quantity}
        <button
          className="border-0 item"
          onClick={() => increaseQuantity(item)}
        >
          +
        </button>
      </td>
      <td>
        <motion.i
          className="ri-delete-bin-line"
          whileTap={{ scale: 1.2 }}
          onClick={() => deleteProduct(item)}
        ></motion.i>
      </td>
    </tr>
  );
};

export default Cart;
