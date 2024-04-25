import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCard } from "../context/ShoppingCardContext";
export default function Navbar() {
  const { cartQuantity, openCart } = useShoppingCard();
  return (
    <NavbarBs
      sticky="top"
      className="navbar navbar-expand-lg navbar-light bg-light shadow-sm"
    >
      <Container className="container-fluid">
        <Nav className="me-auto">
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
        {cartQuantity > 0 && (
          <Button
            onClick={openCart}
            style={{
              width: "3.75rem",
              height: "3.75rem",
              position: "relative",
            }}
            variant="outline-primary"
            className="rounded-circle"
          >
            <svg
              version="1.0"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              width="36px"
              height="36px"
              viewBox="0 0 64 64"
              enableBackground="new 0 0 64 64"
            >
              <g>
                <g>
                  <circle fill="#B4CCB9" cx="46" cy="58" r="4" />
                  <circle fill="#B4CCB9" cx="20.09" cy="58" r="4" />
                  <path
                    fill="#B4CCB9"
                    d="M10,3C9.837,2.455,9.386,2,8.833,2H3C2.447,2,2,2.447,2,3s0.447,1,1,1c0,0,3.833,0,4.529,0
			S8.38,4.611,8.38,4.611l2.814,11.965C11.762,16.209,12.526,16,13.518,16h-0.459L10,3z"
                  />
                </g>
                <path
                  fill="#F76D57"
                  d="M61.974,20l-6,26c-0.271,1.166-1.021,2-2.125,2H20.131c-1.102,0-1.85-0.834-2.12-2l-5.988-26
		c-0.312-1.23,0.125-2,1.479-2h46.989C61.849,18,62.286,18.77,61.974,20z"
                />
                <circle fill="#394240" cx="46" cy="58" r="1" />
                <circle fill="#394240" cx="20.09" cy="58" r="1" />
                <g>
                  <path
                    fill="#394240"
                    d="M60.476,16H15.059L12,3c-0.438-1.75-1.614-3-3.271-3H3C1.343,0,0,1.342,0,3c0,1.656,1.343,3,3,3h3.723
			l3.371,14l7.698,32.457C15.619,53.359,14.09,55.5,14.09,58c0,3.312,2.687,6,6,6c2.972,0,5.433-2.162,5.91-5h14.09
			c0.478,2.838,2.938,5,5.91,5c3.313,0,6-2.688,6-6c0-3.314-2.687-6-6-6c-2.972,0-5.433,2.164-5.91,5H26
			c-0.478-2.836-2.938-5-5.91-5c-0.125,0-0.246,0.012-0.369,0.018l-0.642-2.258c0.428,0.145,0.893,0.24,1.426,0.24h32.969
			c2.625,0,3.908-1.904,4.5-4l5.933-26C64.344,17.582,63.265,16,60.476,16z M46,54c2.209,0,4,1.791,4,4s-1.791,4-4,4s-4-1.791-4-4
			S43.791,54,46,54z M8.38,4.611C8.38,4.611,8.226,4,7.529,4S3,4,3,4C2.447,4,2,3.553,2,3s0.447-1,1-1h5.833
			C9.386,2,9.837,2.455,10,3l3.059,13h0.459c-0.991,0-1.756,0.209-2.323,0.576L8.38,4.611z M20.09,54c2.209,0,4,1.791,4,4
			s-1.791,4-4,4s-4-1.791-4-4S17.881,54,20.09,54z M61.974,20l-6,26c-0.271,1.166-1.021,2-2.125,2H20.131
			c-1.102,0-1.85-0.834-2.12-2l-5.988-26c-0.312-1.23,0.125-2,1.479-2h46.989C61.849,18,62.286,18.77,61.974,20z"
                  />
                  <path
                    fill="#394240"
                    d="M37,22c-1.657,0-3,1.342-3,3v16c0,1.656,1.343,3,3,3s3-1.344,3-3V25C40,23.342,38.657,22,37,22z M38,41
			c0,0.553-0.447,1-1,1s-1-0.447-1-1V25c0-0.553,0.447-1,1-1s1,0.447,1,1V41z"
                  />
                  <path
                    fill="#394240"
                    d="M47,22c-1.657,0-3,1.342-3,3v16c0,1.656,1.343,3,3,3s3-1.344,3-3V25C50,23.342,48.657,22,47,22z M48,41
			c0,0.553-0.447,1-1,1s-1-0.447-1-1V25c0-0.553,0.447-1,1-1s1,0.447,1,1V41z"
                  />
                  <path
                    fill="#394240"
                    d="M27,22c-1.657,0-3,1.342-3,3v16c0,1.656,1.343,3,3,3s3-1.344,3-3V25C30,23.342,28.657,22,27,22z M28,41
			c0,0.553-0.447,1-1,1s-1-0.447-1-1V25c0-0.553,0.447-1,1-1s1,0.447,1,1V41z"
                  />
                </g>
                <g opacity="0.2">
                  <path
                    fill="#231F20"
                    d="M47,24c-0.553,0-1,0.447-1,1v16c0,0.553,0.447,1,1,1s1-0.447,1-1V25C48,24.447,47.553,24,47,24z"
                  />
                  <path
                    fill="#231F20"
                    d="M37,24c-0.553,0-1,0.447-1,1v16c0,0.553,0.447,1,1,1s1-0.447,1-1V25C38,24.447,37.553,24,37,24z"
                  />
                  <path
                    fill="#231F20"
                    d="M27,24c-0.553,0-1,0.447-1,1v16c0,0.553,0.447,1,1,1s1-0.447,1-1V25C28,24.447,27.553,24,27,24z"
                  />
                </g>
              </g>
            </svg>
            <div
              className="rounded-circle bg-danger d-flex justify-content-center lign-items-center"
              style={{
                color: "white",
                width: "1.5rem",
                height: "1.5rem",
                position: "absolute",
                bottom: "0",
                right: "0",
              }}
            >
              {cartQuantity}
            </div>
          </Button>
        )}
      </Container>
    </NavbarBs>
  );
}
