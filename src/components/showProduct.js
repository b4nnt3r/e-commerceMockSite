import React, {Component} from 'react';
import products from "../data/products"
import Product from "./Product"

class showProduct extends Component {

  render() {
    const product = this.props.match.params.id
    console.log("product", product);
    let displayProduct =products.map((result)=>{
      console.log("result",result.name);
      if (result.name === product ) {
        console.log("SAME");
        return(
           <Product key={result.id} data={result} />
        )
      }
    }
  )
    return (
      <div>
        {displayProduct}
      </div>
    )
  }
}


export default showProduct;
