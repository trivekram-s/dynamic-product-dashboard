import ProductCard from "./ProductCard";

function ProductList({ products }) {
  const stockedItems = products.filter(({ inStock }) => inStock);

  if (!stockedItems.length) {
    return <p>No products in stock.</p>;
  }

  return (
    <main>
      {products.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </main>
  );
}

export default ProductList;
