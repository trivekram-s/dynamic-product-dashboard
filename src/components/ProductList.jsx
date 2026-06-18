import React from "react";
import ProductCard from "./ProductCard";

function ProductList({ products }) {
  const inStockItems = products.filter(({ inStock }) => inStock);

  if (inStockItems.length === 0) {
    return <p>No products in stock.</p>;
  }

  return (
    <main>
      {products.map((itemDetails) => (
        <ProductCard
          key={itemDetails.id}
          product={itemDetails}
        />
      ))}
    </main>
  );
}

export default ProductList;
