import React from "react";
import styles from "./ProductCard.module.css";
import { Card, CardContent, Button } from "@mui/material";

function ProductCard({ product }) {
  const { name, price, inStock } = product;

  return (
    <Card className={inStock ? styles.inStock : styles.outOfStock}>
      <CardContent>
        <h2>{name}</h2>
        <p>Price: ₹{price}</p>
        <p>{inStock ? "In Stock" : "Out of Stock"}</p>
        <Button variant="contained" disabled={!inStock}>
          Buy Now
        </Button>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
