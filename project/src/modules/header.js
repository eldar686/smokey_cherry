//PROPS
// logo = "./content/main/cherry.svg";
// id = 'header'
// market_name = 'Smokey Cherry'

import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Search from './search.js';
import Menu from './menu.js';
import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends React.Component {
  render(){
    return(
      <Navbar key={this.props.id} variant="dark" bg="dark" expand={this.props.id} className="mb-3">
      <Container fluid>
        <Navbar.Brand href="#"><img className="img-fluid" src={this.props.logo} height="35" width="35" alt=""/>{this.props.market_name}</Navbar.Brand>
        <div className="row">
          <div className="col-6">
          <Search
          search_img="./content/main/search.png"
           />
          </div>
          <div className="col-6">
            <Menu
            back_img='./content/main/back.png'
            />
          </div>
        </div>
      </Container>
    </Navbar>
    );
  }
}

export default Header;
