//PROPS
// search_img = "./content/main/search.png"

import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import 'bootstrap/dist/css/bootstrap.min.css';

class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showSearch: false,
    };
    this.handleShowSearch = this.handleShowSearch.bind(this);
    this.handleCloseSearch = this.handleCloseSearch.bind(this);
  }
  handleShowSearch(){
    this.setState({showSearch: true});
  }
  handleCloseSearch(){
    this.setState({showSearch: false});
  }
  render(){
    return (
      <>
        <Button variant="light" onClick={this.handleShowSearch}>
        <img className="img-fluid" src={this.props.search_img} height="35" width="35" alt=""/>
        </Button>

        <Offcanvas placement="top" show={this.state.showSearch} onHide={this.handleCloseSearch}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Поиск по каталогу</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>

          <Form className="d-flex">
              <FormControl
                type="search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Поиск</Button>
            </Form>

          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
  }

export default Search;
