import React from "react";
import products from "../constant/data";
import ProductCard from "./ProductCard";
const Products = () => {
  return (
    <div className=" flex items-center gap-7 justify-center flex-wrap p-9 ">
      {products?.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Products;
