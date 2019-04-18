import React, { Component } from 'react';
import CompanyComponent from "./company";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Fade from 'react-reveal/Fade';
import BottomButtons from "./menu-buttons";
import NavbarComponent from "./navbar";

const spaceStyle = {
  margin: "5%"
}

class CompaniesContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
        companies: props.data,
        category: props.category
    }
}

  createComponents(){
    let columns=[];
    var counter = -1;
    this.state.companies.map((company) => {
      counter+=1;
      if ((counter%3)===0){
        return (
          columns.push(
            <div>
            <Col>
            <CompanyComponent key={company.name} company={company}/>
            </Col>
            <p style={spaceStyle}>
            </p>
          </div>))
      } else {
      return(
        columns.push(
          <div>
          <Col>
          <CompanyComponent key={company.name} company={company}/>
          </Col>
          </div>
        ))
    }})
    return columns;
  }

  render() {
    return (
      <>
      <NavbarComponent title={"Empresas"}/>
      <Fade>
      <div style={spaceStyle}>
      <Row>
      {this.createComponents()}
      </Row>
      </div>
      </Fade>
      <BottomButtons currentPage="companies" previousPage="home"/>
      </>
    );
  }
}

export default CompaniesContainer;
