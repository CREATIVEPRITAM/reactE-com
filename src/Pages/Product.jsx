import React, { useContext } from "react";
import {ShopContext} from '../Context/ShopContaxt'
import { useParams } from "react-router-dom";
import Breadcrum from "../Componants/Breadcrum/Breadcrum";

const Product = () => {

  const {all_products} = useContext(ShopContext)
  const {productId} = useParams();
  const product = all_products.find(e => e.id === Number(productId))

  return <div>
    <Breadcrum product={product}/>
  </div>;
};
export default Product;
