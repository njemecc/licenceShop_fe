//styles
import styles from "./CartItem.module.css";

//redux
import { useDispatch } from "react-redux";
import { cartActions } from "@/store/slices/cart-slice";
const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const handleDeleteClick = () => {
    dispatch(cartActions.removeFromCart(item.name));
  };

  return (
    <li className={styles["cart-item"]}>
      <img src={item.img} alt={item.name} />
      <div>
        <h3>{item.name}</h3>
        <p>Price: ${item.price.toFixed(2)}</p>
        <button onClick={handleDeleteClick} className={styles["delete-button"]}>
          Remove
        </button>
      </div>
    </li>
  );
};

export default CartItem;
