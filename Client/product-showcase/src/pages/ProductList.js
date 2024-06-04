import React, { useState } from 'react';
import { Container, Grid, FormControl, InputLabel, Select, MenuItem, Box } from '@mui/material';
import ProductCard from '../components/ProductCard';
import products from '../data/products';
import ReactPaginate from 'react-paginate';

function ProductList() {
  const [sortField, setSortField] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;

  const handleSortChange = (event) => {
    setSortField(event.target.value);
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (sortField === 'price') {
      return a.price - b.price;
    } else if (sortField === 'rating') {
      return b.rating - a.rating;
    } else if (sortField === 'discount') {
      return b.discount - a.discount;
    }
    return 0;
  });

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentProducts = sortedProducts.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(sortedProducts.length / itemsPerPage);

  return (
    <Container sx={{ marginTop: '2rem' }}>
      <Box sx={{ marginBottom: '1rem' }}>
        <FormControl variant="outlined" sx={{ minWidth: 200 }}>
          <InputLabel>Sort By</InputLabel>
          <Select value={sortField} onChange={handleSortChange} label="Sort By">
            <MenuItem value="price">Price</MenuItem>
            <MenuItem value="rating">Rating</MenuItem>
            <MenuItem value="discount">Discount</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Grid container spacing={3}>
        {currentProducts.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
      <Box sx={{ marginTop: '2rem', display: 'flex', justifyContent: 'center' }}>
        <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />
      </Box>
    </Container>
  );
}

export default ProductList;
