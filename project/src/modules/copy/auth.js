import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

class Auth extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      showAuth: false,
      userGroup: 'guest',
      userName: null,
      userId: null
    };
    this.handleShowAuth = this.handleShowAuth.bind(this);
    this.handleCloseAuth = this.handleCloseAuth.bind(this);
    this.valid = this.valid.bind(this);
  }
  handleShowAuth(){
    this.setState({showAuth: true});
  }
  handleCloseAuth(){
    this.setState({showAuth: false});
  }
  valid(){
    const userId = 1;
    const userName = 'client1';
    const userPassword = '123';
    const form = document.forms.Auth;
    const inputUserName = form.elements.User.value;
    const inputUserPassword = form.elements.Password.value;
    if ((userName === inputUserName) && (userPassword === inputUserPassword)) {
      console.log('client successfuly sig in');
      this.setState({
            showAuth: false,
            userGroup: 'client',
            userName: userName,
            userId: userId
          });
    }
  }
  render(){
    if (this.state.userGroup === 'client') {
      return(
        <>
        <h4>Добро пожаловать {this.state.userName} !</h4>
        <div className="d-grid gap-2">
          <Button variant="warning">Личный кабинет</Button>
        </div>
        </>
      );
    }
    return(
      <>
      <div className="d-grid gap-2">
        <Button onClick={this.handleShowAuth}>Войти <img className="img-fluid" src={this.props.login_img} height="25" width="25" alt=""/></Button>
      </div>
      <Modal
      show={this.state.showAuth}
      onHide={this.handleCloseAuth}
      backdrop='static'
      fullscreen="sm-down"
      >
        <Modal.Header closeButton>
          <Modal.Title>Войти в личный кабинет</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form name='Auth'>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Логин/Email</Form.Label>
              <Form.Control
                name='User'
                type="email"
                placeholder="mail@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Пароль</Form.Label>
              <Form.Control
                name='Password'
                type="password"
                placeholder="Введите пароль"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleCloseAuth}>
            Отмена
          </Button>
          <Button variant="primary" onClick={this.valid}>
            Войти
          </Button>
        </Modal.Footer>

      </Modal>
      </>
    );
  }
}

export default Auth;
