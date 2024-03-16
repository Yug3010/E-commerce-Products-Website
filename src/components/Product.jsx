import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { useDispatch ,useSelector} from 'react-redux'; // Import useDispatch
import { add } from '../store/cartSlice'; // Import the add action



const Product = () => {
    const [product, setProduct] = useState([]);
    const dispatch = useDispatch(); // Initialize useDispatch hook
    // const {data:product}=useSelector(state=>state.products)

    const fetchData = async () => {
        try {
            const data = await fetch('https://fakestoreapi.com/products');
            const res = await data.json();
            setProduct(res);
        } catch (error) {
            console.error('Error fetching product data:', error);
        }
    };

    useEffect(() => {
        fetchData();
        // dispatch(getproducts());
    }, []);

    const addToCart = (product) => {
        dispatch(add(product)); // Dispatch the add action with the product as payload
    };

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
                    <Button variant="primary" onClick={() => addToCart(e)}>Add to Cart</Button>
                </footer>
            </Card>
        </div>
    ));

    return (
        <>
            <div>
                Welcome to product page
            </div>
            <div className='flex flex-wrap gap-4'>
                {cards}
            </div>
        </>
    );
};

export default Product;
