import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductDetail = ({ match }) => {
    const { categoryname, productid } = match.body;
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetchProduct();
    }, []);

    const fetchProduct = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/categories/${categoryname}/products/${productid}`);
            setProduct(response.data);
        } catch (error) {
            console.error('Error fetching product:', error);
        }
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{product.name}</h1>
            <p>Rating: {product.rating}</p>
            <p>Price: ${product.price}</p>
            <p>Company: {product.company}</p>
            <p>Discount: {product.discount}%</p>
        </div>
    );
};

export default ProductDetail;
