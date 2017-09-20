import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import products from "../data/products"
let list = [];
for (var i = 0; i < products.length; i++) {
  list.push(products[i])
}
console.log("list",list);
class Products extends Component {
  constructor(props){
    super(props)
    this.state={
      data:list
    }
    this.handleSubmit=this.handleSubmit.bind(this)
    this.handleClick=this.handleClick.bind(this)
  }
  handleClick(e){
    this.setState({
      data: []
    })
    console.log(e.target.value);
    list=[]
    for (var i = 0; i < products.length; i++) {
      if (products[i].weaponType!==e.target.value) {
        list.push(products[i])
      }
    }
    this.setState({
      data: list
    })
    console.log("STATE",this.state.data);
  }

  handleSubmit(e){
    e.preventDefault()
  }
render(){

    return(
      <div>
        <div>
          <form className="select-box" onSubmit={this.handleSubmit}>
            <span ><input type="checkbox" onChange={this.handleClick} name="SMG" value="LMG" />SMG</span>
            <span ><input type="checkbox" onChange={this.handleClick} name="LMG"  value="SMG"  />LMG</span>
          </form>
        </div>
        <div>
          {this.state.data.map((product)=>
            <Link to={`/products/${product.name}`} style={{ textDecoration: 'none' }}>
            <div className="product_list" key={product.title}>
                <h3 >{product.name}</h3>
                <div className="product_detail">
                  <div>
                    <img src={product.img} alt={product.name} key={product.title} height="374" width="895" />
                  </div>
                  <div>
                    <h3>{product.title}</h3>
                    <h3>Price: {product.price}</h3>
                  </div>
                </div>
            </div>
          </Link>
          )}
        </div>
      </div>
    )
  }
}
export default Products;
