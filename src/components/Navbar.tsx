import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <NavbarBs className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <Container className="container-fluid">
        <Nav>
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/help" as={NavLink} className="disabled">
            Help
          </Nav.Link>
        </Nav>
      </Container>
    </NavbarBs>
  );
}
