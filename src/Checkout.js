import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import FlipMove from "react-flip-move";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  const customLeaveAnimation = {
    from: { transform: "scale(1, 1)" },
    to: { transform: "scale(0.5, 1) translateY(-20px)" }
  };
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div>
          <h3>Hello, {user ? user.email : "Guest"}</h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          <FlipMove
            staggerDelayBy={150}
            enterAnimation="accordionHorizontal"
            leaveAnimation="accordionVertical"
          >
            <div key={Date.now()}>
              {basket.map(item => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </div>
          </FlipMove>
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
