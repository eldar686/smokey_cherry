import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import Auth from './auth.js'
import 'bootstrap/dist/css/bootstrap.min.css';


class Menu extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      showMenu: false,
      showSubMenu: false,
      userGroup: 'guest',
      userName: 'client1'

    };
    this.handleShowMenu = this.handleShowMenu.bind(this);
    this.handleCloseMenu = this.handleCloseMenu.bind(this);
    this.handleShowSubMenu = this.handleShowSubMenu.bind(this);
    this.handleCloseSubMenu = this.handleCloseSubMenu.bind(this);
    this.authClient = this.authClient.bind(this);
  }
  handleShowMenu(){
    this.setState({showMenu: true});
  }
  handleCloseMenu(){
    this.setState({showMenu: false});
  }
  handleShowSubMenu(){
    this.setState({
      showMenu:false,
      showSubMenu: true
    });
  }
  handleCloseSubMenu(){
    this.setState({
      showMenu: true,
      showSubMenu: false
    })
  }
  authClient(){
    this.setState({
      userGroup: 'client',
      userName: 'client1'
    })
  }
  render(){
    // const handleShowMenu = () => this.setState({showMenu: true});
    // const handleCloseMenu = () => this.setState({showMenu: false});
    // const handleShowSubMenu = () =>
    // this.setState({
    //   showSubMenu: true,
    //   showMenu: false,
    // });
    // const handleCloseSubMenu = () => this.setState({
    //   showSubMenu: false,
    //   showMenu: true,
    // });

    //STYLE
    const back_button = {
      backgroundColor: "white",
      borderRadius: "0.8em",
      border: "none"
    };
    return(
      <>
        <Navbar.Toggle onClick={this.handleShowMenu} />
        <Offcanvas backdrop="false" placement="end" show={this.state.showMenu} onHide={this.handleCloseMenu}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Меню</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Auth
              onClick={this.authClient}
              userGroup={this.state.userGroup}
              userName={this.state.userName}
              login_img='./content/main/login.png'
            />
            <hr/>
            <div className='d-grid gap-2'>
              <Button onClick={this.handleShowSubMenu}>Каталог =></Button>
            </div>
          </Offcanvas.Body>
        </Offcanvas>


        <Offcanvas backdrop="false" placement="end" show={this.state.showSubMenu} onHide={this.handleCloseSubMenu}>
          <Offcanvas.Header>
            <Offcanvas.Title>Каталог</Offcanvas.Title>
            <button style={back_button} onClick={this.handleCloseSubMenu}>
              <img className="img-fluid" src={this.props.back_img} height="25" width="25" alt=""/>
            </button>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className='d-grid gap-2'>
              <Button>Категория 1</Button>
            </div>
            <hr/>
            <div className='d-grid gap-2'>
              <Button>Категория 1</Button>
            </div>
            <hr/>
            <div className='d-grid gap-2'>
              <Button>Категория 1</Button>
            </div>
            <hr/>
            <div className='d-grid gap-2'>
              <Button>Категория 1</Button>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
}

export default Menu;
