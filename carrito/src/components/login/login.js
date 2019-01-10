import React, { Component } from 'react';
import './login.css';
import fire from '../../server/serve';

class Login extends Component {
  constructor(props){
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      user : '',
      password: '',
      error : ""
    };
  }

  login(e){
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.user,this.state.password).then((u)=>{
      console.log(u);
    }).catch((error)=>{
      this.setState({error: "May be " + error.message})
      var p = document.getElementById("error");
      p.style.display = "flex";
    });
  }

  handleChange(event){
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <div className="form">
      <form>
        <div className="form-group">
          <h2 id="text-center">Iniciar sesión</h2>
          <label>Email:</label>
          <input type="email" name="user" value={this.state.user}  onChange={this.handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange} className="form-control" id="exampleInputPassword1" placeholder="Password" required />
        </div>
        <button type="submit" onClick={this.login} className="btn btn-primary">Ingresar</button>
        <p id="error" className="alert alert-danger error mt-2">{this.state.error}</p>
      </form>
      </div>

    );
  }
}

export default Login;
