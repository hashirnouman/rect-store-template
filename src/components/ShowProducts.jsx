import React from "react";

const ShowProducts = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <p>{product.name}</p>
        </div>
      ))}
    </div>
  );
};

export default ShowProducts;
