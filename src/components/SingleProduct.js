import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CartState } from '../context/Context';
import Rating from './Rating';
const SingleProduct = ({ prod }) => {

  const { state: { cart }, dispatch } = CartState();
  console.log(cart)
  return (
    //   <div>
          <Card className='prod-inner'>
    <Card.Img variant="top" src={prod.image} />
    <Card.Body>
        <Card.Title>{prod.name}</Card.Title>
        <Card.Subtitle><span>
        ₹ {prod.price.split('.')[0]}
          {prod.fastDelivery ?(<div>Fast Delivery</div>):( <div>4 days Delivery</div>)}
        </span></Card.Subtitle>
        <Rating rating={prod.ratings} />
        {cart.some(p => p.Id === prod.Id) ? (<Button
               onClick={() => { dispatch({ type: "REMOVE_FROM_CART", payload: prod }) }}
          variant="danger" size='sm'>Remove from Cart</Button>) : (<Button
          onClick={() => { dispatch({ type: "ADD_TO_CART", payload: prod }) }} variant="primary" size='sm' disabled={!prod.inStock}>{!prod.inStock ? "Out of Stock" : "Add to Cart"}</Button>)}
    
       
    </Card.Body>
        </Card>
//   </div >
  )
}

export default SingleProduct