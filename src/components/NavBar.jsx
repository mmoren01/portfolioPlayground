import React from 'react';
import {
  Container, Col, Navbar, Nav, NavDropdown,
} from 'react-bootstrap';
// import { List } from 'react-bootstrap-icons';

const NavBar = () => (
  <Container fluid>
    <Navbar
      className="nav-bar"
      bg="dark"
      variant="dark"
    >
      <Col>
        <Navbar.Brand href="#home">
          Mauricio Moreno
        </Navbar.Brand>
      </Col>
      <Col />
      <Col>
        <Nav>
          <Nav.Link href="#AboutMe">About Me</Nav.Link>
          <Nav.Link href="#Blog">Blog</Nav.Link>
          <NavDropdown
            title="Projects"
            id="nav-dropdown"
          >
            <NavDropdown.Item eventKey="p1">Best Of PHX</NavDropdown.Item>
            <NavDropdown.Item eventKey="p2">Project Catwalk</NavDropdown.Item>
            <NavDropdown.Item eventKey="p3">Time Keeper</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#ContactMe">Contact</Nav.Link>
        </Nav>
      </Col>
    </Navbar>
  </Container>
);

export default NavBar;
