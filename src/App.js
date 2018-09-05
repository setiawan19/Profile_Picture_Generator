import React, { Component } from 'react';
import './App.css';
// import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state={
      gambar: ``
    }
  }

  ambilData= ()=>{
    var inputNama = this.refs.nama.value;
    this.setState({gambar:`https://robohash.org/${inputNama}`})
  }
  render() {

    return (
      <div>
        <center>
        <input ref="nama" type="text" placeholder="masukkan nama anda"></input><br/>
        <button onClick={()=>{this.ambilData()}} className="btn btn-primary">buat avatar</button>
        <br/>
        <div>
          <img className="img-circle" src={this.state.gambar} alt=""></img>
        </div>
        </center>
      </div>
      
    );
  }
}

export default App;
