import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {Provider} from 'react-redux'

import App from './src/App';
import AppRoutes from "./src/routes/Routes";
import Header from './src/components/headers/Header'
import Footer from './src/components/footers/Footer'
import ConfigureStore from './src/store/ConfigureStore'

var store = ConfigureStore();
ReactDom.render(<Provider store={store}>
<Router>
    <div>
        <Header />
        <AppRoutes/>
        <Footer />     
    </div>
</Router>
</Provider>, document.getElementById('app'));