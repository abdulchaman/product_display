import React from 'react';

const Product = (props) =>{
    const renderProduct = props.renderData.map((product)=>{
        return <>
        <img src={product.image}></img>
            <h3>{product.name}</h3>
        </>

    })
    // console.log("inside product", props.renderData)
return (
    <>
    
  {renderProduct}
    </>
  
)
}
export default Product;
