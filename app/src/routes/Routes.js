import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../components/Home/Home.js'
import About from '../components/About/About.js'
import Contact from '../components/Contact/Contact.js'

const AppRoutes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/contact' component={Contact}/>
        </Switch>
    );
}

export default AppRoutes

