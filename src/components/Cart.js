import React, { useState,useEffect } from 'react'
// import { ListGroup, ListGroupItem } from 'react-bootstrap/ListGroup';
import { CartState } from '../context/Context'
import Rating from './Rating';
import { MdDelete } from 'react-icons/md'
import { Button, Col, Form, Image, ListGroup, Row,ListGroupItem } from "react-bootstrap";
// import ListGroup from 'react-bootstrap/ListGroup';
const Cart = () => {

  const { state: { cart }, dispatch } = CartState();
  const [total, setTotal] = useState();
  
  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);
    
  console.log(cart)
  return (
    <div className='home'>
      <div className='productContainer'>
        <ListGroup>
          {cart.map((prod) => (
            <ListGroupItem>
              <Row>
              <Col md={2}>
                  <Image src={prod.image} alt={prod.name} fluid rounded />
                </Col>
                <Col md={2}>{prod.name}</Col>
                <Col md={2}>{prod.price}</Col>
                <Col md={2}>
                  <Rating rating={prod.ratings} />
                </Col>
                <Col md={2}>
                <Form.Control
                    as="select"
                    value={prod.qty}
                    onChange={(e) =>
                      dispatch({
                        type: "CHANGE_CART_QTY",
                        payload: {
                          Id: prod.Id,
                          qty: e.target.value,
                        },
                      })
                    }
                  >
                    {[...Array(prod.inStock).keys()].map((x) => (
                      <option key={x + 1}>{x + 1}</option>
                    
                    )) }
                  </Form.Control>
                </Col>
                <Col md={2}>
                  <Button
                    type="button"
                    variant="light"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: prod,
                      })
                    }
                  >
                    <MdDelete fontSize="20px" />
                  </Button>
                </Col>
              </Row>
            </ListGroupItem>))}
</ListGroup>
      </div>
      <div className='filters summary'>
        <span className='title'>Subtotal of {cart.length} Items</span>
        <span fontSize="20px">Total : ₹ {total}</span>
      </div>
    </div>
  )
}

export default Cart