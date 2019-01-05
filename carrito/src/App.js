import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="form">
        <form>
          <div className="form-group">
            <h2 id="text-center">Iniciar sesión</h2>
            <label>Email:</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
          </div>
          <button type="button" onClick={this.verifySession.bind(this)} className="btn btn-primary">Ingresar</button>
        </form>
        </div>
      </div>
    );
  }

  verifySession(){
    console.log("funciona")
  }
}

export default App;
