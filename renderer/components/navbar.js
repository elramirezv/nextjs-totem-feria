import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import Navbar from 'react-bootstrap/Navbar';

const navStyle = {
        display: "center",
        textAlign: "center",
        minHeight: "120px",
        marginTop: "40px",
        backgroundColor: "black",
        marginBottom: "80px"
    }

class NavbarComponent extends Component {

  render() {
    return (
      <Navbar style={navStyle}>
      <h1 style={{"color":"white", "margin-left":"30px","font-size":"40px" ,"text-transform":"uppercase"}}>{this.props.title}</h1>
      </Navbar>
    );
  }
}

export default NavbarComponent;
