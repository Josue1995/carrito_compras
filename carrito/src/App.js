import React, { Component } from 'react';
import './App.css';
import fire from './server/serve';
import Main from './components/main/main';
import Login from './components/login/login';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      user:{}
    }
    //this.handleChange1 = this.handleChange1.bind(this);
    //this.handleChange2 = this.handleChange2.bind(this);
  }

  componentDidMount(){
    this.authListener();
  }

  authListener(){
    fire.auth().onAuthStateChanged((user)=>{
      if (user) {
        this.setState({user});
      }else {
        this.setState({user:null})
      }
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.user ? (<Main/>) : (<Login />)}
      </div>
    );
  }

  handleChange1(event) {
    this.setState({user: event.target.value});
  }
  handleChange2(event) {
    this.setState({password: event.target.value});
  }

}

export default App;
