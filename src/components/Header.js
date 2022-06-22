import React from "react"
import Link, { Route } from 'react-router-dom'
import Home from "./Home";
import { CartState } from "../context/Context";
import { AiFillDelete } from 'react-icons/ai'
import '../components/css/style.css'
import { FaShoppingCart } from "react-icons/fa";
import {
  Badge,
  Button,
  Container,
  Dropdown,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
function Header() {
  let navigate = useNavigate();
  // const { state: { cart }, dispatch } = CartState();

    const {
      state: { cart },
      dispatch,
      productDispatch,
    } = CartState();
  
  console.log(cart)
  const GotoCart = () => {
    navigate("/cart", { replace: true });
  }
  const GoBack = () =>{
    navigate("/")
  }
  return (
    // <div>
      <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand onClick={GoBack}>
         Shopping Cart</Navbar.Brand>

        <Navbar.Text className="search">
        <FormControl
              style={{ width: 500 }}
              type="search"
              placeholder="Search a product..."
              className="m-auto"
              aria-label="Search"
              onChange={(e) => {
                productDispatch({
                  type: "FILTER_BY_SEARCH",
                  payload: e.target.value,
                });
              }}
            />
</Navbar.Text>
        <Nav>
          <Dropdown alignRight>
            <Dropdown.Toggle variant="success">
              <FaShoppingCart color="white" fontSize="25px" />
              <Badge>{cart.length}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ minWidth: 370 }}>
              {cart.length > 0 ? (
                <>
                  {cart.map((prod) => (
                    <span className="cartitem" key={prod.Id}>
                      <img
                        src={prod.image}
                        className="cartItemImg"
                        alt={prod.name}
                      />
                      <div className="cartItemDetail">
                        <span>{prod.name}</span>
                        <span>₹ {prod.price.split(".")[0]}</span>
                      </div>
                      <AiFillDelete
                        fontSize="20px"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: prod,
                          })
                        }
                      />
                    </span>
                  ))}
                  {/* <Link to="/cart"> */}
                  <Button onClick={GotoCart}style={{ width: "95%", margin: "0 10px" }} >
                      Go To Cart
                    </Button>
                  {/* </Link> */}
                </>
              ) : (
                <span style={{ padding: 10 }}>Cart is Empty!</span>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header;