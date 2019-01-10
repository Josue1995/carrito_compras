import firebase from 'firebase';

const config = {
   apiKey: "AIzaSyBn1i5iKkfwDHOAPBMCYnbvCz-DavTbAhM",
   authDomain: "carrito-productos.firebaseapp.com",
   databaseURL: "https://carrito-productos.firebaseio.com",
   projectId: "carrito-productos",
   storageBucket: "carrito-productos.appspot.com",
   messagingSenderId: "94323352640",
   timestampsInSnapshots: true
 };

const fire = firebase.initializeApp(config);

export default fire;
