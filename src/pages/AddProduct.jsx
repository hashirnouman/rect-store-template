import React, { useState, useEffect } from "react";
import style from "./css/AddProduct.module.css";
import ShowProducts from "../components/ShowProducts";
const AddProduct = () => {
  const [products, setProduct] = useState(null);
  //   const [quantity, setQuantity] = useState(0);
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     const productDetail = { product };
  //     console.log(productDetail);
  //   };
  useEffect(() => {
    fetch(" http://localhost:8000/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProduct(data);
      });
  }, []);
  return (
    <>
      {/* <form onSubmit={handleSubmit}>
        <div className={style["input-div"]}>
          <label htmlFor="product-name">Product Name</label>
          <input
            type="text"
            required
            value={product}
            onChange={(e) => setProduct(e.target.value)}
          />
          <label htmlFor="quantity">Enter quantity</label>
          <input
            type="number"
            min="0"
            required
            // value={quantity}
            // onChange={(e) => setQuantity(e.target.value)}
          />
          <button>Add product</button>
        </div>
      </form> */}
      {products && <ShowProducts products={products} />}
    </>
  );
};

export default AddProduct;
