import './AllProducts.css'
import React, { useEffect, useState } from 'react';
import Product from '../Procuct/Product';

const AllProducts = (props) => {
    const {cartAddFunc} = props
    const [products , setProducts] = useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>setProducts(data))
    },[])
    // console.log(products);
    return (
        <div>
            <h2 className='mt-2'>All Products List Here!!</h2>
            <div className='w-75 mx-auto row'>
                {
                    products.map(product => <Product cartAddFunc={cartAddFunc} product={product} key={product.id}></Product>)
                }
            </div>
        </div>
    );
};

export default AllProducts;