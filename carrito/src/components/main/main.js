import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './main.css';
import fire from '../../server/serve';
import Producto from '../producto/producto';
import Detalle from '../detalleProducto/detalle';

class Main extends Component {
  constructor(props){
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout(){
    fire.auth().signOut();
  }

  render() {
    return (
      <div className="main">
      <div className="container">
      <div className="row menu">
        <div className="col-lg-11 offset-lg-1 col-md-6 offset-md-3 col-sm-12 col-xs-12 bg-light mt-2">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mt-2">
              <p>La Bodega</p>
            </div>
            <div className="col-lg-6 offset-lg-3 col-md-6 offset-md-3 mt-2">
              <ul className="nav justify-content-end">
                <li className="nav-item">
                  <a href="#" className="nav-link" ><i className="fas fa-th"></i></a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link" ><i className="fas fa-cart-plus"><span ></span></i></a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link" ><i className="fas fa-credit-card"></i></a>
                </li>
                <li className="nav-item">
                  <a onClick={this.logout} className="nav-link"><i className="fas fa-sign-out-alt"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Router>
        <div>
          <Route exact path="/" component={Producto} />
          <Route path="/detalle/:id" component={Detalle} />
        </div>

      </Router>

      </div>
    );
  }
}

export default Main;
