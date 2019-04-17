import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Link from 'next/link'
import { resolve } from '../helpers';

class CategoryComponent extends Component {

  render() {
    return (
      <div>
      <Link href={resolve('next')}>
      <button className="card-button">
        <Card>
        <Card.Body>
        <h1 className="black-text">
        <img width= {"100px"}src={this.props.category.icon}/>
        </h1>
        </Card.Body>
        </Card>
        <div className="white-text">
        <h4>{this.props.category.name}</h4>
        </div>
      </button>
      </Link>
      </div>
    );
  }
}

export default CategoryComponent;
