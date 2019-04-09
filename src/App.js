import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Traval from "./Traval";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Travel</h1>
          </header>
          <Traval
          destination="Greece"
          country="Santorin"
          distance="3132 KM"
          image="https://lh6.googleusercontent.com/proxy/Gi5OOHHCFDEy5V09zU3gKuC1gvlcy3k021_xjy38TjLaKJghRvFPZP8IdN8chxiD-clXTMVfesTiHwyPdK087t7H6eWRrfZAU-Z61B1alkOLHi5mAtcciuW9Zy6CT4vlDhl-gL33xRDVpYqPK8f5UtVRgv4=w358-h238-k-no"
                 
        />

        <Traval
          destination= "Italie"
          country= "Cinque Terre"
          distance="1127 KM" 
          image="https://www.mytoursapi.com/api/v1/images/19/slide06.jpg?1521123284&size=tour-hero"
          
        />
        
      </div>
    );
  }
}

export default App;
