import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";

const Navbarpanel = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">E-Commerce Product Website</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="flex">
            <Nav className="me-auto">
              <NavLink to="/" style={{"color":"black","margin":"0 10px"}}>
                <li>Home</li>
              </NavLink>
              <NavLink to="/product" style={{"color":"black","margin":"0 10px"}}>
                <li>Product</li>
              </NavLink>
              <NavLink to="/dash" style={{"color":"black","margin":"0 10px"}}>
                <li>Dashboard</li>
              </NavLink>
              <NavLink to="/cart" style={{"color":"black","margin":"0 10px"}}>
                <li>Cart</li>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* <ul>
            <NavLink to='/'><li>Home</li></NavLink>
            <NavLink to='/product'><li>Product</li></NavLink>
            <NavLink to='/dash'><li>Dashboard</li></NavLink>
            <NavLink to='/cart'><li>Cart</li></NavLink>
        </ul> */}
    </>
  );
};

export default Navbarpanel;
