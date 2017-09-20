import React from 'react'

const Product = (props) => {
  let product = props.data
  return (
    <div className="item_display">
      <div >
        <img src={product.img} alt={product.title} width="150"/>
        <h3 className="post-name">{product.name}</h3>
        <h5 className="post-title">{product.title}</h5>
        <h6 className="post-post">{product.blog}</h6>
        <div>Description:</div>
        <div>{product.description}</div>
        <div style={{"margin-top":"10px"}}>Price: {product.price}</div>
        <div>

        </div>
      </div>
      <div style={{"text-align":"center", "padding-top":"20px"}}>
        <a href="/products" >Back to Store</a>
      </div>
    </div>
  )
}

export default Product
