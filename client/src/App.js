import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './componnents/layout/Navbar';
import Landing from './componnents/layout/Landing';
import Register from './componnents/auth/Register';
import Login from './componnents/auth/Login';
import './App.css';

const App = () => 
<Router>
<Fragment>
  <Navbar />
  <Route exact path='/' component={Landing} />
  <section className="container">
<Switch>
<Route exact path='/Register' component={Register} />
<Route exact path='/Login' component={Login} />
</Switch>
  </section>
</Fragment>
</Router>
export default App;
