import React, { useContext } from "react";
import {ShopContext} from '../Context/ShopContaxt'
import { useParams } from "react-router-dom";
import Breadcrum from "../Componants/Breadcrum/Breadcrum";
import ProductDisplay from "../Componants/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Componants/DescriptionBox/DescriptionBox";
import RelatedProducts from "../Componants/RelatedProducts/RelatedProducts";

const Product = () => {

  const {all_products} = useContext(ShopContext)
  const {productId} = useParams();
  const product = all_products.find(e => e.id === Number(productId))

  return <div>
    <Breadcrum product={product}/>
    <ProductDisplay product={product} />
    <DescriptionBox />
    <RelatedProducts />
  </div>;
};
export default Product;
