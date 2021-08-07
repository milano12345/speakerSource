import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart'
import ContactForm from './components/ContactForm';


class App extends Component {
  render() {
    return (
            <div className="App">
              <Navbar/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/cart" component={Cart}/>
                  </Switch>
                  <ContactForm/>
             </div>

      
    );
  }
}

export default App;
