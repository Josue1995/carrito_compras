import React, { Component } from 'react';
import {  Link } from "react-router-dom";
import './detalle.css';
import fire from '../../server/serve';

class Detalle extends Component {
  constructor(props){
    super(props);
    this.state = {
      producto : {}
    }
    this.getProduct = this.getProduct.bind(this);
  }

    componentDidMount(){
      this.getProduct();
    }

  getProduct(){
    const db = fire.firestore();
    db.collection("producto").doc(this.props.match.params.id).get().then((data)=>{
        this.setState({producto:data.data()})
    })

  }


  render(){

    var url = "../../img/imagenesBase/"+this.state.producto.imagen+".jpg";
    var prod = this.state.producto;
    var img = this.state.producto.imagen;
    setTimeout(function(){
    console.log("render", prod);
    console.log("render", img);
    }, 3000);
    return (
      <div className="bg-light mt-4 product col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-12 col-xd-12">
        <div className="row">
          <div className="col-lg-8 col-md-8">
            <h1 className="mt-3">{prod.nombre}</h1>
          </div>

        </div>
        <hr />
        <div className="row scroll">
          <div className="col-lg-6 col-md-6">
              <img className="img-fluid img-thumbnail mx-auto d-block"  alt="Imagen no encontrada" />
          </div>
          <div className="col-lg-6 col-md-6">
            <h3></h3>
            <h4>Precio: ${prod.precio}</h4>
            <h4>Unidades: {prod.existencias}</h4>
          </div>
        </div>
        <div className="row">
          <Link to='/' className="btn btn-primary" name="button">Atrás</Link>
        </div>
      </div>

    )
  }

}
export default Detalle;
