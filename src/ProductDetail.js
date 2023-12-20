import React, { Component } from 'react'
//import { productData } from './Main.js';
function ProductDetail({match,ProductDetail}) {
    const productId = match.params.id;
    const product = productData.find((item)=> item.id === productId);
   if(!product){
    return <div>Ürün bulunamadı</div>;
   }

    return (
        <div>
        <img src={product.img} alt={product.title} />
        <h2>{product.title}</h2>
        <p>Fiyat: {product.price}</p>
      </div>
  
    );
 
}
export default ProductDetail;