import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();
  return (
    <>
      <h1>Product Details: {useParams.productID}</h1>
    </>
  );
};
export default ProductDetails;
