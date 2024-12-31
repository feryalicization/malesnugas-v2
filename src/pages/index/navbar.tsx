import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavPageProducts } from './nav_products';

export const IndexHtml = () => {
  const [showNavProducts, setShowNavProducts] = useState(false);

  // Function to toggle the visibility of NavPageProducts on hover
  const handleMouseEnter = () => {
    setShowNavProducts(true);
  };

  const handleMouseLeave = () => {
    setShowNavProducts(false);
  };

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Males Nugas</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link 
                href="#home" 
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave}
              >
                Home
              </Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Conditionally render NavPageProducts */}
      {showNavProducts && <NavPageProducts />}
    </div>
  );
};
