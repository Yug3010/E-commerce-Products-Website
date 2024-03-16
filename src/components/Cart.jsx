import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { remove } from '../store/cartSlice';

const Cart = () => {
    const product = useSelector(state => state.cart);

    let dispatch=useDispatch();

    const removecart=(id)=>{
        dispatch(remove(id));
    }
    const cards = product.map((e) => (
        <div key={e.id}>
            <Card className='flex justify-center' style={{ "width": "25rem", "height": "20rem" }}>
                <Card.Img variant="top" src={e.image} style={{ "width": "5rem" }} className='block m-auto' />
                <Card.Body className='flex flex-col items-center justify-center p-0 h-6'>
                    <Card.Title className='text-xs'>{e.title}</Card.Title>
                    <Card.Text className='text-xs'>
                        INR: {e.price}
                    </Card.Text>
                </Card.Body>
                <footer className='bg-gray-300 w-full h-20 flex flex-col items-center justify-center'>
                    <Button variant="danger" onClick={() => removecart(e.id)}>Remove</Button>
                </footer>
            </Card>
        </div>
    ));

    return (
        <div>
            <nav>My bag : {product.length}</nav>
            <h2>Cart</h2>
            {cards}
            
        </div>
    );
};

export default Cart;
