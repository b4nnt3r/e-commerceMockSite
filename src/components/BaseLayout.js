
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import '../styles/App.css';

class BaseLayout extends Component {
  render(){
    console.log("COUNT",this.props.count);
    return(
    <div>
      <div>
        <div className="baselayout">
          <div className="nav-bar">
            <NavLink exact to="/"><img id="logo" src="" alt="logo" height="100" width="100"/></NavLink>
            <nav>
              <NavLink exact to="/home" activeStyle={{"opacity": 1}}>Home</NavLink>
              <NavLink to="/products" activeStyle={{"opacity": 1}}>Store</NavLink>
              <NavLink exact to="/"  activeStyle={{"opacity": 1}}>About</NavLink>
              <NavLink to="/contact" activeStyle={{"opacity": 1}}>Contact</NavLink>
            </nav>
            <div id="shopping_cart">
              {this.props.count}
              <img src="http://www.icon100.com/up/4012/128/43-Shopping-cart-circle.png" alt="shopping_cart" height="50" width="50" />
            </div>
          </div>
          <div className="header">
            <div className="title">
              <img id="" src="" alt="" height="140" width="450"/>
              <div className="store_name">
                <h1 id="brand">What to do what to do</h1>
                <h4>Buy a 4 leaf clover</h4>
              </div>
            </div>
          </div>
        </div>
        <div style={{"background-color":"#bc7878"}}>
          {this.props.children}
        </div>
      </div>
      <div className="footer">
        <footer></footer>
      </div>
    </div>
    )
  }
}

export default (BaseLayout);
