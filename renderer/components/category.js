import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Link from 'next/link'
import { resolve } from '../helpers';

const cardButton = {
  margin: "none",
  padding: "none",
  border: "none",
  background: "none"
}
const cardBody = {
  display: "center",
  width: "13rem",
  height: "13rem"
}
const cardStyle = {
  width: "13rem",
  height: "13rem",
  borderRadius: "50%",
  borderColor: "black"
}

const cardText = {
  fontsSize:"60px",
  display: "center",
  paddingTop: "25%",
  color: "black"

}
const cardSubText = {
  maxWidth: "12rem",
  paddingTop: "5%",
  paddingLeft: "10%",
  color: "black",
  display: "center"
}

class CategoryComponent extends Component {

  render() {
    return (
      <div>
      <Link href={resolve(`companies?name=${this.props.category.name}`)}>
      <button style={cardButton}>
        <Card style={cardStyle}>
        <Card.Body style={cardBody}>
        <h1 style={cardText}>
        <img width= {"100px"}src={this.props.category.icon}/>
        </h1>
        </Card.Body>
        </Card>
        <div style={cardSubText}>
        <h5>{this.props.category.name}</h5>
        </div>
      </button>
      </Link>
      </div>
    );
  }
}

export default CategoryComponent;
