import React, { Component } from 'react';

class Features extends Component {
  render(){
    return(
      <div className="feature_item">
        <div className="item_box_l" >
          <h2>{this.props.product.name}</h2>
          <img className="feature_img" src={this.props.product.img} alt={this.props.product.name} height="400" width="400" />
        </div>
        <div className="item_box_r">
          <p>{this.props.product.description}</p>
          <p>Price: {this.props.product.price}</p>
        </div>
      </div>
    )
  }

}
export default Features;
