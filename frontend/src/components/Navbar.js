
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Navbar.css';

function NavigationBar() {
  return (
    <Navbar expand="lg" sticky="top" className="custom-navbar">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand className="navbar-brand">Perfume Shop</Navbar.Brand>
        </LinkContainer>
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-links"> {/* Ensure items align to the right */}
            <LinkContainer to="/">
              <Nav.Link className="nav-link">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link className="nav-link">About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link className="nav-link">Contact</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



export default NavigationBar;






