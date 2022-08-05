import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";


const NavBar = () => {
    return (
      <Navbar variant="dark" id="mainNav">
        <Container>
          <Navbar.Brand href="/">MoviesDB</Navbar.Brand>
          <Nav  className="me-auto">
            <Nav.Link href="/Listado">Listado</Nav.Link>
            <Nav.Link href="/formulario">Agregar Película/Serie</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
  };
  
  export default NavBar;
