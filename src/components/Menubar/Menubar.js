import "./Menubar.css";

import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Menubar = (props) => {
  return (
    <Navbar bg="light" variant="light">
      <Container className="w-75 mx-auto">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="ps-5 me-5">
          <Nav.Link href="#home" className="link  mx-4">
            Home
          </Nav.Link>
          <Nav.Link href="#features" className="link  mx-4">
            Features
          </Nav.Link>
          <Nav.Link href="#cart" className="link  mx-4">
            Cart <sup>{props.count}</sup>
          </Nav.Link>
          <Nav.Link href="#pricing" className="link  mx-4">
            Pricing
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Menubar;
