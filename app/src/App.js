import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import { Label } from "./components/Util/Util";
import Header from './components/headers/Header'
const App = () => {
    return (
        <div>
            <Label label="This is the content"/>
            <Label label="Footer"/>
        </div>
    );
}

module.exports = App