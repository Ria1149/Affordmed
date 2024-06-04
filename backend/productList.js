import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = ({ match }) => {
    const categoryName = match.body.categoryname;
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [n, setN] = useState(10);
    const [sortBy, setSortBy] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        fetchProducts();
    }, [page, n, sortBy, sortOrder]);

    const fetchProducts = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/categories/${categoryName}/products`, {
                body: { n, page, sortBy, sortOrder }
            });
            setProducts(response.data.products);
            setTotalPages(response.data.totalPages);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    return (
        <div>
            <h1>{categoryName} Products</h1>
            <div>
                <label>
                    Items per page:
                    <input type="number" value={n} onChange={e => setN(e.target.value)} />
                </label>
                <label>
                    Sort by:
                    <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
                        <option value="">None</option>
                        <option value="rating">Rating</option>
                        <option value="price">Price</option>
                        <option value="company">Company</option>
                        <option value="discount">Discount</option>
                    </select>
                </label>
                <label>
                    Order:
                    <select value={sortOrder} onChange={e => setSortOrder(e.target.value)}>
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                    </select>
                </label>
            </div>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <Link to={`/categories/${categoryName}/products/${product.id}`}>{product.name}</Link>
                    </li>
                ))}
            </ul>
            <div>
                <button onClick={() => setPage(page - 1)} disabled={page === 1}>Previous</button>
                <button onClick={() => setPage(page + 1)} disabled={page === totalPages}>Next</button>
            </div>
        </div>
    );
};

export default ProductList;