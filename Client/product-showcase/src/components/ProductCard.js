import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, Button } from '@mui/material';

function ProductCard({ product }) {
  return (
    <Card sx={{ maxWidth: 345, margin: '1rem', flex: '1 1 calc(33.333% - 2rem)' }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Company: {product.company}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Category: {product.category}
        </Typography>
        <Typography variant="h6" component="div">
          ${product.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Rating: {product.rating} / 5
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Discount: {product.discount}%
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Availability: {product.availability}
        </Typography>
        <Button component={Link} to={`/product/${product.id}`} variant="contained" sx={{ marginTop: '1rem' }}>
          View Details
        </Button>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
