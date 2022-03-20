import React from "react";
import { Button, Card } from "react-bootstrap";
import ReactModal from "../ReactModal/ReactModal";
import "./Product.css";

const Product = (props) => {
  const { title, price, category, image, description } = props.product;
  const { cartAddFunc } = props;
  const desc = description.slice(0, 100);

  return (
    <div className="col-lg-4 mb-4 " data-aos="fade-left">
      <Card style={{ width: "18rem" }}>
        {/* <Card.Img variant="top" src={image} /> */}
        <img src={image} alt="" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{desc}</Card.Text>
          <h5>Price:{price}</h5>
          <h5>Catagory:{category}</h5>
          <div className="d-flex justify-content-between">
            <Button variant="primary" onClick={cartAddFunc}>
              Cart
            </Button>
            {/* <Button variant="success" className="mx-2">Detail</Button> */}
            <Button variant="danger">Delete</Button>
            <ReactModal product={props.product}></ReactModal>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
