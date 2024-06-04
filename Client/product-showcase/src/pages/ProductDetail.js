import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box } from '@mui/material';
import products from '../data/products';

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <Container sx={{ marginTop: '2rem' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h3" component="div" gutterBottom>
          {product.name}
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          {product.description}
        </Typography>
        <Typography variant="h4" component="div" gutterBottom>
          ${product.price}
        </Typography>
      </Box>
    </Container>
  );
}

export default ProductDetail;
