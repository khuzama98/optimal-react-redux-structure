import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Dashboard from '../Dashbord/Index'
import Navbar from '../Navbar'
import Forces from '../Forces'
import Crime from '../CrimeCategory'
import { Provider } from "react-redux";
import store from "../../store"

function App() {
  return (
    <Provider store={store} >
  <BrowserRouter>
  <Navbar />
    <Switch>
      {/* <Route exact path='/' component={Dashboard} />
      <Route path='/Forces' component={Forces} /> */}
      <Route path='/' component={Crime} />
    </Switch>
  </BrowserRouter>
    </Provider>
  );
}

export default App;
