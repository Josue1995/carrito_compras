import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './producto.css';
import fire from '../../server/serve';

class Producto extends Component {
  constructor(props){
    super(props);
    this.state = {
      productos: []
    }
    this.listarProductos = this.listarProductos.bind(this);
    this.add = this.add.bind(this);
  }

componentWillMount(){
  this.listarProductos()
}

listarProductos(){
    const db = fire.firestore();
    db.collection("producto").get().then((querySnapshot) => {
    var array = [];
    querySnapshot.forEach((doc) => {
      var object = new Object();
      object.id = doc.id;
      object.nombre = doc.data().nombre;
      object.precio = doc.data().precio;
      object.existencias = doc.data().existencias;
      object.imagen = doc.data().imagen;
      array.push(object);
    });
    this.setState({productos:array})
});
}
mostrar(event) {
  var elementos = document.getElementsByClassName("card-title");
  var input  = document.getElementById("leer").value;
  input = input.toLowerCase();
  var cont = 0;
  for (var i = 0; i < elementos.length; i++) {
    for (var j = 0; j < input.length; j++) {
      var title = elementos[i].childNodes[0].nodeValue[j].toLowerCase();
      if (title == input[j]) {
        cont++;
      }
    }

    if (!(cont == input.length)) {
      var borrar = elementos[i].parentElement.parentElement.parentElement;
      borrar.style.display = "none";
    }else {
     borrar = elementos[i].parentElement.parentElement.parentElement;
      borrar.style.display="inline";
    }
    cont = 0;
  }
  if (event.key == "Backspace") {
   input  = document.getElementById("leer").value;
  }
}

add(id){
  console.log(id);
}

  render(){
    const prods = this.state.productos;
    return (
      <div className="bg-light mt-4 product col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-12 col-xd-12">
        <div className="row">
          <div className="col-lg-8 col-md-8">
            <h2 className="mt-3">Catálago de productos</h2>
          </div>
          <div className="col-lg-2 offset-lg-2 col-md-2 offset-md-2">
            <div className="row mt-2">
              <h5>¿Qué estas buscando?</h5>
            </div>
            <div className="row">
              <form className="form-inline my-2 my-lg-0">
                 <input id="leer" className="form-control mr-sm-2" onKeyUp={this.mostrar} type="search" placeholder="Buscar producto" aria-label="Search" />
               </form>
            </div>
          </div>
        </div>
        <hr />
        <div className="row scroll">
        {prods.map((data)=>
          <div className="col-lg-3 col-md-3" key={data.id}>
            <div className="card">
              <img className="card-img-top"  src={require(`../../img/imagenesBase/${data.imagen}.jpg`)} alt="Imagen no encontrada" />
              <div className="card-body">
                <h5 className="card-title">{data.nombre}</h5>
                <p className="card-text">Precio: ${data.precio}</p>
                <p className="card-text">Unidades: {data.existencias}</p>
                <Link to={"/detalle/"+data.id} className="btn btn-primary">Ver más</Link>
                <button type="button" onClick={this.add(data.nombre)} className="btn btn-warning mx-4" name="button">Añadir</button>
                <input id="add" className="form-control long  mt-3" type="number" step="1" min="0" max={data.existencias} name="unidades" />
              </div>
            </div>
          </div>)}
        </div>
      </div>

    )
  }
}
export default Producto;
