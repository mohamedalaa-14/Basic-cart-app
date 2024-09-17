import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../rtk/slices/products-slice';
import { addToCart } from '../rtk/slices/Cart-slice';

function Products(){
    const products = useSelector((state)=>state.products);
    console.log(products);
    
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchProducts())
    },[])
    return(
        <>
        <Container className='py-5'>
     
            <div className='row py-5' >
            {products.map((product)=>(
                  <div className='col'  key={product.id}>
                  <Card style={{ width: '18rem' }}>
        <Card.Img  variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
          {product.description}
          </Card.Text>
          <Card.Text>
          {product.price} $
          </Card.Text>
          <Button variant="primary" onClick={()=>dispatch(addToCart(product))}>Add To Cart</Button>
        </Card.Body>
      </Card>
                  </div>
          ))}
          
            </div>
        </Container>
  
        </>
    )
}

export default Products;