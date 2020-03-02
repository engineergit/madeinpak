import React, { Component } from "react"
import './App.css';
import Header from "./components/header/header"
import Body from './components/body/body';
import SignIn from './components/body/signIn/signIn';
import Register from './components/body/signUp/register';
import Footer from './components/footer/footer';
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header/>
<Body/>
          <Route exact={true} path="/signIn" component={SignIn} />
          <Route exact={true} path="/register" component={Register} />
          <Footer/>
        </div>
      </Router>

    );
  }
}

export default App;
