import { Button, Container } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from "react-redux";
import { clear, deleteFromCart } from "../rtk/slices/Cart-slice";

function Cart(){
    const cart = useSelector(state => state.cart);
   
    const dispatch = useDispatch();
    
    const totalPrice = cart.reduce((acc,product)=>{
        acc += product.price * product.quantity;
        return acc;
    },0)
    return(
     <Container>
     <h1 className="py-5">Welcome to cart</h1>
     <Button variant="primary" onClick={()=>dispatch(clear())}>Clear Cart</Button>
     <h5>Total price: {totalPrice.toFixed(2)} $</h5>
     <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Img</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((product)=>(
   <tr key={product.id}>
   <td>{product.id}</td>
   <td>{product.title}</td>
   <td><Image src={product.image} alt={product.title} style={{width:"100px",height:"100px"}}/> </td>
   <td>{product.price} $</td>
   <td>{product.quantity} </td>
   <td><Button variant="danger" onClick={()=> dispatch(deleteFromCart(product))}>Delete</Button></td>
 </tr>
        ))}
     
      
      </tbody>
    </Table>
     </Container>
    )
}

export default Cart;