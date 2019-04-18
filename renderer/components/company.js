import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

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

class CompanyComponent extends Component {

  render() {
    return (
      <div>
      <button style={cardButton}>
        <Card style={cardStyle}>
        <Card.Body style={cardBody}>
        <h5 style={{color: "black", "marginTop": "30%"}}>{this.props.company.name}</h5>
        </Card.Body>
        </Card>
      </button>
      </div>
    );
  }
}

export default CompanyComponent;
