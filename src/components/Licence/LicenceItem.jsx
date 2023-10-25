"use client";

//components
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

//redux
import { useDispatch } from "react-redux";
import { cartActions } from "@/store/slices/cart-slice";

function Licenceitem({ name, price, img, category,id}) {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(cartActions.addToCart({ name, price, img, category ,id}))
  };

  return (
    <Card style={{ width: "18rem", alignItems: "center" }}>
      <Card.Img style={{ width: "60%" }} variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>${price}</Card.Text>
        <Card.Text>{category}</Card.Text>
        <Button onClick={addToCartHandler} variant="primary">
          Add to cart
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Licenceitem;
