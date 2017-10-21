import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../components/Home/Home'
import About from '../components/About/About'
import Contact from '../components/Contact/Contact'
import Course from '../components/courses/Course'
const AppRoutes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/course' component={Course}/>
        </Switch>
    );
}

export default AppRoutes

