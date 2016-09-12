require("expose?$!jquery");
require('bootstrap-select');
require('!style!css!bootstrap-select/dist/css/bootstrap-select.min.css');
require('!style!css!./custom-bootstrap-select.css')
import React from 'react';
import { render } from 'react-dom';
import App from './app.jsx';

render(<App/>, document.querySelector("#app"));
