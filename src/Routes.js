import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//import Main from './components/Main'
import About from './components/About'
import Works from './components/Works'
import Contact from './components/Contact'



const Routes = () => (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
   <Switch>/>
        <Route exact path="/" component={About}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/works" component={Works}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/demo-morty-videogame" component={Contact}/>
    </Switch>
    </BrowserRouter>
)

export default Routes