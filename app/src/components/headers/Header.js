import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <Link to='/'>Home</Link>|
            <Link to='/about'>About</Link>|
            <Link to='/contact'>Contact</Link>
        </div>
    );
}

module.exports = Header;