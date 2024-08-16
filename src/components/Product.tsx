import React from 'react'
import { useProduct } from '../hooks/useProduct';
import { useParams } from 'react-router-dom';

export const Product = () => {
  const { productId } = useParams();
  const { product } = useProduct({ productId })
  return (
    <div>
      product name: {product?.name}
    </div>
  )
}