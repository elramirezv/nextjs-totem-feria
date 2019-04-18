import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Link from 'next/link'
import { resolve } from '../helpers';

const buttonStyle = {
  textDecoration: "none",
  outline:"none",
  margin: "none",
  padding: "none",
  border: "none",
  background: "none",
  borderRadius: "50%"
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

const imageStyle = {
  width: "40px",
  height: "40px"
}

class BottomButtons extends Component {

  constructor(props) {
    super(props);
    this.state = {
        currentPage: props.currentPage,
        previousPage: props.previousPage
    }
  }

  loadPage () {
    return (
      <Container align="center">
      <Row>
      <Col>
      <Link href={resolve(this.state.previousPage)}>
      <button style={buttonStyle}>
        <Card style={{padding: "15px", borderRadius: "50%"}}>
        <img style={imageStyle}src="https://img.icons8.com/ios/50/000000/back-filled.png"/>
        </Card>
      </button>
      </Link>
      </Col>
      <Col>
      <Link href={resolve('home')}>
      <button style={buttonStyle}>
        <Card style={{padding: "15px", borderRadius: "50%"}}>
        <img style={imageStyle} src="https://img.icons8.com/windows/64/000000/home.png"/>
        </Card>
      </button>
      </Link>
      </Col>
      <Col>
      <Link href={resolve('home')}>
      <button style={buttonStyle}>
        <Card style={{padding: "15px", borderRadius: "50%"}}>
        <img style={imageStyle} src="https://img.icons8.com/ios/100/000000/map-marker.png"/>
        </Card>
      </button>
      </Link>
      </Col>
      </Row>
      </Container>
    );}

    loadHome() {
      return (
        <Container align="center">
        <Row>
        <Col>
        <button style={buttonStyle}>
          <Card style={buttonStyle}>
          </Card>
        </button>
        </Col>
        <Col>
        <Link href={resolve('home')}>
        <button style={buttonStyle}>
          <Card style={{padding: "15px", borderRadius: "50%"}}>
          <img style={imageStyle} src="https://img.icons8.com/windows/64/000000/home.png"/>
          </Card>
        </button>
        </Link>
        </Col>
        <Col>
        <Link href={resolve('home')}>
        <button style={buttonStyle}>
          <Card style={{padding: "15px", borderRadius: "50%"}}>
          <img style={imageStyle} src="https://img.icons8.com/ios/100/000000/map-marker.png"/>
          </Card>
        </button>
        </Link>
        </Col>
        </Row>
        </Container>
      );

    }

  render() {
    if (this.state.currentPage === "home") {
      return(
        this.loadHome()
      )
    } else {
      return(
        this.loadPage()
      )
    }

  }
}

export default BottomButtons;
