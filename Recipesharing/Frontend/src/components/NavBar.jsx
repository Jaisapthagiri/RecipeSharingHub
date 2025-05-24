import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={ {width:"100%",position:"fixed",overflow:"hidden",zIndex:"1000"}}>
      <Container fluid>
        <Navbar.Brand as={Link} to={"/"}>Recipe Sharing</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to={"/login"}>Login</Nav.Link>
            <Nav.Link as={Link} to={"/signup"}>Sign</Nav.Link>
            <Nav.Link as={Link} to={"/recipesHeader"}>Recipes</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;