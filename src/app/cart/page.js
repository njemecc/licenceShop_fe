"use client";
//components
import CartItem from "@/components/Cart/CartItem";

//styles
import styles from "./cartPage.module.css";

//hooks
import { useDispatch, useSelector } from "react-redux";
const page = () => {
  const cartItems = useSelector((state) => state.cart.myCartItems);
  console.log(cartItems);

  // Calculate the total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className={styles["cart"]}>
      <h2>My Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>
      <p>Total: ${totalPrice.toFixed(2)}</p>
    </div>
  );
};

export default page;
