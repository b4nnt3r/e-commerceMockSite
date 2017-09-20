import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import BaseLayout from "./components/BaseLayout"
import Home from "./components/Home"
import About from "./components/About"
import Contact from './components/Contact'
import Products from "./components/Products"
import showProduct from "./components/showProduct"


ReactDOM.render(
    <BrowserRouter>
      <BaseLayout>
        <Switch>
          <Route path="/home" component={Home} />
          <Route exact path="/" component={About}/>
          <Route path="/contact" component={Contact} />
          <Route exact path="/products" component={Products}/>
          <Route path="/products/:id" component={showProduct}/>
        </Switch>
      </BaseLayout>
    </BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
