import React from "react";
import { Navbar } from 'react-bootstrap';

const NavBar = props => (
  <Navbar expand="lg" bg="primary">
      <Navbar.Brand href="#home" style={{color: 'white', fontSize: '24px', fontWeight: 'bold'}}>{props.brand}</Navbar.Brand>
  </Navbar>
);

export default NavBar;