import React, { Component } from 'react';
import '../styles/App.css';

class Contact extends Component {
  constructor(props){
  super(props);
  this.state={
    email: "brandonshanewalden@gmail.com",
    phone: "774-283-1992",
    Location: "Orlando, FL"
  }
}
  render() {
    return(
      <div className="contact">
        <div className="contact_icon">
          <a href="https://www.facebook.com/brandonshanewalden"><img src="https://cdn0.tnwcdn.com/wp-content/themes/cyberdelia/assets/img/icon-facebook.svg" alt="facebook-icon" width="50px" height="50px"/></a>
          <a href="https://www.instagram.com/brandon.walden"><img src="http://www.alohaboardshop.com/wp-content/uploads/2016/01/instagram-logo.jpg" alt="instagram-icon" width="50px" height="50px"/></a>
          <a href="https://github.com/b4nnt3r"><img src="https://desktop.github.com/images/github-desktop-icon.png" alt="github-icon" width="50px" height="50px"/></a>
        </div>
        <div>
          <div className="contact_info">
            <div>{this.state.email}</div>
            <div>{this.state.phone}</div>
            <div>{this.state.Location}</div>
          </div>
        </div>
      </div>
    )
  }
}
export default Contact;
