import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import App from './src/App';
import AppRoutes from "./src/routes/Routes";

ReactDom.render(<Router><AppRoutes/></Router>, document.getElementById('app'));