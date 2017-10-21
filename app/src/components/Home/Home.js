import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

import Header from '../headers/Header';
import Footer from '../footers/Footer'

const Home = () => {
    return (
        <div><Header /><p>This is the home page</p><Footer /></div>
    );
}

module.exports = Home;